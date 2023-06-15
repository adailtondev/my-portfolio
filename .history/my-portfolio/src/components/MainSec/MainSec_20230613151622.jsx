import "./MainSec.css";
import Typewriter from "typewriter-effect";
import { Fade, Slide } from "react-awesome-reveal";
import IconSection from "../IconSection/IconSection";

export default function MainSec() {
  return (
    <main className="main-section min-vh-100">
      <section className="intro">
        <button>
          <Icon icon="mingcute:arrow-up-line" />
        </button>
        <Slide direction="right">
          <h1 className="titulo">
            Oi, eu sou <span>Adailton Henrique!</span>
          </h1>
        </Slide>
        <Slide direction="up">
          <span
            style={{ color: "#77037B", fontSize: "2rem", fontWeight: "700" }}
          >
            <Typewriter
              options={{
                strings: [
                  "Desenvolvedor Front-End,",
                  "Entusiasta da tecnologia,",
                ],
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
