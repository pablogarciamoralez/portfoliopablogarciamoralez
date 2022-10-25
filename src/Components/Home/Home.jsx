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
            <span>Hello World</span>
          </div>
        </h1>
        <p className="home__container__text">
          My name is Pablo Garcia Moralez and I am a Full Stack web developer
          residing in the city of Córdoba, Argentina. I consider myself a
          pragmatic person with a problem-solving mindset, with ease and taste
          for teamwork. My first contact with code was at the beginning of the
          pandemic back in 2020, when I discovered javascript and css. Since
          then I have learned other languages and technologies and carried out
          several projects individually and in groups. In August 2022 I finished
          Henry's Coding bootcamp, in which I was in front of the PC coding for
          most of the day and night for several months. Keep browsing to get to
          know me better!
        </p>
        <Image
          // fluid
          className="home__image"
          src="https://res.cloudinary.com/ddl9gpirm/image/upload/c_scale,e_art:primavera,w_320/v1665095134/Proyectos/20221006_191720_zbym0a.jpg"
          alt="yo"
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
