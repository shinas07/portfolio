import { FileText, Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-border px-6 py-28 sm:px-10"
    >
      {/* Closing accent wash — mirrors the hero's, bottom-left this time, so
          the page ends the way it opened. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-40 h-[32rem] w-[32rem] rounded-full opacity-[0.1] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs tracking-[0.25em] text-muted uppercase">
          <span className="text-accent">[05]</span> Contact
        </p>
        <h2 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Let&apos;s build something{" "}
          <span className="text-accent">real</span>.
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Whether it&apos;s a role, a collaboration, or a hard problem you want
          a second opinion on — my inbox is open, and I reply to everything.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-medium text-accent-contrast transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Mail className="size-5" aria-hidden />
            {site.email}
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-medium transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <FileText className="size-4" aria-hidden />
            Download résumé
          </a>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {site.fullName} · {site.location}
          </p>

          <div className="flex items-center gap-1">
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
      </div>
    </footer>
  );
}
