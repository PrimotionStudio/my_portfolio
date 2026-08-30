"use client";

import React from "react";
import { MonolithLayout } from "@/components/layout/monolith-layout";
import Link from "next/link";

const termsSections = [
  {
    id: "01_ACCEPTANCE",
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the digital assets, services, tools, and experimental prototypes offered by The Primotion Studio ('we', 'us', or 'our'), you agree to be bound by these Terms of Service ('Terms'). If you do not agree to all of these Terms, do not access or use our platform or software applications.",
      "These Terms apply to all visitors, users, clients, and software agents accessing our systems, research outputs, and portfolio implementations."
    ]
  },
  {
    id: "02_RD_DISCLAIMER",
    title: "2. Research & Development (R&D) Disclaimer",
    content: [
      "The Primotion Studio functions primarily as a digital creation, architectural showcase, and research & development (R&D) studio. The applications, code snippets, interactive models, and system components presented on this platform are provided strictly for demonstration, evaluation, and educational purposes.",
      "Experimental builds, subroutines, or preview models are subject to continuous iteration, modifications, or complete removal without prior notice. The Primotion Studio makes no guarantee of continuous server uptime, state persistence, or feature preservation for experimental tools."
    ]
  },
  {
    id: "03_INTELLECTUAL_PROPERTY",
    title: "3. Intellectual Property Rights",
    content: [
      "Unless explicitly stated otherwise, all proprietary code, system architecture diagrams, user interface designs, custom iconography, graphics, algorithms, and technical documentation published on this website are the intellectual property of The Primotion Studio and protected by applicable copyright, trademark, and trade secret laws.",
      "You are granted a limited, non-exclusive, non-transferable, revocable license to view and interact with the content on this site for personal, non-commercial, and preview purposes. Reproduction, distribution, reverse engineering, or commercial exploitation of proprietary studio assets without prior written consent is strictly prohibited."
    ]
  },
  {
    id: "04_PERMITTED_USE",
    title: "4. Permitted Use & Code of Conduct",
    content: [
      "You agree to use this site and its underlying infrastructure only for lawful purposes. You shall not attempt to breach security controls, gain unauthorized administrative access, perform denial-of-service (DoS) vectors, execute malicious automated scripts, or inject unsafe code into forms or terminal interfaces.",
      "The Primotion Studio reserves the right to restrict, suspend, or terminate access for any user or automated agent violating these operational guidelines."
    ]
  },
  {
    id: "05_NO_WARRANTIES",
    title: "5. No Warranties & As-Is Provision",
    content: [
      "ALL SERVICES, DEMOS, CODE SAMPLE REPOSITORIES, AND CONTENT ARE PROVIDED ON AN 'AS IS' AND 'AS AVAILABLE' BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.",
      "THE PRIMOTION STUDIO DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR PLATFORM WILL BE ERROR-FREE, SECURE, UNINTERRUPTED, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS."
    ]
  },
  {
    id: "06_LIMITATION_LIABILITY",
    title: "6. Limitation of Liability",
    content: [
      "IN NO EVENT SHALL THE PRIMOTION STUDIO, ITS FOUNDERS, CONTRIBUTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE SERVICES, CODE DEMOS, OR SYSTEM APIS.",
      "IN JURISDICTIONS THAT DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, OUR LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW."
    ]
  },
  {
    id: "07_THIRD_PARTY_LINKS",
    title: "7. Third-Party Services & External Links",
    content: [
      "This website may contain links to external third-party websites, GitHub repositories, cloud deployment nodes, or external API documentation not owned or controlled by The Primotion Studio. We assume no responsibility for the content, privacy policies, or practices of any third-party websites or services."
    ]
  },
  {
    id: "08_MODIFICATIONS",
    title: "8. Amendments to Terms",
    content: [
      "We reserve the right to modify or replace these Terms at any time at our sole discretion. Any updates will be reflected on this page with an updated effective date. Continued access or use of our platform after revisions become effective constitutes acceptance of the revised Terms."
    ]
  },
  {
    id: "09_GOVERNING_LAW",
    title: "9. Governing Law & Jurisdiction",
    content: [
      "These Terms shall be governed, construed, and enforced in accordance with the laws of the applicable legal jurisdiction of The Primotion Studio, without regard to its conflict of law provisions."
    ]
  }
];

export default function TermsOfService() {
  return (
    <MonolithLayout>
      <header className="mb-12 max-w-5xl">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[10px] text-tertiary uppercase tracking-[0.2em]">
            DOC_REF: LEGAL_TOS_v2.1 {"//"} REV: {new Date().toISOString().split("T")[0]}
          </span>
          <span className="h-px flex-1 bg-outline-variant opacity-15"></span>
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tighter uppercase mb-4">
          Terms of Service
        </h1>
        <p className="font-mono text-sm text-on-surface-variant max-w-3xl leading-relaxed">
          Operating parameters and legal agreement governing the usage of digital assets, research modules, and portfolio applications hosted by{" "}
          <span className="text-secondary font-semibold">The Primotion Studio</span>.
        </p>
      </header>

      <div className="space-y-8 max-w-4xl">
        {termsSections.map((section) => (
          <section
            key={section.id}
            className="bg-surface-container-low p-6 md:p-8 border-l-2 border-[#abc7ff]/30 hover:border-primary transition-all rounded-r-lg"
          >
            <div className="font-mono text-[10px] text-outline uppercase mb-2 tracking-wider">
              SECTION_ID: {section.id}
            </div>
            <h2 className="text-xl md:text-2xl font-headline font-bold text-on-surface uppercase mb-4 tracking-tight">
              {section.title}
            </h2>
            <div className="space-y-3 font-body text-sm text-on-surface-variant leading-relaxed">
              {section.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 max-w-4xl border-t border-outline-variant/15 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[10px] text-outline">
        <div>
          <span>OPERATOR: THE PRIMOTION STUDIO</span>
          <span className="mx-2">|</span>
          <span>STATUS: ACTIVE_POLICY</span>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-primary hover:underline uppercase">
            View_Privacy_Policy →
          </Link>
        </div>
      </div>
    </MonolithLayout>
  );
}
