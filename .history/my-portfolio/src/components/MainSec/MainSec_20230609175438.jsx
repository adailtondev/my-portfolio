import "./MainSec.css";
import { Icon } from "@iconify/react";
import Typewriter from "typewriter-effect";
import { Fade, Slide } from "react-awesome-reveal";

export default function MainSec() {
  return (
    <main className="main-section min-vh-100">
      <section className="intro">
        <Slide direction="right">
          <h1 className="titulo">
            Oi, eu sou <span>Adailton Henrique!</span>
          </h1>
        </Slide>
        <Slide direction="up">
          <p className="">
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
          </p>
        </Slide>
      </section>
      <section className="icon-section">
        <div className="icons">
          <Icon icon="teenyicons:linkedin-solid" color="white" />
        </div>
        <div className="icons">
          <Icon icon="teenyicons:github-solid" color="white" />
        </div>
        <div className="icons">
          <Icon icon="teenyicons:instagram-solid" color="white" />
        </div>
        <div className="icons">
          <Icon icon="mdi:email" color="white" />
        </div>
      </section>
    </main>
  );
}
