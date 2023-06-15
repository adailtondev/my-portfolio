import "./AboutMe.css";
import { Icon } from '@iconify/react';

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
            <div className="techs"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clip-path="url(#akarIconsHtmlFill0)"><path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081V0Zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656V1.073ZM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058V0Zm4.181 0h1.083v2.167h1.52v1.07h-2.603V0Z"/><path fill-rule="evenodd" d="M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24l-6.944-1.928Zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571H9.183Z" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsHtmlFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg></div>
            <div className="techs"></div>
            <div className="techs"></div>
            <div className="techs"></div>
            <div className="techs"></div>
            <div className="techs"></div>
        </div>
      </div>
    </section>
  );
}
