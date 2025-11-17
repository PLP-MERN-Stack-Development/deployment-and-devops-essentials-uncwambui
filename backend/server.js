const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');
const Post = require('./models/Post');

dotenv.config();

const app = express();

// CORS - allow frontend URL (Render/Netlify/Vercel)
app.use(cors({
  origin: process.env.FRONTEND_URL,  
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

// Error handling middleware
app.use(errorHandler);

// Seed demo posts if DB is empty
const seedPostsIfEmpty = async () => {
  const count = await Post.countDocuments();
  if (count === 0) {
    await Post.insertMany([
      {
        title: "Morning Skincare Routine for Glowing Skin",
        content: "Start your day with a gentle cleanser...",
        author: "E w"
      },
      {
        title: "Top 5 Lipstick Shades for Every Occasion",
        content: "From nude pinks to bold reds...",
        author: "J Krown"
      },
      {
        title: "Self-Care Sundays: Relax and Recharge",
        content: "Take time to journal and recharge...",
        author: "E w"
      },
    ]);
    console.log("✅ Demo posts seeded!");
  }
};

const PORT = process.env.PORT || 5000;

// Connect to DB, then start
connectDB().then(async () => {
  await seedPostsIfEmpty();
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
