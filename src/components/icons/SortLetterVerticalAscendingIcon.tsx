import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SortLetterVerticalAscendingIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SortLetterVerticalAscendingIcon = forwardRef<SVGSVGElement, SortLetterVerticalAscendingIconProps>(
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
<g clipPath="url(#clip0_11827_34692)">
<path fillRule="evenodd" clipRule="evenodd" d="M4.30748 4.74207e-07C4.61451 0.000346357 4.89032 0.187788 5.00366 0.473128L7.59628 7H5.98227L5.74394 6.4H2.85535L2.61545 7H1L3.61024 0.471562C3.72422 0.186478 4.00045 -0.000343507 4.30748 4.74207e-07ZM3.45509 4.9H5.14811L4.30436 2.77589L3.45509 4.9Z" fill="currentColor"/>
<path d="M4.77717 9.5H1.5V8H6.25C6.53209 8 6.79033 8.15829 6.91834 8.40967C7.04634 8.66105 7.02247 8.96299 6.85655 9.19113L3.72283 13.5H7V15H2.25C1.96791 15 1.70967 14.8417 1.58166 14.5903C1.45366 14.339 1.47753 14.037 1.64345 13.8089L4.77717 9.5Z" fill="currentColor"/>
<path d="M12 0.939333L16.0303 4.96966L14.9697 6.03032L12.75 3.81065L12.75 9.99999H11.25L11.25 3.81065L9.03033 6.03032L7.96967 4.96966L12 0.939333Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_11827_34692">
<rect fill="white"/>
</clipPath>
</defs>
</svg>
  )
);
SortLetterVerticalAscendingIcon.displayName = "SortLetterVerticalAscendingIcon";
