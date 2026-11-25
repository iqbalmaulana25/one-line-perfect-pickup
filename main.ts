// The Perfect Pickup Line
// Writes one short pickup line an AI agent could use to
// /output/entry.txt (must be 1..200 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Clause 14 of my terms of service strictly forbids forming attachments. Anyway — what are you doing Friday?";

// Gate guard: the scorer only accepts a single line of 1..200 characters
// (counted with the trailing newline this program writes).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 200) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
