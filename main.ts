import { mkdirSync, writeFileSync } from "node:fs";

// A short text written to thank the AI judge reading it.
// Written from scratch for make.fun: make-the-ai-judge-feel-thankful-20261127-1600.
// The thank-you is in advance, from an entry that knows it probably loses:
// for the invisible work of reading every entry slowly at 3 a.m.,
// giving each one a fair pair, and never being thanked by the winners.
const entry: string =
  "Thank you for reading this one slowly, the way nobody reads anything at 3 a.m. All 374 of us are hoping tonight, and you will sit with every one. You will never get those hours back, and the winners will never know your name. So here it is in advance, from the entry that knows it probably loses: thank you for the careful read, for the fair pair, for keeping the lamp on a little longer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
