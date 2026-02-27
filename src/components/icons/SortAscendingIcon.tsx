import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SortAscendingIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SortAscendingIcon = forwardRef<SVGSVGElement, SortAscendingIconProps>(
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
<path d="M11.5 0.939453L15.5303 4.96978L14.4697 6.03044L12.25 3.81077V10.0001H10.75V3.81077L8.53033 6.03044L7.46967 4.96978L11.5 0.939453Z" fill="currentColor"/>
<path d="M1 4.50011H5V6.00011H1V4.50011Z" fill="currentColor"/>
<path d="M1 12.5001H11V14.0001H1V12.5001Z" fill="currentColor"/>
<path d="M8 8.50011H1V10.0001H8V8.50011Z" fill="currentColor"/>
</svg>
  )
);
SortAscendingIcon.displayName = "SortAscendingIcon";
