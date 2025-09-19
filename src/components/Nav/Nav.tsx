import React from "react";
import { Nav, Navbar, Container } from "src/UILibrary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import styles from "./Nav.module.scss";

export default function NavigationBar() {
  const homeLinks = [
    { key: 1, href: "#myHome", text: "Home" },
    { key: 2, href: "#about", text: "About" },
    { key: 3, href: "#projects", text: "Projects" },
    { key: 4, href: "#contact", text: "Contact" },
  ];

  return (
    <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id={styles["nav-links"]}>
            {homeLinks.map(({ key, href, text }) => (
              <Nav.Link key={key} href={href}>
                {text}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto" id={styles["nav-icons"]}>
            <Nav.Link href="https://www.github.com/dandyreyes">
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/dandy-reyes">
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
            <Nav.Link href="#contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
