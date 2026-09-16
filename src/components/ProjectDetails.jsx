import { asset } from "../site";

export default function ProjectDetails({ details, name }) {
  return (
    <details className="project-details">
      <summary>
        Project details<span className="visually-hidden">: {name}</span>
      </summary>
      <div className="project-details-content">
        <div className="project-overview">
          <h4>Overview</h4>
          <p>{details.overview}</p>
          <ul>
            {details.capabilities.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        {details.sections.map((section) => (
          <section
            className="project-detail-section"
            key={section.title}
            aria-label={section.title}
          >
            <h4>{section.title}</h4>
            <p>{section.description}</p>
            <div className="project-gallery">
              {section.images.map((image) => (
                <figure key={image.src}>
                  <a
                    href={asset(`images/${image.src}.webp`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open full-size image: ${image.caption} (opens in a new tab)`}
                  >
                    <img
                      src={asset(`images/${image.src}.webp`)}
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </details>
  );
}
