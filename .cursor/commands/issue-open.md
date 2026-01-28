# /issue-open

**Purpose:** Open a single GitHub issue from a fresh problem statement by partnering with the user to gather context, scope, and acceptance criteria before creating the issue (issue lifecycle: open).
Use this command when the user wants to open a new issue and needs help shaping it.

**When to use:** The user provides a new problem and wants a new issue opened.
**Do not use when:** The user wants to find or update an existing issue (use `/issue-draft`).

## Rules

- Create exactly **1** issue per run.
- Title format: follow repo conventions (use a clear short title if none are specified).
- Labels: use the repo's existing taxonomy if labels are required; otherwise skip.
- Prefer GitHub MCP; do not assume `gh` is available.
- If using Nia (MCP) for repo context, scope queries to this repo (see `.cursor/rules/AGENTS.md#nia-mcp-usage-always-repo-scoped`).

### Label taxonomy (if defined)

- Use the repo's existing label taxonomy.

## Workflow

1. Determine target repo (prefer `git remote get-url origin`).
2. Capture the problem statement and ask for an issue key/number if required by the repo.
3. Ask focused follow-up questions to build context (who is affected, desired behavior, constraints, scope, acceptance criteria, testing).
4. Investigate repo context as needed (docs/code/TODOs) to identify impacted areas and related patterns.
5. Draft the issue body: overview, technical context (paths), approach, acceptance criteria, testing, risks.
6. Confirm the final title and labels with the user, then create the issue via GitHub MCP.
7. If MCP is unavailable, stop and ask how to proceed.

## Checklists

### Context checklist

- [ ] Problem statement captured
- [ ] Issue key/number captured (if applicable)
- [ ] Scope and constraints documented
- [ ] Acceptance criteria are testable
- [ ] Testing notes captured

### Label checklist

- [ ] Label taxonomy followed (if applicable)

## Minimal examples

### Title format

`Clarify onboarding copy`

### Body template (minimal)

```markdown
## Overview

What and why.

## Technical Context

- **Affected areas/files**:
  - `{path}` — {why}

## Implementation Approach

1. Step one
2. Step two

## Acceptance Criteria

- [ ] Specific, testable outcome
- [ ] Tests pass (as applicable: `npm run build`)
```

## Common mistakes / pitfalls

- Creating more than one issue
- Skipping context-gathering questions
- Using `/issue-open` for existing issues (use `/issue-draft`)
- Assuming `gh` is available instead of GitHub MCP
