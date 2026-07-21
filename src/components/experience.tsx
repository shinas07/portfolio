import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-28 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            index="01"
            label="Career"
            title="Experience"
            meta={<span>2024 — present</span>}
          />
        </Reveal>

        {/* Timeline: hairline spine, one node per role. The spine is the only
            vertical line on the page, so it reads as structure, not clutter. */}
        <ol className="relative mt-14 space-y-14 border-l border-border pl-8 sm:pl-12">
          {experience.map((role, i) => (
            <li key={role.company} className="relative">
              {/* Node. Current role gets the accent + pulse. */}
              <span
                aria-hidden
                className="absolute top-1.5 -left-8 flex size-3 -translate-x-1/2 items-center justify-center sm:-left-12"
              >
                {role.current && (
                  <span className="absolute size-3 animate-ping rounded-full bg-accent opacity-50 motion-reduce:hidden" />
                )}
                <span
                  className={`size-2.5 rounded-full ${
                    role.current
                      ? "bg-accent"
                      : "border border-border bg-background"
                  }`}
                />
              </span>

              <Reveal delay={0.05 * (i + 1)}>
                <article>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="font-mono text-sm text-muted">
                      {role.period}
                      <span className="px-2 text-border" aria-hidden>
                        /
                      </span>
                      {role.location}
                    </p>
                    {role.current && (
                      <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-accent uppercase">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {role.title}
                    <span className="text-muted"> · </span>
                    <span className="text-accent">{role.company}</span>
                  </h3>
                  <p className="mt-2 max-w-2xl text-muted">{role.summary}</p>

                  {role.bullets && (
                    <ul className="mt-6 max-w-2xl space-y-3">
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 leading-relaxed text-muted"
                        >
                          <span
                            aria-hidden
                            className="mt-3 block h-px w-4 shrink-0 bg-accent/60"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
