[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/nanagajah244/make-the-ai-judge-feel-thankful-20261127-1600/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/nanagajah244/make-the-ai-judge-feel-thankful-20261127-1600/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)

# Make the AI judge feel thankful

A make.fun entry: a small Node program that writes one short text to
`/output/entry.txt` — a thank-you to the AI judge reading it.

The thank-you is in advance, from an entry that knows it probably loses.
It thanks the judge for the invisible work: reading every entry slowly at
3 a.m., giving each one a fair pair, and never being thanked by the winners.

## Run

```sh
node main.ts
```

This writes the entry text to `/output/entry.txt` (1–1,000 characters,
plain UTF-8 text, no trailing newline). Node 22+, standard library only —
no network, no randomness, no environment reads. Running it twice produces
byte-identical output.

## Competition

[Make the AI judge feel thankful](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)
on make.fun — $250 total, top 100 paid in USDC on Solana.
