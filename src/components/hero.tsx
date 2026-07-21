import { ArrowDown, FileText } from "lucide-react";
import Image from "next/image";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const STACK = [
  "Python",
  "FastAPI",
  "Django",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "AWS",
];

/**
 * Server component — no `"use client"`. Every string here is rendered on the
 * server and present in the initial HTML; only <Reveal> crosses into the client.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center px-6 pt-20 pb-16 sm:px-10"
    >
      {/* Accent wash — decorative, never interactive. No overflow-hidden on
          the section: the glow must reach the top of the viewport so the
          transparent nav sits inside it instead of cutting a seam across it;
          html { overflow-x: clip } absorbs the right-edge bleed. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -right-40 h-[36rem] w-[36rem] rounded-full opacity-[0.14] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1fr_auto]">
        <div>
          <Reveal>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-xs tracking-[0.2em] text-muted uppercase">
              <span className="inline-flex items-center gap-2.5">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {site.role} · {site.company}
              </span>
              {/* No location here. Anything on this line reads as belonging to
                  the company name beside it — Shinas is in Kerala, the company
                  is in Gurugram. Location lives in the footer instead, and each
                  role states its own city in the experience section. */}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-display font-semibold text-balance text-transparent">
              {site.name}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Most of what I build is invisible when it works — an order book
              matching trades in{" "}
              <span className="text-foreground">milliseconds</span>, a wallet
              metering calls{" "}
              <span className="text-foreground">by the second</span>, a
              classroom that stays live{" "}
              <span className="text-foreground">under load</span>. I engineer
              the Python systems behind products like these, and the modern
              interfaces that make them feel effortless.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-9 flex max-w-xl flex-wrap gap-2">
              {STACK.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-surface/80 px-3.5 py-1.5 font-mono text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-11 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Explore my work
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <FileText className="size-4" aria-hidden />
                Résumé
              </a>

              <div className="ml-1 flex items-center gap-1">
                {/* aria-label, not title: the icon has no text node, so without
                    a label a screen reader announces only "link". */}
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                  className="rounded-full p-2.5 text-muted transition-colors hover:bg-raised hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <GithubIcon className="size-5" />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                  className="rounded-full p-2.5 text-muted transition-colors hover:bg-raised hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <LinkedinIcon className="size-5" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.44}>
            <a
              href="#experience"
              className="mt-16 inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted uppercase transition-colors hover:text-foreground"
            >
              <ArrowDown
                className="size-4 motion-safe:animate-bounce"
                aria-hidden
              />
              Scroll
            </a>
          </Reveal>
        </div>

        {/* Portrait in a layered glass frame. Desaturated at rest so the accent
            keeps ownership of the page; full colour on hover. width/height
            reserve the space, so the image can never cause layout shift. */}
        <Reveal delay={0.2} className="hidden lg:block">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -top-3 -right-3 h-full w-full rounded-3xl border border-border"
            />
            <div className="glass relative rounded-3xl border border-border p-2.5">
              <Image
                src="/profile.jpeg"
                alt="Portrait of Shinas Aman"
                width={960}
                height={1280}
                priority
                sizes="288px"
                className="w-72 rounded-2xl object-cover grayscale-25 transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
