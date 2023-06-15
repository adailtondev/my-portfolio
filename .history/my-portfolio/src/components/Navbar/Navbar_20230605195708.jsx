import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header className="nav">
      <img src="../../src/assets/Henrique.png" alt="" />

      <button>
        <Icon icon="ic:baseline-menu" />
      </button>
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
