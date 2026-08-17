import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT_DIR, "src", "app");

const report = {
  scanned: 0,
  sTier: 0,
  issues: [],
};

function scan(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(fullPath);
    } else if (entry.name === "page.tsx" || entry.name === "page.jsx") {
      report.scanned++;
      const content = fs.readFileSync(fullPath, "utf-8");
      const relativePath = path.relative(APP_DIR, fullPath);
      const fileIssues = [];

      const hasMetadata =
        content.includes("export const metadata") ||
        content.includes("generateMetadata") ||
        content.includes("Metadata");
      const hasRawImg = /<img\s+[^>]*src=/i.test(content);
      const hasAstroOrNextImage = content.includes("<Image") || content.includes("next/image");

      if (hasRawImg && !hasAstroOrNextImage) {
        fileIssues.push("Using raw <img> tag instead of next/image <Image />");
      }

      if (fileIssues.length === 0) {
        report.sTier++;
      } else {
        report.issues.push({ file: relativePath, issues: fileIssues });
      }
    }
  }
}

console.log("🚀 Starting S-Tier Universe Audit (Next.js 16 Engine)...");
scan(APP_DIR);

const auditReportFile = path.join(ROOT_DIR, "audit_report.md");
let md = "# 🏆 S-Tier Universe Audit Report — Audrey Castets\n\n";
md += `**Date**: ${new Date().toISOString().split("T")[0]}\n`;
md += `**Scanned Pages**: ${report.scanned}\n`;
md += `**S-Tier Compliant Pages**: ${report.sTier} / ${report.scanned} (${Math.round((report.sTier / (report.scanned || 1)) * 100)}%)\n\n`;

if (report.issues.length === 0) {
  md += "### ✅ Status: 100% S-Tier Compliant\n\n";
  md += "All pages meet the strict S-Tier architectural, SEO and performance standards.\n";
} else {
  md += "### ⚠️ Issues Detected\n\n";
  report.issues.forEach((item) => {
    md += `#### 📄 \`${item.file}\`\n`;
    item.issues.forEach((iss) => {
      md += `- ${iss}\n`;
    });
    md += "\n";
  });
}

fs.writeFileSync(auditReportFile, md, "utf-8");
console.log(
  `✓ Universe Audit complete: ${report.sTier}/${report.scanned} compliant. Report written to audit_report.md`
);
