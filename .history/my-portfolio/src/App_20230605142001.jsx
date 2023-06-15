import { useState } from "react";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
