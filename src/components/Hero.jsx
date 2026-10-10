import { Arrow, SocialLinks } from "./Shared";
import { reviewSummary } from "../constants";
import { site, asset } from "../site";
export default function Hero() {
  return (
    <section className="hero container" id="top" aria-labelledby="hero-title">
      <p className="eyebrow hero-eyebrow">
        Computer engineer <span aria-hidden="true">·</span> AI & Automation
      </p>
      <h1 id="hero-title">
        I build AI agents
        <br /> and teach you to <span>ship your own.</span>
      </h1>
      <div className="hero-bottom">
        <div>
          <p className="hero-description">
            I'm Saad Safdar, an AI & Automation Engineer. I build AI agents,
            automated workflows, and web apps for clients, and I coach founders
            through building their own with Claude Code.
          </p>
          <div className="hero-ctas">
            <a className="button button-primary" href="#work">
              View my work
              <Arrow diagonal={false} />
            </a>
            <a
              className="button button-quiet"
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a call (opens in a new tab)"
            >
              Book a call
              <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <a className="hero-proof" href="#reviews">
            <img
              className="hero-portrait"
              src={asset("images/portrait-320.webp")}
              width="320"
              height="320"
              alt=""
              decoding="async"
            />
            <span>
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              {reviewSummary.average} average across {reviewSummary.count}{" "}
              {reviewSummary.platform} reviews
            </span>
          </a>
          <SocialLinks resume />
        </div>
      </div>
    </section>
  );
}
