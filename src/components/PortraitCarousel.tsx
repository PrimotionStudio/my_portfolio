"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "cn";
import { Tape } from "./Paper";

const AUTOPLAY_INTERVAL_MS = 4_500;

/** A taped-on polaroid that cycles through portraits. */
export function PortraitCarousel({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const many = images.length > 1;

  useEffect(() => {
    if (!many || paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      AUTOPLAY_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [many, paused, images.length]);

  const go = (step: number) => {
    setPaused(true);
    setIndex((i) => (i + step + images.length) % images.length);
  };

  return (
    <figure className="w-56 shrink-0 sm:w-64">
      <div className="relative rotate-[-2deg] bg-white p-3 pb-12 shadow-[0_10px_25px_rgb(40_25_10/0.25)]">
        <Tape className="-top-3 left-1/2 -translate-x-1/2" />
        <div className="relative aspect-[4/5] overflow-hidden bg-pen-soft">
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={i === 0 ? `Portrait of ${name}` : ""}
              fill
              priority={i === 0}
              sizes="256px"
              className={cn(
                "object-cover transition-opacity duration-700",
                i === index ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
        <figcaption className="absolute inset-x-0 bottom-2 text-center font-hand text-2xl text-ink">
          {name}
        </figcaption>
      </div>

      {many && (
        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-ink-soft hover:bg-pen-soft hover:text-pen"
          >
            <ChevronLeft className="size-4" aria-hidden />
            Prev
          </button>
          <div className="flex gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === index}
                onClick={() => {
                  setPaused(true);
                  setIndex(i);
                }}
                className={cn(
                  "size-2.5 rounded-full transition-colors",
                  i === index ? "bg-pen" : "bg-rule",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-ink-soft hover:bg-pen-soft hover:text-pen"
          >
            Next
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>
      )}
    </figure>
  );
}
