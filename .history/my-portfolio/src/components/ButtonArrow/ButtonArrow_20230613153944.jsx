import { Icon } from "@iconify/react";
import { Link } from "react-scroll";

export default function ButtonArrow(props) {
  return (
    <Icon
      className="button-arrow"
      width={40}
      icon="mingcute:arrow-up-line"
      color={`${props.color}`}
      vFlip={`${props.bool}`}
    />
  );
}
