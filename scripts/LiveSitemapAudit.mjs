import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const SITEMAP_PATH = path.join(ROOT_DIR, "src", "app", "sitemap.ts");
const APP_DIR = path.join(ROOT_DIR, "src", "app");

console.log("🗺️  Starting Sitemap Alignment Audit...");

if (!fs.existsSync(SITEMAP_PATH)) {
  console.error("✗ sitemap.ts not found at", SITEMAP_PATH);
  process.exit(1);
}

const sitemapContent = fs.readFileSync(SITEMAP_PATH, "utf-8");
const urlMatches = [...sitemapContent.matchAll(/url:\s*`\${baseUrl}([^`]*)`/g)].map(
  (m) => m[1] || "/"
);

let missingRoutes = 0;
for (const rawUrl of urlMatches) {
  let route = rawUrl === "/" ? "" : rawUrl;

  // Handle dynamic segments in sitemap template
  if (route.includes("${")) {
    route = route.replace(/\${[^}]+}/g, "[slug]");
  }

  const expectedPage = path.join(APP_DIR, route, "page.tsx");
  if (!fs.existsSync(expectedPage)) {
    console.warn(
      `⚠️  Sitemap references missing route directory: "${rawUrl}" (looked for ${expectedPage})`
    );
    missingRoutes++;
  }
}

if (missingRoutes === 0) {
  console.log(
    `✓ Sitemap Audit: ${urlMatches.length} route patterns fully validated against filesystem.`
  );
} else {
  console.warn(`⚠️  Sitemap Audit found ${missingRoutes} missing route destinations.`);
}
