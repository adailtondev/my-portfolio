import { Icon } from "@iconify/react";

export default function ButtonArrow(props) {
  return (
    <Icon
      icon="mingcute:arrow-up-line"
      color={`${props.color}`}
      vFlip={`${props.bool}`}
    />
  );
}
