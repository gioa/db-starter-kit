import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronDownIcon } from "@/components/icons"
import type { VariantProps } from "class-variance-authority"

interface SplitButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onMenuClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  className?: string
}

function SplitButton({
  children,
  onClick,
  onMenuClick,
  disabled,
  variant = "default",
  className,
}: SplitButtonProps) {
  const dividerColor =
    variant === "default"   ? "border-l-blue-700 dark:border-l-blue-500" :
    variant === "destructive" ? "border-l-red-700"  : "border-l-border"

  return (
    <div className={cn("inline-flex -space-x-px", className)}>
      <Button
        variant={variant}
        size="sm"
        onClick={onClick}
        disabled={disabled}
        className="rounded-r-none"
      >
        {children}
      </Button>
      <Button
        variant={variant}
        size="sm"
        onClick={onMenuClick}
        disabled={disabled}
        className={cn("rounded-l-none border-l px-2", dividerColor)}
        aria-label="More options"
      >
        <ChevronDownIcon size={14} />
      </Button>
    </div>
  )
}

export { SplitButton }
