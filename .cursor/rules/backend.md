# Backend & Data Rules — Rules

**Name:** `backend-rules`
**Purpose:** Guardrails for external APIs, data access, and environment variables.
Use this before adding new data fetching, API integrations, or env usage.

**Applies when:** Adding API calls, handling secrets/env vars, or introducing data-fetching logic.
**Do not use when:** Only changing UI with no data/API impact (use `.cursor/rules/frontend.md`).

## Rules

### Architecture

- This repo is a Vite + React SPA with no backend or database layer.
- Do not add server-only logic or migrations unless explicitly requested.

### API access

- Prefer `fetch` from the client for external APIs.
- Keep API wrappers small and colocated near usage.

### Security & auth

- Do not embed secrets in client code.
- Prefer server-side proxies for secrets if a backend is introduced later.

### Environment variables

- Store local secrets in `.env.local` (per README).
- If a value must be available at build time, wire it through Vite (`loadEnv` + `define` in `vite.config.ts`).
- Keep example env files secret-free (if added).

## Workflow

1. Confirm whether the change introduces new API/data access.
2. Keep secrets out of client bundles.
3. Document new env vars if added.

## Checklists

### Implementation checklist

- [ ] No secrets added to client code
- [ ] API calls are isolated and reusable
- [ ] Env vars handled via Vite config when needed

### Review checklist

- [ ] `.env.example` updated if new vars added
- [ ] External APIs documented if introduced

## Minimal examples

### External fetch

```ts
export async function fetchStatus() {
  const res = await fetch("https://example.com/status");
  if (!res.ok) throw new Error("Failed to load status");
  return res.json();
}
```

## Common mistakes / pitfalls

- Adding secrets to the client bundle
- Coupling API calls directly to UI components
- Introducing server-only logic without approval
