import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import "../scss/Nav.scss";

export default function NavigationBar() {
  const homeLinks = [
    { key: 1, href: "#myHome", text: "Home" },
    { key: 2, href: "#about", text: "About" },
    { key: 3, href: "#projects", text: "Projects" },
    { key: 4, href: "#contact", text: "Contact" },
  ];

  // Unfortunately babel macros is built in run-time so these icons can't be
  // added into an array and looped over. This is a workaround.
  return (
    <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="nav-links">
            {homeLinks.map(({ key, href, text }) => (
              <Nav.Link key={key} href={href}>
                {text}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto" id="nav-icons">
            <Nav.Link href={"https://www.github.com/dandyreyes"}>
              <FontAwesomeIcon icon={brands("github")} />
            </Nav.Link>
            <Nav.Link href={"https://www.linkedin.com/in/dandy-reyes"}>
              <FontAwesomeIcon icon={brands("linkedin")} />
            </Nav.Link>
            <Nav.Link href={"#contact"}>
              <FontAwesomeIcon icon={regular("envelope")} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
