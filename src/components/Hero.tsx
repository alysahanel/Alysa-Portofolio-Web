import { useEffect, useState } from "react";
import { ArrowDownRight, DownloadSimple } from "@phosphor-icons/react";
import type { PortfolioCopy } from "../data/content";

interface HeroProps {
  hero: PortfolioCopy["hero"];
  onDownloadCv: () => void;
}

export function Hero({ hero, onDownloadCv }: HeroProps) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const timer = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % hero.rotatingWords.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [hero.rotatingWords.length]);

  const activeWord = hero.rotatingWords[wordIndex % hero.rotatingWords.length];

  return (
    <section id="top" className="hero-atmosphere pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-12 md:gap-10">
        {/* Left: Expressive editorial typography inspired by anumehajain.space */}
        <div className="animate-fade-rise">
          <h1 className="font-heading font-semibold text-[42px] sm:text-[54px] lg:text-[64px] leading-[1.04] tracking-[-0.03em] text-ink">
            <span className="block">{hero.line1}</span>
            <span
              key={activeWord}
              className="block text-accent animate-fade-rise"
            >
              {activeWord}
            </span>
            <span className="block">{hero.line3}</span>
          </h1>

          <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-secondary max-w-[52ch]">
            {hero.introPrefix}
            <strong className="font-semibold text-ink">{hero.introBold}</strong>
            {hero.introSuffix}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#work"
              className="btn-sketch inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper border border-ink text-[15px] font-medium hover:bg-accent hover:border-accent"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowDownRight size={17} />
            </a>

            <button
              type="button"
              onClick={onDownloadCv}
              className="btn-sketch inline-flex items-center gap-2 px-6 py-3 bg-paper/90 text-ink border border-ink text-[15px] font-medium hover:bg-sand cursor-pointer"
            >
              <DownloadSimple size={17} />
              <span>{hero.ctaSecondary}</span>
            </button>
          </div>
        </div>

        {/* Right: Signature Polaroid portrait with terracotta tape & handwritten note */}
        <div className="flex justify-start md:justify-end animate-fade-rise [animation-delay:90ms]">
          <figure className="polaroid-card relative w-full max-w-[300px] sm:max-w-[320px] bg-white p-3 pb-4 rounded-[6px] shadow-[0_14px_36px_rgba(35,28,24,0.12)] border border-accent/15 md:rotate-[2deg] hover:rotate-0 transition-transform duration-300">
            {/* Washi tape tab */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 px-3.5 py-1 bg-highlight/95 border border-terracotta/30 rounded-[3px] shadow-xs -rotate-1 whitespace-nowrap">
              <span className="font-mono-meta text-[11px] font-medium text-ink tracking-tight leading-none block">
                {hero.polaroidTape}
              </span>
            </div>

            <div className="aspect-[4/4.6] w-full overflow-hidden rounded-[3px] bg-terracotta">
              <img
                src="/Prof.jpg"
                alt={hero.photoAlt}
                width={320}
                height={368}
                className="polaroid-img w-full h-full"
              />
            </div>

            <figcaption className="mt-3 text-center font-script text-[22px] text-accent leading-tight">
              {hero.polaroidCaption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
