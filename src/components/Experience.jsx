import { experiences } from "../constants";
import { SectionHeading } from "./Shared";
export default function Experience() {
  return (
    <section
      className="section container experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionHeading number="04" title="Experience" id="experience-title" />
      <div className="experience-list">
        {experiences.map((item) => (
          <article className="experience-row" key={item.company}>
            <p className="experience-date">{item.date}</p>
            <div>
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
