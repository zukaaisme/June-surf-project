import { site } from "@/content/site";
import { MonoTag } from "@/components/ui/marquee-tag";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[var(--color-ink)] text-[var(--color-paper)] px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-display text-h2 text-[var(--color-paper)] mb-3">
              {site.name}
            </p>
            <p className="font-mono-accent text-[var(--color-cream)] opacity-50 normal-case">
              Morocco &middot; Winter 2026
            </p>
          </div>

          {/* Contact links */}
          <div>
            <MonoTag className="block mb-4 text-[var(--color-cream)] opacity-50">
              Contact
            </MonoTag>
            <ul className="space-y-2">
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-accent text-[var(--color-paper)] opacity-60 hover:opacity-100 transition-opacity normal-case"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-accent text-[var(--color-paper)] opacity-60 hover:opacity-100 transition-opacity normal-case"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-mono-accent text-[var(--color-paper)] opacity-60 hover:opacity-100 transition-opacity normal-case"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Apply CTA */}
          <div>
            <MonoTag className="block mb-4 text-[var(--color-cream)] opacity-50">
              Ready?
            </MonoTag>
            <a href="#apply" className="btn btn-on-dark">
              Apply for a spot
            </a>
          </div>
        </div>

        {/* Closing line */}
        <div className="pt-8 border-t border-[color-mix(in_srgb,var(--color-paper)_10%,transparent)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display italic text-[var(--color-paper)] opacity-40">
            {site.footerClosing}
          </p>
          <p className="font-mono-accent text-[var(--color-paper)] opacity-30 normal-case">
            &copy; {year} {site.copyrightName}
          </p>
        </div>
      </div>
    </footer>
  );
}
