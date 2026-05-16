# AGENTS.md

Guidelines for AI coding agents working in this repository.

## Project Overview

Personal portfolio/CV website built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**. Single-page, single-column layout deployed on Netlify. The site fetches live GitHub data via server-side `fetchGithubData()` in `app/lib/github.ts`, streamed through `<Suspense>` boundaries. Supports dark mode with class-based toggling.

## Repository Structure

```
app/
  layout.tsx              # Root layout (metadata, fonts, JSON-LD, theme FOUC script)
  page.tsx                # Main page — single-column layout with all sections
  globals.css             # Global styles (Tailwind imports, dark mode variant, print styles)
  build-info.json         # Auto-generated at prebuild (gitignored)
  icon-data.json          # Auto-generated icon subsets at prebuild (gitignored)
  icon.svg                # Favicon (Next.js file-based metadata)
  opengraph-image.tsx     # OG image generation (Next.js file-based metadata)
  robots.ts               # Next.js robots.txt generation
  sitemap.ts              # Next.js sitemap generation
  components/             # React components (PascalCase filenames)
  data/                   # Typed data arrays (camelCase filenames)
  lib/                    # Shared utilities and server-side logic
    github.ts             # GitHub API data fetching (server-side, cached 1h)
    constants.ts          # Shared constants (GITHUB_USERNAME, SOCIAL_URLS)
scripts/
  generate-build-info.js  # Prebuild script: writes git info to build-info.json
  generate-icon-data.js   # Prebuild script: extracts icon subsets to icon-data.json
public/
  companies/              # Company logo images
  schools/                # School logo images
  apps/                   # App icons
  apple-touch-icon.svg    # Apple touch icon
  selfie.jpg              # Profile photo
  resume.pdf              # Downloadable resume
```

### Page Layout (single-column, top to bottom)

1. **Profile Header** (`Intro.tsx`) — Photo, name, title, badges, bio, contact bar, social links, theme toggle
2. **Experience** (`Experience.tsx`) — Work history with expandable details
3. **Skills** (`Skills.tsx`) — Skills grid grouped by category with proficiency indicators
4. **About** (`About.tsx`) — Focus areas and current work
5. **Projects** (`GithubProjects.tsx`) — Featured apps + GitHub repos grid
6. **Education + GitHub Stats** (`SidebarEducation.tsx` + `GithubStats.tsx`) — Side-by-side in a 2-col grid
7. **Footer** (`Footer.tsx`) — Build info, source link, copyright

### Components

| Component | Type | Description |
|---|---|---|
| `About.tsx` | Server | About section with focus areas and current work |
| `Experience.tsx` | Server | Work experience with expandable details (uses Headless UI Disclosure) |
| `Footer.tsx` | Server | Site footer with build info and links |
| `GithubProjects.tsx` | Server | Projects grid — featured apps + GitHub repos |
| `GithubStats.tsx` | Server | GitHub stats cards + top languages |
| `IconProvider.tsx` | **Client** | Preloads bundled icon data via `addCollection()` — wraps page content |
| `Intro.tsx` | Server | Profile header with photo, contact info, social links |
| `SectionNav.tsx` | **Client** | Floating bottom pill nav bar with scroll-spy (hides at footer) |
| `SidebarEducation.tsx` | Server | Compact education card |
| `Skills.tsx` | Server | Full-width skills grid grouped by category with proficiency indicators |
| `ThemeToggle.tsx` | **Client** | Dark/light/system theme toggle with localStorage |

### Data Files

| File | Exports |
|---|---|
| `app/data/apps.ts` | `App` interface + `apps` array (featured app projects) |
| `app/data/education.ts` | `Education` interface + `educations` array |
| `app/data/experiences.ts` | `Experience` interface + `experiences` array |
| `app/data/skills.ts` | `Skill` interface + `skills` array (with proficiency levels) |

## Build / Lint / Test Commands

Package manager: **npm** (v11.2.0, specified in `packageManager` field)

**IMPORTANT:** Always use `npm run build`, never `npx next build` (it may install the wrong Next.js version).

```bash
# Development server (uses Turbopack)
npm run dev

# Production build (runs prebuild scripts automatically)
npm run build

# Start production server
npm run start

# Lint (ESLint with Next.js rules)
npm run lint
```

### Testing

No test framework is currently configured. There are no test files, no test runner (Jest/Vitest/Playwright), and no `test` script in package.json. If adding tests, install a framework and add a `test` script.

### Prebuild Scripts

`npm run build` automatically runs two prebuild scripts (via the `prebuild` npm lifecycle hook):

1. `scripts/generate-build-info.js` — Extracts git commit date and hash into `app/build-info.json` (imported in `Footer.tsx`)
2. `scripts/generate-icon-data.js` — Extracts only the icons used in the site from `@iconify-json/*` packages into `app/icon-data.json` (~77KB). This avoids runtime API calls to `api.iconify.design`.

`npm run dev` runs `predev` which generates `icon-data.json` only (build-info is not needed for dev).

### Icon System

Icons use `@iconify/react` with **offline bundled data** (no runtime API calls). The `IconProvider.tsx` client component wraps the page and preloads icon subsets from `app/icon-data.json` via `addCollection()`. To add a new icon:

1. Add the icon name to the appropriate array in `scripts/generate-icon-data.js`
2. Run `npm run build` (or `npm run dev`) to regenerate `icon-data.json`
3. Use `<Icon icon="prefix:name" />` in your component as usual

The CSP header (`connect-src 'self'`) blocks the Iconify API, so all icons MUST be bundled. If an icon doesn't appear, it's likely missing from the prebuild script.

## Code Style Guidelines

### TypeScript Configuration

- **Strict mode** is enabled (`"strict": true` in tsconfig.json)
- **Path alias:** `@/*` maps to project root (e.g., `import foo from "@/app/data/foo"`)
- JSON imports are enabled (`resolveJsonModule: true`)
- Target: ES2017, module resolution: `bundler`

### Component Patterns

- **Server Components** are the default. Only add `'use client'` when the component needs React hooks, state, or browser APIs.
- Client components: `SectionNav.tsx`, `ThemeToggle.tsx`, `IconProvider.tsx`
- Use `export default function ComponentName()` (function declarations, not arrow functions) for components.
- No class components exist in the codebase.

### File Naming

- **Components:** PascalCase (`GithubStats.tsx`, `IconProvider.tsx`)
- **Lib files:** camelCase (`github.ts`, `constants.ts`)
- **Data files:** camelCase (`skills.ts`, `experiences.ts`)
- **Config files:** camelCase (`next.config.ts`, `tailwind.config.ts`)

### Naming Conventions

- **Components:** PascalCase (`GithubStatsCard`, `IconProvider`)
- **Interfaces/Types:** PascalCase (`Repository`, `GithubStats`, `Skill`, `App`)
- **Functions/Variables:** camelCase (`fetchGithubData`, `skillsByCategory`)

### Imports

Order imports as follows:
1. React / Next.js framework imports (`react`, `next/link`, `next/image`)
2. Third-party libraries (`@headlessui/react`, `@iconify/react`)
3. Local modules — data, lib, components (use `@/` alias or relative paths)

```typescript
import { Suspense } from 'react';
import { Disclosure } from "@headlessui/react";
import { Icon } from '@iconify/react';
import experiences from "@/app/data/experiences";
import { fetchGithubData } from "./lib/github";
```

Both `@/` path aliases and relative imports are used in the codebase. Either is acceptable, but prefer `@/` for cross-directory imports and relative paths for same-directory imports.

### Formatting

- No Prettier or EditorConfig is configured
- The codebase has mixed indentation (tabs in some files, 2-space indentation in others)
- When editing an existing file, match the indentation style already used in that file
- For new files, use **tabs** (this is the more common style in the project)

### Styling

- Use **Tailwind CSS utility classes** exclusively — no CSS modules, styled-components, or custom class names
- **Dark mode** uses `@custom-variant dark (&:where(.dark, .dark *))` in `globals.css` (Tailwind v4 CSS-based config). Always add `dark:` variants alongside light mode classes.
- Common design tokens used throughout:
  - Cards: `bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/75 dark:border-gray-700 p-6 md:p-8 shadow-sm`
  - Text: `text-gray-900 dark:text-white` (headings), `text-gray-600 dark:text-gray-300` (body)
  - Subtle backgrounds: `bg-gray-50 dark:bg-gray-800`, `bg-blue-50 dark:bg-blue-900/50`
  - Hover states: `hover:border-blue-500/50`, `group-hover:` patterns
  - Transitions: `transition-all duration-200`
  - Responsive: mobile-first with `sm:`, `md:`, `lg:`, `xl:` breakpoints
- Print styles are defined in `globals.css` (force light mode for print)

### Error Handling

- Use try/catch blocks for async operations (see `page.tsx` for `GithubStatsSection` and `GithubProjectsSection` patterns)
- Log errors to console: `console.error('Context message:', err)`
- Display user-friendly fallback UI when errors occur (not raw error messages)

### Data Layer

- Static data lives in `app/data/` as typed arrays with default exports
- Define and export TypeScript interfaces alongside data (e.g., `Skill` in `skills.ts`, `App` in `apps.ts`)
- Dynamic data (GitHub) is fetched server-side via `fetchGithubData()` in `app/lib/github.ts` with `{ next: { revalidate: 3600 } }` caching
- Shared constants (GitHub username, social URLs) live in `app/lib/constants.ts`

### SEO

- Rich metadata is configured in `app/layout.tsx` (OpenGraph, Twitter Cards, favicon, apple-touch-icon)
- OG image is generated via `app/opengraph-image.tsx` (Next.js `ImageResponse`)
- JSON-LD structured data (Schema.org `Person` type) is embedded in the layout
- Schema.org microdata attributes (`itemScope`, `itemType`, `itemProp`) are used on Experience and Education components
- `robots.ts` and `sitemap.ts` handle SEO routes

## Dark Mode

- **Implementation:** `@custom-variant dark (&:where(.dark, .dark *))` in `globals.css` (Tailwind CSS v4 — does NOT use `tailwind.config.ts` for dark mode)
- **Toggle:** `ThemeToggle.tsx` cycles through light → dark → system
- **Persistence:** Preference stored in `localStorage` under key `theme`
- **FOUC prevention:** Inline script in `layout.tsx` reads localStorage before render to set the `dark` class on `<html>`. The `<html>` tag has `suppressHydrationWarning` to prevent React hydration mismatch.
- **System preference:** When set to "system", listens to `prefers-color-scheme` media query changes
- **Print:** Forces light mode via `globals.css` print styles
- **Color mapping:** `bg-white` → `dark:bg-gray-900`, `bg-gray-50` → `dark:bg-gray-800`, `text-gray-900` → `dark:text-white`, `text-gray-600` → `dark:text-gray-300`, `border-gray-200` → `dark:border-gray-700`

## ESLint Configuration

ESLint v9 flat config (`eslint.config.mjs`) extends:
- `next/core-web-vitals` — strict Next.js rules
- `next/typescript` — TypeScript-specific rules

Run `npm run lint` before committing.

## Next.js Configuration

Key settings in `next.config.ts`:
- Compression enabled, `X-Powered-By` header removed
- Image optimization: WebP + AVIF formats
- `optimizePackageImports` for `@iconify/react`
- Security headers on all routes (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, CSP with `connect-src 'self'`, HSTS)

## Deployment

- Deployed on **Netlify** (site: `zonejm-next`)
- No `netlify.toml` in the repo — configuration is managed via the Netlify dashboard
- No CI/CD pipeline config files in the repository

## Dependencies

- **Runtime:** `next`, `react`, `react-dom`, `@headlessui/react`, `postcss`
- **Dev:** `typescript`, `eslint`, `eslint-config-next`, `@eslint/eslintrc`, `tailwindcss`, `@tailwindcss/postcss`, `@iconify/react`, `@iconify-json/heroicons`, `@iconify-json/logos`, `@iconify-json/mdi`, `@iconify-json/simple-icons`, `@types/node`, `@types/react`, `@types/react-dom`
