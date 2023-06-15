import { Icon } from "@iconify/react";
import './IconSection.css'

export default function IconSection(props) {

  return (
    <section className={`icon-section ${props.flex}`}>
      <div className="icons">
        <a href="https://www.linkedin.com/in/adailtonhdev/">
          <Icon icon="teenyicons:linkedin-solid" color={`${props.color}`} />
        </a>
      </div>
      <div className="icons">
        <a href="https://github.com/adailtondev">
          <Icon icon="teenyicons:github-solid" color={`${props.color}`} />
        </a>
      </div>
      <div className="icons">
        <Icon icon="teenyicons:instagram-solid" color={`${props.color}`} />
      </div>
      <div className="icons">
        <a href="mailto:adailtonh.dev@gmail.com">
          <Icon icon="mdi:email" color={`${props.color}`} />
        </a>
      </div>
    </section>
  );
}
