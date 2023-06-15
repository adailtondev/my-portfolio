import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div class="carousel-item active">
          <img className="d-block w-100" src="..." alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Third slide" />
        </div>
      </div>
    </div>
  );
}

export default App;
