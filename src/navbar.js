import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/assets/logo.png" className="logo">MyApp</a>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        <a href="/login" className="user-icon">
          <i className="fas fa-user"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
