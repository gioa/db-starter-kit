import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface LayerIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const LayerIcon = forwardRef<SVGSVGElement, LayerIconProps>(
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
<path d="M13.5 2.5H7V1H14.25C14.6642 1 15 1.33579 15 1.75V9H13.5V2.5Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M1 7.75C1 7.33579 1.33579 7 1.75 7H8.25C8.66421 7 9 7.33579 9 7.75V14.25C9 14.6642 8.66421 15 8.25 15H1.75C1.33579 15 1 14.6642 1 14.25V7.75ZM2.5 8.5V13.5H7.5V8.5H2.5Z" fill="currentColor"/>
<path d="M4 5.32H10.5V12H12V4.57C12 4.15579 11.6642 3.82 11.25 3.82H4V5.32Z" fill="currentColor"/>
</svg>
  )
);
LayerIcon.displayName = "LayerIcon";
