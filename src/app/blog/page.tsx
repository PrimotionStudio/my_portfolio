import type { Metadata } from "next";
import { PageTitle, Prose } from "@/components/Paper";

export const metadata: Metadata = { title: "Blog" };

export default function Page() {
  return (
    <>
      <PageTitle
        title="Blog"
        description="Notes and things I learn along the way."
      />

      <article className="max-w-2xl">
        <p className="text-base leading-(--line) font-semibold tracking-wide text-pen uppercase">
          <time dateTime="2026-11-24">24 November 2026</time>
        </p>
        <h2 className="font-hand text-5xl leading-[calc(var(--line)*2)] font-bold text-ink">
          Hello 👋
        </h2>
        <Prose>
          <p>
            Hey, welcome to my little notebook! I&apos;ll be writing here about
            the stuff I build, servers I break and fix, and whatever I learn
            along the way. I&apos;ll keep it simple, promise.
          </p>
          <p>More soon. Thanks for dropping by.</p>
        </Prose>
        <p className="mt-[var(--line)] font-hand text-3xl leading-(--line) text-pen">
          ~ Prime
        </p>
      </article>
    </>
  );
}
