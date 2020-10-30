import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.scss";

const Header = () => (
  <header>
    <nav className="Navbar">
      <a href="/" className="logo">
        <span className="logo-tag">&lt;</span>
        <span className="name">Frank</span>
        <span className="logo-tag">/&gt;</span>
      </a>
      <ul>
        <Link to="/sobre-mi">Sobre mi</Link>
        <li>Portafolio</li>
        <li>Contacto</li>
      </ul>
    </nav>
    <h1>Frank Carmona</h1>
    <p>Desarrollador Front-End</p>
  </header>
);

export default Header;
