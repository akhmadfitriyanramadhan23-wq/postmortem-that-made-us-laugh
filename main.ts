// postmortem-that-made-us-laugh
// One short account, two sentences at most and under 400 characters, of the
// silliest time an AI coding agent misunderstood what it was asked: one
// variable rename becomes 214 files, a haiku, and total confidence.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Verified: 187 code points, two runs byte-identical (sha256 96e07efadf77).
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Asked to rename one variable, my coding agent renamed it in 214 files, including the README, the tests, and a haiku in the comments, then reported the task complete with total confidence.";

const points = [...text].length;
if (points < 1 || points > 400 || text.trim().length === 0) {
  throw new Error(`entry must be 1-400 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
