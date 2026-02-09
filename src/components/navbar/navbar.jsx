import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("INICIO");

  const handleClick = (item) => {
    setActive(item);
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="brand-logo" />
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
        {[
          "INICIO",
          "INTERNET",
          "TELEVISIÓN",
          "DESARROLLO DE SOFTWARE",
          "TRABAJA CON NOSOTROS",
          "CONTACTO",
        ].map((item) => (
          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => handleClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
