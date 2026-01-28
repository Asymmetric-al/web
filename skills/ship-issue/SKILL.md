# Ship Issue — Skill

**Name:** `ship-issue`
**Purpose:** End-to-end workflow to select an issue, create branch + draft PR, implement, and mark PR ready.
Use this when the user asks to "ship" an issue.

**Applies when:** The user wants a full start->implement->ready-for-review pipeline.
**Do not use when:** The user only wants to write or start an issue.

## Rules

- Issue keys follow repo conventions.
- Branches and PRs are based on `main`.
- Commits include `ref <issue-key>` when applicable.
- Quality gate: `npm run build`.
- Formatting: follow existing file style (no formatter script is configured).
- If using Nia (MCP) for repo context during this workflow, scope queries to this repo (see `AGENTS.md#nia-mcp-usage-always-repo-scoped`).

## Workflow

1. **Determine repo:** Prefer `git remote get-url origin`; otherwise ask for `owner/repo`.
2. **Check labels (if used):** Use GitHub MCP to list labels; do not create new labels without approval.
3. **Select issue (deterministic):**
   - If `issue_key` provided, search title/body for that key.
   - Otherwise, use labels only if they exist in the repo.
   - Exclude blocked/needs-review issues unless explicitly requested.
   - If multiple matches, choose oldest (lowest issue number).
4. **Start work:** Invoke `skills/start-issue/SKILL.md` for branch + draft PR.
5. **Implement:** Make minimal changes; commit with `ref <issue-key>`.
6. **Validate:** Run quality gate, fix failures, and re-run until clean.
7. **Finalize:** Push, update PR body, mark ready for review (GitHub MCP preferred).

## Checklists

### Selection checklist

- [ ] Issue is open
- [ ] Issue is not blocked/needs-review unless explicitly requested
- [ ] Label filters match requested difficulty/type/status (if labels exist)

### Delivery checklist

- [ ] Draft PR created
- [ ] Commits include `ref <issue-key>` when applicable
- [ ] Quality gate passes
- [ ] Build passes locally
- [ ] PR marked ready for review

## Minimal examples

### Label filter mapping (if labels exist)

- `difficulty=easy` -> `complexity:easy`
- `type=docs` -> `type:docs`

### Quality gate

```bash
npm run build
```

## Common mistakes / pitfalls

- Selecting blocked issues without explicit user confirmation
- Skipping quality gate
- Marking PR ready before checks pass
