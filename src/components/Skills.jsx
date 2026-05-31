import { useEffect, useRef } from 'react';
import { skills, certifications } from '../data';
import './Skills.css';

export default function Skills() {
  const gridRef = useRef(null);
  const certsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    [gridRef, certsRef].forEach(r => { if (r.current) observer.observe(r.current); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-section" id="skills">
      <div className="skills-inner">
        <div className="section-label">04 · Skills</div>
        <h2 className="section-title">What I <em>bring</em></h2>

        <div className="skills-grid reveal" ref={gridRef}>
          {skills.map(group => (
            <div className="skill-group" key={group.category}>
              <div className="skill-group-title">{group.category}</div>
              <div className="skill-tags">
                {group.items.map(item => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certs-row reveal" ref={certsRef}>
          {certifications.map(cert => (
            <div className="cert-badge" key={cert.name}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-text">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
