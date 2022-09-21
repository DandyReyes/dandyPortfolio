import React from "react";
import "../scss/Name.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Name() {
  return (
    <Container fluid id="name-container">
      <Row id="myHome">
        <Col>Dandy Reyes</Col>
      </Row>
      <Row className="title-container">
        <Col className="landing-page-blue-text">Front End</Col>
        <Col id="web-border">Developer</Col>
      </Row>
    </Container>
  );
}
