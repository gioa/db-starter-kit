import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BarsDescendingVerticalIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const BarsDescendingVerticalIcon = forwardRef<SVGSVGElement, BarsDescendingVerticalIconProps>(
  ({ size = 16, className, ariaLabel, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden={!ariaLabel}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
      {...props}
    >
<path d="M7 12.75H1V11.25H7V12.75Z" fill="currentColor"/>
<path d="M15 4.75H1V3.25H15V4.75Z" fill="currentColor"/>
<path d="M1 7.25H11V8.75H1V7.25Z" fill="currentColor"/>
</svg>
  )
);
BarsDescendingVerticalIcon.displayName = "BarsDescendingVerticalIcon";
