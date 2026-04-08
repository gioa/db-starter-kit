"use client"

import * as React from "react"
import Link from "next/link"
import { AppShell, PageHeader } from "@/components/shell"
import { FilterPill } from "@/components/ui/filter-pill"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tree, type TreeNode } from "@/components/ui/tree"
import {
  CatalogIcon,
  CatalogGearIcon,
  SchemaIcon,
  TableIcon,
  TableViewIcon,
  FunctionIcon,
  ModelsIcon,
  FolderIcon,
  RefreshIcon,
  PlusIcon,
  FilterIcon,
  SearchIcon,
  SparkleDoubleFillIcon,
  StarFillIcon,
  ClockIcon,
  ConnectIcon,
  ShareIcon,
  ShieldIcon,
} from "@/components/icons"
import { ChevronDown, Search } from "lucide-react"

// ─── Types ─────────────────────────────────────────────────────────────────────

type CatalogTab = "suggested" | "favorites" | "recents"
type LeftTab    = "for-you" | "all"
type IconType   = "schema" | "catalog" | "table" | "view" | "function" | "model"

type CatalogItem = {
  id:       string
  name:     string
  path:     string
  reason:   string
  type:     string
  iconType: IconType
}

// ─── Tree data ─────────────────────────────────────────────────────────────────

const CATALOG_TREE: TreeNode[] = [
  {
    id: "recents",
    label: "Recents (10)",
    defaultExpanded: true,
    children: [
      { id: "r-default", label: "default", icon: SchemaIcon },
      {
        id: "r-joy", label: "joy", icon: CatalogIcon, defaultExpanded: true,
        children: [
          { id: "r-e2e_otel_spans", label: "e2e_otel_spans", icon: TableIcon },
        ],
      },
      {
        id: "r-otel", label: "otel", icon: SchemaIcon, defaultExpanded: true,
        children: [
          { id: "r-traces_silver",           label: "traces_silver",           icon: TableIcon     },
          { id: "r-overview_error_timeline", label: "overview_error_timeline", icon: TableViewIcon },
          { id: "r-service_health_5min",     label: "service_health_5min",     icon: TableViewIcon },
          { id: "r-e2e_obs_trace_search",    label: "e2e_obs_trace_search",    icon: ModelsIcon    },
          { id: "r-e2e_obs_trace_agent",     label: "e2e_obs_trace_agent",     icon: ModelsIcon    },
          { id: "r-e2e_otel_logs",           label: "e2e_otel_logs",           icon: TableIcon     },
        ],
      },
    ],
  },
  {
    id: "favorites",
    label: "Favorites (7)",
    defaultExpanded: true,
    children: [
      {
        id: "f-otel", label: "otel", icon: SchemaIcon, defaultExpanded: true,
        children: [
          { id: "f-usage",        label: "usage",         icon: TableIcon    },
          { id: "f-forecast",     label: "forecast_price", icon: FunctionIcon },
          { id: "f-departure",    label: "departuredelay", icon: TableIcon    },
        ],
      },
      { id: "f-joy",            label: "joy",            icon: CatalogIcon  },
      { id: "f-add_two_numbers",label: "add_two_numbers",icon: FunctionIcon },
      { id: "f-acme_avo",       label: "acme_avo",       icon: CatalogIcon  },
    ],
  },
  {
    id: "mydata",
    label: "My Data",
    defaultExpanded: true,
    children: [
      { id: "my-files", label: "My Files", icon: FolderIcon },
    ],
  },
]

// ─── Table data ─────────────────────────────────────────────────────────────────

const SUGGESTED: CatalogItem[] = [
  { id: "1",  name: "default",                 path: "joy",         reason: "You view frequently",      type: "Schema",            iconType: "schema"   },
  { id: "2",  name: "joy",                     path: "",            reason: "You view frequently",      type: "Catalog",           iconType: "catalog"  },
  { id: "3",  name: "otel",                    path: "andre",       reason: "Favorite",                 type: "Schema",            iconType: "schema"   },
  { id: "4",  name: "otel",                    path: "joy",         reason: "You view frequently",      type: "Schema",            iconType: "schema"   },
  { id: "5",  name: "e2e_otel_spans",          path: "joy.default", reason: "You viewed · 13 days ago", type: "Table",             iconType: "table"    },
  { id: "6",  name: "e2e_obs_trace_agent",     path: "joy.default", reason: "You view frequently",      type: "Model",             iconType: "model"    },
  { id: "7",  name: "traces_silver",           path: "joy.default", reason: "You viewed · 18 days ago", type: "Streaming table",   iconType: "view"     },
  { id: "8",  name: "overview_error_timeline", path: "joy.default", reason: "You viewed · 18 days ago", type: "Materialized view", iconType: "view"     },
  { id: "9",  name: "e2e_otel_logs",           path: "joy.default", reason: "You view frequently",      type: "Table",             iconType: "table"    },
  { id: "10", name: "service_health_5min",     path: "joy.default", reason: "You viewed · 18 days ago", type: "Materialized view", iconType: "view"     },
  { id: "11", name: "otel_logs",               path: "andre.otel",  reason: "You view frequently",      type: "Table",             iconType: "table"    },
  { id: "12", name: "e2e_obs_trace_search",    path: "joy.default", reason: "You viewed · 19 days ago", type: "Model",             iconType: "model"    },
  { id: "13", name: "otel_metrics",            path: "joy.default", reason: "You view frequently",      type: "Table",             iconType: "table"    },
]

const TABLE_DATA: Record<CatalogTab, CatalogItem[]> = {
  suggested: SUGGESTED,
  favorites: SUGGESTED.filter((i) => i.reason === "Favorite" || i.reason === "You view frequently").slice(0, 7),
  recents:   SUGGESTED.slice(0, 8),
}

// ─── Item type icon ─────────────────────────────────────────────────────────────

function ItemIcon({ iconType }: { iconType: IconType }) {
  const cls = "text-muted-foreground shrink-0"
  switch (iconType) {
    case "schema":   return <SchemaIcon    size={16} className={cls} />
    case "catalog":  return <CatalogIcon   size={16} className={cls} />
    case "table":    return <TableIcon     size={16} className={cls} />
    case "view":     return <TableViewIcon size={16} className={cls} />
    case "function": return <FunctionIcon  size={16} className={cls} />
    case "model":    return <ModelsIcon    size={16} className={cls} />
  }
}

// ─── Page ───────────────────────────────────────────────────────────────────────

export default function CatalogPage() {
  const [selectedId,   setSelectedId]   = React.useState("r-e2e_otel_spans")
  const [activeTab,    setActiveTab]    = React.useState<CatalogTab>("suggested")
  const [leftTab,      setLeftTab]      = React.useState<LeftTab>("for-you")
  const [treeSearch,   setTreeSearch]   = React.useState("")
  const [tableFilter,  setTableFilter]  = React.useState("")

  const items = (TABLE_DATA[activeTab] ?? []).filter(
    (i) =>
      !tableFilter ||
      i.name.toLowerCase().includes(tableFilter.toLowerCase()) ||
      i.path.toLowerCase().includes(tableFilter.toLowerCase())
  )

  return (
    <AppShell activeItem="catalog" workspace="pm-ai-bootcamp" userInitial="J">
      <div className="flex h-full overflow-hidden">

        {/* ── Left catalog panel ─────────────────────────────────────────── */}
        <div className="w-[264px] shrink-0 flex flex-col border-r border-border overflow-hidden">

          {/* Header */}
          <div className="flex h-10 items-center justify-between px-3 shrink-0">
            <span className="text-sm font-semibold text-foreground">Catalog</span>
            <div className="flex items-center gap-0.5">
              <Button variant="ghost" size="icon-xs" aria-label="Settings">
                <CatalogGearIcon size={14} className="text-muted-foreground" />
              </Button>
              <Button variant="ghost" size="icon-xs" aria-label="Refresh">
                <RefreshIcon size={14} className="text-muted-foreground" />
              </Button>
              <Button variant="ghost" size="icon-xs" aria-label="New">
                <PlusIcon size={14} className="text-muted-foreground" />
              </Button>
            </div>
          </div>

          {/* Warehouse status */}
          <div className="flex items-center gap-1.5 px-3 pb-2 shrink-0 min-w-0">
            <span className="h-2 w-2 rounded-full bg-green-500 shrink-0" />
            <span className="truncate text-xs text-foreground min-w-0">0 - Shared SQL Ware...</span>
            <span className="shrink-0 rounded border border-border px-1 text-[10px] leading-5 text-muted-foreground">Serverless</span>
            <span className="shrink-0 rounded border border-border px-1 text-[10px] leading-5 text-muted-foreground">XL</span>
          </div>

          {/* Search */}
          <div className="flex items-center gap-1 px-2 pb-2 shrink-0">
            <div className="relative flex-1">
              <SearchIcon
                size={12}
                className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                className="h-7 pl-7 text-xs"
                placeholder="Type to search..."
                value={treeSearch}
                onChange={(e) => setTreeSearch(e.target.value)}
              />
            </div>
            <Button variant="ghost" size="icon-xs" aria-label="Filter">
              <FilterIcon size={14} className="text-muted-foreground" />
            </Button>
          </div>

          {/* For you / All pills */}
          <div className="flex items-center gap-2 px-3 pb-2 shrink-0">
            <FilterPill active={leftTab === "for-you"} onClick={() => setLeftTab("for-you")}>
              For you
            </FilterPill>
            <FilterPill active={leftTab === "all"} onClick={() => setLeftTab("all")}>
              All
            </FilterPill>
          </div>

          {/* Catalog tree */}
          <div className="flex-1 overflow-y-auto">
            <Tree
              nodes={CATALOG_TREE}
              selectedId={selectedId}
              onSelect={setSelectedId}
              size="x-small"
            />
          </div>

        </div>

        {/* ── Right main content ──────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Fixed header area */}
          <div className="flex flex-col gap-4 px-6 pt-6 shrink-0">

            {/* Page header */}
            <PageHeader
              title={
                <span className="flex items-center gap-2">
                  <CatalogIcon size={20} className="text-foreground" />
                  Catalog
                </span>
              }
              onOverflow={() => {}}
              actions={
                <>
                  <Button variant="outline" size="sm">
                    <ShieldIcon size={14} className="mr-1" />
                    Govern
                  </Button>
                  <Button variant="outline" size="sm">
                    <ConnectIcon size={14} className="mr-1" />
                    Connect
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ShareIcon size={14} className="mr-1" />
                    Share
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                  <Button size="sm">
                    Create
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </>
              }
            />

            {/* Filter pills + search */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <FilterPill
                  active={activeTab === "suggested"}
                  icon={<SparkleDoubleFillIcon size={14} />}
                  onClick={() => setActiveTab("suggested")}
                >
                  Suggested
                </FilterPill>
                <FilterPill
                  active={activeTab === "favorites"}
                  icon={<StarFillIcon size={14} />}
                  onClick={() => setActiveTab("favorites")}
                >
                  Favorites
                </FilterPill>
                <FilterPill
                  active={activeTab === "recents"}
                  icon={<ClockIcon size={14} />}
                  onClick={() => setActiveTab("recents")}
                >
                  Recents
                </FilterPill>
              </div>
              <div className="relative w-48">
                <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="h-8 pl-8"
                  placeholder="Filter"
                  value={tableFilter}
                  onChange={(e) => setTableFilter(e.target.value)}
                />
              </div>
            </div>

            {/* Column headers */}
            <div className="grid grid-cols-[1fr_220px_160px] border-b border-border pb-2">
              <span className="text-sm font-semibold text-foreground">Name</span>
              <span className="text-sm font-semibold text-foreground">Reason for suggestion</span>
              <span className="text-sm font-semibold text-foreground">Type</span>
            </div>

          </div>

          {/* Scrollable rows */}
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            {items.length === 0 ? (
              <p className="py-12 text-center text-sm text-muted-foreground">No items found.</p>
            ) : (
              items.map((item) => (
                <Link
                  key={item.id}
                  href={`/catalog/table?name=${encodeURIComponent(item.name)}`}
                  className="group grid w-full grid-cols-[1fr_220px_160px] h-12 items-center border-b border-border pl-4 text-left transition-colors hover:bg-secondary"
                >
                  {/* Name + path */}
                  <div className="flex items-center gap-2 min-w-0 pr-4">
                    <ItemIcon iconType={item.iconType} />
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm text-primary truncate">{item.name}</span>
                      {item.path && (
                        <span className="text-hint text-muted-foreground truncate">{item.path}</span>
                      )}
                    </div>
                  </div>
                  {/* Reason */}
                  <span className="text-sm text-foreground pr-4">{item.reason}</span>
                  {/* Type */}
                  <span className="text-sm text-foreground">{item.type}</span>
                </Link>
              ))
            )}
          </div>

        </div>
      </div>
    </AppShell>
  )
}
