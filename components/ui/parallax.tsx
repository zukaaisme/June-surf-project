"use client";

// Light parallax wrapper — child drifts within ±range relative to the parent's scroll progress
// Use sparingly for cinematic motion. Honors prefers-reduced-motion.

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  /** Total drift range, e.g. "12%" means child translates from -6% to +6% */
  range?: string;
  className?: string;
};

export function Parallax({ children, range = "12%", className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Convert "12%" → ["-6%", "6%"]
  const num = parseFloat(range);
  const half = num / 2;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : [`-${half}%`, `${half}%`],
  );

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div className="relative h-full w-full will-change-transform" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
