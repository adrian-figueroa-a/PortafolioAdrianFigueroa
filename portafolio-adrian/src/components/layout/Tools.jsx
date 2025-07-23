import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaGit,
  FaNpm,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import "../layout/Tools.css";

function Tools() {
  return (
    <div className="container-tools">
      <h2>Herramientas que uso</h2>

      <div className="tools-icons">
        <div>
          <FaHtml5 />
          <p>Html</p>
        </div>
        <div>
          <FaCss3Alt />
          <p>Css</p>
        </div>
        <div>
          <FaJsSquare />

          <p>JavaScript</p>
        </div>
        <div>
          <FaBootstrap />
          <p>Bootstrap</p>
        </div>

        <div>
          <FaGit />
          <p>Git</p>
        </div>
        <div>
          <FaNpm />
          <p>Npm</p>
        </div>
        <div>
          <FaReact />
          <p>React</p>
        </div>
        <div>
          <FaFigma />

          <p>Figma</p>
        </div>
      </div>
    </div>
  );
}

export default Tools;
