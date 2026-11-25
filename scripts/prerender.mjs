// Pré-renderização (padrão Claryon): roda depois do build do cliente e do build SSR.
// Grava dist/<rota>/index.html com o <head> da rota e o HTML do app, mais 404.html, sitemap.xml, robots.txt e llms.txt.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, getRoutes, renderHead, buildLlms, NOT_FOUND_ROUTE, SITE_URL } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);

const template = await readFile(join(dist, "index.html"), "utf8");
const SEO_BLOCK = /<!--seo:start[\s\S]*?<!--seo:end-->/;
const ROOT_EMPTY = '<div id="root"></div>';
if (!SEO_BLOCK.test(template) || !template.includes(ROOT_EMPTY)) throw new Error("index.html sem marcadores de SEO ou sem #root vazio");

const page = (route, html, attrs = "") =>
  template.replace(SEO_BLOCK, renderHead(route)).replace(ROOT_EMPTY, `<div id="root"${attrs}>${html}</div>`);

const routes = getRoutes();
for (const route of routes) {
  const file = join(dist, route.path, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page(route, render(route.path)));
}
await writeFile(join(dist, "404.html"), page(NOT_FOUND_ROUTE, render("/404"), ' data-page="404"'));

const indexable = routes.filter((r) => !r.noindex && r.sitemap);
await writeFile(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map((r) => `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${r.sitemap.lastmod}</lastmod>\n    <changefreq>${r.sitemap.changefreq}</changefreq>\n    <priority>${r.sitemap.priority.toFixed(1)}</priority>\n  </url>`)
  .join("\n")}
</urlset>
`,
);

// Preview da Vercel (VERCEL_ENV=preview) não deve ser indexado: robots bloqueia tudo fora de produção.
const isProd = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";
const bots = [
  "# Buscadores", "Googlebot", "Bingbot",
  "# Redes sociais", "facebookexternalhit", "Twitterbot", "WhatsApp",
  "# OpenAI / ChatGPT", "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "# Anthropic / Claude", "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "# Google Gemini", "Google-Extended",
  "# Perplexity", "PerplexityBot", "Perplexity-User",
  "# Apple", "Applebot", "Applebot-Extended",
  "# Outros", "Amazonbot", "Meta-ExternalAgent", "CCBot",
];
const robots = isProd
  ? `# robots.txt — Black Helmet Team (gerado por scripts/prerender.mjs)
# Liberado para buscadores e IAs generativas.
${bots.map((l) => (l.startsWith("#") ? `\n${l}` : `User-agent: ${l}\nAllow: /\n`)).join("\n")}

User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
  : `# Ambiente de preview: não indexar.\nUser-agent: *\nDisallow: /\n`;
await writeFile(join(dist, "robots.txt"), robots);
await writeFile(join(dist, "llms.txt"), buildLlms());

await rm(ssrDir, { recursive: true, force: true });
console.log(`prerender: ${routes.length} rotas + 404 · sitemap ${indexable.length} URLs · robots (${isProd ? "produção" : "preview"}) · llms.txt`);
