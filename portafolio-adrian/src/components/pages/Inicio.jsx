import React from "react";
import "../pages/Inicio.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaLaughBeam } from "react-icons/fa";

export default function Inicio() {
  return (
    <section className="containerIndex">
      <div className="principalPicture">
        <img src="/img/foto-perfil.jpeg" alt="imagen adrian" />
      </div>
      <div className="icon-row">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <p>GitHub</p>
        </a>

        <a href="mailto:adrian@email.com">
          <FaEnvelope />
          <p>Contactame</p>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <p>Linkedin</p>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLaughBeam />
          <p>Sobre mí</p>
        </a>
      </div>
    </section>
  );
}
