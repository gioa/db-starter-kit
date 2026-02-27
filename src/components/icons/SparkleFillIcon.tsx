import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SparkleFillIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SparkleFillIcon = forwardRef<SVGSVGElement, SparkleFillIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M13.6674 6.57508C15.0425 7.02734 15.0425 8.97264 13.6674 9.42491L11.1945 10.2382C10.742 10.387 10.387 10.742 10.2382 11.1945L9.42491 13.6674C8.97264 15.0425 7.02734 15.0425 6.57508 13.6674L5.76179 11.1945C5.61296 10.742 5.25803 10.387 4.8055 10.2382L2.33261 9.42491C0.957449 8.97265 0.957447 7.02734 2.33261 6.57508L4.8055 5.76179C5.25803 5.61296 5.61296 5.25803 5.76179 4.8055L6.57508 2.33261C7.02734 0.957449 8.97264 0.957448 9.42491 2.33261L10.2382 4.8055C10.387 5.25803 10.742 5.61296 11.1945 5.76179L13.6674 6.57508Z" fill="currentColor"/>
</svg>
  )
);
SparkleFillIcon.displayName = "SparkleFillIcon";
