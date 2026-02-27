import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BarChartIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const BarChartIcon = forwardRef<SVGSVGElement, BarChartIconProps>(
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
<path d="M1 1V14.25C1 14.6642 1.33579 15 1.75 15H15V13.5H2.5V1H1Z" fill="currentColor"/>
<path d="M7 1V12H8.5V1H7Z" fill="currentColor"/>
<path d="M10 5V12H11.5V5H10Z" fill="currentColor"/>
<path d="M4 5V12H5.5V5H4Z" fill="currentColor"/>
<path d="M13 12V8H14.5V12H13Z" fill="currentColor"/>
</svg>
  )
);
BarChartIcon.displayName = "BarChartIcon";
