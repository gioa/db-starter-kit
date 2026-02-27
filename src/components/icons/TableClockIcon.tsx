import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TableClockIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const TableClockIcon = forwardRef<SVGSVGElement, TableClockIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8ZM11.25 12.3105L12.9697 14.0303L14.0303 12.9697L12.75 11.6895V9.5H11.25V12.3105Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.3271 1.00391C14.7051 1.04253 15 1.36183 15 1.75V7H6.5V15H1.75C1.33579 15 1 14.6642 1 14.25V1.75L1.00391 1.67285C1.04253 1.29488 1.36183 1 1.75 1H14.25L14.3271 1.00391ZM2.5 13.5H5V7H2.5V13.5ZM2.5 5.5H13.5V2.5H2.5V5.5Z" fill="currentColor"/>
</svg>
  )
);
TableClockIcon.displayName = "TableClockIcon";
