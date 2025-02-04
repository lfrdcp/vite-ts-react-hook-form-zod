import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">
          <img
            src="/public/img/marvel.png"
            alt="Marvel Logo"
            className="logo-img"
          />
        </h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
