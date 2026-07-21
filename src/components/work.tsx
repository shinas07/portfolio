import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 px-6 py-28 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            index="02"
            label="Case studies"
            title="Featured projects"
            meta={
              <span>{String(projects.length).padStart(2, "0")} deep dives</span>
            }
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.08 * (i + 1)}>
              {/*
                The whole card is one <Link> — a single tab stop and one large
                hit target instead of a nest of competing focus targets.
                `group` lets children react to hover/focus on the parent.
              */}
              <Link
                href={`/work/${project.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-border bg-surface/60 transition-colors hover:border-accent/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:grid-cols-[1.1fr_1fr]"
              >
                <div className="p-8 sm:p-10">
                  <p className="font-mono text-xs tracking-[0.25em] text-muted uppercase">
                    <span className="text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>{" "}
                    · {project.year} · {project.role}
                  </p>

                  <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-accent">{project.tagline}</p>

                  <p className="mt-5 max-w-xl leading-relaxed text-muted">
                    {project.summary}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors group-hover:text-accent">
                    Read the case study
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </p>
                </div>

                {/* Terminal window with a text-drawn architecture sketch —
                    decorative (the prose carries the same information), so
                    aria-hidden keeps screen readers out of the ASCII art. */}
                <div className="relative hidden items-center border-l border-border/60 p-8 lg:flex">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.07]"
                    style={{
                      background:
                        "radial-gradient(circle at 70% 30%, var(--accent) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="glass w-full rounded-2xl border border-border shadow-[0_0_40px_-20px_var(--accent)] transition-shadow group-hover:shadow-[0_0_60px_-18px_var(--accent)]"
                  >
                    <div className="flex items-center gap-1.5 border-b border-border/60 px-4 py-3">
                      <span className="size-2.5 rounded-full bg-border" />
                      <span className="size-2.5 rounded-full bg-border" />
                      <span className="size-2.5 rounded-full bg-accent/60" />
                      <span className="ml-3 font-mono text-[11px] text-muted">
                        {project.slug}.arch
                      </span>
                    </div>
                    <pre className="overflow-x-auto p-5 font-mono text-xs leading-loose text-muted">
                      {project.diagram}
                    </pre>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
