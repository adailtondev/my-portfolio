import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "animate.css";

// function BasicExample() {
//   const handleClickScroll = () => {
//     const element = document.getElementById('section-1');
//     if (element) {
//       // 👇 Will scroll smoothly to the top of the next section
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };}

function App() {
  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div>
      <Navbar />
      <button onClick={() => handleClickScroll}></button>
      <main className="main-section min-vh-100">
        <img src="../src/assets/1663006366205.jfif" alt="" />
        <div>
          <h1 className="titulo animate__animated animate__backInRight">
            Eu sou <span>Adailton Henrique!</span>
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
      </main>
      <main id="section-1" className="section-1 min-vh-100">aaaaaaaaaaaaaaaaaa</main>
    </div>
  );
}

export default App;
