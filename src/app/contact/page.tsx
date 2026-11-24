import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { PageTitle, SectionTitle } from "@/components/Paper";
import { OWNER, SERVICES, SOCIALS } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

const MAIL_LINK = `mailto:${OWNER.email}?subject=${encodeURIComponent("Project enquiry")}`;

export default function Page() {
  return (
    <>
      <PageTitle
        title="Contact"
        description="Got something in mind? Send me a quick message, no need to make it formal. Just tell me what you need."
      />

      <a
        href={MAIL_LINK}
        className="group flex max-w-2xl items-center gap-4 rounded-xl bg-pen p-5 text-white shadow-md transition hover:bg-ink"
      >
        <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-white/15">
          <Mail className="size-6" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block text-base font-medium text-white/80">
            Email me (fastest)
          </span>
          <span className="block text-xl font-semibold break-all sm:text-xl">
            {OWNER.email}
          </span>
        </span>
      </a>

      <ul className="mt-5 grid max-w-2xl gap-3 sm:grid-cols-2">
        <li>
          <a
            href={OWNER.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center gap-3 rounded-xl border border-rule bg-paper px-4 font-semibold text-ink transition hover:border-pen hover:text-pen"
          >
            <MessageCircle className="size-5 text-pen" aria-hidden />
            Chat on WhatsApp
          </a>
        </li>
        <li>
          <a
            href={`tel:${OWNER.phone.replaceAll(" ", "")}`}
            className="flex min-h-14 items-center gap-3 rounded-xl border border-rule bg-paper px-4 font-semibold text-ink transition hover:border-pen hover:text-pen"
          >
            <Phone className="size-5 text-pen" aria-hidden />
            {OWNER.phone}
          </a>
        </li>
        {SOCIALS.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-rule bg-paper px-4 font-semibold text-ink transition hover:border-pen hover:text-pen"
            >
              {s.label}
              <ArrowUpRight className="size-4 text-pen" aria-hidden />
            </a>
          </li>
        ))}
      </ul>

      <SectionTitle>Things I can help with</SectionTitle>
      <ul className="max-w-2xl">
        {SERVICES.map((s) => (
          <li key={s.key} className="flex gap-3 text-body leading-(--line)">
            <span className="font-hand text-2xl text-pen" aria-hidden>
              ✓
            </span>
            <span>
              <span className="font-semibold text-ink">{s.title}.</span>{" "}
              <span className="text-ink-soft">{s.body}</span>
            </span>
          </li>
        ))}
      </ul>

      <SectionTitle>What happens after you message me</SectionTitle>
      <ol className="max-w-2xl list-decimal pl-6 text-body leading-(--line) text-ink-soft marker:font-semibold marker:text-pen">
        <li>You tell me what you need, in your own words.</li>
        <li>I reply with any questions and a simple plan.</li>
        <li>
          We agree on what to build and when. Then I get to work and keep you
          posted as it comes together.
        </li>
      </ol>
      <p className="mt-[var(--line)] text-body leading-(--line) text-ink-soft">
        I&apos;m in {OWNER.location}. By the way, you can call me Prime.
      </p>
    </>
  );
}
