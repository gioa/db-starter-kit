import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BarsAscendingHorizontalIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const BarsAscendingHorizontalIcon = forwardRef<SVGSVGElement, BarsAscendingHorizontalIconProps>(
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
<path d="M3.25 9L3.25 15H4.75L4.75 9H3.25Z" fill="currentColor"/>
<path d="M11.25 1L11.25 15H12.75V1L11.25 1Z" fill="currentColor"/>
<path d="M8.75 15L8.75 5L7.25 5L7.25 15H8.75Z" fill="currentColor"/>
</svg>
  )
);
BarsAscendingHorizontalIcon.displayName = "BarsAscendingHorizontalIcon";
