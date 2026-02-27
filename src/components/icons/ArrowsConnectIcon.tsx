import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ArrowsConnectIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const ArrowsConnectIcon = forwardRef<SVGSVGElement, ArrowsConnectIconProps>(
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
<path d="M4.88904 10.8363H3.38904V9.29919L2.47107 10.3246C2.26615 10.5537 2.15282 10.8502 2.15271 11.1576V15.5736H0.65271L0.651733 11.1576C0.651846 10.4811 0.901737 9.82775 1.35291 9.32361L2.45642 8.09119L0.644897 8.09216V6.59216H4.88904V10.8363ZM15.476 6.59216V8.09216L13.6918 8.09119L14.7826 9.33142C15.2241 9.83331 15.468 10.4793 15.4681 11.1478V15.5736H13.9681V11.1478C13.968 10.844 13.8564 10.5497 13.6556 10.3217L12.7318 9.2699V10.8363H11.2318V6.59216H15.476ZM11.0013 11.2367L9.9408 12.2972L8.75037 11.1068V15.5219H7.25037V11.1068L6.05994 12.2972L4.99939 11.2367L8.00037 8.23572L11.0013 11.2367ZM8.00037 1.48474C9.65705 1.48494 11.0004 2.82801 11.0004 4.48474C11.0004 6.14147 9.65705 7.48454 8.00037 7.48474C6.34351 7.48474 5.00037 6.1416 5.00037 4.48474C5.00037 2.82789 6.34351 1.48474 8.00037 1.48474ZM8.00037 2.98474C7.17194 2.98474 6.50037 3.65631 6.50037 4.48474C6.50037 5.31317 7.17194 5.98474 8.00037 5.98474C8.82862 5.98454 9.50037 5.31305 9.50037 4.48474C9.50037 3.65644 8.82862 2.98494 8.00037 2.98474Z" fill="currentColor"/>
</svg>
  )
);
ArrowsConnectIcon.displayName = "ArrowsConnectIcon";
