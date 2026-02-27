import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface PipelineIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const PipelineIcon = forwardRef<SVGSVGElement, PipelineIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M10.75 6.75C10.75 3.57436 8.17564 1 5 1H1.75C1.33579 1 1 1.33579 1 1.75V6C1 6.41421 1.33579 6.75 1.75 6.75H5C5.13807 6.75 5.25 6.86193 5.25 7V9.25C5.25 12.4256 7.82436 15 11 15H14.25C14.6642 15 15 14.6642 15 14.25V10C15 9.58579 14.6642 9.25 14.25 9.25H11C10.8619 9.25 10.75 9.13807 10.75 9V6.75ZM5.5 2.5291C7.61158 2.77657 9.25 4.57195 9.25 6.75V9C9.25 9.79276 9.77713 10.4624 10.5 10.6775V13.4709C8.38841 13.2234 6.75 11.4281 6.75 9.25V7C6.75 6.20724 6.22287 5.53761 5.5 5.32247V2.5291ZM4 2.5V5.25H2.5V2.5H4ZM13.5 10.75H12V13.5H13.5V10.75Z" fill="currentColor"/>
</svg>
  )
);
PipelineIcon.displayName = "PipelineIcon";
