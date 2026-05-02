# 🖤 Rohit Bhoj — Portfolio

A stunning black & white glassmorphism portfolio built with **React** (client) and **Express + Node.js** (server).

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ installed
- npm v9+

### 1. Install all dependencies
```bash
npm run install-all
```

### 2. Setup environment variables
```bash
cp server/.env.example server/.env
```
Edit `server/.env` and add your email credentials (for contact form).

### 3. Run in development mode
```bash
npm run dev
```
- **Client** → http://localhost:3000  
- **Server** → http://localhost:5000

---

## 📁 Project Structure

```
rohit-portfolio/
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/      # Reusable UI components
│       │   ├── Navbar.jsx
│       │   ├── Particles.jsx
│       │   ├── SkillBar.jsx
│       │   └── ProjectCard.jsx
│       ├── pages/           # Page sections
│       │   ├── Hero.jsx
│       │   ├── About.jsx
│       │   ├── Skills.jsx
│       │   ├── Projects.jsx
│       │   └── Contact.jsx
│       ├── hooks/
│       │   └── useInView.js
│       ├── data.js          # Skills & Projects data
│       ├── App.jsx
│       └── index.js
│
├── server/                  # Express backend
│   ├── routes/
│   │   └── contact.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── middleware/
│   │   └── rateLimiter.js
│   ├── .env.example
│   ├── server.js
│   └── package.json
│
├── package.json             # Root scripts
└── README.md
```

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, CSS-in-JS |
| Backend | Node.js, Express |
| Email | Nodemailer |
| Animation | Canvas API, CSS transitions |
| Font | Bebas Neue, DM Sans |

---

## 📦 Build for Production

```bash
npm run build
npm start
```

The Express server will serve the React build at `http://localhost:5000`.
# Rohit
