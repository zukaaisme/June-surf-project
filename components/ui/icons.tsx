// Program icons — operator's exported SVGs from Figma (public/figma/icons/*.svg)
// Rendered via CSS mask so the magenta-light fill follows the current text color.
// This keeps the icon sharp at any pixel ratio without re-encoding the SVG per color.

import type { CSSProperties } from "react";
import type { ProgramIcon } from "@/content/trip";

const ICON_PATHS: Record<ProgramIcon, string> = {
  seven_days:    "/figma/icons/seven_days.svg",
  food:          "/figma/icons/food.svg",
  surf:          "/figma/icons/surf.svg",
  transfer:      "/figma/icons/transfer.svg",
  place_to_stay: "/figma/icons/place_to_stay.svg",
  community:     "/figma/icons/community.svg",
  season:        "/figma/icons/season.svg",
  activities:    "/figma/icons/activities.svg",
};

type ProgramIconProps = {
  name: ProgramIcon;
  size?: number;
  className?: string;
  style?: CSSProperties;
};

export function Icon({ name, size = 36, className, style }: ProgramIconProps) {
  const url = ICON_PATHS[name];
  return (
    <span
      role="img"
      aria-hidden="true"
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        flexShrink: 0,
        backgroundColor: "currentColor",
        WebkitMask: `url(${url}) center/contain no-repeat`,
        mask: `url(${url}) center/contain no-repeat`,
        ...style,
      }}
    />
  );
}

export const CHEVRON_DOWN_URL = "/figma/icons/chevron_down.svg";
