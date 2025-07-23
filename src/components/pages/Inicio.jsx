import React, { useState } from "react";
import "../pages/Inicio.css";
import Tools from "../layout/Tools";
import About from "../layout/About";
import Modal from "../layout/Modal";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLaughBeam,
  FaDev,
} from "react-icons/fa";

export default function Inicio() {
  const [modalHerramientasOpen, setModalHerramientasOpen] = useState(false);
  const [modalSobreMiOpen, setModalSobreMiOpen] = useState(false);

  return (
    <section className="containerIndex">
      <div className="icon-row">
        <a
          href="https://www.linkedin.com/in/adrian-figueroa-almonacid/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-item nav-link"
        >
          <FaLinkedin />
          <p>LinkedIn</p>
        </a>
        <a
          href="mailto:adrian.figueroa.a@gmail.com"
          className="icon-item nav-link"
        >
          <FaEnvelope />
          <p>Contacto</p>
        </a>

        <a
          href="https://github.com/adrian-figueroa-a"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-item nav-link"
        >
          <FaGithub />
          <p>GitHub</p>
        </a>
        <button
          onClick={() => setModalSobreMiOpen(true)}
          className="icon-item nav-link"
        >
          <FaLaughBeam />
          <p>Sobre mí</p>
        </button>

        <button
          onClick={() => setModalHerramientasOpen(true)}
          className="icon-item nav-link"
        >
          <FaDev />
          <p>Herramientas</p>
        </button>
      </div>

      <Modal
        isOpen={modalHerramientasOpen}
        onClose={() => setModalHerramientasOpen(false)}
      >
        <Tools />
      </Modal>

      <Modal
        isOpen={modalSobreMiOpen}
        onClose={() => setModalSobreMiOpen(false)}
      >
        <About />
      </Modal>
    </section>
  );
}
