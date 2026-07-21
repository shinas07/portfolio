import type { ReactNode } from "react";

/**
 * The one heading treatment every section shares: bracketed mono index,
 * uppercase tracked label, large tight title, hairline rule. Consistency
 * here is most of what makes separate sections read as one designed system.
 */
export function SectionHeading({
  index,
  label,
  title,
  meta,
}: Readonly<{
  index: string;
  label: string;
  title: string;
  meta?: ReactNode;
}>) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
      <div>
        <p className="font-mono text-xs tracking-[0.25em] text-muted uppercase">
          <span className="text-accent">[{index}]</span> {label}
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
      </div>
      {meta && (
        <div className="hidden shrink-0 font-mono text-sm text-muted sm:block">
          {meta}
        </div>
      )}
    </div>
  );
}
