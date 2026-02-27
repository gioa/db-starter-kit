import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CellsSquareIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const CellsSquareIcon = forwardRef<SVGSVGElement, CellsSquareIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M1 1.75C1 1.33579 1.33579 1 1.75 1H14.25C14.6642 1 15 1.33579 15 1.75V14.25C15 14.6642 14.6642 15 14.25 15H1.75C1.33579 15 1 14.6642 1 14.25V1.75ZM2.5 2.5V7.25H7.25V2.5H2.5ZM8.75 2.5V7.25H13.5V2.5H8.75ZM7.25 8.75H2.5V13.5H7.25V8.75ZM8.75 13.5V8.75H13.5V13.5H8.75Z" fill="currentColor"/>
</svg>
  )
);
CellsSquareIcon.displayName = "CellsSquareIcon";
