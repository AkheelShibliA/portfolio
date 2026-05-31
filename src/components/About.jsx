import { useEffect, useRef } from 'react';
import { about } from '../data';
import './About.css';

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

// Renders text with <strong> and <highlight> tags
function RichText({ html }) {
  const formatted = html
    .replace(/<highlight>(.*?)<\/highlight>/g, '<span class="highlight">$1</span>');
  return <p dangerouslySetInnerHTML={{ __html: formatted }} />;
}

export default function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useReveal(leftRef);
  useReveal(rightRef);

  return (
    <section id="about" className="about-section">
      <div className="section-label">01 · About</div>
      <h2 className="section-title">The story so <em>far</em></h2>

      <div className="about-grid">
        <div className="about-text reveal" ref={leftRef}>
          {about.paragraphs.map((p, i) => <RichText key={i} html={p} />)}
          <p className="seeking">
            Actively exploring <span className="highlight">Senior TPM</span> and{' '}
            <span className="highlight">Product Manager</span> opportunities.
          </p>
        </div>

        <div className="about-cards reveal" ref={rightRef}>
          {about.cards.map((card) => (
            <div className="about-card" key={card.title}>
              <div className="card-icon">{card.icon}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-desc">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
