import { personal } from '../data';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />

      <div className="hero-eyebrow">{personal.role}</div>

      <h1 className="hero-name">
        {personal.name.split(' ')[0]}<br />
        <span className="italic">{personal.name.split(' ')[1]}</span>
      </h1>

      <p className="hero-tagline">"{personal.tagline}"</p>

      <div className="hero-path">
        {personal.journeySteps.map((step, i) => (
          <span key={step} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="hero-path-item">{step}</span>
            {i < personal.journeySteps.length - 1 && (
              <span className="hero-path-arrow">→</span>
            )}
          </span>
        ))}
      </div>

      <div className="hero-ctas">
        <a href="#experience" className="btn-primary">View My Work</a>
        <a href={`mailto:${personal.email}`} className="btn-secondary">Get In Touch</a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll to explore
      </div>

      <div className="hero-stats">
        {personal.stats.map(s => (
          <div className="stat" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
