import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "animate.css";
import Navbar from "./components/Navbar/Navbar";
import MainSec from "./components/MainSec/MainSec";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div>
      <Navbar />
      <MainSec />
      <AboutMe />
    </div>
  );
}

export default App;
