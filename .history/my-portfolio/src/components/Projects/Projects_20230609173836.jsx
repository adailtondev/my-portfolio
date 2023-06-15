import Carousel from "react-bootstrap/Carousel";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="project-section min-vh-100">
      <h1>Alguns dos meus projetos: </h1>
      <div>
        <Carousel>
          <Carousel.Item>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
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
              </Carousel.Item>
            </Carousel>
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../src/assets/starwarsproject.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
