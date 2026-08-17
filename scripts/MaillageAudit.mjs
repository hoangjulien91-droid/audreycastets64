import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT_DIR, "src", "app");
const SRC_DIR = path.join(ROOT_DIR, "src");

// 1. Gather all existing routes
const existingRoutes = new Set(["/", "/404"]);

function findRoutes(dir, currentRoute = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith("(") || entry.name.startsWith("_") || entry.name.startsWith(".")) {
      continue;
    }
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findRoutes(fullPath, `${currentRoute}/${entry.name}`);
    } else if (entry.name === "page.tsx" || entry.name === "page.jsx") {
      existingRoutes.add(currentRoute || "/");
    }
  }
}

findRoutes(APP_DIR);

console.log(`🔍 Detected ${existingRoutes.size} static/dynamic routes in src/app`);

// 2. Scan internal links in components and pages
const internalLinkRegex = /href=["'](\/[^"'#?]*)/g;
const linksFound = new Map();

function scanLinks(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === ".next") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanLinks(fullPath);
    } else if (/\.(tsx|ts|jsx|js|md|mdx)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, "utf-8");
      let match;
      while ((match = internalLinkRegex.exec(content)) !== null) {
        const link = match[1];
        if (
          link.startsWith("/_") ||
          link.startsWith("/api") ||
          link.startsWith("/images") ||
          link.includes(".")
        ) {
          continue;
        }
        // Normalize trailing slash
        const normalized = link.length > 1 && link.endsWith("/") ? link.slice(0, -1) : link;
        if (!linksFound.has(normalized)) {
          linksFound.set(normalized, new Set());
        }
        linksFound.get(normalized).add(path.relative(ROOT_DIR, fullPath));
      }
    }
  }
}

scanLinks(SRC_DIR);

let brokenLinks = 0;
for (const [link, callers] of linksFound.entries()) {
  // Check if link matches a known route or dynamic segment
  const isValid =
    existingRoutes.has(link) ||
    [...existingRoutes].some((r) => r.includes("[") && link.startsWith(r.split("[")[0]));

  if (!isValid) {
    console.warn(`⚠️  Broken internal link reference: "${link}" used in:`);
    callers.forEach((c) => console.warn(`   - ${c}`));
    brokenLinks++;
  }
}

console.log(
  `✓ Maillage Audit complete: ${linksFound.size} internal targets scanned, ${brokenLinks} broken.`
);
