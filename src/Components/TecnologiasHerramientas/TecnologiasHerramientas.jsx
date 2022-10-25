import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  DiJsBadge,
  DiReact,
  DiPostgresql,
  DiGithubBadge,
  DiSass,
} from "react-icons/di";
import {
  SiRedux,
  SiCss3,
  SiBootstrap,
  SiNodedotjs,
  SiPostman,
} from "react-icons/si";
import { AiOutlineConsoleSql, AiFillHtml5 } from "react-icons/ai";
import "./TecnologiasHerramientas.css";

export default function TecnologiasHerramientas() {
  return (
    <section id="habilidades">
      <h2 className="habilidades__titulo">Technologies and Tools</h2>
      <Container fluid="md" className="habilidades__container">
        <Row>
          <Col>
            <Col>
              <a
                href="https://www.javascript.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <DiJsBadge></DiJsBadge>
              </a>
            </Col>
            <Row>
              <p className="habilidades__container-nombres">Javascript</p>
            </Row>
          </Col>
          <Col>
            <Col>
              <a
                href="https://es.reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <DiReact></DiReact>
              </a>
            </Col>
            <Row>
              <p className="habilidades__container-nombres">React.js</p>
            </Row>
          </Col>
          <Col>
            <Col>
              <a
                href="https://es.redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <SiRedux></SiRedux>
              </a>
            </Col>
            <Row>
              <p className="habilidades__container-nombres">Redux</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Col>
              <a
                href="https://developer.mozilla.org/es/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <SiCss3></SiCss3>
              </a>
            </Col>
            <Row>
              <p className="habilidades__container-nombres">Css</p>
            </Row>
          </Col>
          <Col>
            <Col>
              <a
                href="https://sass-lang.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <DiSass></DiSass>
              </a>
            </Col>
            <Row>
              <p className="habilidades__container-nombres">Sass</p>
            </Row>
          </Col>
          <Col>
            <Col>
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <SiBootstrap></SiBootstrap>
              </a>
            </Col>
            <Row>
              <p className="habilidades__container-nombres">Bootstrap</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Col>
              <a
                href="https://nodejs.org/es/"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <SiNodedotjs></SiNodedotjs>
              </a>
            </Col>
            <Row>
              <p className="habilidades__container-nombres">Node.js</p>
            </Row>
          </Col>
          <Col>
            <Col>
              <a
                href="https://www.w3schools.com/sql/"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <AiOutlineConsoleSql></AiOutlineConsoleSql>
              </a>
            </Col>
            <Row>
              <p className="habilidades__container-nombres">SQL</p>
            </Row>
          </Col>
          <Col>
            <Col>
              <a
                href="https://developer.mozilla.org/es/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <AiFillHtml5></AiFillHtml5>
              </a>
            </Col>
            <Row>
              <p className="habilidades__container-nombres">HTML</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Col>
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <DiPostgresql></DiPostgresql>
              </a>
            </Col>
            <Row>
              <p className="habilidades__container-nombres">PostgreSQL</p>
            </Row>
          </Col>
          <Col>
            <Col>
              <a
                href="https://www.postman.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <SiPostman></SiPostman>
              </a>
            </Col>
            <Row>
              <p className="habilidades__container-nombres">Postman</p>
            </Row>
          </Col>
          <Col>
            <Col>
              <a
                href="https://github.com/pablogarciamoralez"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <DiGithubBadge></DiGithubBadge>
              </a>
            </Col>
            <Row>
              <p className="habilidades__container-nombres">Github</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
