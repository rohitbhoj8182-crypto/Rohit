require('dotenv').config();

const express  = require('express');
const cors     = require('cors');
const helmet   = require('helmet');
const morgan   = require('morgan');
const path     = require('path');

const contactRoutes     = require('./routes/contact');
const { apiLimiter }    = require('./middleware/rateLimiter');

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Security & utility middleware ──────────────────────────
app.use(helmet({
  contentSecurityPolicy: false, // disabled so React app loads fine in production
}));

app.use(cors({
  origin:      process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ── API routes ─────────────────────────────────────────────
app.use('/api', apiLimiter);
app.use('/api/contact', contactRoutes);

// General API health check
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'Rohit Bhoj Portfolio API',
    version: '1.0.0',
    env:     process.env.NODE_ENV,
  });
});

// ── Serve React build in production ───────────────────────
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '../client/build');
  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

// ── 404 handler ────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' });
});

// ── Global error handler ───────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message,
  });
});

// ── Start server ───────────────────────────────────────────
app.listen(PORT, () => {
  console.log('');
  console.log('  ██████╗ ██████╗ ');
  console.log('  ██╔══██╗██╔══██╗');
  console.log('  ██████╔╝██████╔╝');
  console.log('  ██╔══██╗██╔══██╗');
  console.log('  ██║  ██║██████╔╝');
  console.log('  ╚═╝  ╚═╝╚═════╝ ');
  console.log('');
  console.log(`  🚀 Server running on http://localhost:${PORT}`);
  console.log(`  🌍 Environment : ${process.env.NODE_ENV || 'development'}`);
  console.log(`  📬 Contact API : http://localhost:${PORT}/api/contact`);
  console.log('');
});

module.exports = app;
