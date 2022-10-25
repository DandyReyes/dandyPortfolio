import React from "react";
import styles from "./Skills.module.scss";
import { Col, Container } from "src/UILibrary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import postManIcon from "public/images/postman-icon.svg";
import Image from "next/image";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface SkillsProps {
  devIcon?: { [name: string]: IconDefinition };
  fontAwesomeIcon?: string;
  BuiltInIcon?: React.ReactNode;
}

interface iconProps {
  fontAwesomeIcons: { [name: string]: IconDefinition };
  devIcons: { [name: string]: string };
  builtInIcons: { [name: string]: string };
}

const iconNames: iconProps = {
  fontAwesomeIcons: {
    javascript: brands("js-square"),
    html: brands("html5"),
    css: brands("css3"),
    react: brands("react"),
    node: brands("node-js"),
    angular: brands("angular"),
    sass: brands("sass"),
    bootstrap: brands("bootstrap"),
    git: brands("git"),
    github: brands("github"),
    aws: brands("aws"),
    linux: brands("linux"),
    jira: brands("jira"),
    php: brands("php"),
    sketch: brands("sketch"),
  },
  devIcons: {
    typescript: "typescript-plain",
    jQuery: "jquery-plain",
    nextjs: "nextjs-original",
    redux: "redux-original",
    bash: "bash-plain",
    express: "express-original",
    firebase: "firebase-plain",
    mySQL: "mysql-plain",
    postgreSQL: "postgresql-plain",
    vscode: "vscode-plain",
    jenkins: "jenkins-plain",
    xd: "xd-plain",
    figma: "figma-plain",
  },
  builtInIcons: {
    postman: postManIcon,
  },
};

export default function Skills() {
  const MyIcons = ({
    devIconName,
    fontAwesomeIconName,
    builtInIconName,
  }: {
    devIconName?: string;
    fontAwesomeIconName?: string;
    builtInIconName?: string;
  }) => {
    const {
      devIcons,
      fontAwesomeIcons: icons,
      builtInIcons: biIcons,
    } = iconNames;
    const devIconsValue = devIconName ? (
      devIcons.hasOwnProperty(devIconName) ? (
        <i className={`devicon-${iconNames.devIcons[devIconName]}`} />
      ) : null
    ) : null;

    const fontAwesomeIconsValue = fontAwesomeIconName ? (
      icons.hasOwnProperty(fontAwesomeIconName) ? (
        <FontAwesomeIcon icon={icons[fontAwesomeIconName]} />
      ) : null
    ) : null;

    const builtInIconsValue = builtInIconName ? (
      biIcons.hasOwnProperty(builtInIconName) ? (
        <Image src={biIcons[builtInIconName]} height={50} width={50} />
      ) : null
    ) : null;
    return <>{devIconsValue || fontAwesomeIconsValue || builtInIconsValue}</>;
  };

  const Card = ({ devIcon, fontAwesomeIcon, BuiltInIcon }: SkillsProps) => {
    return (
      <div id={styles["yoMomma"]}>
        {Object.keys(iconNames.fontAwesomeIcons).map((element) => (
          <div>
            <MyIcons fontAwesomeIconName={element} />
            <h3>{element}</h3>
          </div>
        ))}
        {Object.keys(iconNames.devIcons).map((element) => (
          <div>
            <MyIcons devIconName={element} />
            <h3>{element}</h3>
          </div>
        ))}
        {Object.keys(iconNames.builtInIcons).map((element) => (
          <div>
            <MyIcons builtInIconName={element} />
            <h3>{element}</h3>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Container fluid className={styles["container"]}>
      <Col className={styles["icons"]} key="1">
        <Card />
        {/* Agile, sql, cypress, postman, TDD, aws s3
        Asana, Monday.com, Notion */}
      </Col>
    </Container>
  );
}
