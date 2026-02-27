import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SortHorizontalDescendingIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SortHorizontalDescendingIcon = forwardRef<SVGSVGElement, SortHorizontalDescendingIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M3.5 15L3.5 5L2 5L2 15L3.5 15ZM11.5 15L11.5 11L10 11L10 15L11.5 15ZM7.5 8L7.5 15L6 15L6 8L7.5 8ZM14.5303 5.03033L15.0607 4.5L14.5303 3.96967L11.0303 0.469669L9.96967 1.53033L12.1893 3.75L6 3.75L6 5.25L12.1893 5.25L9.96967 7.46967L11.0303 8.53033L14.5303 5.03033Z" fill="currentColor"/>
</svg>
  )
);
SortHorizontalDescendingIcon.displayName = "SortHorizontalDescendingIcon";
