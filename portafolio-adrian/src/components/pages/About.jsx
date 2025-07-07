import React from "react";
import "../pages/About.css";
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

export default function about() {
  return (
    <section className="containerAbout">
      <div className="personalDescription">
        <h1>Adrián Figueroa</h1>
        <h2>Desarrollador Front end</h2>
        <p>
          Soy programador y en los últimos años me he dedicado al desarrollo
          Front-End, enfocándome en la creación de interfaces web funcionales,
          responsivas y visualmente atractivas. Tengo experiencia trabajando con
          JavaScript, HTML, CSS y diversas librerías. He trabajado en proyectos
          para Ripley.com, desarrollando landing pages, manteniendo la página
          principal del sitio y creando mailings masivos. Me interesa el
          aprendizaje constante, estar al día con las últimas tecnologías y
          participar en equipos que valoren la colaboración y la mejora
          continua.
        </p>

        <div className="icon-row">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a href="mailto:adrian@email.com">
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>


        </div>
      </div>
    </section>
  );
}
