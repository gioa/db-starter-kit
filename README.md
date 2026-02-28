# Databricks UI Starter Kit

Vibe coding Databricks UIs. Next.js + shadcn/ui pre-configured with the **DuBois design system** — so you never have to rebuild the shell, tokens, or components from scratch.

## Quick start

```bash
npm install
npm run dev
```

| Route | What you'll see |
|---|---|
| [/design-system](http://localhost:3000/design-system) | Full component reference — start here |
| [/shell](http://localhost:3000/shell) | Live AppShell demo with sidebar + page header |

---

## What's included

### DuBois-themed shadcn/ui primitives

Every shadcn component has been overridden to match the DuBois spec out of the box:

| Component | DuBois override |
|---|---|
| `Button` | 4px radius · `sm` 32px (default) · `xs` 24px · `icon-sm` / `icon-xs` variants |
| `Input` / `Select` | 32px height · 4px radius · inset focus ring |
| `Badge` | Rectangular (4px radius) · 9 secondary palette variants |
| `Alert` | Full border + tinted background · 4 severity variants |
| `Dialog` | 40px padding · no dividers · `DialogBody` slot |
| `Tabs` | `variant="line"` for DuBois underline style |
| `Tooltip` | Dark background in light mode |
| `Card` | 8px radius · subtle shadow |
| `Breadcrumb` | `text-primary` links · muted separator · tight spacing |

### Shell components

Drop-in layout components built from the DuBois App Spaces Figma file:

| Component | Description |
|---|---|
| `AppShell` | Full-page layout wrapper — owns sidebar state |
| `TopBar` | 48px nav bar: logo · search · workspace · AI · apps · avatar |
| `Sidebar` | Collapsible left nav (220px / hidden) · `+ New` button · collapsible sections |
| `PageHeader` | Page-level header: breadcrumbs · title · inline icons · badge · description · actions |
| `DatabricksLogo` | SVG lockup — brickwork always `#FF3621`, wordmark uses `currentColor` |

```tsx
import { AppShell, PageHeader } from "@/components/shell"
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage
} from "@/components/ui/breadcrumb"

<AppShell activeItem="catalog" workspace="Production">
  <div className="p-6">
    <PageHeader
      breadcrumbs={
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Workspace</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Catalog</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      }
      title="main"
      actions={<Button size="sm">Create table</Button>}
    />
  </div>
</AppShell>
```

### 445 DuBois icons

```tsx
// Databricks-specific icons
import { NotebookIcon, CatalogIcon, PipelineIcon } from "@/components/icons"
<NotebookIcon size={16} />

// AI gradient via DbIcon wrapper
import { DbIcon } from "@/components/ui/db-icon"
import { SparkleIcon } from "@/components/icons"
<DbIcon icon={SparkleIcon} color="ai" size={16} />
```

---

## How to build new pages

1. Start a Claude Code session inside this project
2. The DuBois skill is pre-installed — Claude reads it automatically before generating UI
3. Browse `/design-system` for the component reference
4. Ask Claude to build a page and it will use the right tokens

**Example prompts:**
```
"Build a cluster management page with a data table, search bar, and filter buttons"
"Create a catalog explorer with a sidebar tree and detail panel"
"Build a SQL editor page with a query input, result table, and run button"
"Add a settings page with grouped form sections and a save button"
```

---

## Design system rules Claude follows (from `CLAUDE.md`)

| Rule | Value |
|---|---|
| Base font | Helvetica Neue, 13px body / 20px line-height |
| Bold weight | `font-semibold` (600) — never `font-bold` (700) |
| Button/input radius | `rounded` (4px) |
| Card/modal radius | `rounded-md` (8px) |
| Primary color | `bg-primary` → `#2272B4` |
| Spacing unit | 8px — `gap-2` · `gap-4` · `gap-6` · `gap-8` |
| Colors | CSS variables only — never raw hex |
| Icons (generic) | `lucide-react` · always `className="h-4 w-4"` |
| Icons (Databricks) | `@/components/icons` · 445 DuBois icons |

---

## Project structure

```
src/
├── app/
│   ├── globals.css           ← DuBois theme (Tailwind v4 @theme inline)
│   ├── layout.tsx            ← ThemeProvider + TooltipProvider
│   ├── page.tsx              ← Landing page
│   ├── shell/                ← Full shell demo at /shell
│   └── design-system/        ← Component reference at /design-system
├── components/
│   ├── ui/                   ← shadcn components (DuBois-overridden)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── alert.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── db-icon.tsx       ← Unified Lucide + DuBois icon wrapper
│   │   └── ...
│   ├── icons/                ← 445 DuBois SVG components + index.ts
│   └── shell/
│       ├── AppShell.tsx      ← Layout wrapper (owns sidebar state)
│       ├── TopBar.tsx        ← 48px top navigation bar
│       ├── Sidebar.tsx       ← Collapsible left nav
│       ├── NewButton.tsx     ← Brand-tinted "+ New" sidebar button
│       ├── PageHeader.tsx    ← Page-level header with breadcrumbs + actions
│       ├── DatabricksLogo.tsx
│       └── index.ts
├── scripts/
│   └── sync-icons.mjs        ← Bulk icon sync from DuBois source
└── lib/utils.ts
```

---

## Dark mode

All DuBois tokens are defined for both modes in `globals.css`. Toggle with the sun/moon icon in the design system page.

---

## Tech stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-based config in `globals.css`, no `tailwind.config.ts`)
- **shadcn/ui** (New York style, DuBois-overridden)
- **next-themes** (dark mode)
- **Radix UI** primitives via shadcn
- **DuBois Claude skill** at `.claude/skills/databricks-shadcn-theme/`
