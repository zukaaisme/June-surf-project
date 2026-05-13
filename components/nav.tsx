"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { SOCIALS, SocialButton } from "@/components/ui/social-icons";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Program",  href: "#program" },
  { label: "Team",     href: "#team" },
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
        <div className="mx-auto max-w-7xl px-10 h-16 flex items-center justify-between">
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

          <a
            href="#"
            className="hidden md:inline-block font-display font-bold text-[var(--color-slate)] text-label hover-fade"
            aria-label="Surf Morocco — back to top"
          >
            {site.name}
          </a>

          <ul className="hidden md:flex items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-block font-mono-accent text-[var(--color-slate)] hover-fade"
                  style={{ fontSize: "16px", letterSpacing: "0.01em", textTransform: "none", fontFamily: "var(--font-typewriter), serif" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Apply CTA — anchored right; hidden on mobile while the drawer is open
              (drawer carries its own Apply). Tailwind v4 `hidden!` to win over the
              :where(.btn-nav) display rule with absolute certainty. */}
          <a
            href="#apply"
            className={`btn-nav hover-fade ${menuOpen ? "hidden! md:inline-flex!" : ""}`}
          >
            Apply now
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col items-center bg-white px-10 pt-16 pb-14"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: reduced ? 0 : 0.3, ease: "easeInOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex w-full max-w-[420px] flex-1 flex-col items-center justify-center gap-16">
              <ul className="flex flex-col items-center gap-6 text-center" role="list">
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
                      className="font-display block text-[2.25rem] leading-none tracking-[-0.02em] text-[var(--color-slate)] hover-fade"
                      style={{ fontWeight: 500 }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#apply"
                onClick={closeMenu}
                className="btn-submit hover-fade w-full"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduced ? 0 : navLinks.length * 0.06, duration: reduced ? 0 : 0.35 }}
              >
                Apply now
              </motion.a>
            </div>

            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduced ? 0 : (navLinks.length + 1) * 0.06, duration: reduced ? 0 : 0.35 }}
            >
              {SOCIALS.map((s) => (
                <SocialButton key={s.label} social={s} bg="mist" onClick={closeMenu} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
