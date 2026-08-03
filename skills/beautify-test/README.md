# /beautify-test

A regression test for [`/beautify`](../beautify/README.md) — not a demo. It confirms
the skill still does what it claims: run a full interview, produce a complete master
prompt, and lead somewhere genuinely non-generic when built.

## What It Does

- Runs three independent test personas through the actual `/beautify` interview,
  chosen to stress different failure modes: product/commerce warmth (does it avoid
  category cliché?), motion/interaction (does the inspiration seed list actually shape
  the build?), and dark-but-earned restraint (does the anti-goals round stay short and
  specific?).
- Builds a real, self-contained HTML prototype from each resulting master prompt — as
  the receiving agent would, not the one who wrote the brief.
- Screenshots each prototype at mobile and desktop width and requires the agent to
  actually look at the render and describe it — a report that only lists file paths
  without describing what's in them doesn't count as a pass.
- Reports honestly when the skill itself produces generic answers, rather than papering
  over a weak result with an unusually specific invented answer.

## When To Use It

- After changing `/beautify`'s `SKILL.md` or `inspiration.md`.
- Before sharing or publishing the skill somewhere new.
- When you ask "test beautify," "run the beautify test panel," or "does beautify still
  work."

This is a live, agent-driven behavioral test — it needs an agent to actually run the
interview and look at the render. For a fast, no-agent structural check (does the file
still have the right frontmatter and template sections?), see
`scripts/check-beautify-skill.mjs` and the `beautify skill check` CI workflow in this
repo, which run automatically on every push/PR that touches `skills/beautify/**`.

## Install

```sh
npx @agent-native/skills@latest add --skill beautify-test
```
