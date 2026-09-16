import { projects, additionalProjects } from "../constants";
import { ExternalLink, SectionHeading } from "./Shared";
import ProjectCard from "./ProjectCard";

export default function Works() {
  return (
    <section
      className="section container"
      id="technical-work"
      aria-labelledby="technical-title"
    >
      <SectionHeading
        number="03"
        title="Engineering Projects"
        id="technical-title"
      >
        Technical work in machine learning, data engineering, and cloud
        infrastructure.
      </SectionHeading>
      <div className="technical-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div className="additional-work">
        <p>More Projects</p>
        <div>
          {additionalProjects.map((project) => (
            <ExternalLink key={project.name} href={project.url}>
              {project.name}
            </ExternalLink>
          ))}
        </div>
      </div>
    </section>
  );
}
