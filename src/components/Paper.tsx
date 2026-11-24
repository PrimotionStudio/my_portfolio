import type { ReactNode } from "react";
import { cn } from "cn";

/* -------------------------------------------------------------------------- */
/* Small building blocks that keep everything on the paper's ruled lines.     */
/* -------------------------------------------------------------------------- */

/** Big handwritten page title with a short line of context under it. */
export function PageTitle({
  title,
  description,
}: {
  title: string;
  description?: ReactNode;
}) {
  return (
    <header className="mb-[var(--line)]">
      <h1 className="font-hand text-5xl leading-[calc(var(--line)*2)] font-bold text-ink sm:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl text-body leading-(--line) text-ink-soft">
          {description}
        </p>
      )}
    </header>
  );
}

/** Handwritten section heading, underlined like a pen stroke. */
export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mt-[calc(var(--line)*2)] mb-[var(--line)] font-hand text-4xl leading-[calc(var(--line)*2)] font-bold text-pen",
        className,
      )}
    >
      {children}
    </h2>
  );
}

/** Body text sized to sit exactly on the ruled lines. */
export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-[var(--line)] text-body leading-(--line) text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** A strip of yellow tape, as if something was stuck onto the sheet. */
export function Tape({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("tape absolute z-10 h-7 w-24 rotate-[-4deg]", className)}
    />
  );
}

/** A small pen-ink pill for tags like "Current". */
export function InkTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-pen/40 bg-pen-soft px-2.5 text-sm leading-6 font-medium text-pen">
      {children}
    </span>
  );
}
