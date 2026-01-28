# Build Issue — Skill

**Name:** `build-issue`
**Purpose:** Implement one or more GitHub issues with small, testable changes that match repo rules.
Use this skill when the user asks to implement/build/solve an issue.

**Applies when:** Implementing one or more issues in this repo.
**Do not use when:** Writing issues (`skills/write-issue/SKILL.md`), starting work (`skills/start-issue/SKILL.md`), or closing/shipping (`skills/close-issue/SKILL.md`).

## Rules

- Issue keys must match the repo's format when applicable.
- Prefer GitHub MCP for issue/PR lookups and updates.
- Use Nia for codebase search/trace (paths, entry points, patterns), always scoped to this repo (see `AGENTS.md#nia-mcp-usage-always-repo-scoped`).
- Use Context7 for third-party API usage.
- Branch should already exist (use `skills/start-issue/SKILL.md` if not).
- Keep diffs minimal and scoped to acceptance criteria.
- Do not edit `.md` files unless the user explicitly asks. If behavior changes, propose doc updates and get approval before editing.
- Quality gate for handoff: `npm run build`.
- Formatting: follow existing file style (no formatter script is configured).

## Workflow

1. **Confirm issue key(s):** If missing, ask for the issue key/number. Validate format.
2. **Fetch issue details (MCP):** Capture title, context, acceptance criteria, and testing notes.
3. **Load rulebooks/skills:** Always apply `.cursor/rules/general.md`. Add `.cursor/rules/frontend.md`, `.cursor/rules/backend.md`, or `.cursor/rules/testing.md` as needed. Load any matching skills (e.g., React Router SPA guidance, motion, recharts).
4. **Discover code context (Nia):** Find affected paths, existing patterns, and related components. Keep Nia queries scoped to this repo and cite exact files/functions.
5. **Draft a plan:** Summarize changes and testing, then ask for approval before editing.
6. **Implement iteratively:** Make small changes, update/add tests per acceptance criteria, and keep commits atomic.
   - Use `skills/issue-commit/SKILL.md` for commit messages.
7. **Verify:** Run relevant checks during implementation (use `.cursor/rules/testing.md`). Before handoff, run the quality gate or note why it is deferred.
8. **Report status:** List changed paths, blast radius if multi-file, testing results, and verification steps. If behavior changed, propose doc updates and ask for approval. Suggest `/close-issue` when ready.

## Checklists

### Input checklist

- [ ] Issue key/number confirmed (if applicable)
- [ ] Issue details fetched via GitHub MCP
- [ ] On a feature branch (not `main`)

### Build checklist

- [ ] Relevant rulebooks/skills loaded
- [ ] Plan approved by user
- [ ] Changes scoped to acceptance criteria
- [ ] Tests updated/added where required
- [ ] Commits are small and atomic

### Verification checklist

- [ ] Relevant tests run
- [ ] Quality gate passed (or explicitly deferred)
- [ ] Formatting followed or explicitly deferred
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
