import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TableLightningIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const TableLightningIcon = forwardRef<SVGSVGElement, TableLightningIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M1.75 1C1.33579 1 1 1.33579 1 1.75V14.25C1 14.6642 1.33579 15 1.75 15H8V13.5H6.5V7H13.5V8.99999H15V1.75C15 1.33579 14.6642 1 14.25 1H1.75ZM5 7H2.5V13.5H5V7ZM13.5 5.5V2.5H2.5V5.5H13.5Z" fill="currentColor"/>
<path d="M8.43056 11.5119L11.4306 8.01191L12.5694 8.98809L10.6307 11.25H14C14.2929 11.25 14.559 11.4205 14.6814 11.6866C14.8038 11.9527 14.7601 12.2657 14.5694 12.4881L11.5694 15.9881L10.4306 15.0119L12.3693 12.75H9C8.7071 12.75 8.441 12.5795 8.31862 12.3134C8.19623 12.0473 8.23994 11.7343 8.43056 11.5119Z" fill="currentColor"/>
</svg>
  )
);
TableLightningIcon.displayName = "TableLightningIcon";
