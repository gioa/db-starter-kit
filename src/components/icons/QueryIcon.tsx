import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface QueryIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const QueryIcon = forwardRef<SVGSVGElement, QueryIconProps>(
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
<g clipPath="url(#clip0_13123_35183)">
<path fillRule="evenodd" clipRule="evenodd" d="M2 1.75C2 1.33579 2.33579 1 2.75 1H8.75C8.94891 1 9.13968 1.07902 9.28033 1.21967L13.7803 5.71967C13.921 5.86032 14 6.05109 14 6.25V10H12.5V7H8.75C8.33579 7 8 6.66421 8 6.25V2.5H3.5V16H2.75C2.33579 16 2 15.6642 2 15.25V1.75ZM9.5 3.56066L11.4393 5.5H9.5V3.56066Z" fill="currentColor"/>
<path d="M5.53033 9.96967L8.56066 13L5.53033 16.0303L4.46967 14.9697L6.43934 13L4.46967 11.0303L5.53033 9.96967Z" fill="currentColor"/>
<path d="M14 14.5H9V16H14V14.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_13123_35183">
<rect fill="white"/>
</clipPath>
</defs>
</svg>
  )
);
QueryIcon.displayName = "QueryIcon";
