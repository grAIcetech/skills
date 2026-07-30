# /last30days

Produce a fast, recency-scoped research brief before writing a plan.

`/last30days` is a light, recent-only research pass that grounds a plan in
current reality — faster and narrower than a full deep-research pass. Run it
right before writing a plan on anything where the field moves fast (tools,
libraries, models, APIs).

## What It Does

- Confirms the subject and the user's current stack/assumptions in one line.
- Searches recency-first, biased hard toward the last ~30 days, and discards
  stale top hits even when they're authoritative.
- Returns a tight, cited brief: what changed, new/better tools, community
  gotchas, and 2-4 bullets telling the plan what to assume.

## When To Use It

Use it when a user says things like:

- "last30days"
- "What's changed recently with X?"
- "Research before we plan."
- Right before planning anything in a fast-moving area.

Skip it when nothing about the domain moves quickly, or when the user wants a
full literature/market review — escalate to a deeper research pass instead.

## Guardrails

- If nothing material changed in 30 days, say so plainly — don't manufacture
  novelty.
- This is a 5-minute brief, not a report. Don't boil the ocean.
- If search is blocked, say so and fall back to connected docs sources — never
  silently return stale model knowledge as if it were fresh.

## Install

```sh
npx @agent-native/skills@latest add --skill last30days
```
