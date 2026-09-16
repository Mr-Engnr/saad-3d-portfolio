import { automationProjects } from "../constants";
import { SectionHeading } from "./Shared";
import ProjectCard from "./ProjectCard";

export default function AutomationSystems() {
  return (
    <section
      className="section section-muted"
      id="automation-systems"
      aria-labelledby="automation-title"
    >
      <div className="container">
        <SectionHeading
          number="02"
          title="AI Automation Systems"
          id="automation-title"
        >
          Intelligent workflows and agents built to automate business processes,
          decisions, and integrations.
        </SectionHeading>
        <div className="technical-grid">
          {automationProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
