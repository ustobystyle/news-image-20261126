# World News — Thursday 26 November 2026

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/ustobystyle/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/ustobystyle/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A make.fun [news-image-20261126](https://make.fun/bounty/news-image-20261126) bounty entry: the whole world's news for Thursday 26 November 2026 in a single 1024×1024 image.

**39 stories · 7 regions · every one first reported on 26 November 2026.**

- Headlines: Iranian drone strike kills 2 Italians in Kuwait · Houthis hit Saudi ports, Riyadh intercepts missiles · Bangkok oil depot blast injures 7.
- Format: beige newspaper style, big date, data bar, UTC timeline, region tabs, 13 featured stories with original illustrations drawn in code, a dotted world map, 26 more stories, and a date-check + left-out footer.
- Every story names its source. Claims are marked as claims.

## How it runs

`main.ts` (Node 22, standard library only, no network) copies the pre-rendered `entry.png` to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`). Run it twice and the bytes are identical.

```
node main.ts
```

## Files

- `entry.png` — the 1024×1024 image (205,132 bytes)
- `main.ts` — emits `entry.png` to the output directory
- `README.md`, `LICENSE` (MIT)
