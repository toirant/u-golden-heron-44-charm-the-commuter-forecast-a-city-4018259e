// Charm the Commuter: Forecast a City That Isn't
// make.fun bounty u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e
//
// One line of weather, at most 140 characters, for a city that does not
// exist: name the place, give it weather, and make a bored commuter smile.
//
// Run exactly as the grader runs it: plain `node main.ts` (Node 22+).
// It writes the single forecast line to /output/entry.txt and prints it.

import { mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: Drizzleford, a city that does not exist, where the rain is
// polite, the buses are improbably punctual, and even the umbrella gets
// a little recognition on the morning commute. Revised: the puddles now
// applaud the commuter's timing, not just their passing, so the joke
// lands on the reader instead of the scenery.
const ENTRY =
  "Drizzleford: 13°C, light rain, buses actually on time — the puddles applaud your timing and your umbrella finally feels appreciated.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space, on a single line. Refuse to write anything else.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`Entry must be 1-140 characters, got ${ENTRY.length}.`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-blank line.");
}

const outDir = "/output";

// Create the output directory when it is missing. Never remove the
// directory itself: the grader mounts it, so only clear files inside it.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  const path = join(outDir, name);
  if (statSync(path).isFile()) {
    rmSync(path);
  }
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`(${ENTRY.length} characters)`);
