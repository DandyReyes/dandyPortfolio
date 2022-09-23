import React from "react";
import { Container } from "react-bootstrap";
import { InlineWidget } from "react-calendly";

export default function Calendly() {
  return (
    <Container fluid id="contact">
      <InlineWidget url="https://calendly.com/dandyreyes/availability" />
    </Container>
  );
}
