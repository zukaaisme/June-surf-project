// Minimal shim — the real design tokens live in @theme block in app/globals.css
// Tailwind 4 CSS-first approach: most config happens in CSS, not here.
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
};

export default config;
