import './Navbar.css';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">A<span>.</span>Shibli</a>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
    </nav>
  );
}
