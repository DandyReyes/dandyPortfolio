"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { InlineWidget } from "react-calendly";
import styles from "./calendly.module.scss";

export default function Calendly() {
  return (
    <Container id="contact" fluid className={styles["contact"]}>
      <InlineWidget url="https://calendly.com/dandyreyes/availability" />
    </Container>
  );
}
