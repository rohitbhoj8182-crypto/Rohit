const nodemailer = require('nodemailer');

// Create transporter (lazy — only when first contact is sent)
let transporter = null;
const getTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  return transporter;
};

/**
 * POST /api/contact
 * Body: { name, email, message }
 */
const sendContact = async (req, res) => {
  const { name, email, message } = req.body;

  // ── Validation ──────────────────────────────────────
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  if (name.length > 100 || message.length > 2000) {
    return res.status(400).json({ success: false, message: 'Input too long.' });
  }

  // ── Send email ──────────────────────────────────────
  try {
    const t = getTransporter();

    // Email to Rohit
    await t.sendMail({
      from:    `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to:      process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `📬 New message from ${name} — Portfolio`,
      html: `
        <div style="font-family:sans-serif;max-width:540px;margin:0 auto;background:#0a0a0a;color:#e5e5e5;border-radius:12px;overflow:hidden;">
          <div style="background:#111;padding:28px 32px;border-bottom:1px solid #222;">
            <h2 style="margin:0;font-size:22px;letter-spacing:2px;color:#fff;">NEW CONTACT MESSAGE</h2>
            <p style="margin:6px 0 0;font-size:12px;color:#555;letter-spacing:1px;">From your portfolio contact form</p>
          </div>
          <div style="padding:28px 32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;font-size:11px;letter-spacing:2px;color:#555;text-transform:uppercase;width:90px;">NAME</td>
                <td style="padding:10px 0;font-size:15px;color:#fff;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-size:11px;letter-spacing:2px;color:#555;text-transform:uppercase;">EMAIL</td>
                <td style="padding:10px 0;font-size:15px;"><a href="mailto:${email}" style="color:#aaa;">${email}</a></td>
              </tr>
            </table>
            <div style="margin-top:22px;padding:20px;background:#161616;border-radius:8px;border-left:3px solid #333;">
              <p style="margin:0;font-size:11px;letter-spacing:2px;color:#555;text-transform:uppercase;margin-bottom:12px;">MESSAGE</p>
              <p style="margin:0;font-size:15px;line-height:1.7;color:#ccc;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
          </div>
          <div style="padding:16px 32px;border-top:1px solid #1a1a1a;font-size:11px;color:#444;letter-spacing:1px;">
            Sent from rohitbhoj.dev portfolio — ${new Date().toUTCString()}
          </div>
        </div>
      `,
    });

    // Auto-reply to sender
    await t.sendMail({
      from:    `"Rohit Bhoj" <${process.env.EMAIL_USER}>`,
      to:      email,
      subject: `Hey ${name}, I got your message! 👋`,
      html: `
        <div style="font-family:sans-serif;max-width:540px;margin:0 auto;background:#0a0a0a;color:#e5e5e5;border-radius:12px;overflow:hidden;">
          <div style="background:#111;padding:28px 32px;border-bottom:1px solid #222;">
            <h2 style="margin:0;font-size:22px;letter-spacing:2px;color:#fff;">ROHIT BHOJ</h2>
            <p style="margin:6px 0 0;font-size:12px;color:#555;letter-spacing:1px;">FULL STACK DEVELOPER</p>
          </div>
          <div style="padding:32px;">
            <p style="margin:0 0 18px;font-size:16px;color:#ccc;">Hey <strong style="color:#fff">${name}</strong>,</p>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.75;color:#999;">
              Thanks for reaching out! I've received your message and will get back to you within 24 hours.
            </p>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.75;color:#999;">
              In the meantime, feel free to check out my work on GitHub or connect with me on LinkedIn.
            </p>
            <p style="margin:28px 0 0;font-size:15px;color:#ccc;">
              Best,<br/>
              <strong style="color:#fff;">Rohit Bhoj</strong>
            </p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });

  } catch (err) {
    console.error('Email error:', err.message);
    // Still return success if email fails in dev mode
    if (process.env.NODE_ENV === 'development') {
      console.log('📧 [DEV] Would have sent email from:', email, '| Name:', name);
      return res.status(200).json({ success: true, message: 'Message received (dev mode — email not sent).' });
    }
    return res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
};

module.exports = { sendContact };
