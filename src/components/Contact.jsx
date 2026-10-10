import { site } from "../site";
import { Arrow, SocialLinks } from "./Shared";
export default function Contact() {
  return (
    <section
      className="section container contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">06 / Let's talk</p>
      <h2 id="contact-title">
        Let’s build
        <br /> something useful.
      </h2>
      <div className="contact-bottom">
        <div>
          <p>Tell me what you're working on.</p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
            <Arrow />
          </a>
          <div className="contact-ctas">
            <a
              className="button button-primary"
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a project discussion call (opens in a new tab)"
            >
              Book a project call
              <Arrow />
            </a>
          </div>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
}
