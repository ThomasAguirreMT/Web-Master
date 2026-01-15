import "./navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="brand-logo"  />

      <ul className="nav-links">
        <li>Inicio</li>
        <li>Internet</li>
        <li>Televisión</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}
