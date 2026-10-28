// Copy rules for everything a visitor or the agent can read: no em or en
// dashes, and the company is always "Docguía". Fails CI on any violation.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const ROOTS = ["src", "content", "evals"];
const EXTENSIONS = new Set([".ts", ".tsx", ".md", ".mdx", ".json", ".jsonl", ".css"]);

const RULES = [
  { pattern: /[–—]/g, message: "em or en dash (use a comma, colon or period)" },
  { pattern: /DocG|Docguia|DocGuia/g, message: 'company name must be written "Docguía"' },
];

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (EXTENSIONS.has(extname(name))) yield path;
  }
}

const problems = [];
for (const root of ROOTS.filter((r) => existsSync(r))) {
  for (const file of walk(root)) {
    readFileSync(file, "utf8")
      .split("\n")
      .forEach((line, i) => {
        for (const rule of RULES) {
          if (line.match(rule.pattern)) problems.push(`${file}:${i + 1}  ${rule.message}`);
        }
      });
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  console.error(`\n${problems.length} copy rule violation(s).`);
  process.exit(1);
}
console.log("Copy rules: ok");
