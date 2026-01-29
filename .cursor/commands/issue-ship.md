# /issue-ship

**Purpose:** Finalize an issue by verifying acceptance criteria, running quality gates, and marking the PR ready for review (issue lifecycle: ship).
Use this command when the user asks to close/finish/ship an issue or prepare a PR.

**When to use:** Preparing a PR for review/merge or shipping an issue.
**Do not use when:** Starting or implementing an issue (use `/issue-start` or `/issue-implement`).

## Rules

- Quality gate must pass: `npm run build`.
- Formatting: follow existing file style (no formatter script is configured).
- PR workflow: Draft -> Ready for Review -> Approved -> Merged.
- Prefer GitHub MCP for PR/issue operations.
- If using Nia (MCP) for repo context, scope queries to this repo (see `AGENTS.md#nia-mcp-usage-always-repo-scoped`).

## Workflow

1. **Pre-flight:** Verify feature branch and clean working tree.
   - Run: `git status`, `git branch --show-current`.
   - If on `main`, stop and ask to switch.
2. **Identify issue keys:** Check branch name or recent commits.
   - Run: `git log -20 --oneline`.
3. **Verify acceptance criteria:** Use GitHub MCP to fetch issue body and checklist.
4. **Scan TODO/FIXME:** Check changed files for TODO/FIXME.
5. **Run relevant checks:** Decide scope based on changes and run the applicable commands.
6. **Run quality gate:** Fix failures and re-run until clean.
7. **Commit/push:** Use `/issue-commit` for the commit message, then push to the remote.
8. **Request reviewers (CODEOWNERS, if present):** If a `CODEOWNERS` file exists, collect owner handles.
   - One handle per line; ignore blank lines and comments.
   - Ignore teams (lines starting with `@org/` or containing a slash).
   - If no `CODEOWNERS` file exists, skip and note in PR summary.
   - If no valid user handles found, skip and note in PR summary.
   - Use GitHub MCP to request reviewers on the PR.
9. **Update PR:** Add summary/testing/`fixes <issue-key>`, then mark ready.

## Checklists

### Pre-flight checklist

- [ ] On a feature branch (not `main`)
- [ ] Issue keys identified
- [ ] Acceptance criteria confirmed

### Final checklist

- [ ] Relevant checks run
- [ ] Quality gate passes
- [ ] Build passes locally
- [ ] No unintended TODO/FIXME
- [ ] Reviewers requested from `CODEOWNERS` (if present)
- [ ] PR updated and ready for review

## Minimal examples

### Quality gate

```bash
npm run build
```

### Relevant checks (example)

```bash
npm run build
```

### Find TODO/FIXME in changed files

```bash
git diff --name-only origin/main...HEAD | xargs -I{} grep -n "TODO\|FIXME" "{}" || true
```

## Common mistakes / pitfalls

- Marking PR ready before checks pass
- Ignoring TODO/FIXME in changed files
- Closing issues without confirming acceptance criteria
- Requesting team reviewers when only users are supported
