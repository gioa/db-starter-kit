import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface FileLockIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const FileLockIcon = forwardRef<SVGSVGElement, FileLockIconProps>(
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
<g clipPath="url(#clip0_23850_51)">
<path fillRule="evenodd" clipRule="evenodd" d="M2.75 0C2.33579 0 2 0.335786 2 0.75V14.25C2 14.6642 2.33579 15 2.75 15H7.5V13.5H3.5V1.5H8V5.25C8 5.66421 8.33579 6 8.75 6H12.5V7H14V5.25C14 5.05109 13.921 4.86032 13.7803 4.71967L9.28033 0.21967C9.13968 0.0790176 8.94891 0 8.75 0H2.75ZM11.4393 4.5L9.5 2.56066V4.5H11.4393Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14 10V10.6884H14.2818C14.6961 10.6884 15.0318 11.0241 15.0318 11.4384V15.3123C15.0318 15.7265 14.6961 16.0623 14.2818 16.0623H9.71814C9.30393 16.0623 8.96814 15.7265 8.96814 15.3123V11.4384C8.96814 11.0241 9.30393 10.6884 9.71814 10.6884H10V10C10 8.89543 10.8955 8 12 8C13.1046 8 14 8.89543 14 10ZM12.5 10V10.6884H11.5V10C11.5 9.72386 11.7239 9.5 12 9.5C12.2762 9.5 12.5 9.72386 12.5 10ZM13.5318 12.1884V14.5623H10.4681V12.1884H13.5318Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_23850_51">
<rect fill="white"/>
</clipPath>
</defs>
</svg>
  )
);
FileLockIcon.displayName = "FileLockIcon";
