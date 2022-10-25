import React from "react";
import "./Habilidades.css";

export default function Habilidades() {
  return (
    <section className="competencias__container">
      <h2 className="competencias__titulo">Skills and proficiencies</h2>
      <div className="competencias__listContainer">
        <ul id="competencias__listContainer--ul">
          <li>
            <p>Inglés Upper Intermediate (B2)</p>
          </li>
          <li>
            <p>Scrum methodology</p>
          </li>
          <li>
            <p>Google Design Sprint methodology</p>
          </li>
          <li>
            <p>Autonomy</p>
          </li>
          <li>
            <p>Team Work</p>
          </li>
          <li>
            <p>Creativy</p>
          </li>
          <li>
            <p>Pragmatism</p>
          </li>
          <li>
            <p>Self-taught</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
