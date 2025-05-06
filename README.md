# SubCloud – Subscription Box Web App

SubCloud is a responsive subscription-based web application built with React and Tailwind CSS. It provides a seamless user experience with authentication, secure routing, product discovery, and profile management features.

---

## 🚀 Features

- 🔐 **Authentication**
  - Email & Password Login/Register
  - Google Sign-In
  - Logout
  - Show/Hide Password Toggle
  - Forgot/Reset Password (Auto-filled email and Gmail redirect)

- 🔄 **Protected Routes**
  - `/profile` – View and update your name & photo URL, and manage subscribed products.
  - `/subscriber-circle` – Learn how to use the products and explore all benefits.

- 🧭 **Navigation**
  - Navbar with logo and `NavLink` to:
    - `Home`
    - `My Profile` (Protected)
    - `Subscriber Circle` (Protected)
  - User avatar and logout button appear when logged in.

- 🖼️ **Homepage Sections**
  - **Banner**: Four beautiful carousels using `Swiper.js`
  - **Category**: Browse by four categories (fetched from local JSON)
  - **Popular Products**: Displayed from all four categories
  - **Customer Count**: Animated premium user count using `react-countup`
  - **Footer**: Clean and consistent across the site

---

## 📦 Tech Stack

- **React** (v19.0.0)
- **React DOM**
- **React Router** (v7.5.3)
- **Tailwind CSS** (v4.1.5)
- **@tailwindcss/vite** (v4.1.5)
- **Firebase** (v11.6.1)
- **Swiper.js** (v11.2.6)
- **React CountUp** (v6.5.3)
- **React Hot Toast** (v2.5.2)
- **React Icons** (v5.5.0)

---