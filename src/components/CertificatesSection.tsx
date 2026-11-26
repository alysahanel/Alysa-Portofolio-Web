import { useState } from "react";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react";
import type { PortfolioCopy } from "../data/content";

interface CertificatesSectionProps {
  certificates: PortfolioCopy["certificates"];
  showMoreLabel: string;
  showLessLabel: string;
}

const INITIAL_VISIBLE = 4;

export function CertificatesSection({
  certificates,
  showMoreLabel,
  showLessLabel,
}: CertificatesSectionProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? certificates.items
    : certificates.items.slice(0, INITIAL_VISIBLE);
  const hiddenCount = Math.max(0, certificates.items.length - INITIAL_VISIBLE);

  return (
    <section
      id="certificates"
      className="py-16 md:py-24 bg-terracotta border-t border-accent/25"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="reveal-block mb-10 max-w-[58ch]">
          <h2 className="font-heading font-semibold text-[32px] sm:text-[40px] tracking-[-0.025em] text-white">
            {certificates.heading}
          </h2>
          <p className="mt-2 text-[15.5px] text-white/88">
            {certificates.subtitle}
          </p>
        </div>

        <div className="reveal-block grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleItems.map((cert, idx) => (
            <article
              key={cert.title}
              style={
                showAll && idx >= INITIAL_VISIBLE
                  ? { animationDelay: `${(idx - INITIAL_VISIBLE) * 55}ms` }
                  : undefined
              }
              className="animate-fade-rise group rounded-xl overflow-hidden bg-paper border border-white/30 shadow-[0_10px_28px_rgba(35,28,24,0.14)] flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-sand border-b border-accent/12">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-400"
                />
              </div>

              <div className="p-5 flex flex-col flex-1 gap-1.5">
                <span className="font-mono-meta text-xs text-ink-muted">
                  {cert.period}
                </span>
                <h3 className="font-heading font-semibold text-[18px] text-ink">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-accent">{cert.issuer}</p>
                <p className="text-[14px] leading-relaxed text-ink-secondary pt-1">
                  {cert.description}
                </p>

                <div className="mt-auto pt-4 flex flex-wrap gap-4 border-t border-accent/12">
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover underline underline-offset-4"
                  >
                    <span>{certificates.viewCert}</span>
                    <ArrowUpRight size={15} />
                  </a>

                  {cert.report && (
                    <a
                      href={cert.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover underline underline-offset-4"
                    >
                      <span>{certificates.viewReport}</span>
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {certificates.items.length > INITIAL_VISIBLE && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="btn-sketch inline-flex items-center gap-2 px-5 py-2.5 bg-paper text-ink border border-paper text-sm font-medium hover:bg-sand cursor-pointer"
            >
              <span>
                {showAll ? showLessLabel : `${showMoreLabel} (${hiddenCount})`}
              </span>
              <CaretDown
                size={16}
                className={`transition-transform duration-200 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
