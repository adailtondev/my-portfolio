import Carousel from "react-bootstrap/Carousel";
import "./Projects.css";
import { Bounce, Zoom } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";

export default function Projects() {
  return (
    <section id="divProjetos" className="project-section min-vh-100 divProjetos">
      <h1>
        <Zoom>Alguns dos meus projetos:</Zoom>
      </h1>
      <div className="carrossel">
        <Carousel>
          <Carousel.Item className="carrossel-img">
            <div className="bg-carrossel">
              <img
                className="d-block w-100 aa"
                src="../../src/assets/starwarsproject.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Star Wars API project</h3>
                <p>
                  backend feito em node e frontend em React + Tailwind. Foi
                  feita a criação e manipulação de API.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carrossel-img">
            <img
              className="d-block w-100"
              src="../../src/assets/nlwsetup.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Habits</h3>
              <p>
                Aplicativo montado para se criar uma rotina diária com
                atividades que o usuário escolher.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Link to={'divHome'} smooth={true} duration={500}>
        <Icon
          className="button-project"
          width={40}
          icon="mingcute:arrow-up-line"
          color={'white'}
        />
      </Link>
    </section>
  );
}
