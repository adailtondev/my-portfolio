import { Icon } from "@iconify/react";
import React, { useState, useRef } from "react";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import { Link, animateScroll as scroll } from 'react-scroll';

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
        <a href="" className="">
        <Link
            activeClass="active"
            to="divDeDestino"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
          </Link>Início
        </a>
        <a href="">
          Sobre mim
        </a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </ul>
    </nav>
  );
}
