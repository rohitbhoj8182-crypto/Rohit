import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';
import useInView from '../hooks/useInView';

export default function Projects() {
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
          // PROJECTS.array
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
            FEATURED
          </h2>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(52px,6.5vw,82px)',
            letterSpacing: 4, lineHeight: 0.88,
            margin: '0 0 60px',
            WebkitTextStroke: '1.5px rgba(255,255,255,0.38)',
            color: 'transparent',
          }}>
            WORK
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))',
          gap: 20,
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
