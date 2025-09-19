import React from "react";
import styles from "./Skills.module.scss";
import { Col, Container } from "src/UILibrary";
import data from "./dataSets.json";

export default function Skills() {
  const RenderSkills = () => {
    return (
      <div>
        {data.skillsList.map(({ skills, name, id }) => (
          <div key={id}>
            <h3 className={styles["skillSubTitle"]}>{name}</h3>
            <div className={styles["skillsContainer"]}>
              {skills.map((skillName, index) => (
                <div className={styles["skill"]} key={`${id}-${index}`}>
                  {skillName}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const Card = () => {
    return (
      <div>
        <h1 className={styles["skillTitle"]}>Skills</h1>
        <RenderSkills />
      </div>
    );
  };

  return (
    <Container fluid className={styles["container"]}>
      <Col className={styles["icons"]} key="1">
        <Card />
      </Col>
    </Container>
  );
}
