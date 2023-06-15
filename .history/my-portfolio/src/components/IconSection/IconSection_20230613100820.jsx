export default function IconSection() {
  return (
    <section className="icon-section">
      <div className="icons">
        <Icon icon="teenyicons:linkedin-solid" color="white" />
      </div>
      <div className="icons">
        <Icon icon="teenyicons:github-solid" color="white" />
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
