import "./MainSec.css";
import Typewriter from "typewriter-effect";
import { Fade, Slide } from "react-awesome-reveal";
import IconSection from "../IconSection/IconSection";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";

export default function MainSec() {
  return (
    <main id="divHome" className="main-section min-vh-100 position-relative">
      <Link to={'divSobre'} smooth={true} duration={500}>
        <Icon
          className="button-arrow"
          width={40}
          icon="mingcute:arrow-up-line"
          color={'white'}
          vFlip={'true'}
        />
      </Link>
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
