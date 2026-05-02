import { useState, useEffect } from 'react';
import Counter from '../components/Counter';
import { stats } from '../data';

const ROLES = [
  'FULL STACK DEVELOPER',
  'MERN SPECIALIST',
  'PROBLEM SOLVER',
  'SOFTWARE ENGINEER',
];

export default function Hero({ setActive }) {
  const [tick, setTick]   = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 110);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 520);
    return () => clearInterval(id);
  }, []);

  const role = ROLES[Math.floor(tick / 18) % ROLES.length];

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '0 48px',
      paddingTop: 70,
      position: 'relative', zIndex: 1,
    }}>
      {/* Giant background text */}
      <div style={{
        position: 'absolute', right: -10, top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(100px,16vw,260px)',
        color: 'rgba(255,255,255,0.028)',
        letterSpacing: 10, userSelect: 'none', pointerEvents: 'none',
        lineHeight: 1,
      }}>
        ROHIT
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 820, flex: 1 }}>
        {/* Badge */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          fontFamily: 'monospace', fontSize: 11,
          letterSpacing: 4, color: 'rgba(255,255,255,0.38)',
          marginBottom: 26,
        }}>
          <span style={{ display: 'inline-block', width: 36, height: 1, background: 'rgba(255,255,255,0.25)' }} />
          AVAILABLE FOR HIRE
          <span style={{
            display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
            background: '#00ED64',
            boxShadow: '0 0 10px #00ED64, 0 0 20px #00ED6444',
          }} />
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(60px,9.5vw,130px)',
          lineHeight: 0.9, margin: '0 0 6px',
          letterSpacing: 5, color: '#fff',
        }}>
          ROHIT
        </h1>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(60px,9.5vw,130px)',
          lineHeight: 0.9, margin: '0 0 38px',
          letterSpacing: 5,
          WebkitTextStroke: '1.5px rgba(255,255,255,0.45)',
          color: 'transparent',
        }}>
          BHOJ
        </h1>

        {/* Role typewriter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 44 }}>
          <span style={{
            display: 'inline-block', width: 10, height: 10,
            borderRadius: '50%', background: '#fff',
            boxShadow: '0 0 16px rgba(255,255,255,0.6)',
          }} />
          <span style={{
            fontFamily: 'monospace', fontSize: 13, letterSpacing: 3,
            color: 'rgba(255,255,255,0.72)',
            minWidth: 280,
          }}>
            {role}
            <span style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.1s' }}>_</span>
          </span>
        </div>

        {/* Bio */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 16, color: 'rgba(255,255,255,0.48)',
          lineHeight: 1.85, maxWidth: 500, marginBottom: 52,
        }}>
          Crafting pixel-perfect, performant web experiences with the MERN stack.
          Turning complex problems into elegant digital solutions — one commit at a time.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
          <button
            onClick={() => setActive('PROJECTS')}
            style={{
              fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 3, fontSize: 15,
              padding: '16px 44px', background: '#fff', color: '#000',
              border: 'none', borderRadius: 99, cursor: 'pointer',
              boxShadow: '0 0 40px rgba(255,255,255,0.18)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(255,255,255,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.boxShadow = '0 0 40px rgba(255,255,255,0.18)'; }}
          >
            VIEW WORK
          </button>
          <button
            onClick={() => setActive('CONTACT')}
            style={{
              fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 3, fontSize: 15,
              padding: '16px 44px', background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.28)', borderRadius: 99, cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; }}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Floating stats card */}
      <div style={{
        position: 'absolute', right: 72, top: '50%',
        transform: 'translateY(-50%)',
        width: 290,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.11)',
        borderRadius: 28, backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        padding: '32px 30px',
        boxShadow: '0 32px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)',
      }}>
        {stats.map(({ label, value, suffix }, i) => (
          <div key={label} style={{
            borderBottom: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            paddingBottom: i < stats.length - 1 ? 22 : 0,
            marginBottom:  i < stats.length - 1 ? 22 : 0,
          }}>
            <div style={{
              fontFamily: 'monospace', fontSize: 9,
              letterSpacing: 3, color: 'rgba(255,255,255,0.32)',
              marginBottom: 6,
            }}>
              {label}
            </div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 46, color: '#fff',
              letterSpacing: 2, lineHeight: 1,
            }}>
              <Counter end={value} suffix={suffix} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
