import type { PortfolioCopy } from "../data/content";

interface AboutSkillsProps {
  about: PortfolioCopy["about"];
  skills: PortfolioCopy["skills"];
}

export function AboutSkills({ about, skills }: AboutSkillsProps) {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-accent/12">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* About Narrative */}
        <div className="reveal-block flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-8">
          <h2 className="font-heading font-semibold text-[32px] sm:text-[40px] tracking-[-0.025em] text-ink">
            {about.heading}
          </h2>
          <span className="font-script text-[24px] text-accent">
            {about.annotation}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-start mb-16">
          <div className="reveal-block flex flex-col gap-4">
            <p className="font-heading font-medium text-[20px] sm:text-[22px] leading-snug text-ink">
              {about.lead}
            </p>
            {about.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-[15.5px] leading-relaxed text-ink-secondary max-w-[60ch]"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Right rail: Open roles + Education foundation card */}
          <aside className="reveal-block flex flex-col gap-5">
            <div className="p-6 rounded-2xl bg-sand/70 border border-accent/15">
              <h3 className="font-mono-meta text-xs uppercase tracking-wider text-accent font-medium mb-4">
                {about.targetRolesLabel}
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-lg bg-paper text-ink text-sm font-medium border border-accent/20"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div
              data-education-card
              className="p-6 rounded-2xl bg-paper border border-accent/20 shadow-[0_6px_20px_rgba(35,28,24,0.04)]"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="font-mono-meta text-xs uppercase tracking-wider text-accent font-medium">
                  {about.educationLabel}
                </h3>
                <span className="font-mono-meta text-xs text-ink-muted">
                  {about.education.period}
                </span>
              </div>
              <p className="font-heading font-semibold text-[18px] leading-snug text-ink">
                {about.education.degree}
              </p>
              <p className="text-sm font-semibold text-accent mt-0.5">
                {about.education.institution}
              </p>
              <p className="text-[13px] text-ink-muted mt-1">
                {about.education.faculty}
              </p>
              <p className="text-[14px] leading-relaxed text-ink-secondary mt-3 pt-3 border-t border-accent/12">
                {about.education.summary}
              </p>
            </div>
          </aside>
        </div>

        {/* Balanced Skills Capability Ledger (Non-technical + IoT + Tools) */}
        <div id="skills" className="pt-10 border-t border-accent/15">
          <div className="reveal-block mb-8 max-w-[58ch]">
            <h3 className="font-heading font-semibold text-[24px] sm:text-[28px] tracking-[-0.02em] text-ink">
              {skills.heading}
            </h3>
            <p className="mt-1.5 text-[15px] text-ink-secondary">
              {skills.subtitle}
            </p>
          </div>

          <div className="border-t border-accent/20">
            {skills.groups.map((group) => (
              <div
                key={group.title}
                className="reveal-block py-5 border-b border-accent/15 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 md:gap-8 items-start"
              >
                <h4 className="font-heading font-medium text-[16px] text-accent pt-0.5">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-md bg-white text-ink text-[13.5px] border border-accent/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
