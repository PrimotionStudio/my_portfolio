"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { LiveClock } from "./LiveClock";
import { BottomNav, TopNav } from "./SiteNav";
import { snapToLines } from "./snapToLines";

type Leaving = { key: number; node: HTMLElement; scrollTop: number };

/** True for a plain left-click on a link to another page of this site. */
function isInternalNavigation(e: MouseEvent) {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
    return false;
  }
  const a = (e.target as Element | null)?.closest?.("a");
  if (!a || a.target === "_blank" || a.origin !== location.origin) return false;
  return a.pathname !== location.pathname;
}

/** The board, the clip and the stack of sheets. Changing page flips the top sheet over. */
export function Clipboard({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const sheetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const snapshot = useRef<Omit<Leaving, "key"> | null>(null);
  const lastPath = useRef(pathname);
  const [leaving, setLeaving] = useState<Leaving | null>(null);

  // The router swaps the page in place, so the old sheet is copied just before it goes.
  useEffect(() => {
    const take = () => {
      if (!sheetRef.current) return;
      snapshot.current = {
        node: sheetRef.current.cloneNode(true) as HTMLElement,
        scrollTop: scrollRef.current?.scrollTop ?? 0,
      };
    };
    const onClick = (e: MouseEvent) => isInternalNavigation(e) && take();
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", take);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", take);
    };
  }, []);

  // Layout effect so the old sheet is laid over the new one before the first paint.
  useLayoutEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    scrollRef.current?.scrollTo(0, 0);
    if (!snapshot.current) return;
    setLeaving({ key: Date.now(), ...snapshot.current });
    snapshot.current = null;
  }, [pathname]);

  return (
    <div className="h-dvh lg:flex lg:items-center lg:justify-center lg:px-6 lg:py-5">
      <div className="relative h-full w-full lg:board lg:max-w-5xl lg:rounded-[28px] lg:px-7 lg:pt-14 lg:pb-7">
        <Clip />

        <div className="relative h-full perspective-[2600px]">
          {/* Sheets underneath, peeking out so it reads as a stack of paper. */}
          <div
            aria-hidden
            className="absolute inset-0 hidden translate-x-1 translate-y-1.5 rotate-[0.5deg] rounded-[3px] bg-paper shadow-md lg:block"
          />
          <div
            aria-hidden
            className="absolute inset-0 hidden -translate-x-0.5 translate-y-1 -rotate-[0.4deg] rounded-[3px] bg-[#fbfaf5] shadow-md lg:block"
          />

          <div ref={sheetRef} className="absolute inset-0">
            <Sheet scrollRef={scrollRef}>{children}</Sheet>
          </div>

          {leaving && (
            <>
              <div
                key={`shade-${leaving.key}`}
                aria-hidden
                className="reveal-shade pointer-events-none absolute inset-0 z-20 rounded-[3px] bg-ink"
              />
              <div
                key={leaving.key}
                aria-hidden
                inert
                className="flip-away absolute inset-0 z-30"
                onAnimationEnd={(e) =>
                  e.target === e.currentTarget && setLeaving(null)
                }
                ref={(el) => {
                  if (!el || el.firstChild) return;
                  el.appendChild(leaving.node);
                  // Clones don't keep scroll position, so restore it by hand.
                  const scroller = leaving.node.querySelector("[data-scroll]");
                  if (scroller) scroller.scrollTop = leaving.scrollTop;
                }}
              />
            </>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

/** One sheet of ruled paper: header with the date and links, then the page. */
function Sheet({
  children,
  scrollRef,
}: {
  children: ReactNode;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) {
  const mainRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Re-snap whenever anything can move the text: new page, resize, fonts, images.
  useLayoutEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    let frame = 0;
    const run = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => snapToLines(main));
    };
    snapToLines(main);
    const observer = new ResizeObserver(run);
    observer.observe(main);
    document.fonts?.ready.then(run);
    main.addEventListener("load", run, true);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      main.removeEventListener("load", run, true);
    };
  }, [pathname]);

  return (
    <div className="paper-grain flex h-full flex-col overflow-hidden bg-paper lg:rounded-[3px]">
      {/* Blank strip the clip bites into. */}
      <div className="hidden h-12 shrink-0 lg:block" />
      <header className="shrink-0 border-b-[3px] border-double border-pen/30 px-5 pt-3 pb-2 sm:px-[var(--margin-x)] sm:pt-4">
        <LiveClock />
        <div className="mt-1">
          <TopNav />
        </div>
      </header>
      <div
        ref={scrollRef}
        data-scroll
        className="ruled min-h-0 flex-1 overflow-y-auto overscroll-contain"
      >
        <main
          ref={mainRef}
          className="on-lines min-w-0 pt-[var(--line)] pr-5 pb-32 pl-[var(--margin-x)] wrap-break-word sm:pr-10 sm:pb-16 lg:pr-14"
        >
          {children}
        </main>
      </div>
    </div>
  );
}

/** The metal clip that holds the sheets to the board (desktop only). */
function Clip() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-2 left-1/2 z-40 hidden -translate-x-1/2 lg:block"
    >
      <div className="metal relative h-[5.25rem] w-64 rounded-t-[44px] rounded-b-[10px]">
        {/* Hanging hole */}
        <div className="absolute top-3 left-1/2 h-6 w-20 -translate-x-1/2 rounded-full bg-board-dark shadow-[inset_0_3px_5px_rgb(0_0_0/0.55)]" />
        {/* Pressed lever ridge */}
        <div className="absolute inset-x-6 bottom-3 h-3 rounded-full bg-linear-to-b from-[#b9bdc4] to-[#eef0f3] shadow-[inset_0_1px_2px_rgb(0_0_0/0.3)]" />
        {/* Rivets */}
        <div className="absolute bottom-2.5 left-3 size-3 rounded-full bg-linear-to-br from-white to-[#8c9199] shadow" />
        <div className="absolute right-3 bottom-2.5 size-3 rounded-full bg-linear-to-br from-white to-[#8c9199] shadow" />
      </div>
      {/* Soft shadow the clip casts on the paper */}
      <div className="mx-auto -mt-1 h-3 w-56 rounded-full bg-black/15 blur-md" />
    </div>
  );
}
