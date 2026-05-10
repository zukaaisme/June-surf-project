// V3 icon set — 7 inline SVG icons
// Single stroke 1.5px, currentColor, 36×36 viewport
// Each icon is a named export

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function IconBase({ size = 36, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconSevenDays(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Calendar with 7 */}
      <rect x="5" y="8" width="26" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="5" y1="14" x2="31" y2="14" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="5" x2="12" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="5" x2="24" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <text x="18" y="26" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor" fontFamily="sans-serif">7</text>
    </IconBase>
  );
}

export function IconFood(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Bowl with utensils */}
      <path d="M8 20 Q8 28 18 28 Q28 28 28 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="8" x2="13" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="23" y1="8" x2="23" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 8 Q23 8 23 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </IconBase>
  );
}

export function IconSurf(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Surfboard / wave */}
      <path d="M6 24 Q12 18 18 22 Q24 26 30 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 20 Q12 10 20 8 Q26 7 28 12 Q30 18 22 22 Q16 25 10 20Z" stroke="currentColor" strokeWidth="1.5" />
    </IconBase>
  );
}

export function IconTransfer(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Vehicle / car side view */}
      <rect x="4" y="17" width="28" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 17 L11 11 L22 11 L27 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="27" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="27" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </IconBase>
  );
}

export function IconPlaceToStay(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* House */}
      <path d="M5 18 L18 7 L31 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 16 L8 29 L28 29 L28 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="20" width="8" height="9" stroke="currentColor" strokeWidth="1.5" />
    </IconBase>
  );
}

export function IconCommunity(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Two figures / people */}
      <circle cx="13" cy="11" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 28 Q5 20 13 20 Q21 20 21 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="25" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19 28 Q19 21 25 21 Q31 21 31 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </IconBase>
  );
}

export function IconSeason(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Sun / off-season calm */}
      <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" />
      <line x1="18" y1="6" x2="18" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="27" x2="18" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="18" x2="9" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="27" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9.5" y1="9.5" x2="11.6" y2="11.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24.4" y1="24.4" x2="26.5" y2="26.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26.5" y1="9.5" x2="24.4" y2="11.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11.6" y1="24.4" x2="9.5" y2="26.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </IconBase>
  );
}

// Convenience map for use with string keys
export const iconMap = {
  seven_days:    IconSevenDays,
  food:          IconFood,
  surf:          IconSurf,
  transfer:      IconTransfer,
  place_to_stay: IconPlaceToStay,
  community:     IconCommunity,
  season:        IconSeason,
} as const;

export type IconName = keyof typeof iconMap;
