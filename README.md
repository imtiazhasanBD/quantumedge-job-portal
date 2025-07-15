# Frontend Developer Intern Task

This is a 3-page frontend application built using **Next.js** and **Tailwind CSS**, based on a provided [Figma design](https://www.figma.com/design/LLrXn8vTjMHmuBjiyEiLs2/Job-Interview-Figma-Design?node-id=0-1). It includes Login, Registration, and Job Listings pages, with integration of public API endpoints.

## 🔗 Live Demo 
> https://quantumedge-job-portal.vercel.app
---

## 📁 Pages

### ✅ Login Page
- Authenticates users via API:  
  `http://api.mnimedu.com/api/auth/login/`
- Displays validation and error messages.

### ✅ Registration Page
- Registers users using:  
  `http://api.mnimedu.com/api/auth/registration/`
- Includes password match validation.

### ✅ Job Listings Page
- Fetches job data from:  
  `https://api.mnimedu.com/api/browse/pro-jobs/`
- Displays dynamic job cards as per Figma.

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **HTTP Client:** Axios
- **Design Match:** Fully responsive & matches Figma

---

## 📦 Features

- Responsive and pixel-perfect layout
- Real-time API integration
- Error handling and user-friendly feedback
- Clean, modular component structure
- Minimal UI transitions and accessibility

---

## ⚠️ Issues & Solutions

### ❌ Issue: CORS Error During Login
**Solution:**  
- Confirmed the endpoint via Postman  
- Displayed fallback messages for error handling in UI  
- Optional: Used proxy setup in development if needed

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/imtiazhasanBD/quantumedge-job-portal
cd job-interview-frontend
