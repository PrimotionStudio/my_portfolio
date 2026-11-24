"use client";

import { useEffect, useState } from "react";

/** Set once when the app's JS loads, so every sheet counts from the same moment. */
const ENTERED_AT_MS = Date.now();

const DATE_FORMAT = new Intl.DateTimeFormat(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const TIME_FORMAT = new Intl.DateTimeFormat(undefined, {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});

/** Turns elapsed milliseconds into "1h 02m 09s" style text. */
function formatElapsed(ms: number) {
  const total = Math.floor(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  if (h > 0) return `${h}h ${pad(m)}m ${pad(s)}s`;
  if (m > 0) return `${m}m ${pad(s)}s`;
  return `${s}s`;
}

/** Today's date, a ticking clock and how long the visitor has been here. */
export function LiveClock() {
  // Null until mounted: the server can't know the visitor's time zone.
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 font-hand text-ink-soft">
      <p className="text-xl leading-8 lg:text-2xl">
        {now ? (
          <>
            <span className="text-ink">{DATE_FORMAT.format(now)}</span>
            <span className="hidden sm:inline">
              {" "}
              · {TIME_FORMAT.format(now)}
            </span>
          </>
        ) : (
          <span className="opacity-0">Loading date</span>
        )}
      </p>
      <p className="text-xl leading-8 lg:text-2xl" aria-live="off">
        You&apos;ve been here{" "}
        <span className="tabular-nums text-pen">
          {now ? formatElapsed(now - ENTERED_AT_MS) : "0s"}
        </span>
      </p>
    </div>
  );
}
