import { Icon } from "@iconify/react";
import React, { useState, useRef } from "react";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar({ onClick }) {
  const handleNavClick = () => {
    scrollToDiv();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="nav">
      <img
        src="../../src/assets/Henrique.png"
        alt=""
        className={`${isOpen ? "nav-open" : ""}`}
      />

      <button onClick={onClick}>
        <Icon icon="ic:baseline-menu" />
      </button>
      <Sidebar isOpen={isOpen} />
      <div className="options">
        <a href="" className="">
          Início
        </a>
        <a href="" onClick={handleNavClick}>
          Sobre mim
        </a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </div>
    </header>
  );
}
