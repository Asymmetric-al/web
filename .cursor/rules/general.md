# General Project Rules — Rules

**Name:** `general-rules`
**Purpose:** Baseline workflow, CI gates, and repo hygiene for this Vite + React repo.
Use this as the default rulebook for any repo change or issue workflow.

**Applies when:** Any change in this repo, especially branches, commits, and PRs.
**Do not use when:** Working outside this repo or discussing non-repo topics.

## Rules

- **Project name:** asymmetric.al (web)
- **Issue key format:** None enforced. Use the repo's existing issue format if provided (e.g., `#123`).
- **Main branch:** `main` is the default. Do not push directly unless asked.
- **Tech stack (reference):** Vite 6, React 19, React Router 6, TypeScript 5.8, Node.js, npm.

### Label taxonomy (if the repo uses labels)

- Use the repo's existing label taxonomy.
- Do not invent new labels without explicit user approval.

**Rule:** Follow the repo's label conventions if they exist.

### CI gates (must pass before merge)

- `npm run build`
- No lint/typecheck/test scripts are defined in `package.json`. Add them only if requested.

### File hygiene

- Keep changes minimal and localized to the task.
- Prefer small, atomic PRs.
- Do not manually edit generated files unless necessary.

### Documentation rule

- If build or run steps change, update `README.md`.

## Workflow

1. **Issue (if applicable):** Use the repo's existing issue format (e.g., `#123`) when provided.
2. **Branch:** Create a feature branch (e.g., `feature/add-hero-copy` or `fix/header-nav`).
3. **Implementation:** Make precise changes; validate locally as needed.
4. **PR:** Open a PR referencing the issue if one exists; ensure CI gates pass.

## Checklists

### Issue checklist

- [ ] Issue key/number captured (if provided)
- [ ] Label conventions followed (if applicable)

### PR checklist

- [ ] Branch is not `main`
- [ ] CI gate passes (`npm run build`)
- [ ] Changes are minimal and scoped

## Minimal examples

- Branch name: `feature/add-metrics-card`
- CI command: `npm run build`

## Common mistakes / pitfalls

- Skipping issue context when one exists
- Inventing labels without approval
- Pushing directly to `main`
- Editing generated files without need
