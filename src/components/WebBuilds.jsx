import { clientProjects } from "../constants";
import { site, asset } from "../site";
import { ExternalLink, SectionHeading } from "./Shared";

const SIZES =
  "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 56px), 380px";

function shotSrc(project, shot, width) {
  return asset(`images/web/${project.slug}-${shot.key}-${width}.webp`);
}

// One client website: a browser-frame screenshot with a two-image switch
// (CSS radio group, works without JavaScript), then the facts. Each shot opens
// in the shared lightbox (src/zoom.js). A project with `loop` plays a short
// muted video over its first shot on hover (src/hoverloop.js, desktop only).
function WebCard({ project }) {
  const group = `web-${project.slug}`;
  return (
    <article className="web-card">
      {project.shots.map((shot, index) => (
        <input
          key={shot.key}
          className={`visually-hidden web-radio web-radio-${index + 1}`}
          type="radio"
          name={group}
          id={`${group}-${shot.key}`}
          defaultChecked={index === 0}
          aria-label={`${project.name}: show the ${shot.label.toLowerCase()} screenshot`}
        />
      ))}
      <div className="web-frame">
        <p className="web-frame-bar" aria-hidden="true">
          <span>{project.domain}</span>
        </p>
        <div
          className="web-shots"
          data-hover-video={project.loop ? asset(project.loop) : undefined}
        >
          {project.shots.map((shot, index) => (
            <a
              key={shot.key}
              className={`web-shot web-shot-${index + 1} device-zoom`}
              href={shotSrc(project, shot, 1280)}
              data-zoom
              aria-label={`Enlarge screenshot: ${shot.alt}`}
            >
              <img
                src={shotSrc(project, shot, 800)}
                srcSet={`${shotSrc(project, shot, 640)} 640w, ${shotSrc(project, shot, 800)} 800w, ${shotSrc(project, shot, 1280)} 1280w`}
                sizes={SIZES}
                width="1280"
                height="800"
                alt={shot.alt}
                loading="lazy"
                decoding="async"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="web-switch" aria-hidden="true">
        {project.shots.map((shot) => (
          <label htmlFor={`${group}-${shot.key}`} key={shot.key}>
            {shot.label}
          </label>
        ))}
      </div>
      <div className="web-copy">
        <p className="category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="web-value">{project.description}</p>
        <p className="client-contribution">
          <span>My contribution</span>
          {project.contribution}
        </p>
        <ExternalLink href={project.url} label={`Visit site: ${project.name}`}>
          Visit site
        </ExternalLink>
      </div>
    </article>
  );
}

// 03 / Web builds: client websites, shown openly as three small cards.
// #client-work is kept as the section id so old links still land here.
export default function WebBuilds() {
  return (
    <section
      className="section container web-builds"
      id="client-work"
      aria-labelledby="web-builds-title"
    >
      <SectionHeading number="03" title="Web builds" id="web-builds-title">
        Three live client websites.
      </SectionHeading>
      <div className="web-grid">
        {clientProjects.map((project) => (
          <WebCard project={project} key={project.slug} />
        ))}
      </div>
      <p className="web-builds-cta">
        <a className="text-link" href={`mailto:${site.email}`}>
          Don’t see your business? Talk to us.
        </a>
      </p>
    </section>
  );
}
