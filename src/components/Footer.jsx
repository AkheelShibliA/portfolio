import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Akheel Shibli</span>
      <span>IIM Lucknow · BITS Pilani · Built with intention.</span>
    </footer>
  );
}
