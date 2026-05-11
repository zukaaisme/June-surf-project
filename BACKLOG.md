# Backlog — Surf Camp Morocco

> Decisions, temporary fixes, open items.
> Append-only. Date format: YYYY-MM-DD.

---

## Decisions (locked unless overturned)

### 2026-05-11 — Backend deferred
- Form submissions currently go to `console.log` stub in `app/api/apply/route.ts`.
- Operator chose **Resend (email)** over Telegram. Started installing `resend` SDK, then paused: "I'll specify later" — token, sender domain, recipient email all TBD.
- Resend package uninstalled to keep `package.json` clean until backend resumes.
- Schema (`lib/apply-schema.ts`) extended with optional `instagram` field; form now registers it. Backend will see the field when wired.

### 2026-05-11 — Hero text-shadow values
- Per Figma iter 3: `0 1px 16px rgba(0,0,0,0.25)` on both headline and subhead.
- Previous values (0 2px 16px 0.25, 0 1px 12px 0.3) deprecated.

### 2026-05-11 — Primary pink swap
- `--color-magenta-light` token: `#FFB0FF` → `#FDB3F3` (Figma "основной розовый").
- Token name kept; only the hex changed. All previous uses inherit automatically.

### 2026-05-11 — Tags border
- `block_tag-place` and `block_tag-map`: no border per Figma. Previously had `2px solid bg-color` (visual no-op but extra DOM noise).
- Both tags underlined. Tamraght bg = mist; Maps bg = new pink.

### 2026-05-11 — Not_a headings
- All three black (`text-black`, was magenta-light then opacity gradient before that).
- Tilted: marathon -2°, resort +1°, checklist -2°.
- Hover behaviour: hovering the card straightens the heading (rotate 0deg). Layout must not shift — heading container has fixed height, transform is layout-neutral.

### 2026-05-11 — Team card colours
- Default: `bg-bone` (#EAEBEC) — three of four cards.
- Hover: `bg-mist` (#EEF5FF) — matches Zukaa card default in Figma.

### 2026-05-11 — Contact chips trimmed
- Email + WhatsApp removed per operator.
- Remaining: Telegram, Instagram only.
- Layout switched from vertical (label over value) to horizontal (label + value on one line, 56 px tall, 308 px wide).

### 2026-05-10 — Hover behaviour
- `.hover-fade`, `.btn-nav`, `.btn-submit` → `scale(0.95)` + `opacity 0.95` on hover, 160 ms ease.
- `prefers-reduced-motion` keeps only opacity.

### 2026-05-10 — Footer rotations
- Headline +2°, date -2°, email +1.67° per Figma.
- Animation: spring snap on viewport enter with staggered delays (0.15s / 0.35s / 0.55s) — visible "punch" rather than scroll-tracked drift.

### 2026-05-10 — Palette cleanup
- Dropped tokens: `--color-ink`, `--color-magenta` (single accent), `--color-pink`.
- Active: paper, slate, bone, mist, magenta-light.

---

## Temporary fixes (revisit)

### 2026-05-11 — Photo section hidden
- `<PhotoSection />` commented out in `app/page.tsx`. Component file kept under `components/photo-section.tsx`.
- Reason: operator request "while we're working on the site". Asset and parallax wiring stay intact.
- **Restore:** uncomment the import and the `<PhotoSection />` line.

### 2026-05-10 — Hero video 16 MB raw mp4
- Served at full quality from `public/figma/hero-video.mp4`. No `<source>` tag for webm/h264 split.
- Long-term: encode to webm (vp9) + mp4 (h264) fallback, target ≤ 4 MB total. Add `poster` image to fix LCP candidate.

### 2026-05-10 — Hover scale on rotated footer signature
- `motion.span` for date/email rotates via inline transform; parent `<a class="hover-fade">` does scale on hover. They're on different elements so they compose — but if either ever lands on the same node, the inline `transform` will win over the `:hover` rule. Keep them split.

### 2026-05-09 — design-review/snaps committed to repo
- Screenshots from `capture.mjs` (~18 MB) are in git history. `.gitignore` now covers new ones, but the existing files stay tracked.
- Cheap to keep; ignore if it bothers you. Untrack with `git rm --cached -r design-review/snaps/`.

---

## Open items (P-prioritised)

### P1 — Need operator input
- **Backend for form** — Resend account, API key, sender domain, recipient email.
- **Real WhatsApp number** — placeholder `+212 600 000 000` in `content/site.ts`.
- **Bot/email for application notifications** — same as above.

### P2 — Polish
- Encode hero video to webm+mp4, add poster (~12 MB savings + LCP fix).
- Strip unused `figma-static.html` from `design-review/` (legacy artifact).
- Optional Vercel Analytics + Speed Insights setup.

### P3 — Nice-to-have
- Real photo crops for each pricing tier (currently photos `/figma/pricing/tier-0X.png` are stand-ins from Figma).
- Replace stub Unsplash gallery photos with operator's real Tamraght photos when shoot is done.

---

## How to use this file
- Add an entry under **Decisions** when something is locked.
- Add under **Temporary fixes** when shipping a workaround.
- Add under **Open items** when blocked on someone or future polish.
- Date every entry. Don't delete — strike through (`~~`) or move under a "Reverted" section if a decision is overturned.
