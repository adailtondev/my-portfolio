import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Navbar from "./components/Navbar/Navbar";
import MainSec from "./components/MainSec/MainSec";
import AboutMe from "./components/AboutMe/AboutMe";
import { Fade, Slide } from "react-awesome-reveal";

function App() {
  return (
    <>
      <Navbar />
      <MainSec />
      <section>
        <AboutMe />
      </section>
      <Fade>
        <AboutMe />
      </Fade>
      <Slide delay={3}>
        <AboutMe />
      </Slide>
      <section>
        <AboutMe />
      </section>
    </>
  );
}

export default App;
