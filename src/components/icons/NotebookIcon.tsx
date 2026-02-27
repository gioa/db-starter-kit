import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface NotebookIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const NotebookIcon = forwardRef<SVGSVGElement, NotebookIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M3 1.75C3 1.33579 3.33579 1 3.75 1H14.25C14.6642 1 15 1.33579 15 1.75V14.25C15 14.6642 14.6642 15 14.25 15H3.75C3.33579 15 3 14.6642 3 14.25V12.5H1V11H3V8.75H1V7.25H3V5H1V3.5H3V1.75ZM4.5 2.5V13.5H6V2.5H4.5ZM7.5 2.5V13.5H13.5V2.5H7.5Z" fill="currentColor"/>
</svg>
  )
);
NotebookIcon.displayName = "NotebookIcon";
