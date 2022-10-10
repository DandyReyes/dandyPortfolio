import React from "react";
import styles from "./Name.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Name() {
  return (
    <Container fluid id={styles["name-container"]}>
      <Row id={styles["myHome"]}>
        <Col>Dandy Reyes</Col>
      </Row>
      <Row className={styles["title-container"]}>
        <Col className={styles["landing-page-blue-text"]}>Front End</Col>
        <Col id={styles["web-border"]}>Developer</Col>
      </Row>
    </Container>
  );
}
