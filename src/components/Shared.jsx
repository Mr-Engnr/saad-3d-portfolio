import { site } from "../site";

export function Arrow({ diagonal = true }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={diagonal ? "M7 17 17 7M7 7h10v10" : "M4 12h16m-6-6 6 6-6 6"} />
    </svg>
  );
}
export function ExternalLink({ href, children, className = "", label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-link ${className}`}
      aria-label={`${label || (typeof children === "string" ? children : "Visit website")} (opens in a new tab)`}
    >
      {children}
      <Arrow />
    </a>
  );
}
export function SocialLinks({ resume = false }) {
  return (
    <div className="social-links">
      <ExternalLink href={site.github}>GitHub</ExternalLink>
      {site.linkedin && (
        <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
      )}
      {site.fiverr && <ExternalLink href={site.fiverr}>Fiverr</ExternalLink>}
      {resume && <ExternalLink href={site.resume}>Resume</ExternalLink>}
    </div>
  );
}
export function SectionHeading({ number, title, children, id }) {
  return (
    <header className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> / {title}
      </p>
      <h2 id={id}>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </header>
  );
}
