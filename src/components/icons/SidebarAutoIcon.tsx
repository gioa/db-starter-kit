import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SidebarAutoIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SidebarAutoIcon = forwardRef<SVGSVGElement, SidebarAutoIconProps>(
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
<path d="M9.06066 8L11.0303 9.96967L9.96967 11.0303L6.93934 8L9.96967 4.96967L11.0303 6.03033L9.06066 8Z" fill="currentColor"/>
<path d="M11.9697 6.03033L13.9393 8L11.9697 9.96967L13.0303 11.0303L16.0607 8L13.0303 4.96967L11.9697 6.03033Z" fill="currentColor"/>
</svg>
  )
);
SidebarAutoIcon.displayName = "SidebarAutoIcon";
