import "./Sidebar.css";

export default function Sidebar({ isOpen }) {
  return (
    <ul className={`sidebar ${isOpen ? "open" : ""}`}>
      <li><img src="../../src/assets/Henrique.png" alt="" /></li>

      <li href="" className="">
        Início
      </li>
      <li href="">Sobre mim</li>
      <li href="">Projetos</li>
      <li href="">Contato</li>
    </ul>
  );
}
