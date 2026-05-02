import { useState } from 'react';
import Navbar     from './components/Navbar';
import Particles  from './components/Particles';
import Hero       from './pages/Hero';
import About      from './pages/About';
import Skills     from './pages/Skills';
import Projects   from './pages/Projects';
import Contact    from './pages/Contact';

const SECTIONS = { HOME: Hero, ABOUT: About, SKILLS: Skills, PROJECTS: Projects, CONTACT: Contact };

export default function App() {
  const [active, setActive] = useState('HOME');
  const PageComponent = SECTIONS[active];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#000' }}>

      {/* ── Fixed background layers ── */}
      {/* Deep radial gradient */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 75% 55% at 15% 15%, rgba(28,28,28,0.95) 0%, #000 65%)',
        pointerEvents: 'none',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), ' +
          'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Particle field */}
      <Particles />

      {/* ── Navigation ── */}
      <Navbar active={active} setActive={setActive} />

      {/* ── Page content ── */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <PageComponent setActive={setActive} />
      </main>

      {/* ── Footer ── */}
      <footer style={{
        position: 'relative', zIndex: 1,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '20px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(0,0,0,0.65)',
        backdropFilter: 'blur(20px)',
      }}>
        <span style={{
          fontFamily: 'monospace', fontSize: 10,
          letterSpacing: 2, color: 'rgba(255,255,255,0.2)',
        }}>
          © {new Date().getFullYear()} ROHIT BHOJ
        </span>
        <span style={{
          fontFamily: 'monospace', fontSize: 10,
          letterSpacing: 2, color: 'rgba(255,255,255,0.2)',
        }}>
          BUILT WITH ♥ IN REACT + NODE
        </span>
      </footer>
    </div>
  );
}
