# /issue-implement

**Purpose:** Implement one or more GitHub issues with small, testable changes that match repo rules (issue lifecycle: implement).
Use this command when the user asks to implement/build/solve an issue.

**When to use:** Implementing one or more issues in this repo after `/issue-start`.
**Do not use when:** Drafting or opening issues (`/issue-draft` or `/issue-open`), starting work (`/issue-start`), or shipping (`/issue-ship`).

## Rules

- Issue keys must match the repo's format when applicable.
- Prefer GitHub MCP for issue/PR lookups and updates.
- Use Nia for codebase search/trace (paths, entry points, patterns), always scoped to this repo (see `.cursor/rules/AGENTS.md#nia-mcp-usage-always-repo-scoped`).
- Use Context7 for third-party API usage.
- Branch should already exist (use `/issue-start` if not).
- Keep diffs minimal and scoped to acceptance criteria.
- Do not edit `.md` files unless the user explicitly asks. If behavior changes, propose doc updates and get approval before editing.
- Quality gate for handoff: `npm run build`.
- Formatting: follow existing file style (no formatter script is configured).

## Workflow

1. **Confirm issue key(s):** If missing, ask for the issue key/number. Validate format.
2. **Fetch issue details (MCP):** Capture title, context, acceptance criteria, and testing notes.
3. **Load rulebooks:** Always apply `.cursor/rules/general.md`. Add `.cursor/rules/frontend.md`, `.cursor/rules/backend.md`, or `.cursor/rules/testing.md` as needed.
4. **Discover code context (Nia):** Find affected paths, existing patterns, and related components. Keep Nia queries scoped to this repo and cite exact files/functions.
5. **Draft a plan:** Summarize changes and testing, then ask for approval before editing.
6. **Implement iteratively:** Make small changes, update/add tests per acceptance criteria, and keep commits atomic.
  - If committing, use `/issue-commit` (see `skills/issue-commit/SKILL.md`) and include `ref <issue-key>` when applicable.
7. **Verify:** Run relevant checks during implementation (use `.cursor/rules/testing.md`). Before handoff, run the quality gate or note why it is deferred.
8. **Report status:** List changed paths, blast radius if multi-file, testing results, and verification steps. If behavior changed, propose doc updates and ask for approval.

## Checklists

### Input checklist

- [ ] Issue key/number confirmed (if applicable)
- [ ] Issue details fetched via GitHub MCP
- [ ] On a feature branch (not `main`)

### Build checklist

- [ ] Relevant rulebooks applied
- [ ] Plan approved by user
- [ ] Changes scoped to acceptance criteria
- [ ] Tests updated/added where required
- [ ] Commits are small and atomic

### Verification checklist

- [ ] Relevant tests run
- [ ] Quality gate passed (or explicitly deferred)
- [ ] Doc update approval requested if behavior changed

## Minimal examples

### Plan snippet

```markdown
## Implementation Plan (Issue 123)

- Update {path} to {behavior}
- Add {test} for {scenario}
- Verify with `npm run build`
```

### Formatting (if configured)

- Run the repo's formatter script if one exists.

### Commit with issue reference

```bash
git commit -m "feat(feature): add XYZ" -m "ref #123"
```

## Common mistakes / pitfalls

- Implementing without a valid issue key/number when one exists
- Skipping Nia when tracing affected areas
- Running unscoped Nia searches outside this repo
- Using third-party APIs without Context7
- Editing docs without explicit user approval
- Leaving tests or quality gate unaddressed
