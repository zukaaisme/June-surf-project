"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

// V3 Nav — fixed (not sticky), per Figma: white bg, Special Elite links, magenta-light CTA pill
// Mobile: hamburger drawer, cream bg

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Program",  href: "#included" },
  { label: "House",    href: "#gallery" },
  { label: "People",   href: "#people" },
  { label: "Pricing",  href: "#pricing" },
  { label: "Contacts", href: "#apply" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  // Close drawer on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[rgba(50,55,64,0.08)]"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-10 h-16 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="font-display font-bold text-[var(--color-slate)] text-label hover-fade"
            aria-label="Surf Morocco — back to top"
          >
            {site.name}
          </a>

          {/* Desktop links — Special Elite font per Figma */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-mono-accent text-[var(--color-slate)] hover-fade"
                  style={{ fontSize: "16px", letterSpacing: "0.01em", textTransform: "none", fontFamily: "var(--font-typewriter), serif" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Apply CTA — magenta-light pill per Figma */}
            <a
              href="#apply"
              className="hidden md:inline-flex btn-nav hover-fade"
            >
              Apply now
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 hover-fade"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block h-px w-6 bg-[var(--color-slate)] transition-transform origin-center duration-200 ${
                  menuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-[var(--color-slate)] transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-[var(--color-slate)] transition-transform origin-center duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-[var(--color-paper)] flex flex-col justify-center px-8 pt-16"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: reduced ? 0 : 0.3, ease: "easeInOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <ul className="flex flex-col gap-8" role="list">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduced ? 0 : i * 0.06, duration: reduced ? 0 : 0.35 }}
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="font-display text-h1 font-bold text-[var(--color-slate)] hover-fade block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduced ? 0 : navLinks.length * 0.06, duration: reduced ? 0 : 0.35 }}
              >
                <a
                  href="#apply"
                  onClick={closeMenu}
                  className="btn-nav inline-flex hover-fade"
                >
                  Apply now
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
