import { Icon } from "@iconify/react";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log('abriu')
  };
  return (
    <header className="nav">
      <img src="../../src/assets/Henrique.png" alt="" />

      <button onClick={() => toggleSidebar}>
        <Icon icon="ic:baseline-menu" />
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <a href="" className="">
          Início
        </a>
        <a href="">Sobre mim</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
        <button onClick={toggleSidebar}>Fechar Sidebar</button>
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
