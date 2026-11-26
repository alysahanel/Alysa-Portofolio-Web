import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import type { Lang, PortfolioCopy } from "../data/content";

interface NavbarProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  nav: PortfolioCopy["nav"];
  onDownloadCv: () => void;
  scrolled: boolean;
}

export function Navbar({
  lang,
  onLangChange,
  nav,
  onDownloadCv,
  scrolled,
}: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const links = [
    { href: "#work", label: nav.work },
    { href: "#process", label: nav.process },
    { href: "#about", label: nav.about },
    { href: "#experience", label: nav.experience },
    { href: "#certificates", label: nav.certificates },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/92 backdrop-blur-md border-b transition-all duration-200 ${
        scrolled
          ? "border-accent/25 shadow-[0_4px_20px_rgba(35,28,24,0.06)]"
          : "border-accent/12"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-heading font-semibold text-lg tracking-tight text-ink group-hover:text-accent transition-colors">
            alysa.
          </span>
          <span className="font-script text-[15px] text-accent leading-none -mt-0.5 hidden sm:inline">
            {nav.brandSub}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-[14px] font-medium text-ink-secondary hover:text-accent transition-colors rounded-md"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onDownloadCv}
            className="px-3 py-1.5 text-[14px] font-medium text-accent hover:text-accent-hover transition-colors cursor-pointer"
          >
            {nav.resume}
          </button>
        </nav>

        <div className="flex items-center gap-2.5">
          <div
            className="inline-flex items-center p-1 rounded-lg bg-sand border border-accent/15"
            role="group"
            aria-label="Language switcher"
          >
            {(["en", "id"] as const).map((code) => {
              const active = lang === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => onLangChange(code)}
                  aria-pressed={active}
                  className={`px-2.5 py-1 rounded text-xs font-mono-meta font-medium uppercase transition-colors cursor-pointer ${
                    active
                      ? "bg-ink text-paper"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen((v) => !v)}
            aria-expanded={drawerOpen}
            aria-label={nav.menuLabel}
            className="md:hidden w-10 h-10 rounded-lg border border-accent/20 flex items-center justify-center text-ink hover:bg-sand transition-colors cursor-pointer"
          >
            {drawerOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* Smooth grid-rows mobile drawer */}
      <div
        className={`drawer-wrap md:hidden bg-paper border-t border-accent/15 ${
          drawerOpen ? "is-open" : "pointer-events-none border-t-transparent"
        }`}
        aria-hidden={!drawerOpen}
      >
        <div className="overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-6 py-3 flex flex-col gap-1">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                className="px-3 py-2.5 rounded-md text-[15px] font-medium text-ink-secondary hover:bg-sand hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setDrawerOpen(false);
                onDownloadCv();
              }}
              className="text-left px-3 py-2.5 rounded-md text-[15px] font-medium text-accent hover:bg-sand transition-colors cursor-pointer"
            >
              {nav.resume}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
