import React from "react";
import "./Habilidades.css";

export default function Habilidades() {
  return (
    <section className="competencias__container">
      <h2 className="competencias__titulo">Habilidades y Competencias</h2>
      <div className="competencias__listContainer">
        <ul id="competencias__listContainer--ul">
          <li>
            <p>Inglés Upper Intermediate (B2)</p>
          </li>
          <li>
            <p>Metodología SCRUM</p>
          </li>
          <li>
            <p>Metodologia Google Design Sprint</p>
          </li>
          <li>
            <p>Autosuficiencia</p>
          </li>
          <li>
            <p>Trabajo en equipo</p>
          </li>
          <li>
            <p>Creatividad</p>
          </li>
          <li>
            <p>Pragmatismo</p>
          </li>
          <li>
            <p>Autodidactico</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
