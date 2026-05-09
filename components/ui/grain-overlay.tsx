// Fixed grain texture — sits above everything, pointer-events: none.
// Rendered once in layout.tsx.

export function GrainOverlay() {
  return <div className="grain" aria-hidden="true" />;
}
