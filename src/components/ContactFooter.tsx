import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  DownloadSimple,
} from "@phosphor-icons/react";
import type { PortfolioCopy, ProfileConfig } from "../data/content";

interface ContactFooterProps {
  contact: PortfolioCopy["contact"];
  config: ProfileConfig;
  onDownloadCv: () => void;
  onCopyEmail: () => void;
  copied: boolean;
}

export function ContactFooter({
  contact,
  config,
  onDownloadCv,
  onCopyEmail,
  copied,
}: ContactFooterProps) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const timer = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % contact.rotatingWords.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [contact.rotatingWords.length]);

  const activeWord =
    contact.rotatingWords[wordIndex % contact.rotatingWords.length];

  return (
    <footer
      id="contact"
      className="pt-20 pb-12 bg-paper border-t border-accent/15"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Expressive closing headline echoing anumehajain.space */}
        <div className="reveal-block mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="inline-block px-3.5 py-1 rounded-full border border-dashed border-accent/55 bg-sand/60 font-script text-[20px] text-accent leading-none">
              {contact.thoughtBubble}
            </span>
          </div>

          <h2 className="font-heading font-semibold text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-[-0.03em] text-ink">
            <span>{contact.line1Prefix} </span>
            <span key={activeWord} className="text-accent animate-fade-rise inline-block">
              {activeWord}
            </span>
            <span className="block">{contact.line2}</span>
          </h2>
        </div>

        {/* Clean 2-column contact links */}
        <div className="reveal-block grid grid-cols-1 sm:grid-cols-2 gap-10 pb-12 border-b border-accent/15">
          <div>
            <p className="font-mono-meta text-xs text-ink-muted mb-3">
              {contact.findMe}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[15px] font-medium text-ink">
              <a
                href={config.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-accent transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={15} />
              </a>
              <a
                href={config.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-accent transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight size={15} />
              </a>
              <a
                href={config.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-accent transition-colors"
              >
                <span>Instagram</span>
                <ArrowUpRight size={15} />
              </a>
              <button
                type="button"
                onClick={onDownloadCv}
                className="inline-flex items-center gap-1 text-accent hover:text-accent-hover transition-colors cursor-pointer"
              >
                <DownloadSimple size={15} />
                <span>{contact.downloadCv}</span>
              </button>
            </div>
          </div>

          <div>
            <p className="font-mono-meta text-xs text-ink-muted mb-3">
              {contact.emailLabel}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${config.email}`}
                className="font-mono-meta text-[15px] font-medium text-ink hover:text-accent underline underline-offset-4 transition-colors break-all"
              >
                {config.email}
              </a>
              <button
                type="button"
                onClick={onCopyEmail}
                aria-label={contact.copyBtn}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-sand border border-accent/20 text-xs font-medium text-ink hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? contact.copiedBtn : contact.copyBtn}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-ink-muted">
          <p>{contact.copyright}</p>
          <p className="font-script text-[18px] text-accent">
            {contact.footerNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
