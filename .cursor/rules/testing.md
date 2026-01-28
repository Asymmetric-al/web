# Testing Rules — Rules

**Name:** `testing-rules`
**Purpose:** Define how to validate changes (build and manual verification).
Use this when adding tests, modifying critical flows, or verifying changes.

**Applies when:** Adding/updating tests, touching critical user flows, preparing a PR for review, or asked to run tests.
**Do not use when:** Changes are purely documentation or non-functional and do not require tests.

## Rules

- No automated test framework is configured in this repo.
- Validation is currently build + manual verification.

## Branch protection (if configured)

- Align required checks with the scripts that exist in `package.json` (currently only `npm run build`).

## Workflow

1. Decide the verification scope (build, manual flows, or specific screens).
2. Run `npm run build` before marking a PR ready.
3. Manually verify the impacted flows in the browser.
4. Fix failures before proceeding.

## Checklists

### Implementation checklist

- [ ] Manual verification steps identified for the change
- [ ] Build passes locally

### Review checklist

- [ ] Manual verification steps captured in PR summary (if applicable)
- [ ] No new test dependencies added without approval

## Minimal examples

### Run build

```bash
npm run build
```

### Run dev server (manual verification)

```bash
npm run dev
```

## Common mistakes / pitfalls

- Skipping build verification
- Forgetting to document manual verification steps
- Adding test tooling without approval
