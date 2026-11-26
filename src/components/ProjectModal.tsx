import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  FilePdf,
  GithubLogo,
  PlayCircle,
  X,
} from "@phosphor-icons/react";
import type { PortfolioCopy, ProjectItem } from "../data/content";

interface ProjectModalProps {
  project: ProjectItem | null;
  labels: PortfolioCopy["work"];
  onClose: () => void;
}

export function ProjectModal({ project, labels, onClose }: ProjectModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/55 backdrop-blur-[2px] flex items-center justify-center p-4 sm:p-6 animate-fade-rise"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-[740px] max-h-[90dvh] overflow-y-auto rounded-2xl bg-paper border border-accent/25 shadow-[0_24px_60px_rgba(35,28,24,0.28)]">
        <div className="sticky top-0 z-10 bg-paper/95 backdrop-blur-sm px-6 py-4 border-b border-accent/15 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono-meta text-[11px] text-accent">
              {project.badge}
            </p>
            <h2
              id="modal-project-title"
              className="font-heading font-semibold text-xl sm:text-2xl text-ink leading-snug mt-0.5"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label={labels.modalLabels.close}
            className="w-9 h-9 rounded-lg border border-accent/20 flex items-center justify-center text-ink-secondary hover:bg-sand hover:text-ink transition-colors shrink-0 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-6">
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-sand border border-accent/15">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm text-accent mb-1.5">
              {labels.modalLabels.overview}
            </h3>
            <p className="text-[15px] leading-relaxed text-ink-secondary">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm text-accent mb-2">
              {labels.modalLabels.techStack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-sand text-ink text-xs font-medium border border-accent/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm text-accent mb-2">
              {labels.modalLabels.myRole}
            </h3>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-[14.5px] leading-relaxed text-ink-secondary">
              {project.role.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-accent/15 flex flex-wrap gap-2.5">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sketch inline-flex items-center gap-1.5 px-4 py-2 bg-ink text-paper border border-ink text-sm font-medium hover:bg-accent hover:border-accent"
              >
                <span>{labels.liveDemo}</span>
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.pdf && (
              <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sketch inline-flex items-center gap-1.5 px-4 py-2 bg-ink text-paper border border-ink text-sm font-medium hover:bg-accent hover:border-accent"
              >
                <FilePdf size={16} />
                <span>{labels.thesisPdf}</span>
              </a>
            )}
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sketch inline-flex items-center gap-1.5 px-4 py-2 bg-paper text-ink border border-ink text-sm font-medium hover:bg-sand"
              >
                <PlayCircle size={16} />
                <span>{labels.demoVideo}</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sketch inline-flex items-center gap-1.5 px-4 py-2 bg-paper text-ink border border-ink text-sm font-medium hover:bg-sand"
              >
                <GithubLogo size={16} />
                <span>{labels.viewCode}</span>
              </a>
            )}
            {project.report && (
              <a
                href={project.report}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sketch inline-flex items-center gap-1.5 px-4 py-2 bg-paper text-ink border border-ink text-sm font-medium hover:bg-sand"
              >
                <FilePdf size={16} />
                <span>{labels.viewReport}</span>
              </a>
            )}
            {project.extraLinks?.map((extra) => (
              <a
                key={extra.label}
                href={extra.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sketch inline-flex items-center gap-1.5 px-4 py-2 bg-paper text-ink border border-ink text-sm font-medium hover:bg-sand"
              >
                <span>{extra.label}</span>
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
