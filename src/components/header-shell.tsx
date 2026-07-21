"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Scroll-aware wrapper for the nav: transparent and full-width at the top of
 * the page (part of the hero, not a chrome bar floating over it), condensing
 * into the glass pill once the user scrolls.
 *
 * Only the wrapper is a client component — the logo and links arrive as
 * server-rendered children, so the scroll behaviour costs the bundle a
 * boolean, not the nav's content. Server render is the un-scrolled state,
 * which matches first paint at the top; a mid-page reload corrects on mount.
 */
export function HeaderShell({ children }: Readonly<{ children: ReactNode }>) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main"
      className={`mx-auto flex h-14 w-full items-center justify-between rounded-full pr-2 pl-5 transition-all duration-300 ${
        scrolled
          ? "glass max-w-5xl border border-border/70"
          : "max-w-6xl border border-transparent"
      }`}
    >
      {children}
    </nav>
  );
}
