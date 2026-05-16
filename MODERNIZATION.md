# Modernization Roadmap

Recommendations for modernizing the portfolio site, organized by priority.

---

## P0 — Critical

### ~~1. Deduplicate GitHub API Calls~~ DONE

Created `app/lib/github.ts` — a server-side data fetching module that calls the GitHub API once with `{ next: { revalidate: 3600 } }` caching. Data is fetched in `page.tsx` (server component) and passed as props to `GithubStatsCard` and `GithubProjects`. Eliminated ~16 client-side API calls per page load.

### ~~2. Move GitHub Data to Server Components~~ DONE

Replaced the client-side `useGithub` hook with server-side `fetchGithubData()` in `app/lib/github.ts`. `page.tsx` is now an `async` server component that fetches data at build time (revalidated hourly). Added `<Suspense>` boundaries, extracted footer to `app/components/Footer.tsx` with dynamic copyright year. Removed `'use client'` from `GithubStats.tsx` and `GithubProjects.tsx`.

---

## P1 — High Impact

### ~~3. Replace `@iconify/react` Runtime Icon Fetching~~ DONE

Installed `@iconify-json/heroicons`, `@iconify-json/logos`, `@iconify-json/mdi`, `@iconify-json/simple-icons` for local icon resolution. Since most components are now server components (from P0-2), icons render as inline SVGs at build time — zero runtime CDN requests. Added all JSON packages to `optimizePackageImports` in `next.config.ts`.

### ~~4. Remove Unnecessary `'use client'` from `Apps.tsx`~~ DONE

Removed `'use client'` directive. Component now renders as a Server Component, reducing client JS bundle.

### ~~5. Add `priority` to LCP Image~~ DONE

Added `priority` prop to the profile photo `<Image>` in `Intro.tsx`. Also improved alt text from `"Image of Josh"` to `"Joshua Zone, Software Engineering Leader"`.

### ~~6. Fix Stray Quote in Image Alt Text~~ DONE

Fixed malformed alt text in `Experience.tsx` and `Education.tsx` — removed stray trailing quote from template literals.

---

## P2 — Medium Impact

### ~~7. Fix SEO Gaps~~ DONE

- Added `metadataBase: new URL("https://zonejm.netlify.app")` for proper URL resolution
- Added `alternates: { canonical: "/" }` for canonical URL
- Removed placeholder `google: "your-google-verification-code"` verification entry
- Note: OpenGraph image not added (requires an actual OG image asset to be created/uploaded)

### ~~8. Remove Dead Code~~ DONE

- Deleted `app/components/ErrorBoundary.tsx` (never imported anywhere)
- Deleted `app/hooks/useGithub.tsx` (replaced by `app/lib/github.ts` server-side module) and removed empty `hooks/` directory
- Unused tailwind config entries addressed in item 9 below

### ~~9. Clean Up Tailwind v4 Configuration~~ DONE

- Removed redundant color definitions (were exact Tailwind defaults)
- Removed unused `./pages/**/*` and `./components/**/*` content paths
- Removed unused animations (`fade-in`, `slide-up`), keyframes, and `xs` breakpoint
- Moved `fontFamily` override to CSS-first `@theme` directive in `globals.css`
- `tailwind.config.ts` is now minimal (content path + empty theme)

### ~~10. Add Missing TypeScript Interfaces~~ DONE

- Added exported `Experience` interface to `app/data/experiences.ts` and typed the array
- Added exported `Education` interface to `app/data/education.ts` and typed the array
- Exported the existing `App` interface in `app/data/apps.ts`

### ~~11. Fix Accessibility Gaps~~ DONE

- Added `aria-label` to all social links in `Socials.tsx` (GitHub, LinkedIn, Kaggle, X)
- Added `role="status"` and `aria-label` with `sr-only` text to loading spinners in `page.tsx` Suspense fallbacks
- Added `aria-label="Profile sidebar"` to `<aside>` in `page.tsx`
- Improved `Intro.tsx` alt text to descriptive `"Joshua Zone, Software Engineering Leader"` (done in item 5)

---

## P3 — Cleanup / Polish

### ~~12. Standardize Design System~~ DONE

- Changed outer `<div>` to `<section>` in `GithubProjects.tsx`, `Apps.tsx`, and `About.tsx` (now all main content sections use `<section>`)
- Standardized all section headers to `text-xl md:text-2xl` with `mb-6 md:mb-8` (Education previously used fixed `text-2xl` and `mb-8`)
- Standardized Education card padding from fixed `p-8` to responsive `p-6 md:p-8`
- Fixed closing `</div>` that should have been `</section>` in `GithubProjects.tsx`
- Fixed stray space in `</section >` closing tags in `Education.tsx` and `Experience.tsx`
- About section header margin updated from `mb-6` to `mb-6 md:mb-8`

**Files:** `GithubProjects.tsx`, `Apps.tsx`, `About.tsx`, `Education.tsx`, `Experience.tsx`

### ~~13. Code Quality Fixes~~ DONE

- Created `app/lib/constants.ts` with `GITHUB_USERNAME`, `REPO_NAME`, and `SOCIAL_URLS` constants — single source of truth
- Updated `github.ts` to import `GITHUB_USERNAME` from constants (was local `const`)
- Updated `Socials.tsx` to use `SOCIAL_URLS.*` and `GITHUB_USERNAME` (replaced 4 hardcoded URLs + display text)
- Updated `layout.tsx` structured data `sameAs` array to use `SOCIAL_URLS.*` (replaced 3 hardcoded URLs)
- Updated `Footer.tsx` repo link to use `SOCIAL_URLS.repo` (replaced 1 hardcoded URL)
- `jzone1366` now appears only in `app/lib/constants.ts`
- Stray `</section >` spaces already fixed in item 12; footer already extracted and copyright year made dynamic in item 2

**Files:** `app/lib/constants.ts` (new), `app/lib/github.ts`, `app/components/Socials.tsx`, `app/layout.tsx`, `app/components/Footer.tsx`

### ~~14. Modernize Security Headers~~ DONE

- Removed deprecated `X-XSS-Protection` header (can introduce vulnerabilities in older browsers)
- Added `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (2-year HSTS)
- Added `Content-Security-Policy` with restrictive directives: `default-src 'self'`, `script-src 'self' 'unsafe-inline'` (needed for JSON-LD and Next.js hydration), `style-src 'self' 'unsafe-inline'` (needed for Tailwind/Next.js), `img-src 'self' data:`, `font-src 'self'` (next/font self-hosts), `connect-src 'self'`, `frame-ancestors 'none'`

**File:** `next.config.ts`

### ~~15. Adopt React 19 Features~~ DONE

- **`<Suspense>` boundaries** — Already added in item 2 (P0-2). GitHub stats and projects are wrapped in `<Suspense>` with skeleton fallbacks in `page.tsx`
- **`use()` hook** — Not applicable. The site now uses server-side data fetching (`async` server components with `fetch`), so there are no client-side promises to unwrap. The `use()` hook would only be relevant if we reverted to client-side fetching.

**Files:** `app/page.tsx` (Suspense already in place)
