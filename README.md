# 📧 Mailing Dashboard - Frontend

This is the frontend for the Mailing Dashboard assignment, built using **React, Shadcn, and Tailwind CSS**. The app provides a user-friendly mailing interface with authentication and a structured email dashboard.

## 🚀 Live Demo (If Deployed)

[Live Demo Link](https://technox-ten.vercel.app/login)

---

## 🔧 **Setup Instructions**

### **1. Clone the repository**

```sh
git clone https://github.com/Samanth612/mail-dashboard
cd mail-dashboard
```

### **2. Install dependencies**

```sh
npm install
```

### **3. Start the development server**

```sh
npm run dev
```

By default, the app runs on `http://localhost:5173/` (if using Vite).

---

## 🏠 **Project Overview**

This project implements a **Mailing Dashboard** with authentication. It includes:

1. **Authentication (Sign In/Sign Up)**

   - Users can sign up and log in using a simple authentication system.
   - Authentication state is stored securely using local storage Redux.

2. **Mailing Dashboard**

   - Sidebar with folders: **Inbox, Sent, Drafts, Trash, etc.**
   - Mail list displaying emails with subject, sender, and timestamp.
   - Detailed email view when an email is selected.

3. **State Management**

   - **Redux** is used for managing the authentication state.
   - The mailing data is fetched using **mock API responses**.

4. **Responsive Design**
   - The UI is fully responsive across different screen sizes.

---

## 🤔 **Assumptions Made**

- **Authentication tokens are stored in local storage** for simplicity.
- **Mock data is used** for emails (fetched from backend).
- **The UI is based on the given reference**, with slight modifications for better UX.

---

## 🖼 **Screenshots**

![Login Page](LoginPage.png)
!![Mail Dashboard](Dashboard.png)

---

## 🐛 **Tech Stack**

- **React + Vite**
- **Shadcn UI Components**
- **Tailwind CSS**
- **React Hook Form (for validation)**
- **React Router (for navigation)**
- **Context API (for authentication state)**

---
