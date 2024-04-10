import React from "react";
import styles from "./Projects.module.scss";

export default function Projects() {
  // Future implementation: Timeline of projects
  return (
    <img
      id="projects"
      className={styles["mock-image"]}
      src="/images/Design_Mock_Ups.png"
      alt="My design work"
      width="500px"
    />
  );
}
