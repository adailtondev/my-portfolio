import { Icon } from '@iconify/react';

export default function Header() {
  return (
    <header className="nav d-flex">
      <div>
        <img src="../../src/assets/Henrique.png" alt="" />
      </div>
      <button><Icon icon="ic:baseline-menu" /></button>
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
