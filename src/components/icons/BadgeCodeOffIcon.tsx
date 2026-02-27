import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BadgeCodeOffIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const BadgeCodeOffIcon = forwardRef<SVGSVGElement, BadgeCodeOffIconProps>(
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
<path d="M16 2.75V13.9393L14.5 12.4393V3.5H11.45C11.0933 3.5 10.7859 3.24877 10.715 2.8992C10.5529 2.10073 9.84576 1.5 9 1.5C8.15423 1.5 7.4471 2.10073 7.28501 2.8992C7.21406 3.24877 6.90671 3.5 6.55 3.5H5.56066L4.06066 2H5.99932C6.48912 0.825574 7.64752 0 9 0C10.3525 0 11.5109 0.825574 12.0007 2H15.25C15.6642 2 16 2.33579 16 2.75Z" fill="currentColor"/>
<path d="M12.1008 10.0402L11.0402 8.9795L11.5196 8.50001L9.54998 6.53034L10.6106 5.46968L13.641 8.50001L12.1008 10.0402Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.9393 15L13.9697 16.0303L15.0303 14.9697L2.03033 1.96967L0.969666 3.03033L2 4.06066V14.25C2 14.6642 2.33578 15 2.75 15H12.9393ZM8.48483 10.5455L7.46966 11.5607L4.43933 8.53034L5.4545 7.51517L3.5 5.56066V13.5H11.4393L8.48483 10.5455Z" fill="currentColor"/>
</svg>
  )
);
BadgeCodeOffIcon.displayName = "BadgeCodeOffIcon";
