"use client";

import React from "react";
import { MonolithLayout } from "@/components/layout/monolith-layout";
import Link from "next/link";

const privacySections = [
  {
    id: "01_OVERVIEW",
    title: "1. Privacy Overview & Commitment",
    content: [
      "At The Primotion Studio ('we', 'us', or 'our'), we respect your privacy and are committed to protecting any technical telemetry, minimal interaction data, or communication information collected through our research portfolio website.",
      "This Privacy Policy outlines what information we process, how it is utilized within our research & development workflows, and your rights regarding your data."
    ]
  },
  {
    id: "02_DATA_COLLECTION",
    title: "2. Information We Process",
    content: [
      "As a research and demonstration portfolio, we minimize data collection to only what is necessary for functional operation, security monitoring, and interactive module state handling:",
      "• Server Telemetry & Logs: Standard access logs including IP address, browser user-agent, operating system details, requested endpoints, HTTP status codes, and timestamps.",
      "• Inquiry Communications: Information provided directly by you when submitting messages via our contact forms (such as your name, email address, and communication message).",
      "• System State Data: Local storage or session parameters used solely to preserve user preferences (e.g., terminal visual themes or UI layout state) on your local device."
    ]
  },
  {
    id: "03_USE_OF_DATA",
    title: "3. How We Use Collected Data",
    content: [
      "Information collected is strictly utilized for the following core operations:",
      "• Demonstrating R&D capabilities and maintaining application uptime.",
      "• Responding to direct inquiries, collaboration requests, or feedback submitted through contact channels.",
      "• Safeguarding network infrastructure against malicious vectors, automated attacks, or improper system utilization.",
      "• Analyzing aggregate operational metrics to optimize portfolio response latency and visual rendering performance."
    ]
  },
  {
    id: "04_COOKIES_ANALYTICS",
    title: "4. Cookies & Client-Side Telemetry",
    content: [
      "We prioritize privacy-preserving client architecture. We do not use persistent cross-site tracking cookies or third-party behavioral advertising trackers.",
      "Essential browser storage (such as `localStorage` or `sessionStorage`) may be used temporarily on your device to ensure smooth user experience across subroutines and system components."
    ]
  },
  {
    id: "05_THIRD_PARTY_SERVICES",
    title: "5. Third-Party Infrastructure & Sub-Processors",
    content: [
      "Our infrastructure may leverage cloud hosting nodes, Content Delivery Networks (CDNs), and font distribution networks (e.g., Google Fonts for Google Material Symbols). These vendors process standard network requests (e.g., fetching assets or serving TLS encrypted pages) in according with their respective privacy standards.",
      "We do not sell, lease, trade, or monetize any user data or contact information to third parties."
    ]
  },
  {
    id: "06_DATA_SECURITY",
    title: "6. Data Security & Encryption",
    content: [
      "We implement appropriate technical and organizational safeguards—including HTTPS TLS encryption in transit, strict access controls, and regular environment updates—to protect against unauthorized access, loss, or alteration of system data.",
      "However, no method of transmission over the Internet or electronic storage is 100% secure. While we endeavor to protect your data, absolute security cannot be guaranteed."
    ]
  },
  {
    id: "07_RETENTION_RIGHTS",
    title: "7. Data Retention & Your Rights",
    content: [
      "We retain communication records only for as long as needed to fulfill the purpose of contact or comply with legal requirements.",
      "Depending on your jurisdiction (e.g., GDPR, CCPA), you have the right to request access to, correction of, or deletion of any personal contact information you have directly provided to us. To submit a request, contact us via our official contact module."
    ]
  },
  {
    id: "08_POLICY_UPDATES",
    title: "8. Updates to Policy",
    content: [
      "We may update this Privacy Policy periodically to reflect changes in our R&D technologies, security practices, or legal requirements. Updated policies will be posted to this page with an updated revision date."
    ]
  }
];

export default function PrivacyPolicy() {
  return (
    <MonolithLayout>
      <header className="mb-12 max-w-5xl">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[10px] text-tertiary uppercase tracking-[0.2em]">
            DOC_REF: LEGAL_PRIVACY_v2.1 {"//"} REV: {new Date().toISOString().split("T")[0]}
          </span>
          <span className="h-px flex-1 bg-outline-variant opacity-15"></span>
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tighter uppercase mb-4">
          Privacy Policy
        </h1>
        <p className="font-mono text-sm text-on-surface-variant max-w-3xl leading-relaxed">
          Data processing practices, telemetry disclosures, and privacy protocols enforced by{" "}
          <span className="text-secondary font-semibold">The Primotion Studio</span>.
        </p>
      </header>

      <div className="space-y-8 max-w-4xl">
        {privacySections.map((section) => (
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
          <span>DATA_PROTECTION: ENABLED</span>
        </div>
        <div className="flex gap-4">
          <Link href="/terms" className="text-primary hover:underline uppercase">
            View_Terms_Of_Service →
          </Link>
        </div>
      </div>
    </MonolithLayout>
  );
}
