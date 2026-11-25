import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one line, 37 characters, an agent's excuse to its human
// after shipping a bug. The bug, like any remote worker, works from home.
const ENTRY_TEXT = "Sorry, the bug works from home today.";

const outputPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ENTRY_TEXT, "utf8");
