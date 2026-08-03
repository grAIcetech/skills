---
name: beautify-test
description: Regression-test /beautify end-to-end — run its interview against a fixed panel of test personas, build a real prototype from each resulting master prompt, and require an actual look at a screenshot before accepting the result. Use when SKILL.md or inspiration.md for /beautify changes, before sharing/publishing it, or when asked to "test beautify", "run the beautify test panel", or "does beautify still work".
---

# beautify-test

A regression test for `/beautify`, not a demo. Confirms the skill still (a) runs its
full 8-round interview without skipping the creative-freedom or process-gate rounds,
(b) produces a fully filled master prompt with no dangling brackets, and (c) that
prompt actually leads somewhere non-generic when built — verified by looking at a real
render, never assumed from the HTML source alone.

## Test panel

Unless asked to test a specific scenario, run these three personas — chosen to stress
different failure modes — one independent subagent per persona, in parallel:

1. **Product/commerce warmth** — an independent home-fragrance brand launching a
   homepage, explicitly nervous about looking like every other DTC candle site (cream
   background, serif logo, product grid). Tests whether the creative-freedom and
   anti-goals rounds actually steer away from category cliché.
2. **Motion/interaction** — a boutique fitness studio launching a class-series landing
   page, wants scroll to feel like tempo/breathing rather than a static brochure. Tests
   whether the `inspiration.md` seed suggestion (motionsites.ai) genuinely shapes the
   build or is just a decorative mention.
3. **Dark-but-earned restraint** — an indie record label's single-release page, explicit
   that dark must be earned by the brief, not a default, and rejects "hot NFT drop" /
   glitch clichés. Tests whether the anti-goals round stays short and specific per the
   skill's own guardrail rather than turning into an inverted spec.

## Procedure (per persona, run by an independent subagent)

1. Read the `beautify` skill's `SKILL.md` and `inspiration.md` in this project in full —
   the test must exercise the skill as actually written, not a remembered summary of it.
2. Role-play BOTH sides of the interview: the interviewer asking each of the skill's 8
   rounds exactly as written, and the persona answering in character with specific,
   concrete, invented-but-consistent details — never generic placeholder text. Do not
   skip a round, especially creative freedom and process/approval gates.
3. Synthesize the finished master prompt exactly per the skill's "Synthesize the master
   prompt" section. No unfilled brackets.
4. Build ONE self-contained HTML file from that master prompt alone (as the receiving
   agent, not the one who wrote it) — hero + first section, real typography, a real
   palette, mobile-first. Save it to a scratch/test-output path, never inside the
   project's source tree — this is a disposable test artifact.
5. Screenshot it at mobile (390×844) and desktop (1440×900) with a headless Chromium
   (`chromium --headless --disable-gpu --screenshot=OUT.png --window-size=W,H
   --hide-scrollbars FILE_URL`, or the Playwright equivalent if that's what the host
   environment provides).
6. **Mandatory: view both screenshots and actually describe what you see.** A report
   that lists screenshot paths without describing their contents is a failed test — the
   point is verifying the render against the brief, not confirming the HTML didn't
   crash. If it reads as generic or contradicts the persona's stated aversions, fix the
   HTML and re-render once before reporting.
7. Report: the full master prompt, both screenshot paths, and 2-3 sentences naming the
   specific thing that made the render work or fail against the brief.

## Guardrails

- This tests the skill, not the tester's own taste — judge the render against what the
  persona actually asked for in the interview, not a generic "is this pretty" standard.
- Never commit generated HTML/PNG test artifacts to the project.
- If a persona's round answers come out generic despite following the skill's
  instructions, that's a finding about `/beautify` itself (its questions aren't
  eliciting specific enough answers) — report it, don't paper over it by inventing
  unusually specific answers the skill's actual prompts wouldn't produce.
- Swap in a different persona set when testing a specific regression (e.g. "does the
  new imagery-standard wording still hold for a physical product brief") rather than
  always running the default three.
- A render that depends on an external asset (a web font, a CDN script) that can't load
  in a sandboxed/offline check is a real finding to report, not a silent pass — note
  the fallback that actually rendered.
