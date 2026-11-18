import { Arrow } from "./Shared";
import { reviewSummary } from "../constants";
import { site, asset } from "../site";

// Centred hero: eyebrow, headline, subline, CTA row, trust line. Kept short so
// the flagship title and the top of its laptop show in the first screen at
// 1440x900 and 1366x768. The soft glow behind the headline is the page's only
// gradient (.hero::before).
export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <p className="eyebrow hero-eyebrow">
          Computer engineer <span aria-hidden="true">·</span> AI & Automation
        </p>
        <h1 id="hero-title">
          I build AI systems that run <span>real businesses.</span>
        </h1>
        <p className="hero-description">
          From crew portals to live building monitoring, I design, build and
          ship the whole system.
        </p>
        <div className="hero-ctas">
          <a className="button button-primary" href="#black-rock-electric">
            View case study
            <Arrow diagonal={false} />
          </a>
          <a
            className="hero-text-link"
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View resume PDF (opens in a new tab)"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="hero-trust">
          <a className="hero-proof" href="#reviews">
            <img
              className="hero-portrait"
              src={asset("images/portrait-320.webp")}
              width="320"
              height="320"
              alt=""
              decoding="async"
            />
            {reviewSummary.average} from {reviewSummary.count}{" "}
            {reviewSummary.platform} reviews
          </a>
          <span className="hero-trust-dot" aria-hidden="true">
            ·
          </span>
          <a href="#contact">Also coaching founders on Claude Code</a>
        </p>
      </div>
    </section>
  );
}
