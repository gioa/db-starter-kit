import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BranchCheckIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const BranchCheckIcon = forwardRef<SVGSVGElement, BranchCheckIconProps>(
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
<path d="M3.73926 1C5.39611 1 6.73926 2.34315 6.73926 4C6.73926 5.39752 5.78267 6.56799 4.48926 6.90137V9.08789C5.78277 9.4212 6.73926 10.5926 6.73926 11.9902C6.73918 13.647 5.39606 14.9902 3.73926 14.9902C2.08245 14.9902 0.73934 13.647 0.739258 11.9902C0.739258 10.5926 1.69574 9.4212 2.98926 9.08789V6.90137C1.69584 6.56799 0.739258 5.39752 0.739258 4C0.739258 2.34315 2.0824 1 3.73926 1ZM3.73926 10.4902C2.91083 10.4902 2.23926 11.1618 2.23926 11.9902C2.23934 12.8186 2.91088 13.4902 3.73926 13.4902C4.56763 13.4902 5.23918 12.8186 5.23926 11.9902C5.23926 11.1618 4.56768 10.4902 3.73926 10.4902ZM12.5566 6.24707L9.02637 9.77734L6.99609 7.74707L8.05664 6.68652L9.02637 7.65625L11.4961 5.18652L12.5566 6.24707ZM3.73926 2.5C2.91083 2.5 2.23926 3.17157 2.23926 4C2.23926 4.82843 2.91083 5.5 3.73926 5.5C4.56768 5.5 5.23926 4.82843 5.23926 4C5.23926 3.17157 4.56768 2.5 3.73926 2.5Z" fill="currentColor"/>
</svg>
  )
);
BranchCheckIcon.displayName = "BranchCheckIcon";
