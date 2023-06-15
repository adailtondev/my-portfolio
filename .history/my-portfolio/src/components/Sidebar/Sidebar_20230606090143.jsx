import "./Sidebar.css";

export default function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <img src="../../src/assets/Henrique.png" alt="" />
      <div className="flex-column">
      <a href="" className="">
        Início
      </a>
      <a href="">Sobre mim</a>
      <a href="">Projetos</a>
      <a href="">Contato</a>
      </div>
    </div>
  );
}
