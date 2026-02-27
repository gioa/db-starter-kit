import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BarsDescendingHorizontalIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const BarsDescendingHorizontalIcon = forwardRef<SVGSVGElement, BarsDescendingHorizontalIconProps>(
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
<path d="M12.75 9V15H11.25V9H12.75Z" fill="currentColor"/>
<path d="M4.75 1L4.75 15H3.25L3.25 1L4.75 1Z" fill="currentColor"/>
<path d="M7.25 15L7.25 5L8.75 5L8.75 15H7.25Z" fill="currentColor"/>
</svg>
  )
);
BarsDescendingHorizontalIcon.displayName = "BarsDescendingHorizontalIcon";
