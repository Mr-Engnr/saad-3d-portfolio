const capabilities = [
  "AI Agents",
  "Automation",
  "Python",
  "Machine Learning",
  "Cloud",
  "APIs",
];
export default function Capabilities() {
  return (
    <aside className="container capability-strip" aria-label="Capabilities">
      <p className="eyebrow">What I build with</p>
      <ul>
        {capabilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}
