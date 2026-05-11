"use client";

import { useEffect, useState } from "react";

// True when the viewport has a real pointer (mouse) and is wide enough for desktop layout.
// Gates scroll-tied transforms and hover effects that would jank on touch devices.
const MQ = "(min-width: 768px) and (hover: hover)";

export function useIsDesktop(): boolean {
  const [v, setV] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(MQ);
    const update = () => setV(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return v;
}
