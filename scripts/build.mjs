import { build, createServer } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import { site } from "../src/site.js";

const robots =
  "User-agent: *\nAllow: /\n\nSitemap: " + site.url + "sitemap.xml\n";
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>' +
  site.url +
  "</loc></url></urlset>\n";
await writeFile("public/robots.txt", robots);
await writeFile("public/sitemap.xml", sitemap);
await build();
const server = await createServer({
  mode: "production",
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { render } = await server.ssrLoadModule("/src/entry-server.jsx");
  const html = await readFile("dist/index.html", "utf8");
  await writeFile(
    "dist/index.html",
    html.replace(
      '<div id="root"></div>',
      '<div id="root">' + render() + "</div>",
    ),
  );
  console.log(
    "Prerendered portfolio HTML, metadata, robots.txt, and sitemap.xml.",
  );
} finally {
  await server.close();
}
