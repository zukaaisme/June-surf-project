// Inline SVG texture patterns — printed/faded look, not vector graphics.
// Usage: <Texture variant="wave" /> — absolute positioned, pointer-events none.

interface TextureProps {
  variant: "wave" | "palm" | "sunrays";
  className?: string;
}

function WavePattern() {
  // Wavy horizontal lines, tile 80×40, ink at 7% opacity
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <defs>
        <pattern id="wave-pattern" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M0 20 C10 12, 20 12, 30 20 C40 28, 50 28, 60 20 C70 12, 80 12, 80 20"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.2"
            strokeOpacity="0.07"
            strokeLinecap="round"
          />
          <path
            d="M0 36 C10 28, 20 28, 30 36 C40 44, 50 44, 60 36 C70 28, 80 28, 80 36"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.2"
            strokeOpacity="0.04"
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#wave-pattern)" />
    </svg>
  );
}

function PalmCorner() {
  // Stylized palm frond — bottom-right corner, paper-faded
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        pointerEvents: "none",
        opacity: 0.08,
      }}
    >
      {/* Main trunk */}
      <path
        d="M120 200 C118 180, 115 160, 110 140 C105 120, 100 100, 95 80"
        stroke="var(--color-ink)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Frond 1 — top right */}
      <path
        d="M95 80 C110 65, 135 55, 160 48 C145 56, 125 68, 110 82"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Frond 2 — upper right */}
      <path
        d="M95 80 C115 78, 140 85, 165 95 C148 88, 122 85, 100 88"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Frond 3 — right horizontal */}
      <path
        d="M95 80 C112 92, 132 108, 148 128 C134 110, 114 96, 98 90"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Frond 4 — top left */}
      <path
        d="M95 80 C82 62, 70 48, 50 38 C66 50, 80 66, 90 82"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Frond 5 — left */}
      <path
        d="M95 80 C78 80, 58 78, 38 84 C56 80, 76 82, 94 86"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function SunRays() {
  // Radial line burst from top-right corner, opacity 0.05
  const rays = Array.from({ length: 18 }, (_, i) => {
    const angle = (i * 10) - 10; // -10 to 160 degrees, fan shape
    const rad = (angle * Math.PI) / 180;
    const cx = 0;
    const cy = 0;
    const len = 320;
    return {
      x2: cx + Math.cos(rad) * len,
      y2: cy + Math.sin(rad) * len,
    };
  });

  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      height="320"
      viewBox="0 0 320 320"
      fill="none"
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        pointerEvents: "none",
        opacity: 0.05,
      }}
    >
      {rays.map((r, i) => (
        <line
          key={i}
          x1={0}
          y1={0}
          x2={r.x2}
          y2={r.y2}
          stroke="var(--color-ink)"
          strokeWidth="1"
          strokeOpacity="1"
        />
      ))}
    </svg>
  );
}

export function Texture({ variant, className = "" }: TextureProps) {
  return (
    <span
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
    >
      {variant === "wave" && <WavePattern />}
      {variant === "palm" && <PalmCorner />}
      {variant === "sunrays" && <SunRays />}
    </span>
  );
}
