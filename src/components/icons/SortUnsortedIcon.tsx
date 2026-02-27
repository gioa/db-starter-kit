import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SortUnsortedIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SortUnsortedIcon = forwardRef<SVGSVGElement, SortUnsortedIconProps>(
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
<path d="M11.5 0.939453L7.46967 4.96978L8.53033 6.03044L10.75 3.81077L10.75 12.1895L8.53033 9.96978L7.46967 11.0304L11.5 15.0608L15.5303 11.0304L14.4697 9.96978L12.25 12.1895L12.25 3.81077L14.4697 6.03044L15.5303 4.96978L11.5 0.939453Z" fill="currentColor"/>
<path d="M6 3.50011H1V5.00011H6V3.50011Z" fill="currentColor"/>
<path d="M6 11.5001H1V13.0001H6V11.5001Z" fill="currentColor"/>
<path d="M1 7.50011H6V9.00011H1V7.50011Z" fill="currentColor"/>
</svg>
  )
);
SortUnsortedIcon.displayName = "SortUnsortedIcon";
