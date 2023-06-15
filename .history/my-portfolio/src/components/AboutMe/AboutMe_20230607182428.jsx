import "./AboutMe.css";
import { Icon } from "@iconify/react";

export default function AboutMe() {
  return (
    <section className="about-me min-vh-100">
      <div className="about-img">
        <img src="../../src/assets/1663006366205.jfif" alt="" />
      </div>
      <div className="about-txt">
        <h2>Um pouco sobre mim</h2>
        <p>
          Iniciei meus estudos em programação há aproximadamente um ano,
          inicialmente como um hobby para me distrair. Com o passar do tempo,
          essa atividade despertou uma paixão em mim, o que me levou a
          considerar uma carreira na área de tecnologia.
        </p>
        <p>
          Comecei a estudar Python, mas acabei me encantando pelo JavaScript.
          Atualmente, estou direcionando a maior parte dos meus estudos para
          React e TypeScript, enquanto também revisito conceitos mais básicos
          para solidificar meu conhecimento.
        </p>
        <p>
          Embora esteja focado em React, estou totalmente aberto a aprender
          novas tecnologias. Estou ansioso para expandir meu conjunto de
          habilidades e acompanhar as tendências do setor, sempre em busca de
          oportunidades que me permitam continuar crescendo como desenvolvedor.
        </p>
        <p>Aqui estão alguma das tecnologias que eu trabalho:</p>
        <div className="about-tech">
          <div className="techs">
            <Icon icon="logos:html-5"/>
            <h5>HTML</h5>
          </div>
          <div className="techs">
            <Icon icon="logos:css-3" />
            <h5>CSS</h5>
          </div>
          <div className="techs">
            <Icon icon="logos:javascript" />
            <h5>JAVASCRIPT</h5>
          </div>
          <div className="techs">
            <Icon icon="devicon:react" />
            <h5>REACT</h5>
          </div>
          <div className="techs">
            <Icon icon="vscode-icons:file-type-node" />
            <h5>NODE</h5>
          </div>
          <div className="techs">
            <Icon icon="devicon:typescript" />
            <h5>TYPESCRIPT</h5>
          </div>
          <div className="techs">
            <Icon icon="skill-icons:bootstrap" />
            <h5>BOOTSTRAP</h5>
          </div>
          <div className="techs">
            <Icon icon="devicon:tailwindcss" />
            <h5>TAILWIND</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
