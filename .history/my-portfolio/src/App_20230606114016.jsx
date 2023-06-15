import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <main className="main-section">
        <img src="../src/assets/1663006366205.jfif" alt="" />
        <div>
          <h1 className="brilho">Eu sou Adailton Henrique!</h1>
          <p>
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
    </div>
  );
}

export default App;
