# Agent Router — Rules

**Name:** `agents-router`  
**Purpose:** Single routing/index for rules and skills in this repo. Use it to decide which docs to load and which tools to use before editing.  
This file is the deterministic entry point for all agent work in this repo.

**Applies when:** Any task inside this repo.  
**Do not use when:** Working outside this repo or doing general, non-repo conversation.

---

## Tooling (Required)

### Nia (MCP) usage: always repo-scoped + always preambled

**Default for repo context. Use when:**

- "where is...", "how does...", "what calls...", "find...", "trace..."
- architecture, patterns, entry points, data flow
- refactors/renames/multi-file edits
- regressions across modules
- verifying existing integrations

#### Repo scoping (required)

- Always include repo scope in Nia tool calls: `repository="<owner>/<repo>"` or `repositories=["<owner>/<repo>"]`.
- Always target the `main` branch for this repo; include `Branch: main` in the Nia preamble.
- Derive `<owner>/<repo>` from `git remote get-url origin`.
- If a tool lacks repo selection, use the most restrictive equivalent (path filters, file globs, repo-specific search endpoints) and state it explicitly.
- Outside-repo searches are rare. If needed, include a short justification in the prompt and run a second scoped pass inside this repo before making changes.

#### Shared index setup (contributors)

- Use your own Nia API key (never shared).
- Add/subscribe this repo's indexed source in your Nia workspace.
- Verify the repo appears in your Nia resources list; otherwise scoped queries will fail.

#### Required helper docs (must exist, must be used)

- `docs/ai/stack-registry.md`
  - Canonical list of languages/frameworks/SDKs used in this repo.
  - Use it to choose accurate "Stack" tags + keywords for Nia queries.
- `docs/ai/working-set.md`
  - Living task context for the current work.
  - Keep it updated during the task.
  - Use it to build the Nia query preamble for every Nia search.

If either doc is missing or stale, create/update it before doing major work.

#### Nia query preamble (required)

Before every Nia search-like call, construct a short preamble using `docs/ai/working-set.md` + `docs/ai/stack-registry.md`:

```
Repo: <owner>/<repo>
Branch: main
Goal: <one sentence>
Area: <dir/module/file guess>
Stack: <3-8 tags from stack-registry.md>
Keywords: <5-12 exact identifiers/strings>
Constraints: <runtime/tooling/behavior constraints>
Evidence required: file paths + symbol names + brief explanation
```

Rules:
- Put this preamble at the top of the `query` string for `mcp__nia__search`.
- Do not shove the preamble into `pattern` for grep calls. Keep grep patterns tight and exact.
- Always read the top matches before editing. Cite exact file paths and functions/components.

#### Actions

- search relevant symbols/routes/paths
- read top matches
- cite exact file paths and specific functions/components

#### If Nia cannot find evidence

- say so explicitly
- fall back to `rg` + direct file reads (show commands or paths checked)

#### Examples (repo-scoped + preambled)

```ts
mcp__nia__search({
  query: `
Repo: <owner>/<repo>
Branch: main
Goal: Locate where routes are defined
Area: App.tsx, pages, router setup
Stack: Vite, React, React Router
Keywords: App.tsx, HashRouter, Routes, Route, pages
Constraints: cite exact files + functions
Evidence required: file paths + symbol names + brief explanation

Question: Where are routes defined?
`.trim(),
  repositories: ["<owner>/<repo>"],
  search_mode: "repositories",
});
```

```ts
mcp__nia__nia_read({
  source_type: "repository",
  source_identifier: "<owner>/<repo>:App.tsx",
});
```

```ts
mcp__nia__nia_grep({
  source_type: "repository",
  repository: "<owner>/<repo>",
  pattern: "Routes",
  path: ".",
});
```

Answer with citations/paths from the repo and avoid external sources unless justified.

---

### Context7 (default for third-party APIs)

**Use when:**

- any third-party library/framework/API surface is involved

**Actions:**

- resolve library ID
- query docs for the exact API

**If Context7 is unavailable:**

- consult upstream docs
- state assumptions explicitly

---

### MCP Servers (Cursor)

**Config file:** `.cursor/mcp.toml` (copy from `.cursor/mcp.example.toml`; restart Cursor after changes)

**Enabled servers:**

- **github** — GitHub MCP via Copilot API. Env: `GITHUB_TOKEN` (or `GITHUB_PERSONAL_ACCESS_TOKEN` for the docker server).
- **nia** — repo search/trace. Env: `NIA_API_KEY`, `NIA_API_URL`.
- **context7** — third-party API docs. Env: none.

---

## Command Routing (Deterministic)

Use the commands below when the trigger matches.

- **Draft an existing issue:** `/issue-draft`
- **Open a new issue:** `/issue-open`
- **Start issue work (branch + draft PR):** `/issue-start`
- **Implement an issue:** `/issue-implement`
- **Commit staged changes:** `/issue-commit`
- **Ship/ready a PR:** `/issue-ship`

---

## Output Requirements

- Prefer minimal, surgical diffs
- Always show exact file paths changed
- If behavior changes, update docs and include a quick verification step (commands or steps)
- If making a multi-file change, summarize the blast radius (modules/files impacted)

---

## Quality Gate (Required)

- Do not include secrets, tokens, or credentials in docs.
- Do not allow conflicting instructions across rulebooks; reconcile and document the single source of truth.
- Every rules/skill/workflow doc must include: triggers, workflow steps, and a checklist. Update the doc if any section is missing.

---

## Checklists

### Routing checklist

- [ ] Applied required commands based on triggers
- [ ] Used Nia or Context7 when required (or explicitly noted fallback)
- [ ] Nia tool calls are repo-scoped to this repo
- [ ] Nia search calls include the "Nia query preamble" built from `docs/ai/working-set.md` + `docs/ai/stack-registry.md`

### Response checklist

- [ ] File paths are explicit
- [ ] Behavior changes include verification steps
- [ ] Blast radius summarized for multi-file edits

---

## Common mistakes / pitfalls

- Skipping Nia on multi-file or architecture questions
- Running unscoped Nia searches outside this repo
- Calling Nia without first updating `docs/ai/working-set.md`
- Using vague Nia queries without exact identifiers/keywords
- Forgetting to update docs after behavior changes
