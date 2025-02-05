import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <img
          src="/public/img/marvel.png"
          alt="Marvel Logo"
          className="logo-img"
          onClick={() => navigate("/")}
        />

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/home">Inicio</Link>
            </li>
            <li>
              <Link to="/services">Servicios</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
