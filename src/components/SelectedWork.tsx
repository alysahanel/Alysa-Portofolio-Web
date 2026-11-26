import { useState } from "react";
import {
  ArrowUpRight,
  CaretDown,
  FilePdf,
  PlayCircle,
} from "@phosphor-icons/react";
import type {
  PortfolioCopy,
  ProjectCategory,
  ProjectItem,
} from "../data/content";

interface SelectedWorkProps {
  work: PortfolioCopy["work"];
  onSelectProject: (project: ProjectItem) => void;
}

const INITIAL_VISIBLE = 4;

export function SelectedWork({ work, onSelectProject }: SelectedWorkProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [showAll, setShowAll] = useState(false);

  const filteredItems =
    activeCategory === "all"
      ? work.items
      : work.items.filter((p) => p.category === activeCategory);

  const visibleItems = showAll
    ? filteredItems
    : filteredItems.slice(0, INITIAL_VISIBLE);
  const hiddenCount = Math.max(0, filteredItems.length - INITIAL_VISIBLE);

  const handleFilterChange = (cat: ProjectCategory) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  const renderStoryRow = (
    project: ProjectItem,
    featured = false,
    delayMs = 0
  ) => (
    <article
      key={project.id}
      style={delayMs > 0 ? { animationDelay: `${delayMs}ms` } : undefined}
      className={`animate-fade-rise grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] items-center gap-7 md:gap-10 ${
        featured
          ? "p-5 sm:p-7 rounded-2xl bg-white/85 border border-terracotta/30 shadow-[0_8px_30px_rgba(155,95,70,0.08)]"
          : ""
      }`}
    >
      {/* Left: Terracotta-framed visual showcase card (mirrors anumehajain.space blue cards) */}
      <button
        type="button"
        onClick={() => onSelectProject(project)}
        className="group text-left block w-full rounded-xl overflow-hidden bg-terracotta p-3.5 pb-0 sm:p-4 sm:pb-0 border border-accent/20 shadow-[0_6px_22px_rgba(35,28,24,0.08)] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
      >
        <div className="flex items-center justify-between gap-2 pb-2.5 text-[11px] font-mono-meta tracking-wide text-white/90">
          <span className="truncate">{project.badge}</span>
          <ArrowUpRight
            size={15}
            className="shrink-0 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </div>
        <div className="aspect-[16/10] w-full overflow-hidden rounded-t-lg bg-paper">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-400"
          />
        </div>
      </button>

      {/* Right: Story narrative + impact + tactile actions */}
      <div className="flex flex-col gap-3.5">
        <h3 className="font-heading font-semibold text-[22px] sm:text-[26px] leading-[1.2] tracking-[-0.02em] text-ink">
          {project.title}
        </h3>

        <p className="text-[15px] sm:text-[16px] leading-relaxed text-ink-secondary">
          {project.summary}{" "}
          <strong className="font-semibold text-ink">
            {project.impactHighlight}
          </strong>
        </p>

        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {project.techStack.slice(0, featured ? 6 : 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-sand text-ink-secondary text-xs font-medium border border-accent/12"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className={`btn-sketch inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium border cursor-pointer ${
              featured
                ? "bg-ink text-paper border-ink hover:bg-accent hover:border-accent"
                : "bg-paper text-ink border-ink hover:bg-ink hover:text-paper"
            }`}
          >
            <span>{work.storyBtn}</span>
          </button>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover underline underline-offset-4"
            >
              <span>{work.liveDemo}</span>
              <ArrowUpRight size={15} />
            </a>
          )}

          {project.pdf && (
            <a
              href={project.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover underline underline-offset-4"
            >
              <FilePdf size={16} />
              <span>{work.thesisPdf}</span>
            </a>
          )}

          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink-secondary hover:text-accent transition-colors"
            >
              <PlayCircle size={16} />
              <span>{work.demoVideo}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <section id="work" className="py-16 md:py-24 border-t border-accent/12">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="reveal-block flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-10">
          <h2 className="font-heading font-semibold text-[32px] sm:text-[40px] tracking-[-0.025em] text-ink">
            {work.heading}
          </h2>
          <span className="font-script text-[24px] text-accent">
            {work.annotation}
          </span>
        </div>

        {/* Flagship LPR + RFID Capstone Story */}
        <div className="reveal-block mb-14">
          {renderStoryRow(work.capstone, true)}
        </div>

        {/* Category Filter Tabs */}
        <div
          className="reveal-block flex flex-wrap items-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {work.filters.map((f) => {
            const active = activeCategory === f.id;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleFilterChange(f.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                  active
                    ? "bg-ink text-paper border-ink"
                    : "bg-sand/70 text-ink-secondary border-accent/15 hover:border-accent/40 hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Stacked Story Rows (ordered per client request, capped at 4 with Show More) */}
        <div className="flex flex-col gap-12 md:gap-14">
          {visibleItems.map((project, idx) =>
            renderStoryRow(
              project,
              false,
              showAll && idx >= INITIAL_VISIBLE
                ? (idx - INITIAL_VISIBLE) * 55
                : 0
            )
          )}
        </div>

        {/* Smooth Show More / Show Less */}
        {filteredItems.length > INITIAL_VISIBLE && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="btn-sketch inline-flex items-center gap-2 px-5 py-2.5 bg-paper text-ink border border-ink text-sm font-medium hover:bg-sand cursor-pointer"
            >
              <span>
                {showAll ? work.showLess : `${work.showMore} (${hiddenCount})`}
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
