import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GithubIcon } from "@/components/icons";
import { getProject, projects } from "@/lib/projects";

type Params = { slug: string };

/**
 * Tells Next every slug up front, so both case-study pages are rendered to
 * static HTML at build time and served from the CDN — no server work per
 * request. Without this the route would render on demand.
 */
export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

/**
 * Per-page metadata. This is the whole reason these are real routes rather
 * than accordions on the landing page: each project gets its own title and
 * description for search results and link previews.
 *
 * `params` is a Promise in Next 16 and must be awaited.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Not found" };

  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  // A slug outside generateStaticParams renders the 404 page rather than
  // throwing on `project.name` below.
  if (!project) notFound();

  return (
    <article className="px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowLeft className="size-4" aria-hidden />
          All projects
        </Link>

        <header className="mt-10 border-b border-border pb-10">
          <p className="font-mono text-xs tracking-[0.25em] text-muted uppercase">
            <span className="text-accent">[case study]</span> {project.year}
          </p>
          <p className="mt-4 font-mono text-sm text-accent">{project.tagline}</p>
          <h1 className="mt-3 text-4xl font-semibold text-balance sm:text-6xl">
            {project.name}
          </h1>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-xs tracking-wide text-muted uppercase">
                Role
              </dt>
              <dd className="mt-1">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs tracking-wide text-muted uppercase">
                Year
              </dt>
              <dd className="mt-1">{project.year}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <GithubIcon className="size-4" />
              Source
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <ExternalLink className="size-4" aria-hidden />
                Live site
              </a>
            )}
          </div>
        </header>

        <section className="mt-12">
          <h2 className="font-mono text-xs tracking-wide text-muted uppercase">
            Overview
          </h2>
          {project.overview.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-5 text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section className="mt-14">
          <h2 className="font-mono text-xs tracking-wide text-muted uppercase">
            Engineering decisions
          </h2>
          <div className="mt-6 grid gap-4">
            {project.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-medium text-accent">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-mono text-xs tracking-wide text-muted uppercase">
            Stack
          </h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {project.stackDetail.map((group) => (
              <div key={group.group}>
                <h3 className="text-sm font-medium">{group.group}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="font-mono text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
