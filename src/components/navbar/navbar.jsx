import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "INICIO", path: "/" },
    { name: "INTERNET", path: "/internet" },
    { name: "TELEVISIÓN", path: "/television" },
    { name: "DESARROLLO DE SOFTWARE", path: "/software" },
    { name: "TRABAJA CON NOSOTROS", path: "/trabaja" },
    { name: "CONTACTO", path: "/contacto" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="brand-logo" />
        </Link>
      </div>

      <div
        className={`menu-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={location.pathname === item.path ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
