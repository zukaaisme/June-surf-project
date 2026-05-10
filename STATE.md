# STATE — Surf Camp Morocco landing

> Read this file first when resuming work on this project.
> Last updated: **2026-05-10** · Branch: `v3` · Tag: `v3` (frozen checkpoint)

---

## Что это

Лендинг для slow-travel surf trip в **Tamraght, Morocco**. 7 дней, off-season (winter/summer 2026), 6 человек на cohort. Реальный референс: **Tazuri Surfhouse**.

Позиционирование: editorial / cinematic / film / surf-culture. **НЕ** startup, **НЕ** luxury retreat, **НЕ** обычный surf camp.

## Состояние на сегодня

- Бренч: **`v3`** (HEAD = `49254e9`, тег `v3`)
- Дизайн: per Figma (file `yLe2GVz177buM1WYfL4f7l`, frame `8:2235`) — magenta/cream coastal палитра
- Build чистый, prod на `:3000`
- Reviewer вердикт: ship-ready
- Архив страховки: `/Users/sx/Desktop/surf-camp-2026-05-10.tar.gz` (113 MB)

---

## Operator profile (краткая выжимка)

- SX, дизайнер + frontend-fluent. Не пишет код руками.
- Русскоязычный, код/коммиты/файлы — английский.
- Любит брevitи, списки, чёткие отчёты.
- Полный профиль: `~/.claude/CLAUDE.md`

---

## Tech stack

- **Next.js 15** (App Router, RSC, TypeScript strict)
- **Tailwind CSS 4** (CSS-first config через `@theme`)
- **Framer Motion** — только light fade-in (`<FadeIn>` в `components/ui/fade-in.tsx`)
- **react-hook-form + zod** для Apply формы
- **Bricolage Grotesque** + **Special Elite** + **Covered By Your Grace** (Google Fonts через `next/font`)
- **Puppeteer** (devDep) для capture script

## V3 design tokens

В `app/globals.css` `@theme`:

### Палитра (8 цветов — coastal magenta/cream)
| Token | Hex | Use |
|---|---|---|
| `--color-paper` | `#EFE3CC` | cream — primary page bg |
| `--color-ink` | `#1E1E1E` | near-black text |
| `--color-slate` | `#323740` | secondary text |
| `--color-bone` | `#EAEAEA` | dividers, pricing bg |
| `--color-mist` | `#EEF5FF` | people cards, contact chips |
| `--color-magenta` | `#F095F0` | primary accent |
| `--color-magenta-light` | `#FFB0FF` | nav CTA, footer, form button |
| `--color-pink` | `#FFD7FF` | palest accent |

### Type ramp (6 размеров)
- `.text-display` — clamp(3.25, 8vw, 6rem) — hero
- `.text-h1` — clamp(2.25, 4.5vw, 3.5rem) — section openers
- `.text-h2` — clamp(1.5, 2.4vw, 2rem) — subheads
- body inherits 18px / 1.5
- `.text-label` — 16px — buttons, nav
- `.text-caption` — 14px — mono captions

### Spacing
- Section vertical: `py-20 md:py-28` (стандарт)
- Tailwind стандартная шкала 1/2/3/4/6/8/12/16/20/24/30/40

---

## Sections (V3, 9 штук)

| # | Секция | Файл | Bg | Особенности |
|---|---|---|---|---|
| 01 | Nav | `components/nav.tsx` | white | fixed top, hamburger drawer mobile, anchor links |
| 02 | Hero | `components/hero.tsx` | full-bleed photo | "Real Morocco, Not Tourism." (Covered By Your Grace), bg-black/25 overlay |
| 03 | About | `components/about.tsx` | white | 4-col cards + 6-cell photo strip (5 фото + 1 dark slate void) |
| 04 | Gallery / Lifestyle | `components/lifestyle-collage.tsx` | full-bleed photo | interstitial single image |
| 05 | Included | `components/included.tsx` | mist | 7 inline SVG icons, 4+3 grid |
| 06 | People | `components/people.tsx` | white | 4 cards (Hassan/Yassine/Karim/Zuka), фото из `images.ts` |
| 07 | Pricing | `components/pricing.tsx` | bone | 3 тира — €800 / €960 / €1400 |
| 08 | Apply | `components/apply-form.tsx` | white | split layout (контакты левo / форма правo), 4 contact chips |
| 09 | Footer | `components/footer.tsx` | magenta-light | brand band |

Section IDs совпадают с anchor links nav.

---

## Operator's hard constraints (V3)

1. **Hover** — только `transition-opacity hover:opacity-30` (.hover-fade класс). Ничего другого.
2. **Top nav** — `position: fixed` (не sticky-on-scroll).
3. **Anchor links** — smooth-scroll (`html { scroll-behavior: smooth }`).
4. **Light fade-in** — `<FadeIn>` whileInView only. **Никаких** parallax, snap-scroll, complex stagger > 0.08s.
5. **Mobile responsive** — best practices, без отдельного Figma фрейма. Stack 1-col, hamburger nav, gallery h-scroll, pricing tiers стек.
6. **Figma — source of truth** для копи. (V2-cozy revision НЕ применять.)

---

## Файловая структура

```
app/
├── globals.css          # @theme tokens, type ramp, .hover-fade, .btn-nav, .btn-submit
├── layout.tsx           # fonts, metadata, OG, GrainOverlay
├── page.tsx             # композиция секций
├── api/apply/route.ts   # POST handler — STUB, only console.log
├── icon.tsx, robots.ts, sitemap.ts, opengraph-image.tsx

components/
├── nav.tsx, hero.tsx, about.tsx, lifestyle-collage.tsx,
├── included.tsx, people.tsx, pricing.tsx, apply-form.tsx, footer.tsx
└── ui/
    ├── fade-in.tsx      # Framer Motion wrapper
    ├── icons.tsx        # 7 inline SVG icons (community/food/place_to_stay/season/seven_days/surf/transfer)
    ├── grain-overlay.tsx
    └── section.tsx      # Section primitive (legacy from V2, кое-где ещё используется)

content/
├── site.ts              # brand, contacts, SEO meta
├── trip.ts              # dates, pricing, included, people, copy
└── images.ts            # photo URLs (Unsplash для people; remaining is /figma/*)

public/
└── figma/               # 11 production photos из Figma (hero, gallery, people-card, etc.)

design-review/
├── v3-spec.md           # implementation spec для V3
├── last-review.md       # latest design-reviewer audit
├── refs-analysis.md     # анализ endel.io / basehabitation
├── copy-revision.md     # cozy copy revision (НЕ используется в V3)
├── figma-static.html    # 136KB self-contained HTML для импорта в Figma
├── figma-v3/
│   ├── full-3k.png      # full-page screenshot из Figma
│   ├── figma-export.tsx # auto-translated React код из Figma MCP
│   └── (assets/ + design-context.json gitignored — регенерируемы)
├── capture.mjs          # puppeteer screenshot script
├── snaps/               # текущие screenshots (gitignored)
└── WORKFLOW.md          # инструкция как запускать review-loop

.claude/
├── agents/
│   └── design-reviewer.md  # custom subagent — visual audit on screenshots
└── launch.json          # для Claude Preview MCP (port 3000)

content/                 # копи + данные
public/figma/            # production assets
```

---

## Workflow / команды

```bash
cd "/Users/sx/Desktop/Серф кэмп"

# Dev (Turbopack — может глючить на arbitrary-value Tailwind классах)
npm run dev

# Production (рекомендую для дизайн-ревью)
npm run build && npm run start

# Refresh screenshots после правок
node design-review/capture.mjs

# Затем — design-reviewer subagent через главный чат:
# "review the latest snapshots" → агент диффает Figma vs implementation
```

### Review loop (per-iteration)

1. Implement (fullstack-dev или ручные правки)
2. `npm run build` — clean?
3. `kill -9 $(lsof -ti :3000); npm run start` — prod на :3000
4. `node design-review/capture.mjs` — refresh `design-review/snaps/`
5. Запустить design-reviewer agent → пишет в `design-review/last-review.md`
6. Применить fix list → goto 1

---

## Subagents в этом проекте

| Agent | Когда | Где |
|---|---|---|
| `fullstack-dev` | имплементация, refactor, bug fixes | global |
| `ux-designer` | upfront design specs, system planning | global |
| `copywriter` | copy revisions, tone calibration | global |
| `design-reviewer` | post-implementation audit (custom!) | local: `.claude/agents/design-reviewer.md` |
| `qa-tester` | flow testing, edge cases | global, не использовался ещё |

---

## Открытые задачи / backlog

### P1 — следующая итерация
- **Form backend**: сейчас stub (POST `/api/apply` логирует в консоль и возвращает `{ ok: true }`). Подключить **Telegram bot** или **Resend** — см. `.env.example` для placeholder ключей. TODO-комментарий в `app/api/apply/route.ts`.
- **Реальные фото**: Unsplash + Figma samples сейчас. Когда будут реальные снимки — заменить URL'ы в `content/images.ts` (один файл).
- **WhatsApp номер**: заглушка `+212600000000` в `content/site.ts:30`. Поменять на реальный.

### P2 — гигиена
- Inline `style={{...}}` в нескольких компонентах вместо utility classes. Систематизировать.
- `components/ui/section.tsx` — primitive из V2, частично используется в новых компонентах. Либо вернуть полностью, либо вычистить.

### P3 — будущие фичи
- Hero video — операторы спрашивал про bg видео. Формат: webm/vp9 + mp4/h264 fallback, max 3MB, муйт. Спецификация была обсуждена — см. чат-историю.
- Animated stroke in Figma — обсуждалось через SVG `pathLength` + Framer Motion. Реализуемо.
- GitHub remote backup — пока локальный архив, GitHub TBD.
- Vercel deploy — `devops-deployer` агент сделает за 5 мин когда нужно.

---

## История проекта (high-level chronology)

> Полная chat-история — в логах сессии. Тут — основные вехи.

### Phase 1 — Initial scaffold (V1 — coastal-film palette)
- Полное ТЗ от оператора
- ux-designer → план → fullstack-dev → имплементация
- Палитра: spice-themed (Anise/Cinnamon/Cardamom/Turmeric/...) → потом → coastal film (paper/ink/cinnamon/sriracha/satay/cardamom/cumin/belacan/anise)
- 10 секций
- 3 review passes — все P0/P1 закрыты

### Phase 2 — Systemic refactor (V2)
- Operator complaint: "code-driven, not design-driven"
- ux-designer написал v2-system.md — 1 параметрический шаблон + 4 оси вариативности + 4-beat ритм
- 10→9 секций (Apply + Footer слиты)
- People как dominant section (py-48)
- Дальше — copy revision (30 правок) от copywriter — declarative slogans → observational facts
- 3 review passes — ship-ready

### Phase 3 — Figma redesign (V3 — текущая)
- Operator сделал свой Figma-макет с magenta/cream палитрой
- Pulled через Figma MCP, сгенерировался reference code + screenshots
- Tokens заменены полностью (V2 coastal-film удалён)
- 8-fix Figma-alignment pass
- Ship-ready

### Phase 4 — Checkpoint (этот момент)
- Branches/tags вычищены — только `v3`
- STATE.md написан
- Local archive `/Users/sx/Desktop/surf-camp-*.tar.gz`

---

## Если возвращаешься через 2 недели / месяц

1. Открой этот файл
2. Открой `design-review/v3-spec.md` — что было задумано
3. Открой `design-review/last-review.md` — какой был последний audit
4. Открой Figma URL: `https://www.figma.com/design/yLe2GVz177buM1WYfL4f7l/Surf-Camp?node-id=8-2235`
5. `cd "/Users/sx/Desktop/Серф кэмп"; git status; git log --oneline`
6. `npm install` (если node_modules потерян)
7. `npm run start` или `npm run dev`
8. Открой `http://localhost:3000`
9. Дальше работаешь по WORKFLOW.md

---

## Key facts to remember

- **Cyrillic в пути** (`Серф кэмп`) — Turbopack-dev иногда выдает ошибки при arbitrary-value Tailwind классах. Используй `npm run start` (production build) для надёжности.
- **Branch v3** = main working branch. Старая ветка `main` (V1) удалена.
- **Figma MCP** активен. Любые правки от оператора через Figma можно подтянуть через `get_design_context` / `get_screenshot`.
- **Figma file**: `yLe2GVz177buM1WYfL4f7l`, frame `8:2235`.
- **Server port**: 3000 (production) или 3001 (если dev на 3000 уже занят).
- Operator пишет на русском, code/files/commits — английский.
