"use client";

// Light parallax wrapper — child drifts within ±range relative to the parent's scroll progress.
// Disabled on mobile (touch devices below md) where scroll-tied transforms are the biggest source of jank.
// Honors prefers-reduced-motion.

import { useEffect, useRef, useState, type ReactNode } from "react";
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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (hover: hover)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const num = parseFloat(range);
  const half = num / 2;
  const enabled = isDesktop && !reduced;
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
