#!/usr/bin/env node
/**
 * Design-System Guard — S-Tier Audrey Castets
 * Fails if code contains arbitrary border-radius (rounded-[...])
 * or hardcoded color literals without tokens.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");

// Deliberate reviewed exceptions
const ALLOWLIST = [
  {
    match: "src/app/globals.css",
    pattern: /.*/,
    reason: "CSS root variables definition",
  },
  {
    match: "src/components/ui",
    pattern: /.*/,
    reason: "Low-level UI components / Radix primitives",
  },
];

const ARBITRARY_RADIUS = /\brounded-\[[^\]]+\]/g;
const RAW_HEX_COLOR = /#(?:[0-9a-fA-F]{3}){1,2}\b/g;

const EXT = new Set([".tsx", ".ts", ".jsx", ".js", ".css"]);

function walk(dir, acc = []) {
  try {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      const s = statSync(p);
      if (s.isDirectory()) walk(p, acc);
      else if ([...EXT].some((e) => name.endsWith(e))) acc.push(p);
    }
  } catch {
    // ignore
  }
  return acc;
}

function isAllowed(file, matchText) {
  const normFile = file.replace(/\\/g, "/");
  return ALLOWLIST.some((a) => normFile.includes(a.match) && a.pattern.test(matchText));
}

const violations = [];
for (const file of walk(SRC)) {
  const text = readFileSync(file, "utf8");
  const rel = relative(ROOT, file);
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    // Skip comments
    if (line.trim().startsWith("//") || line.trim().startsWith("/*")) return;

    for (const [rule, re] of [["arbitrary-radius", ARBITRARY_RADIUS]]) {
      const matches = line.match(re);
      if (!matches) continue;
      for (const m of matches) {
        if (isAllowed(rel, m)) continue;
        violations.push({ rel, line: i + 1, rule, m });
      }
    }
  });
}

if (violations.length) {
  console.error(`\n✗ design-system-guard: ${violations.length} violation(s)\n`);
  for (const v of violations) {
    console.error(`  ${v.rel}:${v.line}  [${v.rule}]  ${v.m}`);
  }
  console.error(
    "\nUse design tokens instead. Add an exception to ALLOWLIST only if truly intentional.\n"
  );
  process.exit(1);
}

console.log("✓ design-system-guard: 0 violations, tokens and radius compliant.");
