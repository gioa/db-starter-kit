import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SortLetterHorizontalDescendingIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SortLetterHorizontalDescendingIcon = forwardRef<SVGSVGElement, SortLetterHorizontalDescendingIconProps>(
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
<g clipPath="url(#clip0_11827_34681)">
<path d="M0.939331 4.00006L4.96966 -0.0302734L6.03032 1.03039L3.81065 3.25006L9.99999 3.25006V4.75006L3.81065 4.75006L6.03032 6.96973L4.96966 8.03039L0.939331 4.00006Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4.30747 9.00005C4.6145 9.0004 4.89031 9.18784 5.00365 9.47318L7.59627 16H5.98226L5.74393 15.4H2.85534L2.61544 16H0.999991L3.61023 9.47161C3.72421 9.18653 4.00045 8.99971 4.30747 9.00005ZM3.45508 13.9H5.1481L4.30435 11.7759L3.45508 13.9Z" fill="currentColor"/>
<path d="M11.7772 10.5H8.49999V9.00005H13.25C13.5321 9.00005 13.7903 9.15834 13.9183 9.40972C14.0463 9.66109 14.0225 9.96304 13.8565 10.1912L10.7228 14.5H14V16H9.24999C8.9679 16 8.70966 15.8418 8.58166 15.5904C8.45365 15.339 8.47752 15.0371 8.64344 14.8089L11.7772 10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_11827_34681">
<rect fill="white"/>
</clipPath>
</defs>
</svg>
  )
);
SortLetterHorizontalDescendingIcon.displayName = "SortLetterHorizontalDescendingIcon";
