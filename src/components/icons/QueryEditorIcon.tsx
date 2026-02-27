import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface QueryEditorIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const QueryEditorIcon = forwardRef<SVGSVGElement, QueryEditorIconProps>(
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
<path d="M12 12H8V10.5H12V12Z" fill="currentColor"/>
<path d="M5.53033 11.5303L7.56066 9.5L5.53033 7.46967L4.46967 8.53033L5.43934 9.5L4.46967 10.4697L5.53033 11.5303Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M1.75 1C1.33579 1 1 1.33579 1 1.75V14.25C1 14.6642 1.33579 15 1.75 15H14.25C14.6642 15 15 14.6642 15 14.25V1.75C15 1.33579 14.6642 1 14.25 1H1.75ZM2.5 4V2.5H13.5V4H2.5ZM2.5 5.5V13.5H13.5V5.5H2.5Z" fill="currentColor"/>
</svg>
  )
);
QueryEditorIcon.displayName = "QueryEditorIcon";
