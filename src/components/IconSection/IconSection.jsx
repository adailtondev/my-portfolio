import { Icon } from "@iconify/react";
import "./IconSection.css";
import { Tooltip } from "react-tooltip";
import { useState, useEffect } from "react";

export default function IconSection(props) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };
  return (
    <section className={`icon-section ${props.flex}`}>
      <div className="icons">
        <a
          className="my-anchor-element"
          target="_blank"
          href="https://www.linkedin.com/in/adailtonhdev/"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-tooltip-content="https://www.linkedin.com/in/adailtonhdev/"
        >
          <Icon icon="teenyicons:linkedin-solid" color={`${props.color}`} />
        </a>
      </div>
      <div className="icons">
        <a
          href="https://github.com/adailtondev"
          target="_blank"
          className="my-anchor-element"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-tooltip-content="https://github.com/adailtondev"
        >
          <Icon icon="teenyicons:github-solid" color={`${props.color}`} />
        </a>
      </div>
      <div className="icons">
        <a
          href="https://wa.me/5587996488881"
          target="_blank"
          className="my-anchor-element"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-tooltip-content="(87) 9-9648-8881"
        >
          <Icon icon="ic:baseline-whatsapp" color={`${props.color}`} />
        </a>
      </div>
      <div className="icons">
        <a
          href="mailto:adailtonh.dev@gmail.com"
          target="_blank"
          className="my-anchor-element"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-tooltip-content="adailtonh.dev@gmail.com"
        >
          <Icon icon="mdi:email" color={`${props.color}`} />
        </a>
      </div>
      <Tooltip
        place="right"
        effect="solid"
        type="info"
        anchorSelect=".my-anchor-element"
      />
    </section>
  );
}
