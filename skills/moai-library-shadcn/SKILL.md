# shadcn/ui Design System — Skill

**Name:** `moai-library-shadcn`
**Purpose:** Build a consistent, accessible component system using the local shadcn-inspired primitives.
Use this skill whenever selecting, composing, or customizing components in `components/Shadcn.tsx` or `components/UI.tsx`.

**Applies when:** Working with the local shadcn-style components or Radix primitives.
**Do not use when:** The UI is unrelated to these component primitives.

## Rules

- **Local primitives are first-party:** Treat components as owned code and keep them consistent.
- **Tokens over one-offs:** Centralize colors, spacing, radius, and typography.
- **Prefer shared behavior:** Keep focus management and keyboard handling consistent.
- **Composable APIs:** Favor slots and sensible defaults; avoid prop explosions.
- **Accessibility is required:** Labels, descriptions, and visible focus states.

## Workflow

1. Identify the design tokens involved (color/spacing/radius/typography).
2. Choose the closest existing local primitive.
3. Compose via shared primitives instead of re-implementing behavior.
4. Keep API surface small and predictable.
5. Verify keyboard and a11y behavior.

## Checklists

### Implementation checklist

- [ ] Tokens are centralized (colors/radius/typography)
- [ ] Components follow shared spacing/radius patterns
- [ ] Keyboard support preserved
- [ ] `className` merging is consistent
- [ ] `asChild` used correctly

### Review checklist

- [ ] Forms include labels and error messaging
- [ ] No duplicate variants or near-identical components

## Minimal examples

### Token-first button usage

```tsx
import { Button } from "@/components/Shadcn";

export function Actions() {
  return (
    <div className="flex gap-2">
      <Button>Save</Button>
      <Button variant="secondary">Cancel</Button>
    </div>
  );
}
```

### Composable card pattern

```tsx
import { Card, CardContent } from "@/components/Shadcn";

export function Panel() {
  return (
    <Card>
      <CardContent>...</CardContent>
    </Card>
  );
}
```

## Common mistakes / pitfalls

- Forking components without updating tokens
- Inconsistent spacing/radius across components
- Using non-semantic elements for controls
- Duplicating components instead of extracting a base
