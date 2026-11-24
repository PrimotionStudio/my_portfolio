/** Printed text blocks that should start on a ruled line; handwriting and pills are exempt. */
const TEXT_SELECTOR = ":is(p, li, h3, dd):not(.font-hand, .off-lines)";

/**
 * Pads each printed text block so it starts exactly on a ruled line.
 * Images, cards and buttons have free heights, so without this the text after
 * them would drift off the lines.
 */
export function snapToLines(main: HTMLElement) {
  const line = parseFloat(getComputedStyle(main).paddingTop);
  if (!line) return;

  // Only innermost blocks, so a <li> holding a <p> isn't padded twice.
  const blocks = [...main.querySelectorAll<HTMLElement>(TEXT_SELECTOR)].filter(
    (el) => !el.querySelector(TEXT_SELECTOR) && !el.closest(".font-hand"),
  );
  for (const el of blocks) el.style.paddingTop = "";

  // Top to bottom, re-measuring each time, because every nudge moves what follows.
  for (const el of blocks) {
    const top =
      el.getBoundingClientRect().top - main.getBoundingClientRect().top;
    const offset = ((top % line) + line) % line;
    // Sub-pixel leftovers are rounding noise, not misalignment.
    if (offset > 0.5 && line - offset > 0.5) {
      el.style.paddingTop = `${line - offset}px`;
    }
  }
}
