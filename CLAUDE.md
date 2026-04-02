# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Full developer guidelines are in `AGENTS.md`. This file highlights what's most critical and non-obvious for Claude Code.

## Commands

```bash
npm run dev       # Dev server (Turbopack) — also runs predev to generate icon-data.json
npm run build     # Production build — runs prebuild scripts automatically
npm run lint      # ESLint (Next.js + TypeScript rules)
```

**Always use `npm run build`, never `npx next build`** — it may install the wrong Next.js version.

No test framework is configured. There are no test files or `test` script.

## Architecture

Personal portfolio site: **Next.js 15 App Router + React 19 + TypeScript + Tailwind CSS v4**. Single page (`app/page.tsx`), single-column layout, deployed on Netlify.

**Data sources:**
- Static typed arrays in `app/data/` (experiences, skills, education, apps)
- GitHub API fetched server-side in `app/lib/github.ts` with 1-hour caching, streamed via `<Suspense>` in `page.tsx`
- Shared constants (GitHub username, social URLs) in `app/lib/constants.ts`

**Server vs. Client Components:** Almost everything is a Server Component. Only three components are Client: `SectionNav.tsx` (scroll-spy nav), `ThemeToggle.tsx` (dark mode toggle), and `IconProvider.tsx` (icon preloader). Only add `'use client'` when genuinely needed.

## Icon System (critical constraint)

Icons use `@iconify/react` with **offline-only bundled data** — the CSP header (`connect-src 'self'`) blocks the Iconify CDN entirely. All icons must be pre-bundled:

1. Add the icon name to `scripts/generate-icon-data.js`
2. Run `npm run build` or `npm run dev` to regenerate `app/icon-data.json`
3. Use `<Icon icon="prefix:name" />` normally

If an icon doesn't render, it's missing from the prebuild script.

## Dark Mode

Uses Tailwind v4 CSS-first config: `@custom-variant dark (&:where(.dark, .dark *))` in `globals.css` — **not** `tailwind.config.ts`. Always add `dark:` variants alongside light mode classes.

Common color mappings: `bg-white` → `dark:bg-gray-900`, `bg-gray-50` → `dark:bg-gray-800`, `text-gray-900` → `dark:text-white`, `text-gray-600` → `dark:text-gray-300`, `border-gray-200` → `dark:border-gray-700`.

## Code Style

- **Indentation:** Match the file you're editing. New files use tabs.
- **Components:** `export default function ComponentName()` (function declarations, not arrow functions)
- **Styling:** Tailwind utility classes only — no CSS modules or custom class names
- **TypeScript:** Strict mode. Path alias `@/*` maps to project root.
- **Imports order:** React/Next.js → third-party → local (`@/` alias for cross-directory, relative for same-directory)
