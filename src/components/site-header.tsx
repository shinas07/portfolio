import Link from "next/link";

import { HeaderShell } from "@/components/header-shell";
import { site } from "@/lib/site";

const NAV = [
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      {/*
        Skip link: first thing in the tab order, visually hidden until focused.
        Without it a keyboard user re-traverses the whole nav on every page.
      */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-contrast"
      >
        Skip to content
      </a>

      {/* Transparent at the top of the page (part of the hero, not chrome
          floating over it); condenses into a glass pill on scroll — see
          HeaderShell for the client boundary. */}
      <HeaderShell>
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-sm font-medium transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span
            aria-hidden
            className="grid size-7 place-items-center rounded-lg border border-border bg-raised text-xs text-accent"
          >
            sa
          </span>
          <span>
            shinas<span className="text-accent">.</span>
          </span>
        </Link>

        <ul className="flex items-center gap-1">
          {NAV.map((item) => (
            <li key={item.href} className="hidden sm:block">
              <Link
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-raised hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="ml-1 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Résumé
            </a>
          </li>
        </ul>
      </HeaderShell>
    </header>
  );
}
