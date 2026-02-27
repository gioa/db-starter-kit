import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SortHorizontalAscendingIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SortHorizontalAscendingIcon = forwardRef<SVGSVGElement, SortHorizontalAscendingIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M1.46966 5.03033L0.939331 4.5L1.46966 3.96967L4.96966 0.469669L6.03032 1.53033L3.81065 3.75L9.99999 3.75L9.99999 5.25L3.81065 5.25L6.03032 7.46967L4.96966 8.53033L1.46966 5.03033ZM4.49999 15L4.49999 11L5.99999 11L5.99999 15L4.49999 15ZM12.5 15L12.5 5L14 5L14 15L12.5 15ZM8.49999 8L8.49999 15L9.99999 15L9.99999 8L8.49999 8Z" fill="currentColor"/>
</svg>
  )
);
SortHorizontalAscendingIcon.displayName = "SortHorizontalAscendingIcon";
