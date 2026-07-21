import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

/**
 * Stances, not skills — each one is a position Shinas can defend with a
 * concrete story from the experience section. That is the test for adding
 * to this list: no story, no principle.
 */
const PRINCIPLES = [
  {
    index: "a",
    title: "Boring technology, on purpose",
    body: "I spend the innovation budget where the product actually differs. A crypto exchange doesn't need a novel database — it needs PostgreSQL, indexed properly and proven under k6 load.",
  },
  {
    index: "b",
    title: "Move the wait off the request",
    body: "A user-facing request returns the moment the write is durable. Everything slower — certificates, emails, settlement bookkeeping — belongs to Celery and a queue, where retries are cheap and latency is invisible.",
  },
  {
    index: "c",
    title: "Every line defensible",
    body: "If I can't explain a dependency or a design choice under questioning, it doesn't ship. This site keeps its own DECISIONS.md for exactly that reason — every trade-off is written down before the code lands.",
  },
  {
    index: "d",
    title: "Quality is infrastructure",
    body: "Standards enforced by machines, not memory: Pytest suites and SonarQube gates in CI, load verified with k6, errors watched by Sentry. Review is for design — the pipeline catches the rest.",
  },
];

export function Principles() {
  return (
    <section id="principles" className="scroll-mt-24 px-6 py-28 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            index="03"
            label="Approach"
            title="How I engineer"
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
          {PRINCIPLES.map((principle, i) => (
            <Reveal
              key={principle.index}
              delay={0.06 * (i + 1)}
              className="h-full"
            >
              <article className="h-full bg-surface p-8 transition-colors hover:bg-raised sm:p-10">
                <p className="font-mono text-sm text-accent">
                  /{principle.index}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {principle.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
