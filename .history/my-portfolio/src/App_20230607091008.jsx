import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "animate.css";
import Teste from "./components/Teste/Teste";

function App() {
  return (
    <div>
      <Navbar />
      <section className="main-section min-vh-100">
        <img src="../src/assets/1663006366205.jfif" alt="" />
        <div>
          <h1 className="titulo animate__animated animate__backInRight">
            Oi, eu sou <span>Adailton Henrique!</span>
          </h1>
          <p className="animate__animated animate__backInUp">
            <span
              style={{ color: "#FFAF65", fontSize: "2rem", fontWeight: "700" }}
            >
              Desenvolvedor Front-End,
            </span>
            <span style={{ color: "#CA5FA6", fontSize: "1.5rem" }}>
              {" "}
              em busca de oportunidades na área.
            </span>
          </p>
        </div>
      </section>
      <section className="main-section section-2 min-vh-100">
        <img src="../src/assets/1663006366205.jfif" alt="" />
        <div>
          <h1 className="titulo animate__animated animate__backInRight">
            Oi, eu sou <span>Adailton Henrique!</span>
          </h1>
          <p className="animate__animated animate__backInUp">
            <span
              style={{ color: "#FFF", fontSize: "2rem", fontWeight: "700" }}
            >
              Desenvolvedor Front-End,
            </span>
            <span style={{ color: "#CA5FA6", fontSize: "1.5rem" }}>
              {" "}
              em busca de oportunidades na área.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
