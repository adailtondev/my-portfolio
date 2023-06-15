import "./MainSec.css";
import { Icon } from "@iconify/react";
import Typewriter from 'typewriter-effect';

export default function MainSec() {
  return (
    <main className="main-section min-vh-100">
      <section className="intro">
        <Typewriter
          sentences={["Oi, eu sou <span>Adailton Henrique!</span>"]}
          loop
        />

        <p className="animate__animated animate__backInUp">
          <span
            style={{ color: "#77037B", fontSize: "2rem", fontWeight: "700" }}
          >
            Desenvolvedor Front-End,
          </span>
          <span style={{ color: "#FFD93D", fontSize: "1.5rem" }}>
            {" "}
            em busca de oportunidades na área.
          </span>
        </p>
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
