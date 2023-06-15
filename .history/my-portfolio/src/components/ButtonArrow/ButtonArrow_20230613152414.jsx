import { Icon } from "@iconify/react";

export default function ButtonArrow(props) {
  return (
    <Icon
        style={{border: `1px solid ${props.color == 'white' ? 'black' : 'white'}`, borderRadius: '16px', padding: '10px'}}
      icon="mingcute:arrow-up-line"
      color={`${props.color}`}
      vFlip={`${props.bool}`}
    />
  );
}
