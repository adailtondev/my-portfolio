import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <header className="nav d-flex">
      <div>
        <img src="../../src/assets/Henrique.png" alt="" />
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
