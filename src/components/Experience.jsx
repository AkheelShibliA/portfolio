import { useEffect, useRef } from 'react';
import { experience } from '../data';
import './Experience.css';

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-item" ref={ref} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="timeline-dot" />
      <div className="timeline-meta">
        <span className="timeline-date">{item.date}</span>
        {item.badge && <span className="timeline-badge">{item.badge}</span>}
      </div>
      <div className="timeline-title">{item.title}</div>
      <div className="timeline-company">{item.company}</div>
      <ul className="timeline-points">
        {item.points.map((p, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </ul>
      <span className="impact-tag">{item.impact}</span>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="exp-section" id="experience">
      <div className="exp-inner">
        <div className="section-label">02 · Experience</div>
        <h2 className="section-title">Where I've <em>worked</em></h2>
        <div className="timeline">
          {experience.map((item, i) => (
            <TimelineItem key={item.company + item.date} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
