import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface StoredProcedureIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const StoredProcedureIcon = forwardRef<SVGSVGElement, StoredProcedureIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M1.51363 11.8534C1.53304 11.6087 1.58883 11.3746 1.67367 11.1548L0.800312 10.4577L1.73574 9.2855L2.60771 9.98094C2.80492 9.84778 3.02195 9.74209 3.25374 9.66918L3.2546 8.5541L4.75492 8.55316L4.75427 9.66919C4.9865 9.74213 5.20394 9.8478 5.40148 9.98121L6.27335 9.28533L7.20824 10.4582L6.33446 11.1545C6.4194 11.3745 6.47456 11.6085 6.494 11.8534L7.58339 12.1015L7.25013 13.5639L6.15979 13.316C6.03804 13.5234 5.88765 13.7111 5.71337 13.8747L6.19871 14.8818L4.8478 15.5328L4.36246 14.5257C4.24545 14.5425 4.12582 14.5534 4.00417 14.5534C3.88255 14.5534 3.76328 14.5427 3.6463 14.5259L3.16179 15.532L1.81035 14.8819L2.29486 13.8758C2.12035 13.712 1.97028 13.5233 1.84843 13.3156L0.759269 13.5643L0.425415 12.1019L1.51363 11.8534ZM3.00483 12.0539C3.00495 12.6061 3.45225 13.0537 4.0044 13.0538C4.55651 13.0538 5.00399 12.6063 5.00427 12.0542C5.00427 11.5019 4.55677 11.0534 4.00449 11.0534C3.45223 11.0534 3.00483 11.5017 3.00483 12.0539Z" fill="currentColor"/>
<circle cx="12.25" cy="3.75" r="2" stroke="currentColor" strokeWidth="1.5"/>
<path d="M10.25 3.75H6C4.89543 3.75 4 4.64543 4 5.75V7.5" stroke="currentColor" strokeWidth="1.5"/>
<path d="M13.5 12.25L8.5 12.25" stroke="currentColor" strokeWidth="1.5"/>
<path d="M11.5 9.75L14 12.25L11.5 14.75" stroke="currentColor" strokeWidth="1.5"/>
</svg>
  )
);
StoredProcedureIcon.displayName = "StoredProcedureIcon";
