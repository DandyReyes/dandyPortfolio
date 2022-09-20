import React from "react";
import NavigationBar from "./Nav/Nav";
import Name from "./Name/Name";
import Title from "./Title/Title";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import MailForm from "./MailForm/MailForm";
import "./scss/App.scss";

export default function App() {
  return (
    <>
      <NavigationBar />
      <Name />
      <Title />
      <About />
      <Skills />
      <Projects />
      <MailForm />
    </>
  );
}
