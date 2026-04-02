"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  PlayIcon, TrashIcon, FullscreenIcon, OverflowIcon,
} from "@/components/icons"
import { SparkleDoubleFillIcon } from "@/components/icons"

// ─── Types ────────────────────────────────────────────────────────────────────

export type CellLanguage = "Python" | "SQL" | "Markdown" | "Scala" | "R"

export interface NotebookCellProps {
  language?: CellLanguage
  lineCount?: number
  onRun?: () => void
  onDelete?: () => void
  onExpand?: () => void
  className?: string
  children?: React.ReactNode
}

// ─── Component ────────────────────────────────────────────────────────────────

export function NotebookCell({
  language = "Python",
  lineCount = 1,
  onRun,
  onDelete,
  onExpand,
  className,
  children,
}: NotebookCellProps) {
  return (
    <div
      className={cn(
        "rounded border border-border bg-background overflow-hidden",
        className
      )}
    >
      {/* ── Cell toolbar ── */}
      <div className="flex items-center justify-end gap-1 border-b border-border px-3 py-1.5">
        <Badge variant="secondary" className="mr-1 font-normal">{language}</Badge>
        <Button variant="ghost" size="icon-xs" aria-label="Delete cell" onClick={onDelete}>
          <TrashIcon size={14} className="text-muted-foreground" />
        </Button>
        <Button variant="ghost" size="icon-xs" aria-label="AI assist">
          <SparkleDoubleFillIcon size={14} className="text-[var(--ai-gradient-start,#CA42E0)]" />
        </Button>
        <Button variant="ghost" size="icon-xs" aria-label="Expand cell" onClick={onExpand}>
          <FullscreenIcon size={14} className="text-muted-foreground" />
        </Button>
        <Button variant="ghost" size="icon-xs" aria-label="More options">
          <OverflowIcon size={14} className="text-muted-foreground" />
        </Button>
      </div>

      {/* ── Cell body: gutter + editor ── */}
      <div className="flex min-h-[80px]">
        {/* Left gutter */}
        <div className="flex w-10 shrink-0 flex-col items-center border-r border-border pt-2 gap-2">
          <Button
            variant="ghost"
            size="icon-xs"
            aria-label="Run cell"
            onClick={onRun}
            className="h-5 w-5"
          >
            <PlayIcon size={10} className="text-muted-foreground" />
          </Button>
          <div className="flex flex-col items-center gap-0">
            {Array.from({ length: lineCount }).map((_, i) => (
              <span
                key={i}
                className="w-full text-right pr-2 text-xs leading-5 text-muted-foreground/60 select-none font-mono"
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>

        {/* Code area */}
        <div className="flex-1 p-3 font-mono text-sm text-foreground min-h-[80px]">
          {children}
        </div>
      </div>
    </div>
  )
}
