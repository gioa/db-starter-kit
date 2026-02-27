import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  // DuBois: left-border accent, tinted background, 4px radius
  "relative w-full rounded border-l-4 px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default:
          "border-l-primary bg-primary/5 text-card-foreground",
        info:
          "border-l-primary bg-primary/5 text-card-foreground [&>svg]:text-primary",
        destructive:
          "border-l-destructive bg-destructive/5 text-card-foreground [&>svg]:text-destructive *:data-[slot=alert-description]:text-muted-foreground",
        warning:
          "border-l-[var(--warning)] bg-[color-mix(in_srgb,var(--warning)_8%,transparent)] text-card-foreground [&>svg]:text-[var(--warning)]",
        success:
          "border-l-[var(--success)] bg-[color-mix(in_srgb,var(--success)_8%,transparent)] text-card-foreground [&>svg]:text-[var(--success)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
