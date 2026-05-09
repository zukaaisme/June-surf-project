# Surf Morocco — Promo Landing Page

Production-ready Next.js landing page for a slow-travel surf trip in Morocco.
Cinematic editorial design. Minimal, warm, analog.

---

## Quick start

```bash
cd "Серф кэмп"
npm install
npm run dev
```

Open `http://localhost:3000`.

---

## Edit content

All content lives in `content/` — no code knowledge needed to change text or images.

| File | What to edit |
|------|-------------|
| `content/site.ts` | Brand name, hero headline, SEO title/description, social links |
| `content/trip.ts` | Dates, pricing, included items, organizer bios, activities list |
| `content/images.ts` | All photo URLs — change any Unsplash URL or swap for your own |

To swap the hero photo, update `images.hero.src` in `content/images.ts`.
Your own photos can be hosted on any CDN — add the domain to `next.config.ts` under `images.remotePatterns`.

---

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — click Deploy. Done.

No env vars needed until you wire the form backend.

---

## Connect domain

After deploying: Vercel dashboard → your project → Settings → Domains.
Follow the DNS instructions Vercel provides.
Docs: https://vercel.com/docs/projects/domains

---

## Wire form backend later

The application form currently logs submissions to the console and returns `{ ok: true }`.

To send real notifications, open `app/api/apply/route.ts` — the TODO comment at the top
explains both integration options (Telegram bot or Resend email).

1. Copy `.env.example` to `.env.local`.
2. Fill in the relevant keys.
3. Replace the `console.log` line with the API call described in the comment.
4. Add the keys to Vercel environment variables in the project dashboard.

---

## Design system

Colors, fonts, and spacing are defined in `app/globals.css` under `@theme`.
Typography: Fraunces (display serif), Inter (UI), JetBrains Mono (accent captions).

---

Built with Next.js 15, Tailwind CSS 4, Framer Motion.
