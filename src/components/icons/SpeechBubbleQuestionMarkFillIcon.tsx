import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SpeechBubbleQuestionMarkFillIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels. Default: 16 (DuBois standard). */
  size?: number | string;
  className?: string;
  /** Accessible label. When set, icon gets role="img". */
  ariaLabel?: string;
}

export const SpeechBubbleQuestionMarkFillIcon = forwardRef<SVGSVGElement, SpeechBubbleQuestionMarkFillIconProps>(
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
<path fillRule="evenodd" clipRule="evenodd" d="M0 7C0 3.68629 2.68629 1 6 1H10C13.3137 1 16 3.68629 16 7C16 10.3137 13.3137 13 10 13H9.06066L6.28033 15.7803C6.06583 15.9948 5.74324 16.059 5.46299 15.9429C5.18273 15.8268 5 15.5533 5 15.25V12.9515C2.17873 12.584 0 10.1714 0 7.25V7ZM10.0787 6.61104C10.249 6.19991 10.2936 5.74751 10.2068 5.31105C10.1199 4.87459 9.90566 4.47368 9.59099 4.15901C9.27632 3.84434 8.87541 3.63005 8.43895 3.54323C8.00249 3.45642 7.5501 3.50097 7.13896 3.67127C6.72783 3.84157 6.37643 4.12996 6.12919 4.49997C5.88196 4.86998 5.75 5.30499 5.75 5.75H7.25C7.25 5.60167 7.29399 5.45666 7.3764 5.33332C7.45881 5.20999 7.57594 5.11386 7.71299 5.05709C7.85003 5.00033 8.00083 4.98547 8.14632 5.01441C8.2918 5.04335 8.42544 5.11478 8.53033 5.21967C8.63522 5.32456 8.70665 5.4582 8.73559 5.60368C8.76453 5.74917 8.74967 5.89997 8.69291 6.03701C8.63614 6.17406 8.54001 6.29119 8.41668 6.3736C8.29334 6.45601 8.14833 6.5 8 6.5H7.25V8H8C8.44501 8 8.88002 7.86804 9.25003 7.62081C9.62004 7.37357 9.90843 7.02217 10.0787 6.61104ZM8 10.5C7.58579 10.5 7.25 10.1642 7.25 9.74999C7.25 9.33578 7.58579 8.99999 8 8.99999C8.41421 8.99999 8.75 9.33578 8.75 9.74999C8.75 10.1642 8.41421 10.5 8 10.5Z" fill="currentColor"/>
</svg>
  )
);
SpeechBubbleQuestionMarkFillIcon.displayName = "SpeechBubbleQuestionMarkFillIcon";
