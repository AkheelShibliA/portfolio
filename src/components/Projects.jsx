import { useEffect, useRef } from 'react';
import { projects } from '../data';
import './Projects.css';

function ProjectCard({ project, index }) {
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
    <div className="project-card reveal" ref={ref} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="project-num">{project.num}</div>
      <div className="project-title">{project.title}</div>
      <div className="project-desc">{project.desc}</div>
      <div className="project-tags">
        {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-label">03 · Projects</div>
      <h2 className="section-title">Things I've <em>built</em></h2>
      <div className="projects-grid">
        {projects.map((p, i) => <ProjectCard key={p.num} project={p} index={i} />)}
      </div>
    </section>
  );
}
