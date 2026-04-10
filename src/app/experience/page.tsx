"use client";

import React from "react";
import { MonolithLayout } from "@/components/layout/monolith-layout";
import Image from "next/image";

const experiences = [
  {
    company: "The Primotion Team",
    role: "Founder",
    period: "Dec 2024 – Present",
    description:
      "Leading a startup venture, managing early-stage operations, remote team coordination, and product direction.",
    status: "ACTIVE",
    tech: ["Startup", "Leadership", "Remote Ops"],
    type: "leadership",
    logo: "/primotionteam.jpg",
  },
  {
    company: "The Primotion Studio",
    role: "Project Lead Developer",
    period: "2019 – Present",
    description:
      "Leading development projects across Node.js, Python, and 14+ technologies. Architecting scalable systems and mentoring developers.",
    status: "ACTIVE",
    tech: ["Node.js", "Python", "Architecture"],
    type: "leadership",
    logo: "/theprimotionstudio.jpg",
  },
  {
    company: "Z1 Technology",
    role: "Chief Technology Officer",
    period: "Feb 2025 – Sep 2025",
    description:
      "Oversaw server infrastructure, backend systems, and technical strategy for a Nigerian LMS platform.",
    status: "COMPLETED",
    tech: ["Server Admin", "Backend", "Strategy"],
    type: "leadership",
    logo: "/z1lms.jpg",
  },
  {
    company: "WEBBITSKILLS",
    role: "Backend & Full Stack Developer",
    period: "Jan 2025 – Feb 2025",
    description: "Worked with PHP and WordPress to deliver backend solutions and web systems.",
    status: "COMPLETED",
    tech: ["PHP", "WordPress"],
    type: "work",
    logo: "/webbitskills.jpg",
  },
  {
    company: "CFSS (Cyber & Forensics Security Solutions)",
    role: "Project Intern",
    period: "Dec 2023 – Apr 2024",
    description:
      "Worked on cryptography and public key systems, gaining hands-on cybersecurity experience.",
    status: "COMPLETED",
    tech: ["Cryptography", "Security"],
    type: "internship",
    certificates: [
      {
        title: "Certificate of Internship",
        image: "/cfss-cert-1.png",
      },
      {
        title: "Certificate of Internship",
        image: "/cfss-cert-2.png",
      },
    ],
    logo: "/cfss.jpg",
  },
  {
    company: "FinaSeed Limited",
    role: "Software Developer Intern",
    period: "Aug 2023 – Jan 2024",
    description: "Worked on backend systems, databases, and API testing.",
    status: "COMPLETED",
    tech: ["Backend", "Databases", "API Testing"],
    type: "internship",
    logo: "/finaseed.jpg",
  },
  {
    company: "Harvoxx Tech Hub",
    role: "Intern",
    period: "Jul 2023 – Jan 2024",
    description:
      "Built frontend skills including responsive web design, CSS, and modern UI development.",
    status: "COMPLETED",
    tech: ["HTML", "CSS", "Responsive Design"],
    type: "internship",
    logo: "/harvoxx.jpg",
  },
  {
    company: "ALX Africa",
    role: "Software Engineering Student",
    period: "Aug 2023 – Present",
    description: "Learning software engineering, data structures, and backend development.",
    status: "ACTIVE",
    tech: ["Python", "Data Structures"],
    type: "education",
    certificates: [
      {
        title: "ALX Software Engineering Certificate",
        image: "/alx-cert-1.png",
      },
      {
        title: "ALX AICE Certificate",
        image: "/alx-cert-2.png",
      },
    ],
    logo: "/alx.jpg",
  },
];

export default function Experience() {
  return (
    <MonolithLayout>
      <header className="mb-12 max-w-5xl">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[10px] text-tertiary uppercase tracking-[0.2em]">
            BUILD_VER: 2.1.0 // MODULE: EXPERIENCE_CHRONICLE
          </span>
          <span className="h-px flex-1 bg-outline-variant opacity-15"></span>
        </div>
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary tracking-tighter uppercase mb-4">
          Professional History
        </h1>
        <p className="font-mono text-sm text-on-surface-variant max-w-2xl">
          Retrieved from <span className="text-secondary">/var/log/career.log</span>. Chronicling
          professional milestones and technical contributions across distributed environments.
        </p>
      </header>

      <div className="space-y-8 max-w-4xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative bg-surface-container-low p-6 border-l-2 border-transparent hover:border-secondary transition-all"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
              <div className="flex items-center gap-3">
                {exp.logo && (
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={40}
                    height={40}
                    className="rounded-sm object-contain"
                  />
                )}

                <div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface uppercase">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-primary font-mono">{exp.role}</p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end gap-1">
                <span className="font-mono text-[10px] text-outline">{exp.period}</span>

                <span className="font-mono text-[10px] text-secondary uppercase">{exp.status}</span>

                {exp.type && (
                  <span className="font-mono text-[10px] text-accent uppercase border border-outline-variant/30 px-2 py-[2px]">
                    {exp.type}
                  </span>
                )}
              </div>
            </div>
            <p className="text-sm text-on-surface-variant mb-6 font-body leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-1 bg-background border border-outline-variant/30 text-outline group-hover:text-primary transition-colors uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
            {exp.certificates && (
              <div className="mt-6">
                <p className="font-mono text-xs text-secondary mb-3 uppercase">Certificates</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {exp.certificates.map((cert, i) => (
                    <div
                      key={i}
                      className="border border-outline-variant/20 p-2 bg-background hover:scale-[1.02] transition"
                    >
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={300}
                        height={200}
                        className="object-cover w-full h-auto"
                      />
                      <p className="text-[10px] font-mono mt-2 text-outline uppercase">
                        {cert.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-outline-variant/15">
        <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10 max-w-2xl">
          <h3 className="font-headline font-bold text-on-surface uppercase mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">description</span>
            RESUME_DOWNLOAD
          </h3>
          <p className="text-sm text-on-surface-variant mb-6 font-body">
            Access the complete dossier in PDF format for offline synchronization.
          </p>
          <a
            href="/mycv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Martins Okanlawon CV.pdf"
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 font-mono text-xs font-bold uppercase hover:shadow-[0_0_15px_rgba(171,199,255,0.2)] transition-all"
          >
            Execute_Download
            <span className="material-symbols-outlined text-sm">download</span>
          </a>
        </div>
      </div>
    </MonolithLayout>
  );
}
