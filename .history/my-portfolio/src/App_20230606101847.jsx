import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <main className="main-section">
        <img src="../src/assets/1663006366205.jfif" alt="" />
      </main>
    </div>
  );
}

export default App;
