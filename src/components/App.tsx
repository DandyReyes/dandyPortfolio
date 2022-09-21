import React from "react";
import NavigationBar from "./Nav/Nav";
import Name from "./Name/Name";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import MailForm from "./MailForm/MailForm";
import "./scss/App.scss";
import { ThemeProvider } from "react-bootstrap";

export default function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <NavigationBar />
      <Name />
      <About />
      <Skills />
      <Projects />
      <MailForm />
    </ThemeProvider>
  );
}
