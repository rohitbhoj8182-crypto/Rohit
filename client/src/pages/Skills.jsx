import SkillBar from '../components/SkillBar';
import { skills } from '../data';
import useInView from '../hooks/useInView';

export default function Skills() {
  const [ref, visible] = useInView(0.1);

  return (
    <section style={{
      minHeight: '100vh',
      padding: '100px 48px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'monospace', fontSize: 10,
          letterSpacing: 4, color: 'rgba(255,255,255,0.28)',
          marginBottom: 16,
        }}>
          // SKILLS.json
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
            TECH
          </h2>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(52px,6.5vw,82px)',
            letterSpacing: 4, lineHeight: 0.88,
            margin: '0 0 60px',
            WebkitTextStroke: '1.5px rgba(255,255,255,0.38)',
            color: 'transparent',
          }}>
            STACK
          </h2>
        </div>

        {/* Category labels */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 36, flexWrap: 'wrap' }}>
          {['ALL', 'MERN', 'Language'].map(cat => (
            <span key={cat} style={{
              fontFamily: 'monospace', fontSize: 10, letterSpacing: 2,
              padding: '6px 16px', borderRadius: 99,
              background: cat === 'ALL' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: cat === 'ALL' ? '#fff' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
            }}>
              {cat}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 14,
        }}>
          {skills.map((s, i) => (
            <SkillBar key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
