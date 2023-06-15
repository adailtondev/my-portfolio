import "./MainSec.css";
import { Slide } from "react-awesome-reveal";
import IconSection from "../IconSection/IconSection";
import { Typewriter } from 'react-simple-typewriter'

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
            words={['Desenvolvedor Front-End,', 'Entusiasta da tecnologia,']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
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
