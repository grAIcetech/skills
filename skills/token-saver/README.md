# /token-saver

Reduce token use inside Codex or Claude without changing your normal workflow.

`/token-saver` is for anyone hitting plan limits, working in a long chat,
asking questions across large files, or wanting an existing workflow to cost
less — without asking the human to run scripts, pick source files, or start a
new chat.

## What It Does

- Tries local code (`rg`, `jq`, a parser, a test, a script) before calling a
  model for exact or repeatable work.
- Selects only the passages a request needs from large sources, using the
  bundled `select_context.py` selector, instead of loading whole files or
  transcripts.
- Continues from the last accepted result plus the new change, via
  `state_delta.py`, instead of replaying the full conversation.
- Loads tools only when the next action needs them.
- Picks the least expensive capable path: a saved result, local code, a
  cheaper model, or a fresh strong worker — never a model call just to pick a
  model.
- Matches answer length to the request and allows only one bounded repair
  attempt per failure.
- Counts every model call (fresh and reused input, output, retries, model
  used) so a change only counts as a saving if the combined total falls.

## When To Use It

Use it when a user says things like:

- "I keep hitting my usage limit."
- "This chat is getting long and expensive."
- "Find the answer in this transcript without pasting the whole thing."
- "Make this workflow cheaper without changing how I use it."

Skip it for a single short request where there is nothing to select, save, or
route to a cheaper path.

## What It Cannot Do

It cannot erase the input already sent to start the current turn — that model
call has already begun. Use an upstream gateway (the skill calls this pattern
"Ringer") when a request must be reduced or redirected before the main model
ever sees it. Without a gateway, the skill still helps: it stops the current
model from loading whole files, opening unused tools, repeating the transcript
in worker prompts, calling an expensive model for simple work, writing an
unasked-for essay, or entering a costly retry loop.

## Scripts

- `scripts/select_context.py` — selects a small, source-backed packet from
  local files or a transcript without a model call.
- `scripts/state_delta.py` — saves an accepted result and packages it with
  just the next requested change.
- `scripts/context_packet.py` — the scoring/packing library the selector
  builds on.

## Install

```sh
npx @agent-native/skills@latest add --skill token-saver
```

Credit: adapted from Nate B. Jones' token-saver skill.
