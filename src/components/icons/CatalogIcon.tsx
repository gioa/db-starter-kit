import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CatalogIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const CatalogIcon = forwardRef<SVGSVGElement, CatalogIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M14 0.75C14 0.33579 13.6642 0 13.25 0H4.5C3.11929 0 2 1.11929 2 2.5V13.25C2 14.7688 3.23122 16 4.75 16H13.25C13.6642 16 14 15.6642 14 15.25V0.75ZM3.5 4.79198V13.25C3.5 13.9404 4.05964 14.5 4.75 14.5H12.5V5H4.5C4.14445 5 3.80623 4.92578 3.5 4.79198ZM12.5 3.5V1.5H4.5C3.94772 1.5 3.5 1.94772 3.5 2.5C3.5 3.05228 3.94772 3.5 4.5 3.5H12.5Z" fill="currentColor"/>
</svg>
  )
);
CatalogIcon.displayName = "CatalogIcon";
