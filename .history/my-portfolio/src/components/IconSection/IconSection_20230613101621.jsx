import { Icon } from "@iconify/react";

export default function IconSection() {
  return (
    <section className="icon-section">
      <div className="icons">
        <a href="https://www.linkedin.com/in/adailtonhdev/">
          <Icon icon="teenyicons:linkedin-solid" color="white" />
        </a>
      </div>
      <div className="icons">
        <a href="https://github.com/adailtondev">
          <Icon icon="teenyicons:github-solid" color="white" />
        </a>
      </div>
      <div className="icons">
        <Icon icon="teenyicons:instagram-solid" color="white" />
      </div>
      <div className="icons">
        <a href="mailto:adailtonh.dev@gmail.com">
          <Icon icon="mdi:email" color="white" />
        </a>
      </div>
    </section>
  );
}
