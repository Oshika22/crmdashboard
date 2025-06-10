# 📊 React CRM Dashboard with Authentication & Product Management

This project is a CRM (Customer Relationship Management) web application built using **React JS**, **Redux Toolkit**, and **Tailwind CSS**. It includes user authentication, a dashboard with charts, and product management with full CRUD functionality.
Project live link : https://crmdashboard-tau.vercel.app/
---

## 🔧 Tech Stack

- ⚛️ React JS
- 🧠 Redux Toolkit
- 🎨 Tailwind CSS
- 📊 Recharts (Graph Library)
- 📡 Axios
- 🔐 React Router DOM
- 🌐 DummyJSON API ([https://dummyjson.com](https://dummyjson.com))

---

## ✅ Features

### 🔐 Login Page
- Login using dummy credentials from DummyJSON API.
- Token-based authentication stored in Redux.
- Redirect to protected dashboard after successful login.

### 🔒 Authentication
- Protected routes using React Router.
- Auth state managed with Redux.

### 📈 Dashboard
- Responsive layout using Tailwind.
- Contains:
  - Total Sales
  - Active Users
  - Total Products
  - Line Chart (Monthly Sales)
  - Bar Chart (Products by Category)
  - Pie Chart (User Engagement)
- Navigation buttons for Products and Logout.

### 📦 Product Management (CRUD)
- Fetch all products.
- Add new products.
- Edit existing products.
- Delete products.
- Form reuses for both add/edit.

---

## 🧪 Dummy Login Credentials

Use these to log in:

Username: emilys
Password: emilyspass
API: `https://dummyjson.com/auth/login`

---

## 🗂️ Folder Structure

src/
├── app/
│ └── store.js
├── features/
│ ├── auth/
│ │ └── authSlice.js
│ └── products/
│ └── productSlice.js
├── components/
│ ├── Login.jsx
│ └── ProductForm.jsx
├── pages/
│ ├── Dashboard.jsx
│ └── ProductPage.jsx
├── routes/
│ └── ProtectedRoute.jsx
├── App.jsx
└── main.jsx


---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/crm-dashboard.git
cd crm-dashboard
2. Install dependencies
npm install
3. Start the development server
npm run dev
📄 License
This project is created for AffWorld FZ LLC – SDE Assignment #089 (June 5, 2025)
Developed by Oshika Sharma

---







