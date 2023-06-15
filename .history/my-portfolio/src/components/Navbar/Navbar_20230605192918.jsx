import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle'

export default function Header() {
  return (
    <header className="nav d-flex">
      <div>
        <img src="../../src/assets/Henrique.png" alt="" />
      </div>
      <NavbarToggle aria-controls="basic-navbar-nav" className='toggle'/>
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
