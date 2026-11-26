import type { PortfolioCopy } from "../data/content";

interface HowIWorkProps {
  process: PortfolioCopy["process"];
}

export function HowIWork({ process }: HowIWorkProps) {
  return (
    <section
      id="process"
      className="py-16 md:py-24 bg-sand/55 border-t border-accent/12"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="reveal-block flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-12">
          <h2 className="font-heading font-semibold text-[32px] sm:text-[40px] tracking-[-0.025em] text-ink">
            {process.heading}
          </h2>
          <span className="font-script text-[24px] text-accent">
            {process.annotation}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-14 items-start">
          {/* Winding SVG path echoing anumehajain.space's process trail in Alysa's terracotta */}
          <div className="hidden md:flex justify-center sticky top-28" aria-hidden="true">
            <svg
              viewBox="0 0 180 540"
              className="w-[170px] h-[520px] overflow-visible"
              fill="none"
            >
              <path
                d="M 54 24 C 145 70, 145 130, 62 180 C -10 225, 10 290, 96 335 C 165 375, 140 445, 76 495"
                stroke="#B97D65"
                strokeOpacity="0.45"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {[
                { cx: 54, cy: 24 },
                { cx: 122, cy: 112 },
                { cx: 40, cy: 222 },
                { cx: 132, cy: 360 },
                { cx: 76, cy: 495 },
              ].map((pt, i) => (
                <g key={i}>
                  <circle
                    cx={pt.cx}
                    cy={pt.cy}
                    r="8"
                    fill="#FAF7F4"
                    stroke="#9B5F46"
                    strokeWidth="2.5"
                  />
                  <circle cx={pt.cx} cy={pt.cy} r="3" fill="#B97D65" />
                </g>
              ))}
            </svg>
          </div>

          {/* 5 cross-functional principles */}
          <ol className="flex flex-col divide-y divide-accent/15">
            {process.steps.map((step) => (
              <li
                key={step.num}
                className="reveal-block py-6 first:pt-0 last:pb-0 flex flex-col gap-2"
              >
                <span className="font-mono-meta text-xs font-medium text-accent">
                  {step.num}
                </span>
                <h3 className="font-heading font-semibold text-[20px] sm:text-[22px] text-ink leading-snug">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-secondary max-w-[58ch]">
                  {step.body}
                </p>
                <p className="font-script text-[22px] text-accent pt-1">
                  {step.question}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
