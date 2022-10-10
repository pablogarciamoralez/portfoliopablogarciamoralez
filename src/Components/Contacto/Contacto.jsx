/* eslint-disable no-useless-escape */
import React, { useState, useRef } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";
import "./Contacto.css";

export default function Contacto() {
  const form = useRef();

  const [done, setDone] = useState(false);
  const [error, setError] = useState({});
  const [input, setInput] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    // eslint-disable-next-line import/no-named-as-default-member
    emailjs
      .sendForm(
        "service_63geh8s",
        "template_vu2rjei",
        form.current,
        "bgopYo7YYfYZzrQRj"
      )
      .then((result) => {
        console.log(result.message);
        setDone(true);
      });

    e.target.reset();
    setInput({ subject: undefined });
  };

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(validate({ ...input, [e.target.name]: e.target.value }));
  }
  function validate(input) {
    let error = {};

    if (!input.name) {
      error.name = "*El nombre es obligatorio";
    } else if (
      !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
        input.name
      )
    ) {
      error.name = "Nombre inválido sólo admite letras";
    }

    if (!input.email) {
      error.email = "*El Email es obligatorio";
    }
    // eslint-disable-next-line no-useless-escape
    else if (
      !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        input.email
      )
    ) {
      error.email = "Este email es inválido";
    }
    if (!input.message) {
      error.message = "Por favor escribe el motivo de tu consulta";
    }

    return error;
  }

  function handleSubmit() {
    Swal.fire({
      title: "Mensaje enviado con éxito",
      text: "Muchas gracias por contactarme, en breve me comunicaré contigo.",
      imageUrl:
        "https://res.cloudinary.com/ddl9gpirm/image/upload/ar_1:1,b_rgb:262c35,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1665162198/Proyectos/grunge-ok-word-rubber-stamp-ok-sign-sticker-set-grunge-vintage-square-label-illustration-isolated-on-white-background-vector_bmibzo.jpg",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "ok",
      showConfirmButton: false,
      background: "#525252",
      timer: 2500,
    });
    setError({ name: "", email: "", message: "" });
  }

  return (
    <section id="contacto" className="contacto__mainContainer">
      <Container className="contacto__formContainer">
        <h2 className="pt-3">Contacto</h2>
        <Row className="justify-content-md-center">
          <Col lg={10} sm={12} className="p-5" id="colcontainer">
            <p className="contact__text__left">
              Compartí tus consultas, comentarios ó sugerencias a través del
              formulario y te respondere a la brevedad
            </p>
            <form
              ref={form}
              onSubmit={(e) => {
                handleSubmit(e);
                sendEmail(e);
              }}
              action="#"
              id="contact_form"
            >
              <Row>
                <input
                  className="contactForm__input"
                  type="text"
                  placeholder="Nombre..."
                  name="name"
                  id="name_input"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <div className="contactForm__errContainer">
                  {error.name && <p>{error.name}</p>}
                </div>
              </Row>
              <Row>
                <input
                  className="contactForm__input"
                  type="email"
                  placeholder="E-mail..."
                  name="email"
                  id="email_input"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <div className="contactForm__errContainer">
                  {error.email && <p>{error.email}</p>}
                </div>
              </Row>
              <Row>
                <textarea
                  className="contactForm__input"
                  name="message"
                  placeholder="Mensaje..."
                  id="message_input"
                  cols="20"
                  rows="8"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <div className="contactForm__errContainer">
                  {error.message && <p>{error.message}</p>}
                </div>
              </Row>
              <Button
                type="submit"
                key="submit"
                value="submit"
                id="form_button"
                disabled={Object.keys(error).length > 0}
              >
                Enviar
              </Button>
              {done}
            </form>
          </Col>
        </Row>
      </Container>
      <Container className="contacto__linksContainer">
        <Row>
          <Col>
            <Col>
              <a
                href="https://www.linkedin.com/in/pablogarciamoralez/"
                target="_blank"
                rel="noopener noreferrer"
                className="habilidades__links"
              >
                <BsLinkedin></BsLinkedin>
              </a>
            </Col>
            <Row>
              <p>LinkedIn</p>
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
              <p>Github</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
