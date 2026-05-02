const LINKS = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];

export default function Navbar({ active, setActive }) {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0 48px', height: 70,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 26, letterSpacing: 6, color: '#fff',
        cursor: 'pointer',
      }} onClick={() => setActive('HOME')}>
        RB<span style={{ color: 'rgba(255,255,255,0.3)' }}>.</span>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 34 }}>
        {LINKS.map(l => (
          <button
            key={l}
            onClick={() => setActive(l)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'monospace', fontSize: 11, letterSpacing: 3,
              color: active === l ? '#fff' : 'rgba(255,255,255,0.38)',
              borderBottom: active === l
                ? '1px solid rgba(255,255,255,0.8)'
                : '1px solid transparent',
              paddingBottom: 3,
              transition: 'all 0.22s',
            }}
            onMouseEnter={e => { if (active !== l) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            onMouseLeave={e => { if (active !== l) e.currentTarget.style.color = 'rgba(255,255,255,0.38)'; }}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Handle */}
      <div style={{
        fontFamily: 'monospace', fontSize: 11,
        letterSpacing: 2, color: 'rgba(255,255,255,0.25)',
      }}>
        @rohitbhoj
      </div>
    </nav>
  );
}
