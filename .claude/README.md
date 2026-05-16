# .claude — How to use this folder

This folder is the **operating manual** for AI agents (Cursor, Claude Code, Claude Desktop) working on the Grecia Mejia Weddings website.

Everything an agent needs to make consistent, on-brand, scale-ready decisions lives here.

---

## Quick start

When opening this repo in Cursor for the first time:

1. **The AI will read `CLAUDE.md`** automatically. That file is the entry point.
2. **Specialized docs are loaded on demand** when their domain is relevant (design work pulls in `design-vision.md`, SEO work pulls in `seo-strategy.md`, etc.).
3. **Screenshots** in `screenshots/` are the visual canonical reference (gitignored — see below).
4. **Slash commands** in `commands/` automate frequent tasks (`/new-article`, `/new-destination`, etc.).
5. **Skills** in `skills/` are domain expertise the agent uses to validate, review, and write content.

---

## Folder structure

```
.claude/
├── README.md                       ← You are here
├── CLAUDE.md                       ← Primary entry point for AI agents
├── settings.json                   ← Permissions & conventions
│
├── file-structure.md               ← Where every file goes
├── website-structure.md            ← URL map, page sections, navigation
├── design-vision.md                ← Visual language, type, color, motion
├── i18n-strategy.md                ← Six-locale strategy (en/es/fr/pt/de/it)
├── seo-strategy.md                 ← The internal linking matrix
├── sanity-schema-guide.md          ← CMS schema patterns
├── content-model.md                ← Relationships between content types
│
├── commands/                       ← Slash commands
│   ├── new-article.md
│   ├── new-destination.md
│   ├── new-culture.md
│   ├── new-venue.md
│   ├── check-internal-links.md
│   └── check-article.md
│
├── skills/                         ← Domain expertise the agent applies
│   ├── internal-linking-checker.md
│   ├── translation-coordinator.md
│   └── editorial-voice.md
│
├── screenshots/                    ← Visual canonical reference (GITIGNORED)
│   ├── README.md
│   ├── HomePage.png
│   ├── destinatinPage.png
│   ├── IndividualDestination.png
│   ├── Multicultural-Weddings.png
│   ├── indivdual-Multicultural-Weddings.png
│   ├── Wedding-Venues.png
│   ├── Wedding-Venues-location.png
│   └── Individual-Wedding-Venues.png
│
└── gitignore-additions.txt         ← Lines to add to project .gitignore
```

---

## Documentation map

| Working on...                              | Read this                            |
| ------------------------------------------ | ------------------------------------ |
| Where a file should go                     | `file-structure.md`                  |
| Adding a route or page section             | `website-structure.md`               |
| Any UI/styling decision                    | `design-vision.md`                   |
| Translation, locale routing, hreflang      | `i18n-strategy.md`                   |
| Blog content, schema markup, link strategy | `seo-strategy.md`                    |
| Sanity schemas                             | `sanity-schema-guide.md`             |
| Reference fields between content types     | `content-model.md`                   |
| Writing or reviewing copy                  | `skills/editorial-voice.md`          |
| Reviewing an article for SEO               | `skills/internal-linking-checker.md` |
| Translation workflows                      | `skills/translation-coordinator.md`  |

---

## Slash commands available

| Command                 | Purpose                                                  |
| ----------------------- | -------------------------------------------------------- |
| `/new-article`          | Scaffold a new journal article with SEO matrix satisfied |
| `/new-destination`      | Scaffold a new destination page (sub-pillar)             |
| `/new-culture`          | Scaffold a new multicultural culture page                |
| `/new-venue`            | Scaffold a new venue page                                |
| `/check-article`        | Pre-publish checklist for an article                     |
| `/check-internal-links` | Audit internal link health across the content graph      |

---

## Critical setup steps

Before the first AI session in this repo:

### 1. Add to root `.gitignore`

Copy the contents of `gitignore-additions.txt` into your project's `.gitignore`. Critically:

```
.claude/screenshots/
```

The screenshots are reference material only. They should not be committed.

### 2. Confirm Cursor/Claude can read the folder

In Cursor, open the repo and confirm `.claude/CLAUDE.md` is loaded into context. The other docs load on demand.

### 3. Verify the tech stack assumptions

The docs assume:

- Next.js 16 (App Router, Turbopack)
- React 19 (Server Components default)
- Tailwind CSS 4 (CSS-first, NO `tailwind.config.ts`)
- Sanity with `@sanity/document-internationalization`
- `next-intl` for i18n
- Netlify hosting + Netlify Forms
- Six locales from day one (en, es, fr, pt, de, it)
- Cormorant Garamond + Inter + Pinyon Script via `next/font/google`
- Framer Motion + Lenis for animation

If any of these change, update `CLAUDE.md` and `settings.json` first.

---

## Maintaining these docs

These docs are **living documentation**. They should change as the project evolves.

**Update triggers:**

- New page type added → update `website-structure.md` and `file-structure.md`
- New content type added → update `sanity-schema-guide.md` and `content-model.md`
- Design tokens shift → update `design-vision.md`
- New locale added → update `i18n-strategy.md`
- New convention emerges → update `CLAUDE.md`
- Tech stack changes → update `CLAUDE.md` and `settings.json`

**Update process:**

1. Edit the relevant `.md` file
2. Cross-check if other docs reference the changed information
3. Commit the docs changes with the implementation that motivated them

**Anti-pattern:** Adding a one-off pattern in code without updating these docs. The next agent (or developer) won't know it exists, and patterns will fragment.

---

## When in doubt

The agent priority order:

1. **Screenshots** — when the question is visual ("what should this section look like?")
2. **The relevant doc** — when the question is structural or strategic
3. **Existing code patterns** — when the docs don't yet cover the case
4. **Ask the user** — when none of the above settles it

Never invent a new pattern silently. Either find it documented, find it in code, or surface the decision.
