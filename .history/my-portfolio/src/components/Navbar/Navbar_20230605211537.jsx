import { Icon } from "@iconify/react";
import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="nav">
      <img src="../../src/assets/Henrique.png" alt="" />

      <button onClick={() => toggleSidebar}>
        <Icon icon="ic:baseline-menu" />
      </button>
      <div className={`sidebar bg-primary ${isOpen ? 'close' : ''}`}>
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
