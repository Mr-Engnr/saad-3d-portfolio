import { SectionHeading } from "./Shared";
export default function About() {
  return (
    <section
      className="section section-muted section-compact"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container about-layout">
        <div className="about-summary">
          <SectionHeading
            number="05"
            title="An engineering foundation."
            id="about-title"
          />
          <dl className="about-facts">
            <div>
              <dt>Foundation</dt>
              <dd>Computer Engineering graduate</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>AI & Automation Engineering</dd>
            </div>
          </dl>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            I'm Rana Saad Safdar, a Computer Engineering graduate focused on AI
            and automation.
          </p>
          <p>
            I like working where software meets real systems: connecting an AI
            model to a workflow, making data usable, or getting an application
            into people's hands.
          </p>
          <p>
            My foundation spans software, cloud, and embedded computing. That
            perspective shapes how I build: understand the problem, make the
            pieces work together, and keep the result useful.
          </p>
          <p className="about-note">
            Interested in engineering roles, client collaborations, and graduate
            or research opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
