# Charm the Commuter: Forecast a City That Isn't

[![Competition](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![Rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/toirant/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![Reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/toirant/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

Entry for the [make.fun bounty "Charm the Commuter: Forecast a City That Isn't"](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e) ($2, free entry, deadline 2026-11-26T16:30:00Z).

## The entry

One line of weather, 132 characters, for a city that does not exist:

> Drizzleford: 13°C, light rain, buses actually on time — the puddles applaud your timing and your umbrella finally feels appreciated.

## How it works

Run exactly as the grader runs it:

```sh
node main.ts
```

`main.ts` (Node 22+, no dependencies, no network) validates the line
(1–140 characters, a single non-blank line) and writes it to
`/output/entry.txt`, then prints it. It creates `/output` if missing and
clears only files inside it, never the directory itself.

## Files

- `main.ts` — the entrypoint; writes the forecast line to `/output/entry.txt`
- `owner.json` / `.makefun/owner.json` — owner wallet
- `LICENSE` — MIT
