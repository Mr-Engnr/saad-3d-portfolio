import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { site } from "./src/site.js";

const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
const schema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": site.url + "#profile",
  url: site.url,
  name: site.title,
  mainEntity: {
    "@type": "Person",
    "@id": site.url + "#person",
    name: site.name,
    jobTitle: "AI & Automation Engineer",
    description: site.description,
    url: site.url,
    sameAs: [site.github, site.linkedin].filter(Boolean),
  },
};
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    {
      name: "portfolio-metadata",
      transformIndexHtml: {
        order: "pre",
        handler: (html) =>
          html
            .replaceAll("%SITE_TITLE%", escape(site.title))
            .replaceAll("%SITE_DESCRIPTION%", escape(site.description))
            .replaceAll("%SITE_URL%", escape(site.url))
            .replace(
              "<!--profile-schema-->",
              '<script type="application/ld+json">' +
                JSON.stringify(schema).replaceAll("<", "\\u003c") +
                "</script>",
            ),
      },
    },
  ],
  base: mode === "production" ? new URL(site.url).pathname : "/",
  server: { port: 5173, host: "127.0.0.1" },
  preview: { port: 4173, host: "127.0.0.1" },
}));
