import React from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import TecnologiasHerramientas from "../TecnologiasHerramientas/TecnologiasHerramientas";
import Habilidades from "../Habilidades/Habilidades";
import Proyectos from "../Proyectos/Proyectos";
import Contacto from "../Contacto/Contacto";
import "./Home.css";

function Home() {
  return (
    <div>
      <Container className="home__container">
        <h1 animation="glow" className="home__container__titulo">
          <div className="waviy">
            <span>Hola Mundo</span>
          </div>
        </h1>
        <p className="home__container__text">
          Mi nombre es Pablo Garcia Moralez y soy desarrollador web Full Stack
          residiendo en la ciudad de Córdoba, Argentina. Me considero una
          persona pragmática y con mentalidad resolutiva, con facilidad y gusto
          para el trabajo en equipo. Mi primer contacto con el código fue en los
          inicios de la pandemia allá por el 2020, cuando descubrí javascript y
          css. Desde entonces he aprendido otros lenguajes y tecnologías y
          realizado varios proyectos de manera individual y grupal. En agosto de
          2022 terminé el bootcamp de Henry, en el cual estuve frente a la PC
          codeando durante gran parte del día y la noche durante varios meses.
          Segui navegando para conocerme mejor!
        </p>
        <Image
          // fluid
          className="home__image"
          src="https://res.cloudinary.com/ddl9gpirm/image/upload/c_scale,e_art:primavera,w_320/v1665095134/Proyectos/20221006_191720_zbym0a.jpg"
        ></Image>
      </Container>
      <TecnologiasHerramientas />
      <Habilidades />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default Home;
