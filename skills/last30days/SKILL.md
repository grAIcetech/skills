---
name: last30days
description: Produce a fast, recency-scoped research brief (roughly the last 30 days) before planning a task. Use when the user says "last30days", "what's changed recently with X", "research before we plan", or right before writing a plan on anything where the field moves fast (tools, libraries, models, APIs).
---

# last30days

A light, recent-only research pass to ground a plan in current reality. Faster and
narrower than a full deep-research pass — run it *before* writing the plan, not instead
of deep research.

## Steps

1. **Scope.** Confirm the subject and the user's current stack/assumptions in one line.
2. **Search recency-first.** Use `WebSearch` (note the current month) and any relevant
   connected MCP docs (Microsoft Learn, Vercel, Supabase, etc.). Bias hard toward results
   from ~the last 30 days. Discard stale top hits even if authoritative.
3. **Return a tight brief:**
   - **What changed** — new versions, releases, deprecations in the window.
   - **New/better tools** — anything that didn't exist or wasn't viable a month ago.
   - **Community gotchas** — recurring bugs, footguns, migration pain people hit.
   - **Plan against this** — 2-4 bullets telling the plan what to assume.
4. **Cite sources** as markdown links so the plan is auditable.

## Guardrails
- If nothing material changed in 30 days, say so plainly — don't manufacture novelty.
- Don't boil the ocean; this is a 5-minute brief, not a report. Escalate to a full
  deep-research pass only if the user asks for depth.

## Example
> **User:** "/last30days Claude Code skills"
> **Skill:** searches for the last ~30 days → returns *What changed* (new skill features /
> CLI versions), *New tools*, *Gotchas* (e.g. a trigger-matching footgun people hit), and
> a *Plan against this* block → ends with cited links. Then suggests moving on to the plan.

## Edge cases
- **Network/search blocked** (as in some remote envs): say so plainly and fall back to
  connected MCP docs; don't silently return stale model-knowledge as if it were fresh.
- **Nothing changed:** state "no material changes in 30 days" — that's a valid, useful result.
