const express              = require('express');
const { sendContact }      = require('../controllers/contactController');
const { contactLimiter }   = require('../middleware/rateLimiter');

const router = express.Router();

// POST /api/contact
router.post('/', contactLimiter, sendContact);

// Health check
router.get('/health', (req, res) => {
  res.json({ success: true, message: 'Contact API is live 🚀' });
});

module.exports = router;
