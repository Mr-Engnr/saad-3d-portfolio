export const site = {
  name: "Rana Saad Safdar",
  title: "Rana Saad Safdar | AI & Automation Engineer",
  description:
    "AI & Automation Engineer. I build AI systems that run real businesses, from crew portals to live building monitoring. Case study: Black Rock Electric.",
  // In-page flagship case study (#black-rock-electric). Used in JSON-LD.
  caseStudy: {
    name: "Black Rock Electric case study",
    anchor: "black-rock-electric",
    description:
      "A website, a custom crew portal, and building monitoring for an electrical contractor in Colorado.",
  },
  // Production origin. Used for canonical, Open Graph, JSON-LD, robots, and sitemap.
  url: "https://saadsafdar.dev/",
  email: "ranasaad727@gmail.com",
  github: "https://github.com/Mr-Engnr",
  linkedin: "https://www.linkedin.com/in/rana-saad-safdar/",
  resume: "/Saad_Resume.pdf",
  // Public Fiverr profile URL. Leave empty to hide the "Verified on Fiverr" link.
  fiverr: "https://www.fiverr.com/s/Dmm29ka",
  calendly: "https://calendly.com/engnr-saad/project-discussion",
};
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
