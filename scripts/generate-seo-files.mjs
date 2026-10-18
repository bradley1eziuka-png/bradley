// Runs before `npm run build`. Writes public/sitemap.xml and points robots.txt
// at it, but only when seo.siteUrl is set in site.config.json.
// <lastmod> is the date of the latest git commit (stable across rebuilds of the
// same commit); it falls back to today's date when git history is unavailable.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(readFileSync(join(root, "src/config/site.config.json"), "utf8"));
const siteUrl = (config.seo?.siteUrl ?? "").replace(/\/+$/, "");

if (!siteUrl) {
  console.log("[seo] seo.siteUrl is empty — skipping sitemap.xml (set it before launching).");
  process.exit(0);
}

const SERVICE_PATHS = {
  interior: "interior-painting",
  exterior: "exterior-painting",
  drywallHanging: "drywall-hanging",
  drywallPatching: "drywall-patching",
  drywallFinishing: "drywall-finishing",
};
const paths = ["/", ...config.services.enabled.map((k) => `/services/${SERVICE_PATHS[k]}`)];
function lastModified() {
  try {
    const d = execSync("git log -1 --format=%cs", {
      cwd: root,
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  } catch {
    // not a git checkout
  }
  return new Date().toISOString().slice(0, 10);
}
const lastmod = lastModified();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) =>
      `  <url>\n    <loc>${siteUrl}${p === "/" ? "" : p}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync(join(root, "public/sitemap.xml"), xml);

writeFileSync(
  join(root, "public/robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);
console.log(`[seo] wrote sitemap.xml (${paths.length} URLs) and robots.txt for ${siteUrl}`);
