import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { PageTitle, Tape } from "@/components/Paper";
import { PRIVATE_WORK, PROJECTS } from "@/lib/site";

export const metadata: Metadata = { title: "Projects" };

export default function Page() {
  return (
    <>
      <PageTitle
        title="Projects"
        description="Some things I've built that you can go and look at."
      />

      <aside className="mb-[calc(var(--line)*2)] flex max-w-3xl gap-3 rounded-xl border-2 border-dashed border-pen/40 bg-pen-soft/60 p-5">
        <Lock className="mt-1.5 size-5 shrink-0 text-pen" aria-hidden />
        <div className="text-body leading-(--line)">
          <p className="font-semibold text-ink">
            Heads up: this is only a small slice of my work.
          </p>
          <p className="text-ink-soft">
            A lot of what I build lives inside companies and schools, and I keep
            my clients&apos; work private. So you won&apos;t find it here. Some
            of that private work:
          </p>
          <ul className="mt-2 list-disc pl-5 text-ink-soft marker:text-pen">
            {PRIVATE_WORK.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </aside>

      <ul className="grid gap-x-8 gap-y-[calc(var(--line)*1.5)] md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <li key={p.title} className="flex flex-col">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block bg-white p-2 shadow-[0_8px_20px_rgb(40_25_10/0.18)] transition hover:-translate-y-0.5 ${i % 2 ? "rotate-[0.8deg]" : "-rotate-[0.8deg]"}`}
            >
              <Tape
                className={
                  i % 2 ? "-top-3 right-6 rotate-[5deg]" : "-top-3 left-6"
                }
              />
              <div className="relative aspect-[16/10] overflow-hidden bg-pen-soft">
                <Image
                  src={p.image}
                  alt={`Screenshot of ${p.title}`}
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 45vw, 90vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </a>
            <div className="mt-5">
              <p className="text-base leading-(--line) font-semibold tracking-wide text-pen uppercase">
                {p.kind}
              </p>
              <h2 className="font-hand text-4xl leading-(--line) font-bold text-ink">
                {p.title}
              </h2>
              <p className="text-body leading-(--line) text-ink-soft">
                {p.body}
              </p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 items-center gap-1.5 font-semibold text-pen underline decoration-pen/30 underline-offset-4 hover:decoration-pen"
              >
                {p.linkLabel}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-[calc(var(--line)*2)] max-w-3xl">
        <p className="font-hand text-3xl leading-(--line) font-bold text-ink">
          Want to see more?
        </p>
        <p className="text-body leading-(--line) text-ink-soft">
          Happy to talk you through work that&apos;s similar to what you need,
          as far as each client is okay with.
        </p>
        <Link
          href="/contact"
          className="mt-3 inline-flex min-h-12 items-center gap-2 rounded-lg bg-pen px-5 font-semibold text-white transition hover:bg-ink"
        >
          Let&apos;s talk
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </>
  );
}
