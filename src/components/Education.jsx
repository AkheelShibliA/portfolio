import { useEffect, useRef } from 'react';
import { education, examScores } from '../data';
import './Education.css';

export default function Education() {
  const eduRef = useRef(null);
  const examRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    [eduRef, examRef].forEach(r => { if (r.current) observer.observe(r.current); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education-section">
      <div className="section-label">05 · Education</div>
      <h2 className="section-title">Where I <em>learned</em></h2>

      <div className="edu-grid reveal" ref={eduRef}>
        {education.map(e => (
          <div className="edu-card" key={e.institute}>
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-inst">{e.institute}</div>
            <div className="edu-year">{e.year}</div>
          </div>
        ))}
      </div>

      <div className="exam-row reveal" ref={examRef}>
        {examScores.map(e => (
          <div className="exam-badge" key={e.label}>
            {e.label} — <span>{e.score}</span>{e.detail ? ` ${e.detail}` : ''}
          </div>
        ))}
      </div>
    </section>
  );
}
