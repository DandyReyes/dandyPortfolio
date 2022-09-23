import React from "react";
import { Col, Container, Row } from "src/UILibrary";
import "../scss/About.scss";

export default function About() {
  return (
    <Container
      fluid
      className="d-flex about-container align-items-center"
      id="about"
    >
      <Row>
        <Col sm={4} md={3} id="image-col">
          <div className="my-portfolio-image-wrapper">
            <img
              className="my-portfolio-image"
              src="/images/reyes_dandy_headshot.png"
              alt="Portrait of myself"
            />
          </div>
        </Col>
        <Col sm={8} md={9} className="about-me-wrapper">
          <p>
            Hola, my name is <i>Dandy</i>. I am a
            <b> Latino Software Engineer</b> and <b>UI/UX Designer</b>. I love
            coding, creating and helping people get to the next level in their
            career path as developers. I advocate for foster youth and love to
            mentor young developers. Some of my crazy hobbies are building
            robots from the ground up, biking, knitting, and throwing get
            togethers. I'm a people person!
          </p>
        </Col>
      </Row>
    </Container>
  );
}
