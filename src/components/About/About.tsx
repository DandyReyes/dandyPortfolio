import React from "react";
import { Col, Container, Row } from "src/UILibrary";
import styles from "./About.module.scss";
import Image from "next/image";
import DownloadIcon from "public/images/download";

export default function About() {
  const scrollToContactMe = () => {
    return () => {
      const contactMe = document.getElementById("contact");
      contactMe?.scrollIntoView({ behavior: "smooth" });
    };
  };
  return (
    <Container
      fluid
      id="about"
      className={`d-flex justify-content-center align-items-center ${styles["about-container"]}`}
    >
      <Row>
        <Col>
          <h1 className={styles["title"]}>About Me</h1>
        </Col>
        <Col sm={4} md={3} className={styles["about-me-wrapper"]}>
          <div className={styles["imageWrapper"]}>
            <Image
              width={200}
              height={350}
              src="/images/portfolio_image.png"
              alt="Portrait of myself"
            />
          </div>
          <p id={styles["paragraph"]}>
            Hola, my name is <i>Dandy</i>. I am a<b> Software Engineer</b> with
            an emphasis on <b>React</b>. I am passionate about creating web apps
            that are both visually appealing and user-friendly.
          </p>
        </Col>
        <Col sm={12} md={12} className={styles["button-wrapper"]}>
          <button className={styles["button"]} onClick={scrollToContactMe()}>
            Contact Me
          </button>
          <a
            className={styles["downloadButton"]}
            href="files/Dandy_Reyes_Resume_2025.pdf"
            download
          >
            Download CV <DownloadIcon strokeColor="white" size={16} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
