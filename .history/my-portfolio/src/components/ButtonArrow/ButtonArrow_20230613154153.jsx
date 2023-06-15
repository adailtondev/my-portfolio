import { Icon } from "@iconify/react";
import { Link } from "react-scroll";

export default function ButtonArrow(props) {
  return (
    <Link to={`${props.destine}`} smooth={true} duration={500}>
      <Icon
        className="button-arrow"
        width={40}
        icon="mingcute:arrow-up-line"
        color={`${props.color}`}
        vFlip={`${props.bool}`}
      />
    </Link>
  );
}
