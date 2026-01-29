# /issue-draft

**Purpose:** Draft or upgrade a single GitHub issue so it is implementation-ready (issue lifecycle: draft).
Use this command for one issue at a time.

**When to use:** Drafting or improving a single existing issue before implementation.
**Do not use when:** Creating a new issue from a user-provided problem (use `/issue-open`).

## Rules

- Issue identifier must follow the repo's format if one is required.
- Use GitHub MCP for issue search/create/update.
- Do not add GitHub Projects steps unless asked.
- If using Nia (MCP) for repo context, scope queries to this repo (see `AGENTS.md#nia-mcp-usage-always-repo-scoped`).

## Workflow

1. **Confirm the key:** Ask for an issue key/number if missing; validate format.
2. **Locate the issue (MCP):** Search title/body for the issue key/number.
   - If multiple matches, list candidates and ask the user to choose.
3. **If missing, create:** Title must follow repo conventions (or use a clear short title if none).
4. **Extract requirements:** Summarize what/why, constraints, and unknowns.
5. **Analyze codebase context:** Identify impacted paths and related patterns.
6. **Ask minimal questions:** Only fill gaps that block implementation-ready criteria.
7. **Produce updated issue body:** Include overview, context, approach, acceptance criteria, testing, risks.
8. **Update the issue:** Apply the new body via MCP.

## Checklists

### Input checklist

- [ ] Issue key/number confirmed (if applicable)
- [ ] Repo identified (owner/name)
- [ ] Short title and problem statement collected

### Output checklist

- [ ] Acceptance criteria are testable
- [ ] Testing notes are explicit
- [ ] Risks/edge cases captured

## Minimal examples

### Title format

`Issue 456: add empty-state for invoices`

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

- Missing the issue key/number when required
- Vague acceptance criteria
- Skipping codebase context and risks
- Updating issues without GitHub MCP
