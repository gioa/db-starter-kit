# Databricks Designer Starter Kit

A Next.js + shadcn/ui project pre-configured with the **DuBois design system**.
Clone it, run it, and start vibe-coding Databricks UIs with Claude Code.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000/design-system](http://localhost:3000/design-system) to browse all components.

---

## How to build new pages

1. Start a Claude Code session inside this project
2. The DuBois skill is pre-installed — Claude reads it automatically before generating UI
3. Browse `/design-system` for the component reference
4. Ask Claude to build a page and it will use the right tokens

**Example prompts:**
```
"Build a cluster management page with a data table, search bar, and filter buttons"
"Create a settings panel with grouped form sections and a save button"
"Build a notebook editor shell with a sidebar and tabs"
```

---

## Project rules (Claude follows these from CLAUDE.md)

| Rule | Value |
|------|-------|
| Base font size | **13px** (not 16px) |
| Bold weight | **600** (never 700) |
| Button/input radius | **4px** (`rounded`) |
| Card/modal radius | **8px** (`rounded-md`) |
| Primary color | `bg-primary` → `#2272B4` |
| Icons — generic | `lucide-react` with `className="h-4 w-4"` |
| Icons — Databricks | `@/components/icons` (105 extracted DuBois icons) |
| Colors | CSS variables only — no raw hex |

---

## Key files

```
src/
├── app/
│   ├── globals.css           ← DuBois theme (Tailwind v4 @theme)
│   ├── design-system/        ← Component reference — start here
│   └── page.tsx              ← Home page
├── components/
│   ├── ui/                   ← shadcn components (DuBois-overridden)
│   │   ├── button.tsx        ← P0: 4px radius, 40/32/24px heights
│   │   ├── input.tsx         ← P0: 40px height, inset focus ring
│   │   ├── badge.tsx         ← P0: rectangular, 9 secondary colors
│   │   ├── db-icon.tsx       ← Unified Lucide + DuBois icon wrapper
│   │   └── ...
│   ├── icons/                ← 105 extracted DuBois SVG components
│   │   ├── NotebookIcon.tsx
│   │   ├── CatalogIcon.tsx
│   │   └── index.ts          ← barrel export
│   └── theme-toggle.tsx      ← Light/dark toggle
└── lib/
    └── utils.ts              ← cn() utility
```

---

## Using icons

```tsx
// Generic (Lucide)
import { Search, Settings, Trash2 } from "lucide-react";
<Search className="h-4 w-4" />

// Databricks-specific (DuBois)
import { NotebookIcon, CatalogIcon, PipelineIcon } from "@/components/icons";
<NotebookIcon size={16} />

// Unified wrapper with semantic colors
import { DbIcon } from "@/components/ui/db-icon";
import { SparkleDoubleFillIcon } from "@/components/icons";

<DbIcon icon={SparkleDoubleFillIcon} color="ai" size={20} />   // AI gradient
<DbIcon icon={AlertCircle} color="danger" />                    // Destructive red
<DbIcon icon={CheckCircle2} color="success" />                  // Success green
```

---

## Dark mode

Toggle with the sun/moon icon in the design system sidebar.
DuBois dark mode is fully defined in `globals.css`.

---

## Tech stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-based config in `globals.css`)
- **shadcn/ui** (New York style)
- **next-themes** (dark mode)
- **DuBois skill** at `.claude/skills/databricks-shadcn-theme/`
