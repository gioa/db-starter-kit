"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRightIcon, ChevronDownIcon } from "@/components/icons"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TreeNode {
  id: string
  label: string
  /** DuBois icon component */
  icon?: React.ComponentType<{ size?: number; className?: string }>
  children?: TreeNode[]
  defaultExpanded?: boolean
}

interface TreeProps {
  nodes: TreeNode[]
  selectedId?: string
  onSelect?: (id: string) => void
  className?: string
}

interface TreeNodeItemProps {
  node: TreeNode
  depth: number
  selectedId?: string
  onSelect?: (id: string) => void
}

// ─── TreeNodeItem ─────────────────────────────────────────────────────────────

function TreeNodeItem({ node, depth, selectedId, onSelect }: TreeNodeItemProps) {
  const [expanded, setExpanded] = React.useState(node.defaultExpanded ?? false)
  const hasChildren = !!node.children?.length
  const isSelected = node.id === selectedId
  const Icon = node.icon

  return (
    <div>
      {/* Row */}
      <button
        onClick={() => {
          onSelect?.(node.id)
          if (hasChildren) setExpanded((v) => !v)
        }}
        className={cn(
          "group relative flex h-8 w-full items-center gap-1 pr-2 text-left text-sm transition-colors",
          "hover:bg-[var(--action-hover)]",
          isSelected && "bg-secondary",
        )}
        style={{ paddingLeft: `${8 + depth * 16}px` }}
      >
        {/* Selected left border */}
        {isSelected && (
          <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-primary" />
        )}

        {/* Chevron or spacer */}
        <span className="flex h-4 w-4 shrink-0 items-center justify-center">
          {hasChildren ? (
            expanded
              ? <ChevronDownIcon  size={12} className="text-muted-foreground" />
              : <ChevronRightIcon size={12} className="text-muted-foreground" />
          ) : null}
        </span>

        {/* Icon */}
        {Icon && (
          <Icon
            size={14}
            className={cn(
              "shrink-0",
              isSelected ? "text-primary" : "text-blue-400"
            )}
          />
        )}

        {/* Label */}
        <span
          className={cn(
            "truncate",
            isSelected ? "font-semibold text-foreground" : "text-foreground"
          )}
        >
          {node.label}
        </span>
      </button>

      {/* Children */}
      {hasChildren && expanded && (
        <div>
          {node.children!.map((child) => (
            <TreeNodeItem
              key={child.id}
              node={child}
              depth={depth + 1}
              selectedId={selectedId}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Tree ─────────────────────────────────────────────────────────────────────

export function Tree({ nodes, selectedId, onSelect, className }: TreeProps) {
  return (
    <div role="tree" className={cn("w-full select-none", className)}>
      {nodes.map((node) => (
        <TreeNodeItem
          key={node.id}
          node={node}
          depth={0}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}
