import { Icon } from "@iconify/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="nav">
      <img src="../../src/assets/Henrique.png" alt="" />

      <button>
        <Icon icon="ic:baseline-menu" />
      </button>
      <div className="sidebar">
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
