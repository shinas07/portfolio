import {
  Cloud,
  Database,
  Layers,
  Monitor,
  Server,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

/**
 * Grouped from the resume and GitHub, trimmed to what Shinas would welcome an
 * interview question about — a skills list is a list of topics you've
 * volunteered to be grilled on, so nothing decorative belongs here.
 */
const GROUPS: { icon: LucideIcon; label: string; items: string[] }[] = [
  {
    icon: Server,
    label: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Django & DRF",
      "REST API design",
      "Celery",
      "RabbitMQ",
      "WebSockets",
    ],
  },
  {
    icon: Layers,
    label: "Architecture",
    items: [
      "Microservices",
      "Event-driven design",
      "System design",
      "Clean architecture & SOLID",
      "High-concurrency systems",
    ],
  },
  {
    icon: Database,
    label: "Data & Caching",
    items: ["PostgreSQL", "Redis", "MongoDB", "SQLAlchemy 2.x", "AWS S3 / MinIO"],
  },
  {
    icon: Cloud,
    label: "Cloud & DevOps",
    items: [
      "AWS EC2 · Lambda",
      "Docker",
      "GitHub Actions · CI/CD",
      "Nginx",
      "Linux",
      "Git & GitHub",
    ],
  },
  {
    icon: Monitor,
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    icon: Sparkles,
    label: "AI & Quality",
    items: [
      "OpenAI API",
      "LangChain · RAG",
      "Pytest",
      "k6 load testing",
      "SonarQube",
      "Sentry",
    ],
  },
];

export function Toolbox() {
  return (
    <section
      id="toolbox"
      className="relative scroll-mt-24 overflow-hidden px-6 py-28 sm:px-10"
    >
      {/* Faint accent wash — the cards are translucent (bg-surface/60), so the
          glow reads through them; the same device would be invisible behind
          the opaque principle cards. */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-48 h-[30rem] w-[30rem] rounded-full opacity-[0.08] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading index="04" label="Capabilities" title="The stack" />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group, i) => (
            <Reveal key={group.label} delay={0.05 * (i + 1)} className="h-full">
              <article className="h-full rounded-3xl border border-border bg-surface/60 p-7 transition-colors hover:border-accent/40">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl border border-border bg-raised text-accent">
                    <group.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-semibold tracking-tight">
                    {group.label}
                  </h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-sm leading-relaxed text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 font-mono text-sm text-muted">
            <span className="text-accent">currently exploring →</span> AWS
            Lambda patterns · RabbitMQ messaging topologies · Kubernetes
          </p>
        </Reveal>
      </div>
    </section>
  );
}
