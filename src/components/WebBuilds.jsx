import { clientProjects } from "../constants";
import { site } from "../site";
import { BrowserPreview, ExternalLink, SectionHeading } from "./Shared";

// 05 / Web builds: client websites, collapsed by default. Native <details>, so
// it works in the static production build without JavaScript; the
// #client-work deep link opens it (src/navigation.js).
export default function WebBuilds() {
  return (
    <section
      className="section container web-builds"
      id="client-work"
      aria-labelledby="web-builds-title"
    >
      <SectionHeading number="05" title="Web builds" id="web-builds-title">
        {clientProjects.length} client websites:{" "}
        {clientProjects.map((project) => project.name).join(", ")}.
      </SectionHeading>
      <details className="web-builds-details">
        <summary>
          <span className="label-closed">Show web builds</span>
          <span className="label-open">Hide web builds</span>
          <svg
            className="web-builds-chevron"
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
            <path d="M6 9l6 6 6-6" />
          </svg>
        </summary>
        <div className="client-list">
          {clientProjects.map((project, index) => (
            <article className="client-project" key={project.name}>
              <div className="client-copy">
                <p className="eyebrow">
                  <span className="project-number">0{index + 1}</span> Client
                  website
                </p>
                <h3 className="client-name">{project.name}</h3>
                <p className="category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <p className="client-contribution">
                  <span>My contribution</span>
                  {project.contribution}
                </p>
                <ExternalLink
                  href={project.url}
                  label={`Visit Live Site: ${project.name}`}
                >
                  Visit Live Site
                </ExternalLink>
              </div>
              <BrowserPreview
                project={project}
                className={`preview-${project.slug}`}
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1239px) 55vw, 722px"
              />
            </article>
          ))}
        </div>
        <p className="web-builds-cta">
          <a className="text-link" href={`mailto:${site.email}`}>
            Don’t see your business? Talk to us.
          </a>
        </p>
      </details>
    </section>
  );
}
