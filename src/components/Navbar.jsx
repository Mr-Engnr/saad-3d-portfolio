import { site } from "../site";
import { Arrow } from "./Shared";

function NavigationLinks() {
  return ["Work", "Experience", "About", "Contact"].map((label) => (
    <a key={label} href={`#${label.toLowerCase()}`}>
      {label}
    </a>
  ));
}
export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <a className="wordmark" href="#top">
          saad safdar<span aria-hidden="true">.</span>
        </a>
        <div className="nav-actions">
          <div className="nav-links desktop-navigation">
            <NavigationLinks />
          </div>
          <a
            className="button button-small"
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View resume PDF (opens in a new tab)"
          >
            Resume
            <Arrow />
          </a>
          <details className="mobile-navigation">
            <summary className="menu-button" aria-label="Navigation menu">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M4 8h16M4 16h16" />
              </svg>
            </summary>
            <div className="nav-links">
              <NavigationLinks />
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
