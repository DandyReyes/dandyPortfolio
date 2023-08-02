import React from "react";
import { Col, Container, Row } from "src/UILibrary";
import styles from "./About.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <Container
      fluid
      className={`d-flex align-items-center ${styles["about-container"]}`}
    >
      <Row>
        <Col sm={4} md={3} id={styles["image-col"]}>
          <div className={styles["my-portfolio-image-wrapper"]}>
            <Image
              className={styles["my-portfolio-image"]}
              width={300}
              height={300}
              src="/images/reyes_dandy_headshot.png"
              alt="Portrait of myself"
            />
          </div>
        </Col>
        <Col sm={8} md={9} className={styles["about-me-wrapper"]}>
          <p id={styles["paragraph"]}>
            Hola, my name is <i>Dandy</i>. I am a<b> Software Engineer</b> with
            an emphasis on <b>React</b>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
