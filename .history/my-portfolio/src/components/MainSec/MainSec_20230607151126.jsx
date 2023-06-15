import './MainSec.css'
import { Icon } from '@iconify/react';

export default function MainSec() {
  return (
    <main className="main-section min-vh-100">
      <section>
        <h1 className="titulo animate__animated animate__backInRight">
          Oi, eu sou <span>Adailton Henrique!</span>
        </h1>
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
      <section>
        <div><Icon icon="teenyicons:linkedin-solid" color="white" /></div>
      </section>
    </main>
  );
}
