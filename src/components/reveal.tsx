"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Fades content up when it enters the viewport (once).
 *
 * `whileInView` rather than `animate`: with `animate`, everything on the page
 * plays its entrance on mount — so below-fold sections finish animating while
 * still off-screen and appear inert by the time the user scrolls to them.
 * The negative viewport margin makes elements start slightly before they're
 * fully visible, so the motion reads as response, not delay.
 *
 * This is the only client component in the reveal path. By wrapping
 * server-rendered `children` rather than owning the markup, the actual text
 * still ships in the server HTML — crawlers and slow connections see content
 * before any JavaScript runs.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: Readonly<{
  children: ReactNode;
  delay?: number;
  className?: string;
}>) {
  const prefersReducedMotion = useReducedMotion();

  // Return children untouched rather than animating to a no-op: no wrapper
  // transform means no chance of blurred text or a stray stacking context.
  if (prefersReducedMotion) return <>{children}</>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -64px 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
