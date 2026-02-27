import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SidebarSyncIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SidebarSyncIcon = forwardRef<SVGSVGElement, SidebarSyncIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M1 3C1 2.44772 1.44772 2 2 2H14C14.5523 2 15 2.44772 15 3V6.5C15 6.77614 14.7761 7 14.5 7H14C13.7239 7 13.5 6.77614 13.5 6.5V3.5H5V12.5H7.5C7.77614 12.5 8 12.7239 8 13V13.5C8 13.7761 7.77614 14 7.5 14H2C1.44772 14 1 13.5523 1 13V3ZM4 4.5C4 4.22386 3.77614 4 3.5 4H2.5C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H3.5C3.77614 5 4 4.77614 4 4.5ZM4 6.5C4 6.22386 3.77614 6 3.5 6H2.5C2.22386 6 2 6.22386 2 6.5C2 6.77614 2.22386 7 2.5 7H3.5C3.77614 7 4 6.77614 4 6.5Z" fill="currentColor"/>
<path d="M12 8C12.7939 8.00004 13.5249 8.28154 14.0819 8.75171C14.3462 8.97483 14.3793 9.37021 14.1563 9.63458C13.9332 9.8989 13.5378 9.93296 13.2734 9.70995C12.94 9.42856 12.495 9.25289 12 9.25285C11.5852 9.25285 11.2062 9.3773 10.8979 9.58271H11.1612C11.507 9.5829 11.7876 9.86329 11.7876 10.2091C11.7874 10.5548 11.5068 10.8354 11.1612 10.8356H9.62643C9.2806 10.8356 9.00023 10.5549 9 10.2091V8.62643C9 8.28046 9.28046 8 9.62643 8C9.93486 8 10.1891 8.22329 10.2411 8.5168C10.7454 8.19103 11.3508 8 12 8ZM15 13.3736C14.9998 13.7193 14.7193 13.9998 14.3736 14C14.0649 14 13.8096 13.7761 13.7579 13.4822C13.2537 13.8079 12.6491 14 12 14C11.206 14 10.4752 13.7175 9.91811 13.2473C9.65384 13.0241 9.62059 12.6288 9.84372 12.3644C10.0669 12.1004 10.4624 12.067 10.7266 12.29C11.06 12.5714 11.505 12.7471 12 12.7471C12.4148 12.7471 12.7938 12.6227 13.1021 12.4173H12.8388C12.4929 12.4173 12.2124 12.1368 12.2124 11.7909C12.2125 11.445 12.4929 11.1644 12.8388 11.1644H14.3736C14.7194 11.1646 14.9999 11.4451 15 11.7909V13.3736Z" fill="currentColor"/>
</svg>
  )
);
SidebarSyncIcon.displayName = "SidebarSyncIcon";
