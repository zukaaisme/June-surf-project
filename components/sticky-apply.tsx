"use client";

import { useEffect, useState } from "react";

/**
 * Floating "Apply now" button on mobile only.
 * Appears after the user scrolls past the hero (~600px), parks bottom-right where the
 * thumb can reach it, and hides while the apply form itself is in view (no point
 * advertising a CTA the user is already looking at).
 */
export function StickyApply() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let formInView = false;

    const onScroll = () => {
      const pastHero = window.scrollY > 600;
      setVisible(pastHero && !formInView);
    };

    // Watch the apply section — hide the floater while the user is on it.
    const applyEl = document.getElementById("apply");
    let observer: IntersectionObserver | null = null;
    if (applyEl && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          formInView = entries[0]?.isIntersecting ?? false;
          onScroll();
        },
        { threshold: 0.15 },
      );
      observer.observe(applyEl);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <a
      href="#apply"
      aria-label="Apply now"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className="icon-button fixed right-5 bottom-5 z-30 inline-flex h-12 items-center rounded-full bg-[var(--color-magenta-light)] px-5 text-[var(--color-slate)] shadow-[0_4px_16px_rgba(50,55,64,0.18)] md:hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 220ms ease, transform 220ms ease",
        fontFamily: "var(--font-bricolage), sans-serif",
        fontWeight: 500,
        fontSize: "var(--fs-button)",
      }}
    >
      Apply now
    </a>
  );
}
