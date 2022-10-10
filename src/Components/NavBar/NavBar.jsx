import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

function NavBar2() {
  return (
    <div className="divmother">
      <Navbar collapseOnSelect expand="lg" className="navBar_container">
        <Container fluid className="navBar_container">
          <Navbar.Brand href="#home">Pablo García Moralez</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="navBar_container"
          >
            <Nav className="me-auto">
              <Nav.Link className="navBar_links" href="#habilidades">
                Habilidades
              </Nav.Link>
              <Nav.Link className="navBar_links" href="#proyectos">
                Proyectos
              </Nav.Link>
              <Nav.Link className="navBar_links" href="#contacto">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar2;
