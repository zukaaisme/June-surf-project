import type { ReactNode } from "react";

// V3 Section primitive
// bg variants map to V3 palette tokens
// beat controls vertical padding rhythm

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: "paper" | "white" | "mist" | "bone" | "magenta-light" | "ink" | "slate";
  beat?: "breathing" | "dense" | "dominant";
  fullWidth?: boolean; // escape container for full-bleed children
}

const bgMap: Record<string, string> = {
  paper:          "bg-[var(--color-paper)]",
  white:          "bg-white",
  mist:           "bg-[var(--color-mist)]",
  bone:           "bg-[var(--color-bone)]",
  "magenta-light":"bg-[var(--color-magenta-light)]",
  ink:            "bg-[var(--color-ink)] text-white",
  slate:          "bg-[var(--color-slate)] text-white",
};

const beatMap: Record<string, string> = {
  breathing: "py-20 md:py-32",
  dense:     "py-14 md:py-20",
  dominant:  "py-28 md:py-40",
};

export function Section({
  id,
  children,
  className = "",
  bg = "paper",
  beat = "breathing",
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bgMap[bg] ?? bgMap.paper} ${beatMap[beat]} ${className}`}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="mx-auto max-w-7xl px-5 md:px-10">{children}</div>
      )}
    </section>
  );
}
