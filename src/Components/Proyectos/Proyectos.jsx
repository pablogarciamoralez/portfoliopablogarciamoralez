import React from "react";
import "./Proyectos.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function Proyectos() {
  return (
    <section className="proyectos__container" id="proyectos">
      <h2 className="proyectos__title">Projects</h2>
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
            <Card.Title className="proyectos__card__title">Henry's</Card.Title>
            <Card.Text className="proyectos__card__body">
              Final project of the Henry's coding bootcamp, it consists of a
              fully functional E-commerce, developed in a group way through the
              agile Scrum methodology.
            </Card.Text>
            <Col sm={"auto"}>
              <Button
                id="proyectos__cards-button"
                href="https://github.com/pablogarciamoralez/Henrys-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
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
            <Card.Title className="proyectos__card__title">Pokeapp</Card.Title>
            <Card.Text className="proyectos__card__body">
              Project built from information consumed from an API, allows you to
              search, filter, sort and create different types of pokemons.
            </Card.Text>
            <Col sm={"auto"}>
              <Button
                id="proyectos__cards-button"
                href="https://github.com/pablogarciamoralez/pokeapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </Button>
              <Button
                id="proyectos__cards-button"
                href="https://pokeappbypablogarcia.vercel.app/"
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
            <Card.Title className="proyectos__card__title">
              Interactive console app
            </Card.Title>
            <Card.Text className="proyectos__card__body">
              It runs through any console program, allows you to create, delete
              and edit to-dos, or mark them when they are complete.
            </Card.Text>
            <Col sm={"auto"}>
              <Button
                id="proyectos__cards-button"
                href="https://github.com/pablogarciamoralez/app-consola-tareas-por-hacer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
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
            <Card.Title className="proyectos__card__title">
              The Weather
            </Card.Title>
            <Card.Text className="proyectos__card__body">
              This app consumes information from a public API and allows you to
              search the weather of any city in the world.
            </Card.Text>
            <Col sm={"auto"}>
              <Button
                id="proyectos__cards-button"
                href="https://elclimaporpablogarcia.netlify.app/"
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
