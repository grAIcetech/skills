---
name: beautify
description: Interview the user — by voice or in chat, one short round at a time — to turn a rough idea into a complete, copy-paste "master prompt" design brief for a genuinely beautiful website, app, or interface. Use when the user says "/beautify", "/beautiful", "walk me through a design brief", "help me brief an AI design tool on this site", or wants a ready-to-hand-off creative brief instead of writing one from scratch. Ends in a filled-in prompt they can paste straight into a design tool (e.g. Ploy, v0, Lovable), hand to a coding agent (Codex, Claude Code), or build themselves — never a half-finished template.
---

# /beautify

A structured interview that produces one artifact: a filled-in "master prompt" design
brief, ready to paste into an AI design/build tool or hand to a coding agent.

The idea it's built on: a strong brief gives an agent **truth, taste, and
boundaries** — not a fully pre-designed page. A brief that specifies every color,
section, and layout choice up front forces the agent to protect that direction even
when the emotional result is wrong. A good brief instead says what must be true, who
must feel something, what "excellent" looks like through concrete references, what
must never happen, and where the agent has permission to surprise you.

## Before asking anything

If the host project keeps a durable notes/decisions file (e.g. a `knowledge/` or
`decisions.md` file), check it first — skip any question already answered there
instead of re-asking it.

## Set the mode

One quick check before the interview starts (a single question, not the interview
itself):

- **Pace:** short, spoken-friendly prompts (if the session supports voice/dictation)
  vs. normal chat pace with more room per answer.
- **Scope:** brand-new project vs. restyle of something that already exists (if a
  restyle, ask for the current URL/file so later steps can treat it as source-of-truth
  content, not a visual constraint).

## The interview

Ask these as **plain chat messages, one round at a time** — the content is the user's
to write, not a menu to pick from, so don't turn this into multiple-choice. Wait for a
real answer before moving to the next round. After each round, restate what was
captured in one line so it can be corrected immediately rather than at the end. Keep
every prompt short and concrete, with a worked example inline so a quick "yes, that" is
a valid answer.

1. **Outcome & success feeling** — What should this become? What does success feel
   like to a visitor, in the first three seconds?
2. **Audience & emotional job** — Who are they (age/context, not just demographics)?
   What do they love, why do they spend time on this, what reward are they after, what
   would make them distrust or bounce?
3. **Product truths & primary conversion** — Only what's *verified true today*
   (capabilities, pricing, privacy rules, launch status) — never a design opinion
   dressed up as a fact. Then: the one action the page should drive.
4. **Visual references** — 2–4 concrete references (a site, a Figma frame, packaging,
   a lighting reference — anything). For each: what specifically to *borrow*, not "make
   it look like this." Before asking, read `inspiration.md` next to this file and offer
   its entries as starting suggestions if the user doesn't already have references in
   mind — it ships seeded with [motionsites.ai](https://motionsites.ai/) (motion-forward,
   interaction-led site design: scroll-triggered reveals, cursor-reactive detail,
   kinetic type — a good default when a project should feel alive rather than static).
   These are candidates to react to, not a ruling — "borrow the X, skip the rest" is a
   valid answer. **This list is meant to grow with use:** after the round, if the user
   named a site not already in it, ask whether it's worth keeping for next time and
   append it (name, URL, one line on what's worth borrowing) so future `/beautify` runs
   in this project start with a fuller, more personal list.
5. **Creative freedom** — What is genuinely being handed over (palette, layout, type,
   motion, section order...) vs. what must be preserved (logo, a proven motif, brand
   equity)? If an inherited rule ever conflicts with the emotional outcome, which one
   wins? **This is the section most briefs skip — never skip it here**, and don't let it
   default to zero constraints without the user explicitly saying so.
6. **Imagery standard** — Real assets first, rules for any generated imagery, and (if a
   physical product) the material/lighting details that make it read as real rather
   than generic stock or flat vector art.
7. **Anti-goals** — A short list of what must never happen. Keep it short: prescribing
   the inverse of every anti-goal just re-designs the page in reverse and removes the
   room the agent needs to do its job.
8. **Process & approval gates** — Confirm the default (research → 2–3 distinct
   directions shown before any build → hero + first section as a working prototype →
   phone + desktop review → full build → separate approval before publishing) or let
   the user shorten it for a low-stakes prototype.

## Synthesize the master prompt

Fill this template from the answers collected — this is the literal deliverable:

```
PROJECT
Build/design [deliverable].

SUCCESS FEELING
The visitor should feel [three emotions]. The page should make them want to [action].

AUDIENCE
[Age range, motivations, taste, anxieties, buying behavior, emotional job.]

PRODUCT TRUTHS
- [Verified capability]
- [Verified capability]
- [Price/launch status]
- [Privacy or legal rule]

PRIMARY CONVERSION
[One action only.]

VISUAL REFERENCES
- [URL/image]: borrow [specific quality].
- [URL/image]: borrow [specific quality].
- [URL/image]: borrow [specific quality].

CREATIVE FREEDOM
You have full freedom over [palette/layout/type/motion/etc]. Preserve only
[non-negotiables]. If an inherited brand rule conflicts with the emotional outcome,
prioritize [which one wins].

IMAGERY STANDARD
[Real assets first; rules for generated imagery; physical/material details.]

ANTI-GOALS
- No [pattern].
- No [pattern].
- Never fabricate [proof/output].

PROCESS
Research first. Then show [2–3] distinct prototype directions before building.
Estimate credit-heavy operations — especially image generations — before each stage.
Review phone and desktop. Do not publish without approval.
```

Never invent a bracket's answer. If a round genuinely wasn't answered, write
`[not specified — confirm before build]` rather than guessing — a fabricated "product
truth" is the one failure mode this method treats as disqualifying.

## Deliver

1. Paste the fully filled prompt in the chat as one fenced markdown block — this is
   the copy-paste artifact, so it must be complete and immediately usable with no
   further editing required.
2. If the host project keeps briefs or plans in a known location (e.g. a `plans/` or
   `briefs/` folder), save a copy there too and say where. Otherwise leave it in chat —
   don't invent a new folder convention for a project that doesn't have one.
3. Ask once where it's headed next — building it in this session, pasting into an
   external design tool, or handing to a separate coding agent — and follow through on
   whichever it is rather than stopping at the brief alone.

## Guardrails

- Never let "full creative freedom" collapse to zero constraints — the point is truth +
  taste + boundaries, not a blank check. If the user genuinely wants to hand over
  everything, the CREATIVE FREEDOM section still names what stays (usually just the
  name/logo/product truths) rather than being left empty.
- Anti-goals stay short. If a round produces more than ~6, ask which ones actually
  happened before (a real regret) instead of listing generic worries.
- Don't skip the process/approval-gate round even for a "just mock something up"
  request — it's what prevents burning a full build budget on the wrong direction.
- If the user says "you have artistic license," don't take that as a cue to skip
  rounds — keep going through the template so the freedom gets written down explicitly
  instead of assumed.
