# MERN Blog Application
### Deployment & DevOps Essentials – Full Project README
This project is a full MERN (MongoDB, Express, React, Node.js) Blog application deployed on:

- **Frontend:** Vercel  
- **Backend:** Render  
- **Database:** MongoDB Atlas  

---

## 📂 Project Structure

```
root/
 ├── frontend/     # Vite + React app
 ├── backend/      # Express + MongoDB API
```

---

## 🚀 Features

### **Frontend (React + Vite + Axios)**
- List blog posts  
- Create new posts  
- List categories  
- Create categories  
- API error handling  
- Fully deployed on **Vercel**

### **Backend (Node.js + Express + Mongoose)**
- REST API with CRUD:
  - `/api/posts`
  - `/api/categories`
- Error handling middleware  
- Validation middleware  
- MongoDB connection using Mongoose  
- Deployed on **Render**  

### **Database**
- Hosted on **MongoDB Atlas**  
- Uses cluster connection string with username/password  
- IP Whitelisting enabled for Render + local machine  

---

# 🛠️ Setup Instructions (Local Development)

## **1️⃣ Clone the Repository**
```bash
git clone https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-uncwambui.git
cd deployment-and-devops-essentials-uncwambui
```

---

# 🔧 Backend Setup

## **2️⃣ Install backend dependencies**
```bash
cd backend
npm install
```

## **3️⃣ Create `.env`**
```
MONGODB_URI=your_atlas_connection_string
PORT=5000
```

## **4️⃣ Start backend**
```bash
npm run dev
```

---

# 🎨 Frontend Setup

## **5️⃣ Install frontend dependencies**
```bash
cd ../frontend
npm install
```

## **6️⃣ Start frontend**
```bash
npm run dev
```

---

# 🌍 Deployment Instructions

# **Backend – Render**

### **1. Upload code to GitHub**
Push the `/backend` folder correctly.

### **2. Create Render Web Service**
- Build Command:  
  ```
  npm install
  ```
- Start Command:
  ```
  node server.js
  ```

### **3. Add Environment Variables**
| Key | Value |
|-----|-------|
| `MONGODB_URI` | your cluster connection string |
| `PORT` | 10000 |

### **4. Deploy**
Render will build & deploy automatically.

---

# **Frontend – Vercel**

### **1. Build frontend**
```bash
npm run build
```

### **2. Deploy**
Drag & drop the `dist/` folder into Vercel — or link your GitHub repo.

### **3. Add ENV variable**
| Key | Value |
|-----|-------|
| `VITE_API_URL` | https://your-render-backend-url |

### **4. Rebuild deployment**

---

# 🔗 API Endpoints

### **Posts**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| POST | `/api/posts` | Create post |
| PUT | `/api/posts/:id` | Update post |
| DELETE | `/api/posts/:id` | Delete post |

### **Categories**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get categories |
| POST | `/api/categories` | Create category |

---

frontend url
backend- https://deployment-and-devops-essentials-vaie.onrender.com/

