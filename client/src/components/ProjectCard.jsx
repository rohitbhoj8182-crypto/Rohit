import { useState } from 'react';
import useInView from '../hooks/useInView';

export default function ProjectCard({ project, index }) {
  const [hov, setHov] = useState(false);
  const [ref, visible] = useInView(0.15);
  const p = project;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        background: hov ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hov ? p.color + '55' : 'rgba(255,255,255,0.09)'}`,
        borderRadius: 24,
        padding: '34px 30px 44px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: `all 0.46s ${index * 0.07}s cubic-bezier(0.16,1,0.3,1)`,
        transform: visible
          ? hov ? 'translateY(-8px)' : 'translateY(0)'
          : 'translateY(42px)',
        opacity: visible ? 1 : 0,
        boxShadow: hov
          ? `0 24px 64px ${p.color}18, inset 0 1px 0 rgba(255,255,255,0.09)`
          : 'none',
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: 'absolute', top: -50, right: -50,
        width: 160, height: 160,
        background: p.color, borderRadius: '50%',
        filter: 'blur(70px)',
        opacity: hov ? 0.16 : 0.04,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }} />

      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <span style={{
          fontFamily: 'monospace', fontSize: 10,
          color: p.color, letterSpacing: 3, textTransform: 'uppercase',
        }}>
          Project {p.num}
        </span>
        <span style={{
          fontFamily: 'monospace', fontSize: 10,
          color: 'rgba(255,255,255,0.28)', letterSpacing: 2,
        }}>
          {p.year}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 34, letterSpacing: 3, color: '#fff',
        margin: '0 0 14px', lineHeight: 1,
      }}>
        {p.title}
      </h3>

      {/* Desc */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 14, color: 'rgba(255,255,255,0.52)',
        lineHeight: 1.75, margin: '0 0 22px',
      }}>
        {p.desc}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {p.tags.map(t => (
          <span key={t} style={{
            fontFamily: 'monospace', fontSize: 10, letterSpacing: 1.5,
            padding: '4px 12px', borderRadius: 99,
            background: `${p.color}18`, color: p.color,
            border: `1px solid ${p.color}33`,
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{
        position: 'absolute', bottom: 24, right: 28,
        display: 'flex', gap: 18,
      }}>
        <a href={p.github} target="_blank" rel="noreferrer"
          style={{
            fontFamily: 'monospace', fontSize: 10, letterSpacing: 2,
            color: hov ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.25)',
            textDecoration: 'none', transition: 'color 0.25s',
          }}
          onClick={e => e.stopPropagation()}
        >
          GITHUB ↗
        </a>
        <a href={p.live} target="_blank" rel="noreferrer"
          style={{
            fontFamily: 'monospace', fontSize: 10, letterSpacing: 2,
            color: hov ? p.color : 'rgba(255,255,255,0.25)',
            textDecoration: 'none', transition: 'color 0.25s',
          }}
          onClick={e => e.stopPropagation()}
        >
          LIVE →
        </a>
      </div>
    </div>
  );
}
