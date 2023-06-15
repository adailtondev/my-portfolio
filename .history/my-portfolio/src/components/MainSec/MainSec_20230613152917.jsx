import "./MainSec.css";
import Typewriter from "typewriter-effect";
import { Fade, Slide } from "react-awesome-reveal";
import IconSection from "../IconSection/IconSection";
import ButtonArrow from "../ButtonArrow/ButtonArrow";

export default function MainSec() {
  return (
    <main className="main-section min-vh-100">
      <ButtonArrow color={'white'} bool={true}/>
      <section className="intro">
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
            style={{fontSize: '3rem'}}
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
