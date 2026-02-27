import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TableVectorIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const TableVectorIcon = forwardRef<SVGSVGElement, TableVectorIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M1.75 1C1.33579 1 1 1.33579 1 1.75V14.25C1 14.6642 1.33579 15 1.75 15H8V13.5H6.5V7H13.5V8.99999H15V1.75C15 1.33579 14.6642 1 14.25 1H1.75ZM5 7H2.5V13.5H5V7ZM13.5 5.5V2.5H2.5V5.5H13.5Z" fill="currentColor"/>
<circle cx="12" cy="12" r="1" fill="currentColor"/>
<circle cx="12.5" cy="9.5" r="0.5" fill="currentColor"/>
<circle cx="9.5" cy="12.5" r="0.5" fill="currentColor"/>
<circle cx="13.75" cy="13.75" r="0.75" fill="currentColor"/>
<circle cx="9.75" cy="9.75" r="0.75" fill="currentColor"/>
<path d="M13.5 13.5L12 12M12 12L12.5 9.5M12 12L9.5 12.5" stroke="currentColor" strokeWidth="0.3"/>
<path d="M10 10L12 12" stroke="currentColor" strokeWidth="0.3"/>
</svg>
  )
);
TableVectorIcon.displayName = "TableVectorIcon";
