import { Icon } from "@iconify/react";

export default function ButtonArrow(props) {
  return (
    <Icon
    fontSize={'16px'}
      icon="mingcute:arrow-up-line"
      color={`${props.color}`}
      vFlip={`${props.bool}`}
    />
  );
}
