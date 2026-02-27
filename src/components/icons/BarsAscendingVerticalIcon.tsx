import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BarsAscendingVerticalIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const BarsAscendingVerticalIcon = forwardRef<SVGSVGElement, BarsAscendingVerticalIconProps>(
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
<path d="M7 3.25H1V4.75H7V3.25Z" fill="currentColor"/>
<path d="M15 11.25H1V12.75H15V11.25Z" fill="currentColor"/>
<path d="M1 8.75H11V7.25H1V8.75Z" fill="currentColor"/>
</svg>
  )
);
BarsAscendingVerticalIcon.displayName = "BarsAscendingVerticalIcon";
