import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "animate.css";
import Teste from "./components/Teste/Teste";
import MainSec from "./components/MainSec/MainSec";

function App() {
  return (
    <div className="min-vh-100">
      <Navbar />
      <MainSec />
    </div>
  );
}

export default App;
