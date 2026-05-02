import { aboutCards } from '../data';
import useInView from '../hooks/useInView';

function Card({ icon, title, desc, index }) {
  const [ref, visible] = useInView(0.2);
  return (
    <div
      ref={ref}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: 20, padding: 26,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: `all 0.45s ${index * 0.08}s cubic-bezier(0.16,1,0.3,1)`,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        opacity: visible ? 1 : 0,
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ fontSize: 30, marginBottom: 14 }}>{icon}</div>
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 18, letterSpacing: 2.5, color: '#fff', marginBottom: 10,
      }}>
        {title}
      </div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 13.5, color: 'rgba(255,255,255,0.44)', lineHeight: 1.65,
      }}>
        {desc}
      </div>
    </div>
  );
}

export default function About() {
  const [headRef, headVisible] = useInView(0.2);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '100px 48px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{
        maxWidth: 1100, width: '100%', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 80, alignItems: 'center',
      }}>
        {/* Left – text */}
        <div
          ref={headRef}
          style={{
            transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
            transform: headVisible ? 'translateX(0)' : 'translateX(-40px)',
            opacity: headVisible ? 1 : 0,
          }}
        >
          <div style={{
            fontFamily: 'monospace', fontSize: 10,
            letterSpacing: 4, color: 'rgba(255,255,255,0.28)',
            marginBottom: 20,
          }}>
            // ABOUT_ME.js
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(52px,6vw,80px)',
            letterSpacing: 4, lineHeight: 0.88,
            margin: '0 0 34px', color: '#fff',
          }}>
            WHO<br />
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.38)', color: 'transparent' }}>
              I AM
            </span>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, color: 'rgba(255,255,255,0.52)',
            lineHeight: 1.85, marginBottom: 22,
          }}>
            I'm <strong style={{ color: '#fff', fontWeight: 500 }}>Rohit Bhoj</strong>, a passionate
            Full-Stack Developer specializing in the MERN stack. I build robust, scalable web
            applications with clean code and intuitive interfaces.
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, color: 'rgba(255,255,255,0.52)',
            lineHeight: 1.85, marginBottom: 36,
          }}>
            From crafting lightning-fast React frontends to architecting solid Node.js backends —
            I live and breathe code. When I'm not shipping features, I'm exploring AI/ML with
            Python or optimizing algorithms in C++.
          </p>

          {/* Tech row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['MERN Stack', 'Python', 'C++', 'Java', 'REST APIs', 'GraphQL'].map(t => (
              <span key={t} style={{
                fontFamily: 'monospace', fontSize: 10, letterSpacing: 2,
                padding: '6px 14px', borderRadius: 99,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.55)',
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right – cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {aboutCards.map((c, i) => (
            <Card key={c.title} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
