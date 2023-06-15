import "./AboutMe.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const element = elementRef.current;
        const position = element.getBoundingClientRect();

        // Mostrar o elemento quando ele estiver visível
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div id="meuElemento">
          <section className="about-me min-vh-100">
            <div className="about-img">
              <img src="../../src/assets/1663006366205.jfif" alt="" />
            </div>
            <div className="about-txt">
              <h2>Um pouco sobre mim</h2>
              <p>
                Iniciei meus estudos em programação há aproximadamente um ano,
                inicialmente como um hobby para me distrair. Com o passar do
                tempo, essa atividade despertou uma paixão em mim, o que me
                levou a considerar uma{" "}
                <span
                  style={{ fontWeight: "700", textDecoration: "underline" }}
                >
                  carreira na área de tecnologia.
                </span>
              </p>
              <p>
                Comecei a estudar Python, mas acabei me encantando pelo
                JavaScript. Atualmente, estou direcionando a maior parte dos
                meus estudos para
                <span style={{ fontWeight: "700 " }}> React e TypeScript</span>,
                enquanto também revisito conceitos mais básicos para solidificar
                meu conhecimento.
              </p>
              <p>
                Embora esteja focado em React,{" "}
                <span
                  style={{ fontWeight: "700", textDecoration: "underline" }}
                >
                  estou totalmente aberto a aprender novas tecnologias.
                </span>{" "}
                Estou ansioso para expandir meu conjunto de habilidades e
                acompanhar as tendências do setor, sempre em busca de
                oportunidades que me permitam continuar crescendo como
                desenvolvedor.
              </p>
              <p>Aqui estão alguma das tecnologias que eu trabalho:</p>
              <div className="about-tech">
                <div className="techs">
                  <Icon icon="logos:html-5" />
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
        </div>
      )}
    </div>
  );
}
