const rateLimit = require('express-rate-limit');

// Limit contact form: 5 requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs:    15 * 60 * 1000, // 15 minutes
  max:         5,
  standardHeaders: true,
  legacyHeaders:   false,
  message: {
    success: false,
    message: 'Too many requests. Please try again in 15 minutes.',
  },
});

// General API limiter
const apiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max:      100,
  standardHeaders: true,
  legacyHeaders:   false,
});

module.exports = { contactLimiter, apiLimiter };
