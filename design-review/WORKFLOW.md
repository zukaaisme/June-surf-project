# Design review loop — operator's reference

## Steps

1. **Implement changes** — usually via `fullstack-dev` agent or direct edits.
2. **Build** — `npm run build` (must pass clean).
3. **Serve prod** — `npm run start` in background. (Note: `npm run dev` with Turbopack chokes on certain arbitrary-value Tailwind classes. Use prod build for review.)
4. **Capture** — `node design-review/capture.mjs`. Saves 22 screenshots to `design-review/snaps/` (desktop + mobile, per-section + full-page).
5. **Review** — invoke the `design-reviewer` subagent and point it at `design-review/snaps/`. It writes its findings to `design-review/last-review.md`.
6. **Fix top items** — hand the priority list back to `fullstack-dev`.
7. **Repeat** — loop until stable.

## Quick commands

```bash
# Restart prod server cleanly
kill -9 $(lsof -ti :3000) 2>/dev/null; sleep 2
cd "/Users/sx/Desktop/Серф кэмп"
npm run build && nohup npm run start > /tmp/surf-prod.log 2>&1 &

# Capture screenshots
node design-review/capture.mjs

# Then in main Claude chat:
# "Review the latest snapshots"
# (will trigger design-reviewer agent)
```

## Files

| File | Purpose |
|---|---|
| `.claude/agents/design-reviewer.md` | Subagent definition — review heuristics, output format |
| `design-review/capture.mjs` | Puppeteer script — captures all sections desktop + mobile |
| `design-review/snaps/*.png` | Latest captured screenshots |
| `design-review/last-review.md` | Latest review output (overwritten each run) |
| `design-review/redesign-plan.md` | Active design spec (from earlier ux-designer run) |
| `design-review/critique.md` | Initial critique that drove the redesign |
| `design-review/export/` | HTML/CSS bundle for external AI validation |

## What this loop catches

- Beige overuse / mono-color section drift
- Spacing inconsistencies (off-scale values, mismatched gaps)
- Hierarchy collapses (heaviest weight on wrong element)
- Component variant drift (one-off card / button styles)
- Cross-section consistency breaks (caption position, divider style)
- Mobile collisions (text under photos, clipped CTAs)
- Photo content mismatches (skiers in surf section, etc.)

## What this loop does NOT do

- Redesign tokens / palette / fonts (locked).
- Replace the `ux-designer` upfront-planning role.
- Validate with humans / users — that's a different test.

## Tip

Keep `design-review/last-review.md` in git history. The reviewer will read its previous output to verify what's been resolved.
