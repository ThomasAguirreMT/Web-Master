import "./navbar.css";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="brand-logo" />
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li >INICIO</li>
        <li>INTERNET</li>
        <li>TELEVISIÓN</li>
        <li>DESARROLLO DE SOFTWARE</li>
        <li>TRABAJA CON NOSOTROS</li>
        <li>CONTACTO</li>
      </ul>
    </nav>
  );
}