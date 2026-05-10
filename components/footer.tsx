"use client";

import { useReducedMotion, motion } from "framer-motion";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { captionUppercase } from "@/lib/styles";
import { trip } from "@/content/trip";

const sigStyle = { ...captionUppercase, color: "var(--color-slate)", lineHeight: 1.45 };

const SPRING = { type: "spring", stiffness: 220, damping: 11 } as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const HEADLINE_ROTATE = 2;
const DATE_ROTATE = -2;
const EMAIL_ROTATE = 1.67;

const headlineMotion = {
  initial: { rotate: 0 },
  whileInView: { rotate: HEADLINE_ROTATE },
  viewport: VIEWPORT,
  transition: { ...SPRING, delay: 0.15 },
};
const dateMotion = {
  initial: { rotate: 0 },
  whileInView: { rotate: DATE_ROTATE },
  viewport: VIEWPORT,
  transition: { ...SPRING, delay: 0.35 },
};
const emailMotion = {
  initial: { rotate: 0 },
  whileInView: { rotate: EMAIL_ROTATE },
  viewport: VIEWPORT,
  transition: { ...SPRING, delay: 0.55 },
};

export function Footer() {
  const reduced = useReducedMotion();

  return (
    <footer
      id="contacts-bottom"
      className="relative w-full overflow-hidden bg-[var(--color-magenta-light)]"
    >
      <NoiseOverlay />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-10 py-16 text-center md:gap-7 md:py-20 lg:py-24">
        {reduced ? (
          <h2
            className="text-[var(--color-mist)]"
            style={{ ...headlineBaseStyle, transform: `rotate(${HEADLINE_ROTATE}deg)` }}
          >
            {trip.footerHeadline}
          </h2>
        ) : (
          <motion.h2
            {...headlineMotion}
            className="text-[var(--color-mist)]"
            style={headlineBaseStyle}
          >
            {trip.footerHeadline}
          </motion.h2>
        )}

        <div className="flex w-full max-w-[420px] flex-col items-center gap-1">
          <p style={sigStyle}>
            <RotatedSpan reduced={reduced} motion={dateMotion} rotate={DATE_ROTATE}>
              {trip.footerDate}
            </RotatedSpan>
          </p>
          <p style={sigStyle}>{trip.footerCollaboration}</p>
          <a href={`mailto:${trip.footerEmail}`} className="hover-fade" style={sigStyle}>
            <RotatedSpan reduced={reduced} motion={emailMotion} rotate={EMAIL_ROTATE}>
              {trip.footerEmail}
            </RotatedSpan>
          </a>
        </div>
      </div>
    </footer>
  );
}

const headlineBaseStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "clamp(2.25rem, 8vw, 6rem)",
  fontWeight: 700,
  lineHeight: 0.9,
  letterSpacing: "-0.02em",
  maxWidth: "1100px",
} as const;

type RotatedSpanProps = {
  reduced: boolean | null;
  motion: typeof dateMotion;
  rotate: number;
  children: React.ReactNode;
};

function RotatedSpan({ reduced, motion: motionProps, rotate, children }: RotatedSpanProps) {
  if (reduced) {
    return (
      <span style={{ display: "inline-block", transform: `rotate(${rotate}deg)` }}>{children}</span>
    );
  }
  return (
    <motion.span {...motionProps} style={{ display: "inline-block" }}>
      {children}
    </motion.span>
  );
}
