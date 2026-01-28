# Create Issues — Skill

**Name:** `create-issues`
**Purpose:** Scan the repo and create a small batch of GitHub issues with consistent titles and labels.
Use this skill when asked to generate multiple actionable issues.

**Applies when:** The user requests a batch of issues or repo-wide issue discovery.
**Do not use when:** Only a single issue is needed (use `skills/write-issue/SKILL.md`).

## Rules

- Create **5-12** issues per run.
- Title format: follow repo conventions (use clear, short titles if none are specified).
- Labels: use the repo's existing taxonomy if labels are required; otherwise skip.
- Prefer GitHub MCP; do not assume `gh` is available.
- If using Nia (MCP) for repo scanning, scope queries to this repo (see `AGENTS.md#nia-mcp-usage-always-repo-scoped`).

### Label taxonomy (if defined)

- Use the repo's existing label taxonomy.

## Workflow

1. Determine target repo (prefer `git remote get-url origin`).
2. Ensure labels exist via GitHub MCP; create missing labels if approved.
3. Perform a fast repo scan (docs, TODO/FIXME, stubs, CI hints).
4. Draft 5-12 issues with context + acceptance criteria.
5. Apply labels per repo conventions (if applicable).
6. Create issues via GitHub MCP.
7. If MCP is unavailable, stop and ask how to proceed.

## Checklists

### Drafting checklist

- [ ] 5-12 issues max
- [ ] Each issue has context + acceptance criteria
- [ ] Titles are short and imperative

### Label checklist

- [ ] Label taxonomy followed (if applicable)

## Minimal examples

### Title format

`Clarify onboarding copy`

### Repo signal scan

- Patterns: README\*, docs/\*\*, TODO, FIXME

## Common mistakes / pitfalls

- Creating more than 12 issues
- Applying labels that don't match repo conventions
- Skipping acceptance criteria
- Assuming `gh` is available instead of GitHub MCP
