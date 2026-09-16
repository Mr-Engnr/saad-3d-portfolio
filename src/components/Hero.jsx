import { Arrow, SocialLinks } from "./Shared";
export default function Hero() {
  return (
    <section className="hero container" id="top" aria-labelledby="hero-title">
      <p className="eyebrow hero-eyebrow">
        Computer engineer <span aria-hidden="true">·</span> AI & Automation
      </p>
      <h1 id="hero-title">
        AI systems that
        <br /> solve <span>real problems.</span>
      </h1>
      <div className="hero-bottom">
        <div>
          <p className="hero-description">
            I'm Saad Safdar, an AI & Automation Engineer building AI agents,
            intelligent workflows, machine learning systems, and data-driven
            products.
          </p>
          <div className="hero-ctas">
            <a className="button button-primary" href="#work">
              View my work
              <Arrow diagonal={false} />
            </a>
            <a className="button button-quiet" href="#contact">
              Let's talk
              <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <p>
            From a useful idea
            <br />
            to a working system.
          </p>
          <SocialLinks resume />
        </div>
      </div>
    </section>
  );
}
