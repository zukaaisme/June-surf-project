"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Program",  href: "#included" },
  { label: "People",   href: "#people" },
  { label: "Pricing",  href: "#pricing" },
  { label: "Contact",  href: "#apply" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // When transparent over hero (not scrolled), use paper text for contrast on photos.
  // When frosted (scrolled), switch to ink text.
  const textColor = scrolled ? "text-[var(--color-ink)]" : "text-[var(--color-paper)]";
  const logoColor = scrolled ? "text-[var(--color-ink)]" : "text-[var(--color-paper)]";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-[color-mix(in_srgb,var(--color-paper)_90%,transparent)] backdrop-blur-sm border-b border-[color-mix(in_srgb,var(--color-cardamom)_15%,transparent)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 md:px-10 h-14 flex items-center justify-between">
          <a
            href="#"
            className={`font-display font-semibold text-label tracking-tight transition-colors duration-300 ${logoColor}`}
          >
            {site.name}
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`font-mono-accent opacity-70 hover:opacity-100 transition-opacity duration-200 ${textColor}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#apply"
              className={`hidden md:inline-flex btn ${scrolled ? "btn-primary" : "btn-on-dark"} py-2 px-4 min-h-0 text-xs`}
            >
              Apply
            </a>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden flex flex-col gap-[5px] w-6 py-1 ${textColor}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-px w-full bg-current transition-transform origin-center ${
                  menuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-transform origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--color-paper)] flex flex-col justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25 }}
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduced ? 0 : i * 0.06, duration: reduced ? 0 : 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="font-display text-h1 font-bold text-[var(--color-ink)] hover:text-[var(--color-cinnamon)] transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reduced ? 0 : navLinks.length * 0.06, duration: reduced ? 0 : 0.4 }}
              >
                <a
                  href="#apply"
                  onClick={closeMenu}
                  className="btn btn-primary mt-4"
                >
                  Apply
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
