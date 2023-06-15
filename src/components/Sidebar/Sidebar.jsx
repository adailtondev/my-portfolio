import "./Sidebar.css";
import { Link } from "react-scroll";

export default function Sidebar({ isOpen }) {
  return (
    <ul className={`sidebar ${isOpen ? "open" : ""}`}>
      <li>
        <a href="" className={`logo`}>
          <span className="logo-chaves">{`{ `}</span>
          <span className="logo-nome">Henrique</span>
          <span className="logo-chaves">{` }`}</span>
        </a>
      </li>
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
  );
}
