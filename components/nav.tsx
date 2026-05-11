"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Program",  href: "#program" },
  { label: "House",    href: "#house" },
  { label: "Team",     href: "#team" },
  { label: "Pricing",  href: "#pricing" },
  { label: "Contacts", href: "#apply" },
];

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2.14753 11.8099C7.3949 9.52374 10.894 8.01654 12.6447 7.28833C17.6435 5.20916 18.6822 4.84799 19.3592 4.83606C19.5081 4.83344 19.8411 4.87034 20.0567 5.04534C20.2388 5.1931 20.2889 5.39271 20.3129 5.5328C20.3369 5.6729 20.3667 5.99204 20.343 6.2414C20.0721 9.08763 18.9 15.9947 18.3037 19.1825C18.0514 20.5314 17.5546 20.9836 17.0736 21.0279C16.0283 21.1241 15.2345 20.3371 14.2221 19.6735C12.6379 18.635 11.7429 17.9885 10.2051 16.9751C8.42795 15.804 9.58001 15.1603 10.5928 14.1084C10.8579 13.8331 15.4635 9.64397 15.5526 9.26395C15.5637 9.21642 15.5741 9.03926 15.4688 8.94571C15.3636 8.85216 15.2083 8.88415 15.0962 8.9096C14.9373 8.94566 12.4064 10.6184 7.50365 13.928C6.78528 14.4212 6.13461 14.6616 5.55163 14.649C4.90893 14.6351 3.67265 14.2856 2.7536 13.9869C1.62635 13.6204 0.730432 13.4267 0.808447 12.8044C0.849081 12.4803 1.29544 12.1488 2.14753 11.8099Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z" />
    </svg>
  );
}

const drawerSocials = [
  { label: "Telegram",  href: site.telegram,  Icon: TelegramIcon },
  { label: "Instagram", href: site.instagram, Icon: InstagramIcon },
] as const;

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
          {/* Mobile: hamburger left. Desktop: brand left. */}
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

          {/* Desktop links — Special Elite font per Figma */}
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

          {/* Apply CTA — visible on every breakpoint, anchored right */}
          <a href="#apply" className="btn-nav hover-fade">
            Apply now
          </a>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col items-center bg-[var(--color-mist)] px-10 pt-16 pb-14"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: reduced ? 0 : 0.3, ease: "easeInOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Top + middle area — links and Apply CTA centred in the space between nav and socials */}
            <div className="flex w-full max-w-[420px] flex-1 flex-col items-center justify-center gap-8">
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
                      className="font-display text-h1 font-bold text-[var(--color-slate)] hover-fade block"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Apply CTA — full width, same shape as Send Application */}
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

            {/* Social icon buttons — pinned to the bottom, side by side, 1:1 ratio */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduced ? 0 : (navLinks.length + 1) * 0.06, duration: reduced ? 0 : 0.35 }}
            >
              {drawerSocials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  aria-label={label}
                  className="hover-fade flex h-14 w-14 items-center justify-center rounded-full bg-white text-[var(--color-slate)]"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
