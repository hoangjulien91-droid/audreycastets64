import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");

console.log("🔗 Auditing for dead links and unlinked href patterns...");

const hrefRegex = /href=["']([^"']+)["']/g;
let checkedCount = 0;
let deadHrefCount = 0;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === ".next") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (/\.(tsx|ts|jsx|js|mdx)$/.test(entry.name)) {
      const text = fs.readFileSync(fullPath, "utf-8");
      let match;
      while ((match = hrefRegex.exec(text)) !== null) {
        checkedCount++;
        const target = match[1];
        if (target.trim() === "" || target === "#" || target.includes("javascript:")) {
          console.warn(
            `⚠️ Empty or placeholder href found in ${path.relative(ROOT_DIR, fullPath)}: "${target}"`
          );
          deadHrefCount++;
        }
      }
    }
  }
}

walk(SRC_DIR);
console.log(
  `✓ Checked ${checkedCount} href links across source code. Found ${deadHrefCount} placeholder/dead hrefs.`
);
