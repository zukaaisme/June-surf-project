// Mono accent tag for editorial captions and section numbers.

interface MarqueeTagProps {
  children: React.ReactNode;
  className?: string;
}

export function MonoTag({ children, className = "" }: MarqueeTagProps) {
  return (
    <span
      className={`font-mono-accent text-xs tracking-[0.1em] uppercase text-[var(--color-anise)] ${className}`}
    >
      {children}
    </span>
  );
}
