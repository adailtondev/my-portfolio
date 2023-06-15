import { Icon } from "@iconify/react";
import React, { useState } from "react";
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("abriu");
  };
  return (
    <header className="nav">
      <img src="../../src/assets/Henrique.png" alt="" className={`${isOpen ? 'nav-open' : ''}`}/>

      <button onClick={toggleSidebar}>
        <Icon icon="ic:baseline-menu" />
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <a href="" className="">
          Início
        </a>
        <a href="">Sobre mim</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </div>
      <div className="options">
        <a href="" className="">
          Início
        </a>
        <a href="">Sobre mim</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </div>
    </header>
  );
}
