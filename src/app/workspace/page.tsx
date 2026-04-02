"use client"

import * as React from "react"
import { AppShell } from "@/components/shell/AppShell"
import { SidePanel } from "@/components/shell/SidePanel"
import { EditorTabBar, EditorTab } from "@/components/shell/EditorTabBar"
import { NotebookCell } from "@/components/ui/notebook-cell"
import { Button } from "@/components/ui/button"
import { TreeNode } from "@/components/ui/tree"
import {
  NotebookIcon, FolderIcon, FolderOpenIcon, QueryEditorIcon,
  MarkdownIcon, DashboardIcon, FolderBranchIcon,
} from "@/components/icons"
import { ChevronDown } from "lucide-react"
import { Plus } from "lucide-react"

// ─── Sample data ──────────────────────────────────────────────────────────────

const FILE_TREE: TreeNode[] = [
  {
    id: "drafts",
    label: "Drafts",
    icon: FolderIcon,
    defaultExpanded: false,
  },
  {
    id: "assistant",
    label: ".assistant",
    icon: FolderOpenIcon,
    defaultExpanded: false,
  },
  {
    id: "avocado-flow",
    label: "Avocado_Flow",
    icon: FolderBranchIcon,
    defaultExpanded: true,
    children: [
      {
        id: "notebook-1",
        label: "New Notebook 2026-02-22 21:02:35",
        icon: NotebookIcon,
      },
      {
        id: "sales-query",
        label: "sales_query.sql",
        icon: QueryEditorIcon,
      },
      {
        id: "rules-md",
        label: "rules.md",
        icon: MarkdownIcon,
      },
      {
        id: "avocado-dashboard",
        label: "Avocado Dashboard",
        icon: DashboardIcon,
      },
    ],
  },
]

const TABS: EditorTab[] = [
  { id: "notebook-1", label: "New Notebook 2026-02-22 21:02:35", type: "notebook" },
  { id: "sales-query", label: "Query name", type: "query" },
  { id: "rules-md", label: "file_name", type: "file" },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorkspacePage() {
  const [activeNav, setActiveNav] = React.useState("workspace")
  const [selectedFile, setSelectedFile] = React.useState("notebook-1")
  const [activeTab, setActiveTab] = React.useState("notebook-1")
  const [tabs, setTabs] = React.useState<EditorTab[]>(TABS)

  function handleTabClose(id: string) {
    setTabs((prev) => prev.filter((t) => t.id !== id))
    if (activeTab === id) setActiveTab(tabs.find((t) => t.id !== id)?.id ?? "")
  }

  function handleFileSelect(id: string) {
    setSelectedFile(id)
    setActiveTab(id)
  }

  return (
    <AppShell activeItem={activeNav} onNavigate={setActiveNav}>
      {/* Override default padding — editor is full-bleed */}
      <div className="flex h-full min-h-0 flex-1">

        {/* ── Side panel ───────────────────────────────────────────────── */}
        <SidePanel
          path={["...", "Home", "erin.yoo@da..."]}
          nodes={FILE_TREE}
          selectedId={selectedFile}
          onSelect={handleFileSelect}
        />

        {/* ── Editor area ──────────────────────────────────────────────── */}
        <div className="flex min-w-0 flex-1 flex-col bg-background">

          {/* Tab bar */}
          <EditorTabBar
            tabs={tabs}
            activeTabId={activeTab}
            onTabClick={setActiveTab}
            onTabClose={handleTabClose}
          />

          {/* Menu toolbar */}
          <div className="flex h-9 items-center border-b border-border px-3 gap-0">
            {["File", "Edit", "View", "Run", "Help"].map((item) => (
              <Button key={item} variant="ghost" size="xs" className="text-xs px-2">
                {item}
              </Button>
            ))}

            {/* Language selector */}
            <Button variant="ghost" size="xs" className="text-xs px-2 gap-1">
              Python
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </Button>

            {/* Last edit */}
            <span className="ml-2 text-xs text-muted-foreground">Last edit 20 min ago</span>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <Button size="xs" className="gap-1">
                <span className="text-[10px]">▶</span>
                Run all
              </Button>
              <Button variant="outline" size="xs" className="gap-1.5">
                <span className="h-2 w-2 rounded-full bg-foreground/70 inline-block" />
                Serverless
                <ChevronDown className="h-3 w-3" />
              </Button>
              <Button variant="outline" size="xs">Schedule</Button>
              <Button variant="outline" size="xs">Share</Button>
            </div>
          </div>

          {/* Notebook content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="mx-auto flex max-w-4xl flex-col gap-4">

              <NotebookCell language="Python" lineCount={1} />
              <NotebookCell language="Python" lineCount={1} />

              {/* Add cell footer */}
              <button className="flex items-center justify-center gap-1.5 py-2 text-xs text-muted-foreground hover:text-primary transition-colors group">
                <Plus className="h-3.5 w-3.5" />
                <span>Add cell</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </AppShell>
  )
}
