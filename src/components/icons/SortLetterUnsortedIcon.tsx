import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SortLetterUnsortedIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SortLetterUnsortedIcon = forwardRef<SVGSVGElement, SortLetterUnsortedIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M11.5001 0.939331L10.9697 1.46966L7.46973 4.96966L8.53039 6.03032L10.7501 3.81065V5.99999V9.99999L10.7501 12.1893L8.53039 9.96966L7.46973 11.0303L10.9697 14.5303L11.5001 15.0607L12.0304 14.5303L15.5304 11.0303L14.4697 9.96966L12.2501 12.1893L12.2501 9.99999V5.99999V3.81065L14.4697 6.03032L15.5304 4.96966L12.0304 1.46966L11.5001 0.939331Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4 1C4.27369 1 4.52007 1.17271 4.62301 1.43673L7 7.53333H5.54868L5.18479 6.6H2.81521L2.45131 7.53333H1L3.37699 1.43673C3.47993 1.17271 3.72631 1 4 1ZM3.36105 5.2H4.63895L4 3.5612L3.36105 5.2Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4.59827 9.86667H1.31051V8.46667H6.01715C6.27695 8.46667 6.51351 8.62249 6.62476 8.86691C6.73602 9.11132 6.70206 9.4006 6.53755 9.60993L3.40177 13.6H6.68953V15H1.98288C1.72308 15 1.48653 14.8442 1.37528 14.5998C1.26402 14.3553 1.29798 14.0661 1.46249 13.8567L4.59827 9.86667Z" fill="currentColor"/>
</svg>
  )
);
SortLetterUnsortedIcon.displayName = "SortLetterUnsortedIcon";
