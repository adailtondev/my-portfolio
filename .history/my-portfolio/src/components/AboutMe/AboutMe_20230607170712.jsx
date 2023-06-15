import "./AboutMe.css";

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
      </div>
    </section>
  );
}
