import React from "react";
import "./Proyectos.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function Proyectos() {
  return (
    <section className="proyectos__container" id="proyectos">
      <h2 className="proyectos__title">Proyectos</h2>
      <div className="proyectos__cardsContainer">
        <Card
          //   style={{ width: "20rem" }}
          id="proyectos__card"
        >
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/ddl9gpirm/image/upload/v1665111524/Proyectos/henrys_banner_qedwqi.png"
          />
          <Card.Body>
            <Card.Title>Henry's</Card.Title>
            <Card.Text>
              Proyecto final del bootcamp Henry, consiste en un E-commerce
              completamente funcional, desarrollado de manera grupal mediante la
              metología ágil Scrum.
            </Card.Text>
            <Col sm={"auto"}>
              <Button
                id="proyectos__cards-button"
                href="https://github.com/pablogarciamoralez/Henrys-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositorio
              </Button>
              <Button
                id="proyectos__cards-button"
                href="https://henrys-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </Button>
              <Button
                id="proyectos__cards-button"
                href="https://www.youtube.com/watch?v=WN5D9ic8_XY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Review
              </Button>
            </Col>
          </Card.Body>
        </Card>

        <Card
          //   style={{ width: "20rem" }}
          id="proyectos__card"
        >
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/ddl9gpirm/image/upload/v1664896360/Proyectos/pokeapp_xcajmc.png"
          />
          <Card.Body>
            <Card.Title>Pokeapp</Card.Title>
            <Card.Text>
              Proyecto construido a partir de informacion consumida de una API,
              permite buscar, filtrar, ordenar y crear diferentes tipos de
              pokemons.
            </Card.Text>
            <Col sm={"auto"}>
              <Button
                id="proyectos__cards-button"
                href="https://github.com/pablogarciamoralez/pokeapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositorio
              </Button>
              <Button
                id="proyectos__cards-button"
                href="https://henrypokeapp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </Button>
              <Button
                id="proyectos__cards-button"
                href="https://www.youtube.com/watch?v=mpXdz5OsALg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Review
              </Button>
            </Col>
          </Card.Body>
        </Card>

        <Card
          //   style={{ width: "25rem" }}
          id="proyectos__card"
        >
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/ddl9gpirm/image/upload/v1665112834/Proyectos/app_consola_et6ve7.png"
          />
          <Card.Body>
            <Card.Title>App de consola interactiva</Card.Title>
            <Card.Text>
              Se ejecuta mediante cualquier programa de consola, permite crear,
              borrar y editar tareas por hacer, o bien, marcarlas cuando se
              completan.
            </Card.Text>
            <Col sm={"auto"}>
              <Button
                id="proyectos__cards-button"
                href="https://github.com/pablogarciamoralez/app-consola-tareas-por-hacer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositorio
              </Button>
            </Col>
          </Card.Body>
        </Card>

        <Card
          //   style={{ width: "25rem" }}
          id="proyectos__card"
        >
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/ddl9gpirm/image/upload/v1665113006/Proyectos/elclima_p3f0wt.png"
          />
          <Card.Body>
            <Card.Title>El Clima</Card.Title>
            <Card.Text>
              Esta app consume informacion de una API publica y permite buscar
              el clima de cualquier ciudad del mundo.
            </Card.Text>
            <Col sm={"auto"}>
              <Button
                id="proyectos__cards-button"
                href="https://github.com/pablogarciamoralez"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </Button>
            </Col>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}
