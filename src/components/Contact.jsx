import { personal } from '../data';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-label" style={{ justifyContent: 'center' }}>06 · Contact:9653715853</div>
      <h2 className="section-title" style={{ marginBottom: '24px' }}>
        Let's build something <em>great</em>
      </h2>
      <p className="contact-sub">
        Open to Senior TPM and Product Manager roles. If you're building something ambitious, I'd love to talk.
      </p>

      <div style={{ marginBottom: '32px' }}>
        <a href={`mailto:${personal.email}`} className="contact-email">{personal.email}</a>
      </div>

      <div className="contact-links">
        <a href={`mailto:${personal.email}`} className="contact-link">✉ Email</a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link">in LinkedIn</a>
        <a href={personal.resumeUrl} className="contact-link">↓ Resume</a>
      </div>
    </section>
  );
}
