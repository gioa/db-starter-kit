# CLAUDE.md — Databricks Designer Starter Kit

You are building UI for a **Databricks internal tool** using this Next.js + shadcn/ui starter kit.
The DuBois design system rules below are **always active** — apply them to every component you generate.

---

## DuBois Design System Rules

### Typography
- Base font: `"Helvetica Neue", ui-sans-serif, system-ui, sans-serif`
- Base size: **13px** — already set on `body` in `globals.css`. Do not set `font-size` on `html`.
- Bold weight: **`font-semibold` (600)** — never use `font-bold` (700)
- Line height base: 20px

### Sizing & Spacing
- Spacing grid: **8px base unit** — use `gap-2` (8px), `gap-4` (16px), `gap-6` (24px), `gap-8` (32px)
- Button heights: **40px** (default `h-10`), **32px** (sm `h-8`), **24px** (xs `h-6`)
- Input height: **40px** (`h-10`)

### Border Radius
- Buttons, inputs, badges, dropdowns: **`rounded`** (4px)
- Cards, modals, panels: **`rounded-md`** (8px)
- Never use `rounded-lg` or `rounded-xl` for interactive elements

### Colors — always use CSS variables, never raw hex
| Element | Class | Value |
|---|---|---|
| Primary action | `bg-primary` / `text-primary` | blue-600 #2272B4 |
| Primary hover | `hover:bg-blue-700` | #0E538B |
| Body text | `text-foreground` | grey-800 #11171C |
| Secondary text | `text-muted-foreground` | grey-500 #5F7281 |
| Page background | `bg-background` | white / grey-800 dark |
| Subtle background | `bg-secondary` / `bg-muted` | grey-050 #F6F7F9 |
| Borders | `border-border` | grey-100 #E8ECF0 |
| Danger | `bg-destructive` / `text-destructive` | red-600 #C82D4C |
| Success | `text-[var(--success)]` | green-600 #277C43 |
| Warning | `text-[var(--warning)]` | yellow-600 #BE501E |

### Component Overrides Already Applied
These shadcn components have DuBois overrides — use them as-is:
- **`Button`** — 4px radius, 40/32/24px heights, semibold, variants: `default` `outline` `ghost` `destructive` `link`
- **`Input`** — 40px height, inset focus ring (no offset)
- **`Badge`** — rectangular (4px radius), variants include: `coral` `brown` `indigo` `lemon` `lime` `pink` `purple` `teal` `turquoise`
- **`Dialog`** / **`DialogHeader`** / **`DialogFooter`** / **`DialogBody`** — 40px padding, no dividers
- **`Table`** / **`TableRow`** — DuBois hover/selected row colors
- **`Alert`** — 4 variants: `default` `info` `warning` `success` `destructive` (left-border accent)
- **`Tabs`** / **`TabsList`** — use `variant="line"` for DuBois underline style
- **`Tooltip`** — grey-800 background (dark in light mode)
- **`Card`** — 8px radius, subtle shadow

### Icons
- **Generic icons** → `lucide-react`, always `className="h-4 w-4"` (16px)
- **Databricks-specific icons** → `@/components/icons` (105 extracted DuBois icons)
- **AI gradient icons** → `<DbIcon icon={SparkleIcon} color="ai" />` from `@/components/ui/db-icon`

Key Databricks icons available:
`NotebookIcon` `CatalogIcon` `PipelineIcon` `WorkflowsIcon` `SchemaIcon`
`AssistantIcon` `ModelsIcon` `SparkleDoubleFillIcon` `SparkleFillIcon`
`BranchIcon` `QueryEditorIcon` `WorkspacesIcon` `DataIcon` `ErdIcon`
`SidebarCollapseIcon` `SidebarExpandIcon` `CustomAppIcon` `StorefrontIcon`

### AI Gradient
```css
background: linear-gradient(135deg, #4299E0 20.5%, #CA42E0 46.91%, #FF5F46 79.5%);
```
- Use `className="bg-ai-gradient"` for gradient backgrounds
- Use `className="text-ai-gradient"` for gradient text
- Use `<DbIcon icon={SparkleDoubleFillIcon} color="ai" />` for AI icons

### Do's and Don'ts
✅ Use semantic CSS variables (`text-foreground`, `bg-primary`, `border-border`)
✅ Use `font-semibold` for emphasis
✅ Use `rounded` (4px) for interactive elements
✅ Use DuBois icons from `@/components/icons` for Databricks concepts
✅ Support dark mode — all tokens are already defined in `globals.css`

❌ Never hardcode hex colors
❌ Never use `font-bold` (700) — use `font-semibold` (600)
❌ Never use `rounded-lg` for buttons/inputs
❌ Never use Databricks brand orange (`#FF3621`) for UI — it's marketing only
❌ Never set `font-size` on `html` element (breaks Tailwind rem scale)

---

## Project Structure

```
src/
├── app/
│   ├── globals.css           ← DuBois theme (Tailwind v4 @theme)
│   ├── layout.tsx            ← ThemeProvider + TooltipProvider
│   ├── page.tsx              ← Home
│   └── design-system/        ← Component reference at /design-system
├── components/
│   ├── ui/                   ← shadcn components (DuBois-overridden)
│   │   └── db-icon.tsx       ← DbIcon wrapper for Lucide + DuBois icons
│   ├── icons/                ← 105 extracted DuBois SVG components + index.ts
│   ├── shell/                ← App shell components (sidebar, topbar, etc.)
│   └── theme-toggle.tsx
└── lib/utils.ts
```

## Tailwind v4 Notes
- No `tailwind.config.ts` — all theme config is in `globals.css`
- DuBois primitive colors are Tailwind utilities: `bg-blue-600`, `text-grey-800`, etc.
- DuBois secondary badge colors: `bg-coral-100`, `text-teal-700`, etc.
- Custom shadows: `shadow-[var(--shadow-db-sm)]`, `shadow-[var(--shadow-db-lg)]`
