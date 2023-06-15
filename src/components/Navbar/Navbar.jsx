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
        src={"/public/assets/Henrique.png"}
        alt=""
        className={`${isOpen ? "nav-open" : ""}`}
      />

      <button onClick={toggleSidebar}>
        <Icon icon="ic:baseline-menu" />
      </button>
      <Sidebar isOpen={isOpen} />
      <ul className="options">
        <li>
          <Link to="divHome" smooth={true} duration={500}>Início</Link>
        </li>
        <li><Link to="divSobreMim" smooth={false} duration={700}>Sobre mim</Link></li>
        <li><Link to="divProjetos" smooth={false} duration={700}>Projetos</Link></li>
        <li><Link to="divContato" smooth={false} duration={700}>Contato</Link></li>
      </ul>
    </nav>
  );
}
