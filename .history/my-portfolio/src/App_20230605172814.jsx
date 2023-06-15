import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <h1>Oi, meu nome é Adailton!</h1>
      <div className="cont">
        <h2>MACARRONADA</h2>
      </div>
    </div>
  );
}

export default App;
