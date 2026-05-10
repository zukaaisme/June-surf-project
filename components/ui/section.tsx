import type { ReactNode } from "react";

// Vertical rhythm beats (per v2-system.md):
//   open      — min-h-svh (Hero only, handled inline)
//   breathing — py-40   (default)
//   dense     — py-28
//   dominant  — py-48
// Container: max-w-7xl (1280) — upgraded from max-w-6xl in v2.

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  // Section background variants
  bg?: "paper" | "cream" | "palm" | "belacan" | "ink" | "turquoise";
  // Vertical rhythm beat — controls py-* applied to the section element
  beat?: "breathing" | "dense" | "dominant";
}

const bgMap = {
  paper:    "bg-[var(--color-paper)]",
  cream:    "bg-[var(--color-cream)]",
  palm:     "bg-[var(--color-cardamom)] text-[var(--color-cream)]",
  turquoise:"bg-[var(--color-cumin)] text-[var(--color-ink)]",
  belacan:  "bg-[var(--color-belacan)] text-[var(--color-cream)]",
  ink:      "bg-[var(--color-ink)] text-[var(--color-cream)]",
};

const beatMap = {
  breathing: "py-28 md:py-40",
  dense:     "py-20 md:py-28",
  dominant:  "py-32 md:py-48",
};

export function Section({
  id,
  children,
  className = "",
  bg = "paper",
  beat = "breathing",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bgMap[bg]} ${beatMap[beat]} px-5 md:px-10 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
