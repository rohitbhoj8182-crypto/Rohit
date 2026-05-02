export const skills = [
  { name: "MongoDB",    icon: "🍃", level: 88, color: "#00ED64", category: "MERN" },
  { name: "Express.js", icon: "⚡", level: 85, color: "#e2e2e2", category: "MERN" },
  { name: "React",      icon: "⚛",  level: 92, color: "#61DAFB", category: "MERN" },
  { name: "Node.js",    icon: "🟢", level: 87, color: "#8CC84B", category: "MERN" },
  { name: "Python",     icon: "🐍", level: 83, color: "#FFD43B", category: "Language" },
  { name: "JavaScript", icon: "JS", level: 94, color: "#F7DF1E", category: "Language" },
  { name: "CSS",        icon: "🎨", level: 90, color: "#4EAEFF", category: "Language" },
  { name: "C++",        icon: "⚙️", level: 78, color: "#7EB3FF", category: "Language" },
  { name: "Java",       icon: "☕", level: 80, color: "#FF8C42", category: "Language" },
];

export const projects = [
  {
    num:   "01",
    title: "NexaCommerce",
    desc:  "Full-stack MERN e-commerce platform with real-time inventory management, JWT authentication, Stripe payments, and a powerful admin dashboard.",
    tags:  ["React", "Node.js", "MongoDB", "Stripe"],
    color: "#00ED64",
    year:  "2024",
    github: "https://github.com/rohitbhoj/nexacommerce",
    live:   "#",
  },
  {
    num:   "02",
    title: "AuraChat",
    desc:  "Real-time messaging application with Socket.io, end-to-end encryption, group channels, file sharing, and rich media support.",
    tags:  ["React", "Express", "Socket.io", "Redis"],
    color: "#61DAFB",
    year:  "2024",
    github: "https://github.com/rohitbhoj/aurachat",
    live:   "#",
  },
  {
    num:   "03",
    title: "PyVision AI",
    desc:  "Python-powered computer vision REST API. Object detection, face recognition and image segmentation served via Flask with async task queuing.",
    tags:  ["Python", "Flask", "OpenCV", "TensorFlow"],
    color: "#FFD43B",
    year:  "2024",
    github: "https://github.com/rohitbhoj/pyvision",
    live:   "#",
  },
  {
    num:   "04",
    title: "CodeCollab",
    desc:  "Browser-based collaborative IDE with live syntax highlighting, multi-cursor editing, version diff viewer, and real-time peer code review.",
    tags:  ["React", "Node.js", "Monaco", "WebSockets"],
    color: "#FF6B6B",
    year:  "2025",
    github: "https://github.com/rohitbhoj/codecollab",
    live:   "#",
  },
];

export const stats = [
  { label: "PROJECTS",   value: 6,   suffix: "+" },
  { label: "EXPERIENCE", value: 1,    suffix: " YRS" },
  { label: "COMMITS",    value: 100, suffix: "+" },
];

export const aboutCards = [
  { icon: "🚀", title: "Fast Delivery",      desc: "Shipping quality code on deadline, every time without cutting corners." },
  { icon: "🏗️", title: "Clean Architecture", desc: "Scalable design patterns and zero spaghetti code principles." },
  { icon: "🎨", title: "UI/UX Focused",      desc: "Pixel-perfect interfaces that users actually enjoy using." },
  { icon: "🔒", title: "Security First",     desc: "Best-practice security baked into every layer of the stack." },
];
