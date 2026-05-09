import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  // Section background variants — pick a deliberate color per section for rhythm.
  bg?: "paper" | "cream" | "palm" | "belacan" | "ink" | "turquoise";
}

const bgMap = {
  paper: "bg-[var(--color-paper)]",
  cream: "bg-[var(--color-cream)]",
  palm: "bg-[var(--color-cardamom)] text-[var(--color-cream)]",
  turquoise: "bg-[var(--color-cumin)] text-[var(--color-ink)]",
  belacan: "bg-[var(--color-belacan)] text-[var(--color-cream)]",
  ink: "bg-[var(--color-ink)] text-[var(--color-cream)]",
};

export function Section({ id, children, className = "", bg = "paper" }: SectionProps) {
  return (
    <section
      id={id}
      className={`${bgMap[bg]} px-5 py-[7.5rem] md:px-10 md:py-40 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
