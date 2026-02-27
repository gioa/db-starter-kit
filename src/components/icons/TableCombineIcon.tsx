import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TableCombineIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const TableCombineIcon = forwardRef<SVGSVGElement, TableCombineIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M11.3271 1.00391C11.7051 1.04253 12 1.36183 12 1.75V5.5H5.5V12H1.75L1.67285 11.9961C1.32025 11.9601 1.03994 11.6798 1.00391 11.3271L1 11.25V1.75C1 1.36183 1.29488 1.04253 1.67285 1.00391L1.75 1H11.25L11.3271 1.00391ZM2.5 5.5V10.5H4V5.5H2.5ZM2.5 4H10.5V2.5H2.5V4Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.3271 4.00391C14.7051 4.04253 15 4.36183 15 4.75V14.25L14.9961 14.3271C14.9601 14.6798 14.6798 14.9601 14.3271 14.9961L14.25 15H4.75L4.67285 14.9961C4.32025 14.9601 4.03994 14.6798 4.00391 14.3271L4 14.25V4.75C4 4.36183 4.29488 4.04253 4.67285 4.00391L4.75 4H14.25L14.3271 4.00391ZM5.5 13.5H7V8.5H5.5V13.5ZM12 13.5H13.5V8.5H12V13.5ZM8.5 13.5H10.5V8.5H8.5V13.5ZM5.5 7H13.5V5.5H5.5V7Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11.3271 1.00391C11.7051 1.04253 12 1.36183 12 1.75V4H14.25L14.3271 4.00391C14.7051 4.04253 15 4.36183 15 4.75V14.25L14.9961 14.3271C14.9601 14.6798 14.6798 14.9601 14.3271 14.9961L14.25 15H4.75L4.67285 14.9961C4.32025 14.9601 4.03994 14.6798 4.00391 14.3271L4 14.25V12H1.75L1.67285 11.9961C1.32025 11.9601 1.03994 11.6798 1.00391 11.3271L1 11.25V1.75C1 1.36183 1.29488 1.04253 1.67285 1.00391L1.75 1H11.25L11.3271 1.00391ZM5.5 13.5H7V8.5H5.5V13.5ZM8.5 13.5H10.5V8.5H8.5V13.5ZM12 13.5H13.5V8.5H12V13.5ZM2.5 10.5H4V5.5H2.5V10.5ZM5.5 7H13.5V5.5H5.5V7ZM2.5 4H10.5V2.5H2.5V4Z" fill="currentColor"/>
</svg>
  )
);
TableCombineIcon.displayName = "TableCombineIcon";
