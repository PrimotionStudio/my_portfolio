import { readdirSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Crosshair,
  Crown,
  Globe,
  Mail,
  Terminal,
  Video,
  Waves,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { PortraitCarousel } from "@/components/PortraitCarousel";
import { Prose, SectionTitle } from "@/components/Paper";
import { ABOUT_ME, OWNER, PRINCIPLES, SERVICES, SUMMARY } from "@/lib/site";

const IMAGE_FILE = /\.(jpe?g|png|webp|avif)$/i;

/** Every photo dropped into public/portraits joins the carousel, in file-name order. */
function getPortraits() {
  const dir = path.join(process.cwd(), "public", "portraits");
  return readdirSync(dir)
    .filter((f) => IMAGE_FILE.test(f))
    .sort()
    .map((f) => `/portraits/${f}`);
}

const SERVICE_ICONS: Record<(typeof SERVICES)[number]["key"], LucideIcon> = {
  web: Globe,
  systems: Workflow,
  email: Mail,
  video: Video,
};

const ABOUT_ICONS: Record<(typeof ABOUT_ME)[number]["key"], LucideIcon> = {
  chess: Crown,
  cod: Crosshair,
  swim: Waves,
  terminal: Terminal,
  linux: Code2,
};

export default function Page() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Intro                                                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="flex flex-col-reverse gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          <p className="font-hand text-3xl leading-(--line) text-pen">
            Hi, I&apos;m
          </p>
          <h1 className="font-hand text-6xl leading-[calc(var(--line)*2)] font-bold text-ink sm:text-7xl">
            {OWNER.name}
          </h1>
          <p className="text-xl leading-(--line) font-semibold text-ink">
            {OWNER.role}
          </p>
          <p className="text-body leading-(--line) text-ink-soft">
            I build websites, web apps and systems for businesses and schools. I
            can also set you up with your own private email and video meetings,
            so you stop renting them.
          </p>
          <p className="text-body leading-(--line) text-ink-soft">
            My name&apos;s {OWNER.legalName}, but most people call me{" "}
            <span className="font-semibold text-ink">{OWNER.nickname}</span>.
            Martins is fine too, though I&apos;d love it if you went with Prime,
            Prime Okanlawon or Mr. Okanlawon.
          </p>
          <div className="mt-[var(--line)] flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-pen px-5 text-body font-semibold text-white shadow-sm transition hover:bg-ink"
            >
              Let&apos;s work together
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border-2 border-pen/30 bg-paper px-5 text-body font-semibold text-pen transition hover:border-pen"
            >
              See what I&apos;ve built
            </Link>
          </div>
        </div>
        <div className="self-center md:self-start md:pt-2">
          <PortraitCarousel images={getPortraits()} name={OWNER.nickname} />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Professional summary                                             */}
      {/* ---------------------------------------------------------------- */}
      <SectionTitle>What I do</SectionTitle>
      <Prose>
        {SUMMARY.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Prose>

      {/* ---------------------------------------------------------------- */}
      {/* Simple is best                                                   */}
      {/* ---------------------------------------------------------------- */}
      <SectionTitle>
        My one rule:{" "}
        <span className="marker text-ink uppercase">simple is best</span>
      </SectionTitle>
      <Prose>
        <p className="text-body">
          This goes for everything I make, from the screens people tap on to the
          code behind them. If there&apos;s a simpler way that works, I pick it.
          Simple stuff is easier to use, cheaper to run and a lot harder to
          break.
        </p>
      </Prose>
      <ol className="mt-[var(--line)] grid max-w-3xl gap-x-10 sm:grid-cols-2">
        {PRINCIPLES.map((p, i) => (
          <li key={p.title} className="flex gap-3 pb-[var(--line)]">
            <span className="font-hand text-3xl leading-(--line) font-bold text-pen">
              {i + 1}.
            </span>
            <div>
              <h3 className="text-body leading-(--line) font-semibold text-ink">
                {p.title}
              </h3>
              <p className="text-body leading-(--line) text-ink-soft">
                {p.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* ---------------------------------------------------------------- */}
      {/* Services                                                         */}
      {/* ---------------------------------------------------------------- */}
      <SectionTitle className="mt-[var(--line)]">How I can help</SectionTitle>
      <ul className="grid max-w-4xl gap-5 sm:grid-cols-2">
        {SERVICES.map((s) => {
          const Icon = SERVICE_ICONS[s.key];
          return (
            <li
              key={s.key}
              className="rounded-xl border border-rule bg-paper/90 p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-(--line) shrink-0 place-items-center rounded-lg bg-pen-soft text-pen">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-xl leading-(--line) font-semibold text-ink">
                  {s.title}
                </h3>
              </div>
              <p className="mt-2 text-body leading-(--line) text-ink-soft">
                {s.body}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="mt-[var(--line)] max-w-4xl rounded-xl border-2 border-dashed border-pen/40 bg-pen-soft/60 p-5">
        <p className="font-hand text-3xl leading-(--line) font-bold text-ink">
          Sound like what you need?
        </p>
        <p className="mt-1 text-body leading-(--line) text-ink-soft">
          Drop me a few lines about it. I&apos;ll get back to you with a simple
          plan and an honest idea of what it&apos;ll take.
        </p>
        <Link
          href="/contact"
          className="mt-3 inline-flex min-h-12 items-center gap-2 rounded-lg bg-pen px-5 font-semibold text-white transition hover:bg-ink"
        >
          Say hello
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* About me                                                         */}
      {/* ---------------------------------------------------------------- */}
      <SectionTitle>A bit about me</SectionTitle>
      <Prose>
        <p>When I&apos;m not working, this is usually what I&apos;m up to.</p>
      </Prose>
      <ul className="mt-[var(--line)] max-w-2xl">
        {ABOUT_ME.map((a) => {
          const Icon = ABOUT_ICONS[a.key];
          return (
            <li key={a.key} className="flex gap-3">
              <Icon className="mt-2 size-5 shrink-0 text-pen" aria-hidden />
              <p className="text-body leading-(--line)">
                <span className="font-semibold text-ink">{a.title}.</span>{" "}
                <span className="text-ink-soft">{a.body}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <p className="mt-[calc(var(--line)*2)] font-hand text-3xl leading-(--line) text-pen">
        Thanks for stopping by! ~ Prime
      </p>
    </>
  );
}
