import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "animate.css";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="main-section">
        <img src="../src/assets/1663006366205.jfif" alt="" />
        <div>
          <h1 className="titulo animate__animated animate__backInRight">
            Eu sou Adailton Henrique!
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
      {isVisible && (
        <div className="div-escondida">
          aaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaa
          aaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
        </div>
      )}
    </div>
  );
}

export default App;
