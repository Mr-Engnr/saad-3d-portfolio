import { site, asset } from "../site";

// Screenshot of a live site in a browser-chrome frame. Expects the
// public/images/<slug>-640|800|1280.webp set (1280×900).
export function BrowserPreview({ project, sizes, className = "" }) {
  return (
    <a
      className={`client-preview ${className}`}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.domain}: visit ${project.name} (opens in a new tab)`}
    >
      <div className="preview-caption">
        <span>{project.domain}</span>
        <span aria-hidden="true">↗</span>
      </div>
      <img
        src={asset(`images/${project.slug}-1280.webp`)}
        srcSet={`${asset(`images/${project.slug}-640.webp`)} 640w, ${asset(`images/${project.slug}-800.webp`)} 800w, ${asset(`images/${project.slug}-1280.webp`)} 1280w`}
        sizes={sizes}
        width="1280"
        height="900"
        alt={`${project.name} website homepage`}
        loading="lazy"
        decoding="async"
      />
    </a>
  );
}

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
