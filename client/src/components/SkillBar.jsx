import useInView from '../hooks/useInView';

export default function SkillBar({ skill, index }) {
  const [ref, visible] = useInView(0.3);

  return (
    <div
      ref={ref}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: 16,
        padding: '18px 22px',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        transition: `transform 0.45s ${index * 0.055}s, opacity 0.45s ${index * 0.055}s, border-color 0.25s, box-shadow 0.25s`,
        transform: visible ? 'translateY(0)' : 'translateY(22px)',
        opacity: visible ? 1 : 0,
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform   = 'translateY(-5px) scale(1.02)';
        e.currentTarget.style.borderColor = `${skill.color}55`;
        e.currentTarget.style.boxShadow   = `0 10px 36px ${skill.color}1a`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform   = 'translateY(0) scale(1)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
        e.currentTarget.style.boxShadow   = 'none';
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 11 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 19 }}>{skill.icon}</span>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 17, letterSpacing: 2.5, color: '#fff',
          }}>
            {skill.name}
          </span>
          <span style={{
            fontFamily: 'monospace', fontSize: 9,
            letterSpacing: 2, color: 'rgba(255,255,255,0.3)',
            background: 'rgba(255,255,255,0.06)',
            padding: '2px 8px', borderRadius: 99,
          }}>
            {skill.category}
          </span>
        </div>
        <span style={{
          fontFamily: 'monospace', fontSize: 13,
          color: skill.color, fontWeight: 700,
        }}>
          {skill.level}%
        </span>
      </div>

      {/* Bar */}
      <div style={{
        background: 'rgba(255,255,255,0.07)',
        borderRadius: 99, height: 5, overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', borderRadius: 99,
          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}77)`,
          width: visible ? `${skill.level}%` : '0%',
          transition: `width 1.3s ${index * 0.07}s cubic-bezier(0.16,1,0.3,1)`,
          boxShadow: `0 0 14px ${skill.color}55`,
        }} />
      </div>
    </div>
  );
}
