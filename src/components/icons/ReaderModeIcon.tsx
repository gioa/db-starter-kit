import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ReaderModeIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const ReaderModeIcon = forwardRef<SVGSVGElement, ReaderModeIconProps>(
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
<path d="M13 4.5H10V6H13V4.5Z" fill="currentColor"/>
<path d="M13 7.25H10V8.75H13V7.25Z" fill="currentColor"/>
<path d="M13 10H10V11.5H13V10Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0.75 2C0.335786 2 0 2.33579 0 2.75V13.25C0 13.6642 0.335786 14 0.75 14H15.25C15.6642 14 16 13.6642 16 13.25V2.75C16 2.33579 15.6642 2 15.25 2H0.75ZM1.5 12.5V3.5H7.25V12.5H1.5ZM8.75 12.5H14.5V3.5H8.75V12.5Z" fill="currentColor"/>
</svg>
  )
);
ReaderModeIcon.displayName = "ReaderModeIcon";
