# /issue-start

**Purpose:** Start implementation by creating a feature branch and a draft PR for one or more issues (issue lifecycle: start).
Use this command when beginning implementation work tied to GitHub issues.

**When to use:** Starting work on one or more issues after they are drafted or opened.
**Do not use when:** The user only wants to draft or open issues (use `/issue-draft` or `/issue-open`).

## Rules

- Base branch: `main`.
- PR base: `main`.
- Branch format: `issue-123-short-kebab-title` (first issue key is primary, if present).
- PR title format: `#123: <issue title>` (or plain title if no issue key).
- PR body must include `fixes <issue-key>` for each issue when applicable.
- If using Nia (MCP) for repo context, scope queries to this repo (see `AGENTS.md#nia-mcp-usage-always-repo-scoped`).

## Workflow

1. **Pre-flight:** Ensure clean working tree and up-to-date `main`.
   - Run: `git status`, `git checkout main`, `git pull origin main`.
   - If working tree is dirty, stop and ask to commit/stash first.
2. **Validate issue keys:** Each key must match repo conventions (e.g., `#123`).
3. **Fetch issue details:** Use GitHub MCP to find each issue and capture title/body.
   - If multiple matches, list candidates and ask the user to choose.
4. **Create branch:** Derive from the primary issue title.
   - If branch exists locally/remotely, stop and ask whether to use it.
5. **Push branch:** `git push -u origin <branch>`.
6. **Create draft PR:** Prefer GitHub MCP; fall back to `gh` only if confirmed.
7. **Report next steps:** Share branch name and PR URL.

## Checklists

### Pre-flight checklist

- [ ] On `main`
- [ ] Working tree is clean
- [ ] `main` is up to date

### PR checklist

- [ ] Draft PR created
- [ ] PR body includes `fixes <issue-key>` lines (if applicable)

## Minimal examples

### Branch name

`issue-123-add-profile-cta`

### PR body snippet

```markdown
## Related Issues

fixes #123
fixes #124
```

### Draft PR (gh)

```bash
gh pr create --draft --base main --title "#123: ISSUE_TITLE" --body "PASTE_PR_BODY_HERE"
```

## Common mistakes / pitfalls

- Creating a branch from the wrong base
- Invalid issue keys
- Missing `fixes <issue-key>` lines in the PR body
- Assuming `gh` exists without checking
