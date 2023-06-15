export default function Sidebar (isOpen) {
    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <a href="" className="">
          Início
        </a>
        <a href="">Sobre mim</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </div>
    )
}