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
            Hola, my name is <i>Dandy</i>. I am a
            <b> Latino Software Engineer</b> with an emphasis on{" "}
            <b>React based Front End Development</b>. I love coding, creating
            and helping people get to the next level in their career path as
            developers. I advocate for foster youth and love to mentor young
            developers. Some of my crazy hobbies are building robots from the
            ground up, biking, gardening, and throwing get togethers. I'm a
            people person!
          </p>
        </Col>
      </Row>
    </Container>
  );
}
