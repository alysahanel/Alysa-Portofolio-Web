import { useCallback, useEffect, useRef, useState } from "react";
import {
  PORTFOLIO_CONTENT,
  PROFILE_CONFIG,
  type Lang,
  type ProjectItem,
} from "./data/content";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { HowIWork } from "./components/HowIWork";
import { AboutSkills } from "./components/AboutSkills";
import { JourneySection } from "./components/JourneySection";
import { CertificatesSection } from "./components/CertificatesSection";
import { ContactFooter } from "./components/ContactFooter";
import { ProjectModal } from "./components/ProjectModal";

const LANG_KEY = "alysa_porto_v2_lang";

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return localStorage.getItem(LANG_KEY) === "id" ? "id" : "en";
    } catch {
      return "en";
    }
  });
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const copy = PORTFOLIO_CONTENT[lang];

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToast(null), 3200);
  }, []);

  // Sync <html lang>, title, and localStorage
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = copy.meta.title;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // ignore storage restrictions
    }
  }, [lang, copy.meta.title]);

  // Sticky header elevation via IntersectionObserver (zero scroll listeners)
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Smooth scroll-reveal observer across sections
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal-block");
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px 80px 0px", threshold: 0.01 }
    );

    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, [lang]);

  const handleDownloadCv = useCallback(async () => {
    try {
      const res = await fetch(PROFILE_CONFIG.cvPath, { method: "HEAD" });
      if (res.ok) {
        const link = document.createElement("a");
        link.href = PROFILE_CONFIG.cvPath;
        link.download = PROFILE_CONFIG.cvPath.split("/").pop() || "CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        showToast(copy.contact.cvNotice);
      }
    } catch {
      showToast(copy.contact.cvNotice);
    }
  }, [copy.contact.cvNotice, showToast]);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_CONFIG.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = PROFILE_CONFIG.email;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    showToast(`${copy.contact.copiedBtn}: ${PROFILE_CONFIG.email}`);
    window.setTimeout(() => setCopied(false), 2200);
  }, [copy.contact.copiedBtn, showToast]);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <div
        ref={sentinelRef}
        className="absolute top-0 left-0 w-px h-3 pointer-events-none"
        aria-hidden="true"
      />

      <Navbar
        lang={lang}
        onLangChange={setLang}
        nav={copy.nav}
        onDownloadCv={handleDownloadCv}
        scrolled={scrolled}
      />

      <main>
        <Hero hero={copy.hero} onDownloadCv={handleDownloadCv} />
        <SelectedWork work={copy.work} onSelectProject={setActiveProject} />
        <HowIWork process={copy.process} />
        <AboutSkills about={copy.about} skills={copy.skills} />
        <JourneySection
          experience={copy.experience}
          showMoreLabel={copy.work.showMore}
          showLessLabel={copy.work.showLess}
        />
        <CertificatesSection
          certificates={copy.certificates}
          showMoreLabel={copy.work.showMore}
          showLessLabel={copy.work.showLess}
        />
      </main>

      <ContactFooter
        contact={copy.contact}
        config={PROFILE_CONFIG}
        onDownloadCv={handleDownloadCv}
        onCopyEmail={handleCopyEmail}
        copied={copied}
      />

      <ProjectModal
        project={activeProject}
        labels={copy.work}
        onClose={() => setActiveProject(null)}
      />

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-sm px-4 py-3 rounded-lg bg-ink text-paper text-sm font-medium shadow-[0_14px_36px_rgba(35,28,24,0.28)] animate-fade-rise"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
