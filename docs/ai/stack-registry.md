# Stack Registry (AI)

This is the canonical list of languages, frameworks, SDKs, and tooling used in this repo.
Agents MUST use this to build better Nia query preambles and to pick the right docs/rules/skills.

## Core
- Vite 6
- React 19
- React Router 6
- TypeScript 5.8
- Node.js
- npm (default package manager)

Nia keywords:
- Vite, vite.config.ts, @vitejs/plugin-react
- React, hooks, components
- React Router, react-router-dom, Routes, Route, HashRouter
- TypeScript, tsconfig
- npm, package.json

## UI utilities and icons
- lucide-react (icons)
- clsx (className utilities)
- tailwind-merge (className merging utility)
- @radix-ui/react-slot

Nia keywords:
- lucide-react, icons
- clsx, cn, className
- tailwind-merge, twMerge
- Radix, Slot

## Animation and charts
- framer-motion (motion/react)
- Recharts

Nia keywords:
- framer-motion, motion/react, AnimatePresence
- recharts, chart, ResponsiveContainer

## Tooling and build
- Vite scripts: `npm run dev`, `npm run build`, `npm run preview`
- Path alias: `@/*` (tsconfig + Vite alias)

Nia keywords:
- dev, build, preview
- alias, @/

## Testing
- No automated test runner configured in `package.json` (as of now).

Nia keywords:
- tests (if added), vitest, playwright

## "When user mentions X, include these stack tags"
- "routing/navigation" -> React Router
- "animation/motion" -> Framer Motion
- "charts/visualization" -> Recharts
- "icons" -> lucide-react
- "className/utility classes" -> clsx, tailwind-merge

## Source
Derived from `package.json`, `vite.config.ts`, and repo structure. Keep in sync when the stack changes.
