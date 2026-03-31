# Layout & Content Roadmap

Recommendations for improving layout, content quality, UX, accessibility, and polish. Organized by priority.

---

## P0 — Bugs & Broken Behavior

### 1. ~~Fix placeholder phone link~~ ✅ DONE

Replaced the `<Link href="tel:+1234567890">` with a plain `<div>` in `Details.tsx`, matching the Location item pattern. The display text still says "Available upon request" but is no longer a clickable link that would dial a stranger's number.

**File:** `app/components/Details.tsx`

### 2. ~~Fix ineffective Suspense boundaries~~ ✅ DONE

Removed the `GithubSection` wrapper function and `async` from `Home()`. Created two async server components — `GithubStatsSection` and `GithubProjectsSection` — that each call `fetchGithubData()` internally. These are wrapped in `<Suspense>` with dedicated loading fallbacks (`GithubStatsLoading`, `GithubProjectsLoading`), so Next.js can stream them independently. Also eliminated duplicate GitHub stats rendering (mobile/desktop).

**File:** `app/page.tsx`

---

## P1 — Mobile UX & Navigation

### 3. ~~Collapse sidebar on mobile~~ ✅ DONE

Created `SidebarToggle.tsx` client component. On mobile, only photo/name/title/badges/bio are visible; Details, Socials, Skills, and GitHub Stats are behind a "View full profile" toggle. On desktop (`lg:`), uses `display: contents` so children participate directly in the parent flex layout.

**Files:** `app/components/SidebarToggle.tsx` (new), `app/page.tsx`

### 4. ~~Add section navigation~~ ✅ DONE

Created `SectionNav.tsx` client component with a floating bottom pill nav bar. Uses IntersectionObserver for scroll-spy to highlight the current section. Appears after 300px scroll. Added `id` attributes to all section components: `experience`, `about`, `apps`, `education`, `projects`.

**Files:** `app/components/SectionNav.tsx` (new), `app/page.tsx`, section components

### 5. ~~Add skip-to-content link~~ ✅ DONE

Added a visually-hidden skip link (`sr-only focus:not-sr-only`) as the first focusable element in the page, targeting `id="main-content"` on the `<main>` element.

**File:** `app/page.tsx`

### 6. ~~Fix sticky sidebar overflow~~ ✅ DONE

Added `lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto scrollbar-hide` to the `<aside>` element so the sidebar scrolls independently when content exceeds the viewport.

**File:** `app/page.tsx`

---

## P2 — Content Quality

### 7. ~~Rewrite About section~~ ✅ DONE

Replaced generic corporate boilerplate with specific, personal content: two narrative paragraphs naming actual companies and technical work, a "What I focus on" section with 4 concrete areas, and a "Currently" section mentioning the PitchTrack side project. Removed "Leadership Philosophy", "Core Values" buzzwords, and redundant "Key Achievements" grid.

**File:** `app/components/About.tsx`

### 8. ~~Deduplicate Intro stats~~ ✅ DONE

Replaced the 4 redundant metric cards (including 2 duplicate cost stats) with 3 distinct stats: "11+ Years", "9 Companies", "15+ Engineers Led". Changed from a 2-col to a 3-col grid.

**File:** `app/components/Intro.tsx`

### 9. ~~Fix education data~~ ✅ DONE

Changed "RPI" to "Rensselaer Polytechnic Institute (RPI)" for clarity. Removed the template comment `// Add more education entries here`.

**File:** `app/data/education.ts`

### 10. ~~Fix heading hierarchy~~ ✅ DONE

Changed the `<h2>` tagline "Software Engineering Leader" to a `<p>` element with the same styling, preserving visual appearance while fixing the document heading hierarchy.

**File:** `app/components/Intro.tsx`

### 11. ~~Display skill proficiency~~ ✅ DONE

Added three proficiency indicators to skill badges: (1) colored left border — `border-l-blue-500` for Expert, `border-l-blue-300` for Advanced, `border-l-gray-300` for Intermediate; (2) updated tooltips showing "Skill — Proficiency" format; (3) proficiency legend at the bottom of the Skills section.

**File:** `app/components/Skills.tsx`

---

## P3 — Print & Accessibility

### 12. ~~Fix print layout~~ ✅ DONE

Comprehensive print styles added to `globals.css`: forced single-column grid, hidden nav/footer/skip link, removed sticky positioning and overflow, URL display after external links via `::after`, `@page` margin/size rules, shadow removal, background cleanup, page-break prevention in cards, heading break-after avoidance.

**File:** `app/globals.css`

### 13. ~~Fix color contrast~~ ✅ DONE

Changed all `text-gray-400` to `text-gray-500` (4.6:1 contrast ratio, passes WCAG AA) across GithubProjects, Skills legend, and Footer. No instances of `text-gray-400` remain in any component.

**Files:** `app/components/GithubProjects.tsx`, `app/components/Footer.tsx`, `app/components/Skills.tsx`

### 14. ~~Add missing aria-labels~~ ✅ DONE

Added `aria-label` attributes to App Store/Play Store links in `Apps.tsx` (e.g., "Download PitchTrack on the App Store") and project card links in `GithubProjects.tsx` (e.g., "View project-name on GitHub").

**Files:** `app/components/Apps.tsx`, `app/components/GithubProjects.tsx`

---

## P4 — Missing Features & Polish

### 15. ~~Add favicon and OG image~~ ✅ DONE

Created an SVG "JZ" monogram favicon (`app/icon.svg`) using Next.js file-based metadata. Added an apple-touch-icon SVG (`public/apple-touch-icon.svg`). Created `app/opengraph-image.tsx` using Next.js `ImageResponse` to generate a 1200x630 OG image with name, title, stats, and blue gradient background. Added `icons` metadata to `layout.tsx`. All assets are statically generated at build time.

**Files:** `app/icon.svg` (new), `public/apple-touch-icon.svg` (new), `app/opengraph-image.tsx` (new), `app/layout.tsx`

### 16. ~~Merge thin sections~~ ✅ DONE

Moved the single Education entry to the sidebar as a compact component (`SidebarEducation.tsx`), placed below Skills. Merged the single Apps entry (PitchTrack) into the Projects section as a featured card with a "Featured" badge and app store links, displayed before GitHub repos. Removed the standalone `Apps.tsx` and `Education.tsx` components. Updated `SectionNav` to remove "Apps" and "Education" entries (now just Experience, About, Projects).

**Files:** `app/components/SidebarEducation.tsx` (new), `app/components/GithubProjects.tsx`, `app/page.tsx`, `app/components/SectionNav.tsx`, `app/components/Apps.tsx` (deleted), `app/components/Education.tsx` (deleted)

### 17. ~~Add dark mode~~ ✅ DONE

Implemented full dark mode support across every component:
- Added `darkMode: 'class'` to `tailwind.config.ts`
- Created `ThemeToggle.tsx` client component that cycles light → dark → system, persists in `localStorage`
- Added FOUC prevention inline script in `layout.tsx` that reads localStorage before render
- Added `dark:` variants to all 13 component files using consistent color mapping: `bg-white` → `dark:bg-gray-900`, `bg-gray-50` → `dark:bg-gray-800`, `text-gray-900` → `dark:text-white`, `text-gray-600` → `dark:text-gray-300`, `border-gray-200` → `dark:border-gray-700`
- Updated `globals.css` with forced light mode for print and dark mode focus ring
- ThemeToggle placed in sidebar, adds only ~0.4 kB to the bundle

**Files:** `tailwind.config.ts`, `app/components/ThemeToggle.tsx` (new), `app/layout.tsx`, `app/globals.css`, all 13 component files

### 18. ~~Clean up stale data and assets~~ ✅ DONE

Deleted unused `public/companies/playvs_logo.jpeg`. Removed `screenshots` field from the `App` interface and data in `app/data/apps.ts`. Removed template comments (`// We'll use an iOS icon`, `// You can add screenshot URLs here`).

**Files:** `public/companies/playvs_logo.jpeg` (deleted), `app/data/apps.ts`

### 19. ~~Update AGENTS.md~~ ✅ DONE

Complete rewrite of AGENTS.md with accurate information:
- Removed references to deleted `ErrorBoundary.tsx`, `withErrorBoundary` HOC, and `app/hooks/useGithub.tsx`
- Corrected client component list: `SectionNav.tsx`, `SidebarToggle.tsx`, `ThemeToggle.tsx` (not GithubStats, GithubProjects, Apps)
- Added documentation for `app/lib/` directory (`github.ts`, `constants.ts`)
- Added new components table with all 13 components and their types
- Added Dark Mode section with implementation details
- Added `@iconify-json/*` packages, `@eslint/eslintrc` to dependencies
- Added security headers (CSP, HSTS) to Next.js config section
- Added important note about using `npm run build` instead of `npx next build`
- Added SEO section covering OG image, favicon, and apple-touch-icon

**File:** `AGENTS.md`
