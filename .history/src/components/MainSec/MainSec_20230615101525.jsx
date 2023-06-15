import "./MainSec.css";
import { Slide } from "react-awesome-reveal";
import IconSection from "../IconSection/IconSection";
import Typewriter from "typewriter-effect";

export default function MainSec() {
  return (
    <main id="divHome" className="main-section min-vh-100 position-relative">
      <section className="intro">
        <Slide direction="right">
          <h1 className="titulo">
            Oi, eu sou <span>Adailton Henrique!</span>
          </h1>
        </Slide>
        <Slide direction="up">
          <span
            style={{ color: "#77037B", fontSize: "1.8rem", fontWeight: "700" }}
          >
            <Typewriter
              options={{
                strings: ["Desenvolvedor Front-End,", "Entusiasta da tecnologia,"],
                autoStart: true,
                loop: true,
              }}
            />
            
          </span>
          <span style={{ color: "#f5efe7", fontSize: "1.5rem" }}>
            {" "}
            em busca de oportunidades na área.
          </span>
        </Slide>
      </section>
      <IconSection flex={"flex-column"} color={"white"} />
    </main>
  );
}
