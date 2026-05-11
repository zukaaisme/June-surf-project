"use client";

// Light parallax wrapper — child drifts within ±(range/2) percent of its own height as the section
// passes through the viewport. Disabled on touch devices (the matchMedia gate) and under
// prefers-reduced-motion — scroll-tied transforms are the main source of jank on phones.

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useIsDesktop } from "@/lib/use-is-desktop";

type ParallaxProps = {
  children: ReactNode;
  /** Total drift in percent (e.g. 20 means -10% → +10%) */
  range?: number;
  className?: string;
};

export function Parallax({ children, range = 12, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const enabled = isDesktop && !reduced;
  const half = range / 2;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    enabled ? [`-${half}%`, `${half}%`] : ["0%", "0%"],
  );

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div className="relative h-full w-full will-change-transform" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
