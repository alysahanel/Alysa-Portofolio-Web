import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import type { PortfolioCopy } from "../data/content";

interface JourneySectionProps {
  experience: PortfolioCopy["experience"];
  showMoreLabel: string;
  showLessLabel: string;
}

const INITIAL_VISIBLE = 4;

export function JourneySection({
  experience,
  showMoreLabel,
  showLessLabel,
}: JourneySectionProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? experience.items
    : experience.items.slice(0, INITIAL_VISIBLE);
  const hiddenCount = Math.max(0, experience.items.length - INITIAL_VISIBLE);

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-sand/45 border-t border-accent/12"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="reveal-block flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-6">
          <h2 className="font-heading font-semibold text-[32px] sm:text-[40px] tracking-[-0.025em] text-ink">
            {experience.heading}
          </h2>
          <span className="font-script text-[24px] text-accent">
            {experience.annotation}
          </span>
        </div>

        {/* Horizontal wavy SVG line inspired by anumehajain.space's "How I got here" */}
        <div className="reveal-block hidden md:block mb-8" aria-hidden="true">
          <svg
            viewBox="0 0 1100 44"
            className="w-full h-11 overflow-visible"
            fill="none"
          >
            <path
              d="M 0 28 C 120 4, 240 44, 370 20 C 500 -2, 620 42, 760 20 C 890 0, 990 36, 1100 18"
              stroke="#B97D65"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {[90, 380, 670, 960].map((cx, idx) => (
              <circle
                key={idx}
                cx={cx}
                cy={idx % 2 === 0 ? 19 : 23}
                r="5.5"
                fill={idx === 3 ? "#9B5F46" : "#FAF7F4"}
                stroke="#9B5F46"
                strokeWidth="2"
              />
            ))}
          </svg>
        </div>

        {/* 4-column Journey Cards */}
        <div className="reveal-block grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((item, idx) => (
            <article
              key={`${item.organization}-${item.period}`}
              style={
                showAll && idx >= INITIAL_VISIBLE
                  ? { animationDelay: `${(idx - INITIAL_VISIBLE) * 55}ms` }
                  : undefined
              }
              className="animate-fade-rise flex flex-col gap-2.5 p-5 rounded-xl bg-paper/90 border border-accent/15"
            >
              <span className="font-mono-meta text-xs text-ink-muted">
                {item.period}
              </span>

              <h3 className="font-heading font-semibold text-[17px] leading-snug text-ink">
                {item.isCurrent ? (
                  <span className="bg-highlight px-1.5 py-0.5 rounded-[4px] box-decoration-clone">
                    {item.role}
                  </span>
                ) : (
                  item.role
                )}
              </h3>

              <p className="text-sm font-semibold text-accent">
                {item.organization}
              </p>

              <p className="text-[14px] leading-relaxed text-ink-secondary">
                {item.summary}
              </p>

              <ul className="mt-auto pt-2 border-t border-accent/10 flex flex-col gap-1.5 text-[13px] text-ink-secondary list-disc pl-4">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {experience.items.length > INITIAL_VISIBLE && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="btn-sketch inline-flex items-center gap-2 px-5 py-2.5 bg-paper text-ink border border-ink text-sm font-medium hover:bg-sand cursor-pointer"
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
