import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SortLetterHorizontalAscendingIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SortLetterHorizontalAscendingIcon = forwardRef<SVGSVGElement, SortLetterHorizontalAscendingIconProps>(
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
<g clipPath="url(#clip0_11827_34679)">
<path d="M14.0607 4.00006L10.0303 8.03039L8.96967 6.96973L11.1893 4.75006H5V3.25006L11.1893 3.25006L8.96967 1.03039L10.0303 -0.0302734L14.0607 4.00006Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4.30748 9.00006C4.61451 9.00041 4.89032 9.18785 5.00366 9.47319L7.59628 16.0001H5.98227L5.74394 15.4001H2.85535L2.61545 16.0001H1L3.61024 9.47162C3.72422 9.18654 4.00045 8.99971 4.30748 9.00006ZM3.45509 13.9001H5.14811L4.30436 11.7759L3.45509 13.9001Z" fill="currentColor"/>
<path d="M11.7772 10.5001H8.5V9.00006H13.25C13.5321 9.00006 13.7903 9.15835 13.9183 9.40973C14.0463 9.6611 14.0225 9.96305 13.8566 10.1912L10.7228 14.5001H14V16.0001H9.25C8.96791 16.0001 8.70967 15.8418 8.58166 15.5904C8.45366 15.339 8.47753 15.0371 8.64345 14.8089L11.7772 10.5001Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_11827_34679">
<rect fill="white"/>
</clipPath>
</defs>
</svg>
  )
);
SortLetterHorizontalAscendingIcon.displayName = "SortLetterHorizontalAscendingIcon";
