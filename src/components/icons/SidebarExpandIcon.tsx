import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SidebarExpandIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SidebarExpandIcon = forwardRef<SVGSVGElement, SidebarExpandIconProps>(
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
<path d="M11.1893 8.75L9.96967 9.96967L11.0303 11.0303L14.0607 8L11.0303 4.96967L9.96967 6.03033L11.1893 7.25H7V8.75H11.1893Z" fill="currentColor"/>
</svg>
  )
);
SidebarExpandIcon.displayName = "SidebarExpandIcon";
