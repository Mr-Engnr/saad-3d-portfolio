import { asset } from "../site";
import { ExternalLink } from "./Shared";
import ProjectDetails from "./ProjectDetails";

function Architecture({ steps, preview = false }) {
  return (
    <div
      className={preview ? "architecture architecture-preview" : "architecture"}
    >
      <p className="eyebrow">System architecture</p>
      <ol aria-label="Architecture flow">
        {steps.map((step, index) => (
          <li key={step}>
            <span>{step}</span>
            {index < steps.length - 1 && (
              <span className="flow-arrow" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default function ProjectCard({ project }) {
  const previewUrl = project.imageFull
    ? asset(`images/${project.imageFull}.webp`)
    : project.url;
  const ImageContainer = previewUrl ? "a" : "div";
  const linkProps = previewUrl
    ? {
        href: previewUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${project.imageFull ? "Open full-size screenshot:" : "Explore"} ${project.name} (opens in a new tab)`,
      }
    : {};
  return (
    <article
      className={`technical-card${project.featured ? " technical-card-featured" : ""}`}
    >
      {project.image ? (
        <ImageContainer className="technical-image" {...linkProps}>
          <img
            src={asset(`images/${project.image}.webp`)}
            srcSet={`${asset(`images/${project.image}-400.webp`)} 400w, ${asset(`images/${project.image}.webp`)} 800w`}
            sizes="(max-width: 767px) calc(100vw - 80px), (max-width: 1239px) calc(50vw - 64px), 540px"
            width={project.imageWidth || 800}
            height={project.imageHeight || 450}
            alt={project.alt}
            loading="lazy"
            decoding="async"
          />
        </ImageContainer>
      ) : (
        project.architecture && (
          <Architecture steps={project.architecture} preview />
        )
      )}
      <div className="technical-copy">
        {project.imageCaption && (
          <p className="project-role image-caption">{project.imageCaption}</p>
        )}
        <p className="eyebrow">{project.category}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.role && (
          <p className="project-role">
            <span>Role</span>
            {project.role}
          </p>
        )}
        {project.image && project.architecture && (
          <Architecture steps={project.architecture} />
        )}
        <ul className="tags" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.url && (
          <ExternalLink
            href={project.url}
            label={`${project.linkLabel}: ${project.name}`}
          >
            {project.linkLabel}
          </ExternalLink>
        )}
      </div>
      {project.details && (
        <ProjectDetails details={project.details} name={project.name} />
      )}
    </article>
  );
}
