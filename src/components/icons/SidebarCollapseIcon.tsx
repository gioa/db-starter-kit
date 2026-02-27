import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SidebarCollapseIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SidebarCollapseIcon = forwardRef<SVGSVGElement, SidebarCollapseIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M1.75 1C1.33579 1 1 1.33579 1 1.75V14.25C1 14.6642 1.33579 15 1.75 15H15V13.5H5.5V2.5H15V1H1.75ZM4 2.5H2.5V13.5H4L4 2.5Z" fill="currentColor"/>
<path d="M9.81066 8.75L11.0303 9.96967L9.96967 11.0303L6.93934 8L9.96967 4.96967L11.0303 6.03033L9.81066 7.25H14V8.75H9.81066Z" fill="currentColor"/>
</svg>
  )
);
SidebarCollapseIcon.displayName = "SidebarCollapseIcon";
