import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BarStackedPercentageIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const BarStackedPercentageIcon = forwardRef<SVGSVGElement, BarStackedPercentageIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M2.75 1C2.33579 1 2 1.33579 2 1.75V14.25C2 14.6642 2.33579 15 2.75 15H13.25C13.6642 15 14 14.6642 14 14.25V1.75C14 1.33579 13.6642 1 13.25 1H2.75ZM9 8.5V13.5H7V8.5H9ZM9 7V2.5H7V7H9ZM12.5 13.5H10.5V11.75H12.5V13.5ZM10.5 2.5V10.25H12.5V2.5H10.5ZM5.5 2.5H3.5V10.25H5.5V2.5ZM5.5 13.5V11.75H3.5V13.5H5.5Z" fill="currentColor"/>
</svg>
  )
);
BarStackedPercentageIcon.displayName = "BarStackedPercentageIcon";
