"use client";

import React from 'react';
import { MonolithLayout } from '@/components/layout/monolith-layout';
import Image from 'next/image';

const experiences = [
  {
    company: "Finaseed Ltd",
    role: "Backend Developer (Intern)",
    period: "August 2023 to January 2024",
    description: "Designed and implemented a robust backend system for real-time monetary transactions, ensuring the secure storage of critical data through a well-structured database and seamless API integration with the frontend team. I also oversaw the security of the backend system to prevent vulnerabilities and breaches.",
    status: "COMPLETED",
    tech: ["Backend", "API", "Security"]
  },
  {
    company: "Shef",
    role: "Software Engineer",
    period: "April 2021 to July 2022",
    description: "Developed the consumer web experience, chef onboarding and supply platform, and internal administrator tooling.",
    status: "ARCHIVED",
    tech: ["Web", "Full-stack"]
  },
  {
    company: "Koala",
    role: "Lead Engineer",
    period: "September 2019 to March 2021",
    description: "Worked on a 3D collaborative classroom application for independent tutors. Launched parent, tutor, and administrator web platforms for Oculus VR Spanish and reading tutoring service. Led primary Unity and Electron products supported on Mac, Windows, and WebGL.",
    status: "ARCHIVED",
    tech: ["3D", "VR", "Unity", "Electron"]
  },
  {
    company: "Holberton School",
    role: "Software Engineering Student",
    period: "September 2018 to June 2019",
    description: "Completed the nine-month computer science, programming and full-stack web development curriculum.",
    status: "GRADUATED",
    tech: ["CS", "Programming", "Full-stack"]
  }
];

export default function Experience() {
  return (
    <MonolithLayout>
      <header className="mb-12 max-w-5xl">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[10px] text-tertiary uppercase tracking-[0.2em]">BUILD_VER: 1.0.4 // MODULE: EXPERIENCE_CHRONICLE</span>
          <span className="h-px flex-1 bg-outline-variant opacity-15"></span>
        </div>
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary tracking-tighter uppercase mb-4">Professional History</h1>
        <p className="font-mono text-sm text-on-surface-variant max-w-2xl">
          Retrieved from <span className="text-secondary">/var/log/career.log</span>. Chronicling professional milestones and technical contributions across distributed environments.
        </p>
      </header>

      <div className="space-y-8 max-w-4xl">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative bg-surface-container-low p-6 border-l-2 border-transparent hover:border-secondary transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
              <div>
                <h3 className="text-2xl font-headline font-bold text-on-surface uppercase">{exp.company}</h3>
                <p className="text-sm text-primary font-mono">{exp.role}</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] text-outline block">{exp.period}</span>
                <span className="font-mono text-[10px] text-secondary uppercase">{exp.status}</span>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant mb-6 font-body leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map(t => (
                <span key={t} className="font-mono text-[10px] px-2 py-1 bg-background border border-outline-variant/30 text-outline group-hover:text-primary transition-colors uppercase">{t}</span>
              ))}
            </div>
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
