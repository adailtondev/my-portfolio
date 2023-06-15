import { Icon } from "@iconify/react";
import React, { useState, useRef } from "react";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav">
      <img
        src="../../src/assets/Henrique.png"
        alt=""
        className={`${isOpen ? "nav-open" : ""}`}
      />

      <button onClick={toggleSidebar}>
        <Icon icon="ic:baseline-menu" />
      </button>
      <Sidebar isOpen={isOpen} />
      <ul className="options">
        <li>
          <Link to="divDeDestino" smooth={true} duration={500}>Início</Link>
        </li>
        <li><Link to="divSobreMim" smooth={flase} duration={500}>Sobre mim</Link></li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
}
