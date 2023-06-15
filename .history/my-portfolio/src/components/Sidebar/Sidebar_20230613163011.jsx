import "./Sidebar.css";
import { Link } from "react-scroll";

export default function Sidebar({ isOpen }) {
  return (
    <div className="div-sidebar">
      <img src="../../src/assets/Henrique.png" alt="" />

      <ul className={`sidebar ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="divHome" smooth={true} duration={500}>
            Início
          </Link>
        </li>
        <li>
          <Link to="divSobreMim" smooth={false} duration={700}>
            Sobre mim
          </Link>
        </li>
        <li>
          <Link to="divProjetos" smooth={false} duration={700}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to="divContato" smooth={false} duration={700}>
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}
