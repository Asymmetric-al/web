# React Router (Vite SPA) — Skill

**Name:** `react-router-spa`
**Purpose:** Ensure correct routing, code splitting, and navigation patterns in a React Router SPA.
Use this skill whenever editing route definitions or page components.

**Applies when:** Routing, navigation, lazy loading, or page-level structure changes.
**Do not use when:** The repo does not use React Router.

## Rules

- **Routes live in `App.tsx`:** Keep `Routes`/`Route` definitions centralized.
- **Lazy load pages:** Use `React.lazy` + `Suspense` for route-level code splitting.
- **Catch-all route:** Keep a `path="*"` route for 404 handling.
- **Client-only patterns:** Avoid Next.js-only patterns (`'use client'`, Server Actions).
- **Errors:** Use the existing error boundary pattern in `App.tsx`.

## Workflow

1. Update route definitions in `App.tsx`.
2. Add or update page components under `pages/**`.
3. Wire lazy imports and a `Suspense` fallback.
4. Confirm navigation and scroll behavior.
5. Ensure the 404 route remains last.

## Checklists

### Implementation checklist

- [ ] Route added/updated in `App.tsx`
- [ ] Page component placed in `pages/**`
- [ ] Lazy loading + `Suspense` fallback configured
- [ ] 404 route preserved

### Review checklist

- [ ] No Next.js-only patterns introduced
- [ ] Navigation links updated if route paths changed

## Minimal examples

### Lazy route

```tsx
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const About = lazy(() => import("./pages/About"));

<Suspense fallback={null}>
  <Routes>
    <Route path="/about" element={<About />} />
  </Routes>
</Suspense>;
```

## Common mistakes / pitfalls

- Forgetting to update `App.tsx` when adding pages
- Missing a `Suspense` fallback for lazy routes
- Removing the `path="*"` 404 route
- Introducing Next.js-specific patterns in a Vite app
