"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  type PanInfo,
} from "framer-motion";
import { useIsDesktop } from "@/lib/use-is-desktop";

type Photo = {
  /** Strip thumbnail. Should be a -mini variant for fast initial paint. */
  src: string;
  /** Full-res variant served only when the lightbox opens. Falls back to `src` if absent. */
  full?: string;
  alt: string;
};
type Props = {
  photos: readonly Photo[];
  /** DOM id for the slider container — make it unique if rendering more than one slider on the page */
  id?: string;
};

const GAP = 16;
const PHOTO_WIDTH_CLAMP = "clamp(240px, 22vw, 340px)";

// On mobile the track is a native horizontal scroller — no scroll-tied transform,
// no framer-motion overhead.
const TRACK_DESKTOP_CLASS = "relative w-full overflow-hidden";
const TRACK_MOBILE_CLASS =
  "relative w-full overflow-x-auto px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

export function GallerySlider({ photos, id = "gallery" }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animEnabled = useIsDesktop();

  const [bounds, setBounds] = useState({ start: 0, end: 0 });

  useEffect(() => {
    if (!animEnabled || !trackRef.current) return;
    const update = () => {
      if (!trackRef.current) return;
      const track = trackRef.current.scrollWidth;
      const viewport = window.innerWidth;
      const startOffset = Math.max(viewport * 0.08, 48);
      const overflow = Math.max(0, track - viewport + startOffset * 2);
      const nextBounds = { start: startOffset, end: -(overflow + startOffset) };
      setBounds((prev) =>
        prev.start === nextBounds.start && prev.end === nextBounds.end ? prev : nextBounds,
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [animEnabled, photos.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    animEnabled ? [bounds.start, bounds.end] : [0, 0],
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const open = activeIndex !== null;
  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length],
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  const onSwipe = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  return (
    <>
      <div
        ref={sectionRef}
        id={id}
        className={animEnabled ? TRACK_DESKTOP_CLASS : TRACK_MOBILE_CLASS}
        style={{ paddingTop: "8px", paddingBottom: "8px" }}
      >
        <motion.div
          ref={trackRef}
          className="flex shrink-0"
          style={{
            x: animEnabled ? x : 0,
            gap: `${GAP}px`,
            willChange: animEnabled ? "transform" : "auto",
          }}
        >
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open photo ${i + 1}: ${photo.alt}`}
              className="relative shrink-0 overflow-hidden cursor-zoom-in hover-fade"
              style={{
                width: PHOTO_WIDTH_CLAMP,
                aspectRatio: "340 / 493",
                border: "0.74px solid rgba(50,55,64,0.1)",
                background: "rgba(50,55,64,0.1)",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 240px, 340px"
                loading="lazy"
              />
            </button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {open && activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <LightboxButton onClick={close} ariaLabel="Close photo" className="right-5 top-5">
              <path d="M3 3 L15 15 M15 3 L3 15" />
            </LightboxButton>

            <LightboxButton onClick={prev} ariaLabel="Previous photo" className="left-5 top-1/2 -translate-y-1/2 hidden md:flex">
              <path d="M11 3 L5 9 L11 15" />
            </LightboxButton>

            <LightboxButton onClick={next} ariaLabel="Next photo" className="right-5 top-1/2 -translate-y-1/2 hidden md:flex">
              <path d="M7 3 L13 9 L7 15" />
            </LightboxButton>

            <motion.div
              key={activeIndex}
              className="relative h-[80vh] w-[88vw] max-w-[1200px]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={onSwipe}
            >
              <Image
                src={photos[activeIndex].full ?? photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                fill
                className="object-contain"
                sizes="88vw"
                priority
              />
            </motion.div>

            <p
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80"
              style={{
                fontFamily: "var(--font-typewriter), serif",
                fontSize: "14px",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}
            >
              {activeIndex + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

type LightboxButtonProps = {
  onClick: () => void;
  ariaLabel: string;
  className: string;
  children: React.ReactNode;
};

function LightboxButton({ onClick, ariaLabel, className, children }: LightboxButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`absolute z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover-fade ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </button>
  );
}
