#!/usr/bin/env node
// check-beautify-skill.mjs — structural regression check for the beautify skill.
// Static/deterministic only (no live agent calls, no API key needed) — catches
// accidental breakage of the skill's shape on every push/PR. Live behavioral
// testing (does the interview actually produce a good design?) is the
// beautify-test skill, run on demand by an agent — this script can't do that.

import { readFileSync } from "node:fs";

const SKILL_PATH = "skills/beautify/SKILL.md";
const INSPIRATION_PATH = "skills/beautify/inspiration.md";
const README_PATH = "skills/beautify/README.md";
const TEST_SKILL_PATH = "skills/beautify-test/SKILL.md";

const REQUIRED_TEMPLATE_SECTIONS = [
  "PROJECT",
  "SUCCESS FEELING",
  "AUDIENCE",
  "PRODUCT TRUTHS",
  "PRIMARY CONVERSION",
  "VISUAL REFERENCES",
  "CREATIVE FREEDOM",
  "IMAGERY STANDARD",
  "ANTI-GOALS",
  "PROCESS",
];

const failures = [];

function readOrFail(path) {
  try {
    return readFileSync(path, "utf8");
  } catch {
    failures.push(`missing file: ${path}`);
    return null;
  }
}

const skill = readOrFail(SKILL_PATH);
if (skill) {
  if (!/^---\s*\nname:\s*beautify\s*\n/.test(skill)) {
    failures.push(`${SKILL_PATH}: frontmatter must open with "name: beautify"`);
  }
  if (!/\ndescription:\s*.+/.test(skill)) {
    failures.push(`${SKILL_PATH}: frontmatter missing "description:"`);
  }
  for (const section of REQUIRED_TEMPLATE_SECTIONS) {
    if (!skill.includes(section)) {
      failures.push(`${SKILL_PATH}: master-prompt template missing "${section}" section`);
    }
  }
  if (!skill.includes("inspiration.md")) {
    failures.push(`${SKILL_PATH}: no longer references inspiration.md`);
  }
}

const inspiration = readOrFail(INSPIRATION_PATH);
if (inspiration && !/^\|.+\|.+\|/m.test(inspiration)) {
  failures.push(`${INSPIRATION_PATH}: expected a markdown table row`);
}

readOrFail(README_PATH);
readOrFail(TEST_SKILL_PATH);

if (failures.length > 0) {
  console.error("beautify skill check FAILED:");
  for (const f of failures) console.error(` - ${f}`);
  process.exit(1);
}

console.log("beautify skill check passed");
