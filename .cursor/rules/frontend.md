# Frontend Rules — Rules

**Name:** `frontend-rules`
**Purpose:** Guardrails for Vite + React Router UI work (components, styling, forms, and state).
Use this before changing `App.tsx`, `components/**`, or `pages/**` that affect UI.

**Applies when:** UI/components/layout/styling changes, client interactions, or frontend data fetching.
**Do not use when:** The task is strictly backend/data/migration work (use `.cursor/rules/backend.md`) or testing-only work (use `.cursor/rules/testing.md`).

## Rules

### Architecture and organization

- Routes are defined in `App.tsx` using React Router.
- Route components live in `pages/**`.
- Shared UI primitives live in `components/**` and `lib/**`.

### Imports

- Use the `@/` alias for app-root imports (configured in `tsconfig.json`).
- Import icons from `lucide-react`.

### Component rules

- Reuse existing components in `components/**` before creating new primitives.
- Use `cn()` from `lib/utils.ts` for className merging.
- Keep styling consistent with existing utility classes and CSS conventions in the repo.

### shadcn/studio MCP workflows (conditional)

- If you are using shadcn/studio MCP workflows (`/cui`, `/rui`, `/iui`, `/ftc`), follow `.cursor/rules/shadcn-studio-mcp.md` exactly.
- Do not apply shadcn/studio MCP rules for manual UI edits.
- If you use Nia (MCP) to trace UI code, keep queries scoped to this repo and use the preamble built from `docs/ai/working-set.md` + `docs/ai/stack-registry.md` for search calls (see `.cursor/rules/AGENTS.md#nia-mcp-usage-always-repo-scoped`).

### State management

- Use `useState`/`useReducer` for local state and React Context for shared UI state.
- Do not add new state libraries without explicit request.

### Forms

- Use native form elements and React state unless a form library is explicitly requested.

### Frontend testing

- Follow `.cursor/rules/testing.md` for build + manual verification expectations.

## Workflow

1. Identify affected routes and update `App.tsx` if routing changes.
2. Reuse existing UI primitives in `components/**` before creating new ones.
3. Keep className conventions consistent and use `cn()` for merges.
4. If shadcn/studio MCP is used, switch to `.cursor/rules/shadcn-studio-mcp.md` and follow it exactly.

## Checklists

### Implementation checklist

- [ ] Routes updated in `App.tsx` when needed
- [ ] Existing UI primitives reused when possible
- [ ] `cn()` used for className merging
- [ ] Forms keep to native elements unless requested otherwise

### Review checklist

- [ ] Imports use `@/` alias
- [ ] Icons imported from `lucide-react`
- [ ] No new state library introduced
- [ ] shadcn/studio MCP rules used only when running `/cui`, `/rui`, `/iui`, `/ftc`

## Minimal examples

### Absolute import

```tsx
import { Button } from "@/components/UI";
```

### Route definition

```tsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/about" element={<About />} />
</Routes>;
```

## Common mistakes / pitfalls

- Adding routes without updating `App.tsx`
- Creating new UI primitives that already exist in `components/**`
- Bypassing `cn()` for className merging
- Introducing new state libraries without approval
