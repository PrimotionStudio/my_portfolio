import type { Metadata } from "next";
import Image from "next/image";
import { Download, ExternalLink, GraduationCap } from "lucide-react";
import { InkTag, PageTitle, SectionTitle } from "@/components/Paper";
import {
  CERTIFICATES,
  EDUCATION,
  EXPERIENCE,
  OWNER,
  SKILLS,
  VOLUNTEERING,
} from "@/lib/site";

export const metadata: Metadata = { title: "Experience" };

export default function Page() {
  return (
    <>
      <PageTitle
        title="Experience"
        description="Where I've worked and what I got up to there. The short version: lots of building, plus looking after the servers."
      />
      <a
        href={OWNER.cv}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center gap-2 rounded-lg border-2 border-pen/30 bg-paper px-5 font-semibold text-pen transition hover:border-pen"
      >
        <Download className="size-4" aria-hidden />
        Grab my CV (PDF)
      </a>

      <SectionTitle>Jobs</SectionTitle>
      <ol className="relative max-w-3xl border-l-2 border-pen/25 pl-6">
        {EXPERIENCE.map((job) => (
          <li
            key={`${job.org}-${job.role}`}
            className="relative pb-[var(--line)]"
          >
            <span
              aria-hidden
              className={`absolute top-7 -left-[33px] size-4 rounded-full border-2 border-pen ${job.current ? "bg-pen" : "bg-paper"}`}
            />
            <div className="flex flex-col sm:flex-row sm:gap-5">
              <OrgLogo
                org={job.org}
                logo={"logo" in job ? job.logo : undefined}
              />
              <div className="min-w-0">
                <h3 className="flex flex-wrap items-center gap-x-3 text-xl leading-(--line) font-semibold text-ink">
                  {job.role}
                  {job.current && <InkTag>Current</InkTag>}
                </h3>
                <p className="flex flex-wrap items-center gap-x-2 text-body leading-(--line) text-ink-soft">
                  <span className="font-medium text-pen">{job.org}</span>
                  <span aria-hidden>·</span>
                  <span>{job.period}</span>
                </p>
                <ul className="list-disc pl-5 text-body leading-(--line) text-ink-soft marker:text-pen/60">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <SectionTitle>Giving back</SectionTitle>
      <ul className="max-w-3xl space-y-[var(--line)]">
        {VOLUNTEERING.map((v) => (
          <li key={v.org}>
            <h3 className="text-xl leading-(--line) font-semibold text-ink">
              {v.role}
            </h3>
            <p className="text-body leading-(--line)">
              <span className="font-medium text-pen">{v.org}</span>
              <span className="text-ink-soft"> · {v.period}</span>
            </p>
            <p className="text-body leading-(--line) text-ink-soft">{v.body}</p>
          </li>
        ))}
      </ul>

      <SectionTitle>Education</SectionTitle>
      <div className="flex max-w-3xl gap-3">
        <GraduationCap
          className="mt-1.5 size-6 shrink-0 text-pen"
          aria-hidden
        />
        <div className="text-body leading-(--line)">
          <h3 className="text-xl font-semibold text-ink">{EDUCATION.degree}</h3>
          <p>
            <span className="font-medium text-pen">{EDUCATION.school}</span>
            <span className="text-ink-soft"> · {EDUCATION.period}</span>
          </p>
          <p className="text-ink-soft">{EDUCATION.note}</p>
        </div>
      </div>

      <SectionTitle>Certificates</SectionTitle>
      <ul className="grid max-w-4xl gap-6 sm:grid-cols-2">
        {CERTIFICATES.map((c) => (
          <li key={c.image}>
            <a
              href={c.image}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white p-2 shadow-[0_6px_16px_rgb(40_25_10/0.16)] transition hover:-translate-y-0.5"
            >
              <div className="relative aspect-[1.414] overflow-hidden">
                <Image
                  src={c.image}
                  alt={`${c.title} certificate from ${c.issuer}`}
                  fill
                  sizes="(min-width: 640px) 400px, 90vw"
                  className="object-contain"
                />
              </div>
            </a>
            <p className="mt-2 text-body leading-(--line) font-semibold text-ink">
              {c.title}
            </p>
            <p className="flex items-center gap-2 text-body leading-(--line) text-ink-soft">
              {c.issuer} · {c.period}
              <ExternalLink className="size-3.5" aria-label="Opens full size" />
            </p>
          </li>
        ))}
      </ul>

      <SectionTitle>Things I work with</SectionTitle>
      <ul className="flex max-w-3xl flex-wrap gap-2">
        {SKILLS.map((s) => (
          <li
            key={s}
            className="off-lines rounded-md border border-rule bg-paper px-3 text-body leading-(--line) text-ink"
          >
            {s}
          </li>
        ))}
      </ul>
    </>
  );
}

/** A company's logo on a white tile, two ruled lines tall; initials when there's no logo. */
function OrgLogo({ org, logo }: { org: string; logo?: string }) {
  const initials = org
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w) && w !== "The")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="grid size-[calc(var(--line)*2)] shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1.5 shadow-[0_2px_8px_rgb(40_25_10/0.15)] ring-1 ring-rule">
      {logo ? (
        <Image
          src={logo}
          alt={`${org} logo`}
          width={128}
          height={128}
          className="size-full rounded-lg object-contain"
        />
      ) : (
        <span
          aria-label={`${org} logo`}
          className="font-hand text-4xl font-bold text-pen"
        >
          {initials}
        </span>
      )}
    </div>
  );
}
