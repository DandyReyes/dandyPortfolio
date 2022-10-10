import React from "react";
import NavigationBar from "./Nav/Nav";
import Name from "./Name/Name";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Calendly from "./Calendar/Calendly";
import { ThemeProvider } from "react-bootstrap";

export function MyApp() {
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
      <Calendly />
    </ThemeProvider>
  );
}
