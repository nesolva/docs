// Fails when docs.json lists a page with no file, or a page under es/ or en/ is missing from docs.json.
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(readFileSync(join(root, "docs.json"), "utf8"));

const listed = new Set();
const walkNav = (node) => {
  if (typeof node === "string") return listed.add(node);
  if (Array.isArray(node)) return node.forEach(walkNav);
  if (node && typeof node === "object") Object.values(node).forEach(walkNav);
};
walkNav([config.navigation?.languages, config.navigation?.tabs, config.navigation?.groups, config.navigation?.pages]);
// Only page-like strings (paths under a language folder) count as pages.
const pages = [...listed].filter((p) => /^(es|en)\//.test(p));

const files = [];
const walkDir = (dir) => {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walkDir(full);
    else if (name.endsWith(".mdx")) files.push(full.slice(root.length + 1).replace(/\.mdx$/, ""));
  }
};
["es", "en"].forEach((lang) => walkDir(join(root, lang)));

const missingFiles = pages.filter((p) => !existsSync(join(root, `${p}.mdx`)));
const unlisted = files.filter((f) => !listed.has(f));

missingFiles.forEach((p) => console.error(`Listed in docs.json but no file: ${p}.mdx`));
unlisted.forEach((f) => console.error(`File not listed in docs.json: ${f}.mdx`));

if (missingFiles.length || unlisted.length) process.exit(1);
console.log(`Navigation check passed (${pages.length} pages).`);
