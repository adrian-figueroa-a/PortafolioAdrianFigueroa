import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
import "../layout/Navbar.css";

export const Navbar = () => {
  // const location = useLocation();

  // const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div>
        <h1>Portafolio Adrián Figueroa</h1>
      </div>
      {/* 
      <div className={isActive("/Inicio") ? "nav-item active" : "nav-item"}>
        <NavLink to="/Inicio" className="nav-link">
          <p>Inicio</p>
        </NavLink>
      </div>

      <div className={isActive("/About") ? "nav-item active" : "nav-item"}>
        <NavLink to="/About" className="nav-link">
          <p>Sobre mí</p>
        </NavLink>
      </div>

      <div className="nav-item">
        <p>Proyectos</p>
      </div> */}
    </nav>
  );
};
