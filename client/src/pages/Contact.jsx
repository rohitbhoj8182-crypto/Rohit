import { useState } from 'react';
import useInView from '../hooks/useInView';

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 12,
  padding: '14px 18px',
  color: '#fff',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.22s',
};

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [ref, visible]      = useInView(0.1);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section style={{
      minHeight: '100vh',
      padding: '100px 48px',
      display: 'flex', alignItems: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: 700, width: '100%', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'monospace', fontSize: 10,
          letterSpacing: 4, color: 'rgba(255,255,255,0.28)',
          marginBottom: 16,
        }}>
          // CONTACT.send()
        </div>

        <div
          ref={ref}
          style={{
            transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            opacity: visible ? 1 : 0,
          }}
        >
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(52px,6.5vw,82px)',
            letterSpacing: 4, lineHeight: 0.88,
            margin: '0 0 14px', color: '#fff',
          }}>
            LET'S
          </h2>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(52px,6.5vw,82px)',
            letterSpacing: 4, lineHeight: 0.88,
            margin: '0 0 52px',
            WebkitTextStroke: '1.5px rgba(255,255,255,0.38)',
            color: 'transparent',
          }}>
            TALK
          </h2>
        </div>

        {status === 'success' ? (
          <div style={{
            background: 'rgba(0,237,100,0.07)',
            border: '1px solid rgba(0,237,100,0.28)',
            borderRadius: 24, padding: 56,
            textAlign: 'center',
            backdropFilter: 'blur(20px)',
          }}>
            <div style={{ fontSize: 52, marginBottom: 18 }}>✓</div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 30, letterSpacing: 3, color: '#00ED64',
            }}>
              MESSAGE SENT!
            </div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              color: 'rgba(255,255,255,0.45)', marginTop: 12, fontSize: 14,
            }}>
              I'll get back to you within 24 hours.
            </div>
            <button
              onClick={() => setStatus('idle')}
              style={{
                marginTop: 28,
                fontFamily: 'monospace', fontSize: 11, letterSpacing: 2,
                padding: '10px 24px', background: 'none',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 99, color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
              }}
            >
              SEND ANOTHER
            </button>
          </div>
        ) : (
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 28, padding: 48,
            backdropFilter: 'blur(22px)',
            WebkitBackdropFilter: 'blur(22px)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)',
            display: 'flex', flexDirection: 'column', gap: 22,
          }}>
            {/* Name */}
            <div>
              <label style={{
                fontFamily: 'monospace', fontSize: 9,
                letterSpacing: 3, color: 'rgba(255,255,255,0.32)',
                display: 'block', marginBottom: 10,
              }}>
                YOUR NAME
              </label>
              <input
                type="text"
                placeholder="Rohit Bhoj"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.38)'; }}
                onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.1)';  }}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{
                fontFamily: 'monospace', fontSize: 9,
                letterSpacing: 3, color: 'rgba(255,255,255,0.32)',
                display: 'block', marginBottom: 10,
              }}>
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="rohit@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.38)'; }}
                onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.1)';  }}
              />
            </div>

            {/* Message */}
            <div>
              <label style={{
                fontFamily: 'monospace', fontSize: 9,
                letterSpacing: 3, color: 'rgba(255,255,255,0.32)',
                display: 'block', marginBottom: 10,
              }}>
                MESSAGE
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.38)'; }}
                onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.1)';  }}
              />
            </div>

            {status === 'error' && (
              <div style={{
                fontFamily: 'monospace', fontSize: 11, letterSpacing: 2,
                color: '#FF6B6B', padding: '10px 16px',
                background: 'rgba(255,107,107,0.08)',
                border: '1px solid rgba(255,107,107,0.2)',
                borderRadius: 10,
              }}>
                ✗ Something went wrong. Please try again.
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: 3, fontSize: 16,
                padding: '18px 44px',
                background: status === 'loading' ? 'rgba(255,255,255,0.6)' : '#fff',
                color: '#000',
                border: 'none', borderRadius: 99,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                boxShadow: '0 0 40px rgba(255,255,255,0.14)',
                transition: 'all 0.25s', alignSelf: 'flex-start',
              }}
              onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(255,255,255,0.28)'; } }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(255,255,255,0.14)'; }}
            >
              {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE →'}
            </button>
          </div>
        )}

        {/* Social links */}
        <div style={{
          display: 'flex', gap: 24, marginTop: 32,
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'GITHUB',   href: 'https://github.com/rohitbhoj' },
            { label: 'LINKEDIN', href: 'https://linkedin.com/in/rohitbhoj' },
            { label: 'TWITTER',  href: 'https://twitter.com/rohitbhoj' },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{
                fontFamily: 'monospace', fontSize: 11, letterSpacing: 2,
                color: 'rgba(255,255,255,0.3)',
                textDecoration: 'none',
                transition: 'color 0.22s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; }}
            >
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
