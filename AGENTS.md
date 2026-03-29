# AGENTS.md

Guidelines for AI coding agents working in this repository.

## Project Overview

Personal portfolio/CV website built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**. Single-page application deployed on Netlify. The site fetches live GitHub data via a custom hook.

## Repository Structure

```
app/
  layout.tsx          # Root layout (metadata, fonts, JSON-LD structured data)
  page.tsx            # Main page — renders sidebar + main content
  globals.css         # Global styles (Tailwind imports, print styles)
  build-info.json     # Auto-generated at prebuild (gitignored)
  robots.ts           # Next.js robots.txt generation
  sitemap.ts          # Next.js sitemap generation
  components/         # React components (PascalCase filenames)
  data/               # Typed data arrays (camelCase filenames)
  hooks/              # Custom React hooks (useXxx.tsx)
scripts/
  generate-build-info.js  # Prebuild script: writes git info to build-info.json
public/
  companies/          # Company logo images
  schools/            # School logo images
  apps/               # App screenshots/icons
```

## Build / Lint / Test Commands

Package manager: **npm** (v11.2.0, specified in `packageManager` field)

```bash
# Development server (uses Turbopack)
npm run dev

# Production build (runs prebuild script automatically)
npm run build

# Start production server
npm run start

# Lint (ESLint with Next.js rules)
npm run lint
```

### Testing

No test framework is currently configured. There are no test files, no test runner (Jest/Vitest/Playwright), and no `test` script in package.json. If adding tests, install a framework and add a `test` script.

### Prebuild Script

`npm run build` automatically runs `scripts/generate-build-info.js` first (via the `prebuild` npm lifecycle hook). This script extracts the latest git commit date and hash into `app/build-info.json`, which is imported in `page.tsx` for the footer.

## Code Style Guidelines

### TypeScript Configuration

- **Strict mode** is enabled (`"strict": true` in tsconfig.json)
- **Path alias:** `@/*` maps to project root (e.g., `import foo from "@/app/data/foo"`)
- JSON imports are enabled (`resolveJsonModule: true`)
- Target: ES2017, module resolution: `bundler`

### Component Patterns

- **Server Components** are the default. Only add `'use client'` when the component needs React hooks, state, or browser APIs.
- Client components: `GithubStats.tsx`, `GithubProjects.tsx`, `Apps.tsx`, `ErrorBoundary.tsx`
- Use `export default function ComponentName()` (function declarations, not arrow functions) for components.
- The `ErrorBoundary` is the only class component — it must be a class per React API requirements.

### File Naming

- **Components:** PascalCase (`GithubStats.tsx`, `ErrorBoundary.tsx`)
- **Hooks:** camelCase with `use` prefix (`useGithub.tsx`)
- **Data files:** camelCase (`skills.ts`, `experiences.ts`)
- **Config files:** camelCase (`next.config.ts`, `tailwind.config.ts`)

### Naming Conventions

- **Components/Classes:** PascalCase (`GithubStatsCard`, `ErrorBoundary`)
- **Interfaces/Types:** PascalCase (`Repository`, `GithubStats`, `Skill`)
- **Functions/Variables:** camelCase (`fetchGithubData`, `skillsByCategory`)
- **Hooks:** `useXxx` pattern (`useGithub`)

### Imports

Order imports as follows:
1. React / Next.js framework imports (`react`, `next/link`, `next/image`)
2. Third-party libraries (`@headlessui/react`, `@iconify/react`)
3. Local modules — data, hooks, components (use `@/` alias or relative paths)

```typescript
import { useEffect, useState, useCallback } from 'react';
import { Disclosure } from "@headlessui/react";
import { Icon } from '@iconify/react';
import experiences from "@/app/data/experiences";
```

Both `@/` path aliases and relative imports are used in the codebase. Either is acceptable, but prefer `@/` for cross-directory imports and relative paths for same-directory imports.

### Formatting

- No Prettier or EditorConfig is configured
- The codebase has mixed indentation (tabs in some files, 2-space indentation in others)
- When editing an existing file, match the indentation style already used in that file
- For new files, use **tabs** (this is the more common style in the project, used in config files and hooks)

### Styling

- Use **Tailwind CSS utility classes** exclusively — no CSS modules, styled-components, or custom class names
- Common design tokens used throughout:
  - Cards: `bg-white rounded-2xl border border-gray-200/75 p-6 md:p-8 shadow-sm`
  - Hover states: `hover:border-blue-500/50`, `group-hover:` patterns
  - Transitions: `transition-all duration-200`
  - Responsive: mobile-first with `sm:`, `md:`, `lg:`, `xl:` breakpoints
- Print styles are defined in `globals.css`

### Error Handling

- Use try/catch blocks for async operations
- Cast caught errors: `setError(err as Error)`
- Log errors to console: `console.error('Context message:', err)`
- Display user-friendly fallback UI when errors occur (not raw error messages)
- Use the `ErrorBoundary` component (or `withErrorBoundary` HOC) to wrap client components that may fail

### Data Layer

- Static data lives in `app/data/` as typed arrays with default exports
- Define and export TypeScript interfaces alongside data (e.g., `Skill` in `skills.ts`)
- Dynamic data (GitHub) is fetched via the `useGithub` custom hook in `app/hooks/useGithub.tsx`

### SEO

- Rich metadata is configured in `app/layout.tsx` (OpenGraph, Twitter Cards)
- JSON-LD structured data (Schema.org `Person` type) is embedded in the layout
- Schema.org microdata attributes (`itemScope`, `itemType`, `itemProp`) are used on Experience and Education components
- `robots.ts` and `sitemap.ts` handle SEO routes

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
- Security headers on all routes (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy)

## Deployment

- Deployed on **Netlify** (site: `zonejm-next`)
- No `netlify.toml` in the repo — configuration is managed via the Netlify dashboard
- No CI/CD pipeline config files in the repository

## Dependencies

- **Runtime:** `next`, `react`, `react-dom`, `@headlessui/react`, `postcss`
- **Dev:** `typescript`, `eslint`, `eslint-config-next`, `tailwindcss`, `@tailwindcss/postcss`, `@iconify/react`, `@types/node`, `@types/react`, `@types/react-dom`
