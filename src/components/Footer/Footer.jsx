import IconSection from "../IconSection/IconSection";
import "./Footer.css";

export default function Footer() {
  return (
    <div id="divContato" className="footer">
      <h2>Entre em contato comigo!</h2>
      <div className="">
        <IconSection flex={"flex-row"} color={"black"} />
      </div>
    </div>
  );
}
