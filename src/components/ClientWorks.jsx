import { clientProjects } from "../constants";
import { asset } from "../site";
import { ExternalLink, SectionHeading } from "./Shared";
export default function ClientWorks() {
  return (
    <section
      className="section container client-section"
      id="work"
      aria-labelledby="client-title"
    >
      <span id="client-work" className="anchor-alias" />
      <SectionHeading
        number="01"
        title="Selected Client Work"
        id="client-title"
      >
        Web experiences built and shipped for real businesses across AI,
        fintech, and digital media.
      </SectionHeading>
      <div className="client-list">
        {clientProjects.map((project, index) => (
          <article className="client-project" key={project.name}>
            <div className="client-copy">
              <p className="eyebrow">
                <span className="project-number">0{index + 1}</span> Client
                project
              </p>
              <h3>{project.name}</h3>
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
            <a
              className={`client-preview preview-${project.slug}`}
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
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1239px) 55vw, 722px"
                width="1280"
                height="900"
                alt={`${project.name} website homepage`}
                loading="lazy"
                decoding="async"
              />
            </a>
          </article>
        ))}
      </div>
      <p>
        <a className="text-link" href="mailto:ranasaad727@gmail.com">
          Don’t see your business? Talk to us.
        </a>
      </p>
    </section>
  );
}
