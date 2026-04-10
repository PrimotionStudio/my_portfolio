"use client";

import React from "react";
import { MonolithLayout } from "@/components/layout/monolith-layout";

const projects = [
  {
    id: "01",
    title: "RSU_BUSINESS_SCHOOL",
    description:
      "The official web presence for the Rivers State University Business School — a clean, institutional platform designed to communicate academic programmes, faculty information, admission procedures, and campus news to prospective and current students.",
    imageUrl: "/rsubs.png",
    url: "https://bs.rsu.edu.ng",
    status: "ACTIVE",
    uptime: "99.9%",
    version: "v2.0.0",
  },
  {
    id: "02",
    title: "AKSCONS",
    description:
      "A professional institutional website for Akwa Ibom State College of Nursing Sciences, built to serve prospective students and staff with programme details, announcements, and college resources in a clean, accessible format.",
    imageUrl: "/akscons.png",
    url: "https://akscons.edu.ng",
    status: "ACTIVE",
    uptime: "99.5%",
  },
  {
    id: "03",
    title: "VYVAS_FIRST",
    description:
      "A full-featured platform for Vyvas-First Educational Services — empowering 10,000+ Nigerian educators with teacher training, IELTS preparation, study abroad guidance, and professional development courses. Trusted by 250+ schools across Nigeria.",
    imageUrl: "/vyvasfirst.png",
    url: "https://vyvasfirst.vercel.app",
    status: "DEPLOYED",
    icon: "school",
  },
  {
    id: "04",
    title: "LAXI",
    description:
      "An autonomous social media agent that keeps your online presence active while you're away. Laxi schedules, publishes, and engages on your behalf across platforms — learning your tone and timing to maintain authentic activity without manual input.",
    imageUrl: "/laxi.png",
    url: "https://github.com/PrimotionStudio/laxi3",
    status: "BETA",
    logs: [
      "> AGENT_BOOT: OK",
      "> AUTH_PROVIDER: LOADED",
      "> SCHEDULER: ACTIVE",
      "> POSTING_ENGINE: RUNNING",
      "> BUILD: SUCCESS",
    ],
  },
  {
    id: "05",
    title: "PHATHON_WHISPER",
    description:
      "A privacy-first anonymous chat application that connects you with random strangers in real-time. No accounts, no history — just ephemeral conversations and peer-to-peer file sharing that disappear when the session ends.",
    imageUrl: "/phathomwhisper.png",
    url: "https://github.com/PrimotionStudio/PhathomWhisper",
    status: "ARCHIVED",
    icon: "chat_bubble",
  },
  {
    id: "06",
    title: "JEXI",
    description:
      "A smart desktop organizer that runs silently in the background, automatically sorting files into structured folders based on type, date, and usage patterns. Jexi learns your workspace habits over time and keeps your file system clean without intervention.",
    imageUrl: "/jexi.png",
    url: "http://github.com/primotionStudio/jexi",
    status: "ARCHIVED",
    icon: "folder_managed",
  },
  {
    id: "07",
    title: "MY_CAMPUS",
    description:
      "A dedicated social network built around student life — connecting undergrads, postgrads, and lecturers across universities, polytechnics, and colleges. Share notes, join course groups, discover campus events, and build your academic community.",
    imageUrl: "/mycampus.png",
    url: "http://github.com/primotionStudio/mycampus",
    status: "ARCHIVED",
    icon: "groups",
  },
];

export default function Projects() {
  return (
    <MonolithLayout>
      {/* ── Header ── */}
      <header className="mb-12 max-w-5xl">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-tertiary uppercase">
            SYSTEM_PATH: ~/theprimotionstudio/src/projects
          </span>
          <span className="hidden sm:block h-px flex-1 bg-outline-variant opacity-15" />
          <span className="font-mono text-xs text-secondary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            STABLE_ENVIRONMENT
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-primary tracking-tighter uppercase mb-4">
          Project Directory
        </h1>
        <p className="font-mono text-sm text-on-surface-variant max-w-2xl">
          Executing <span className="text-secondary">ls -la --rich-ui</span>. Analyzing local
          project archives. Metadata extracted from{" "}
          <span className="text-tertiary">package.json</span> and{" "}
          <span className="text-tertiary">docker-compose.yml</span>.
        </p>
      </header>

      {/* ── Shell prompt ── */}
      <div className="mb-8 font-mono text-sm flex items-center gap-2 border-b border-outline-variant/15 pb-2">
        <span className="text-secondary">visitor@theprimotionstudio:~$</span>
        <span className="text-on-surface">ls -la projects/</span>
        <span className="w-2 h-5 bg-primary/40 animate-pulse" />
      </div>

      {/* ── Bento grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl">
        {/* 01 — Large hero card (8 cols) */}
        <div className="lg:col-span-8 group relative bg-surface-container-low overflow-hidden transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex flex-col md:flex-row h-full">
            {/* Image — top on mobile, left on md+ */}
            <div className="w-full md:w-1/2 relative bg-surface-container-highest min-h-[200px] sm:min-h-[260px] md:min-h-[340px] overflow-hidden order-first">
              <img
                alt={projects[0].title}
                src={projects[0].imageUrl}
                className="absolute inset-0 w-full h-full object-cover object-left-top grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                <div className="font-mono text-[10px] text-tertiary uppercase">
                  UPTIME: {projects[0].uptime}
                </div>
              </div>
            </div>
            {/* Text side */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] py-1 px-2 bg-surface-container-highest text-primary">
                    DRWX------
                  </span>
                  <span className="font-mono text-[10px] text-outline">{projects[0].version}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface uppercase mb-3">
                  {projects[0].title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {projects[0].description}
                </p>
              </div>
              <div className="mt-8">
                <a
                  href={projects[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-primary-container text-on-primary-container px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider items-center gap-2 hover:shadow-[0_0_15px_rgba(171,199,255,0.2)] transition-all"
                >
                  visit_project
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 02 — Vertical card (4 cols) */}
        <div className="lg:col-span-4 bg-surface-container-low flex flex-col transition-all duration-300 group overflow-hidden">
          {/* Image top */}
          <div className="aspect-video bg-surface-container-highest relative overflow-hidden">
            <img
              alt={projects[1].title}
              src={projects[1].imageUrl}
              className="absolute inset-0 w-full h-full object-cover object-left-top grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute top-3 left-3 font-mono text-[10px] px-2 py-1 bg-surface-container-highest/80 text-secondary uppercase">
              {projects[1].status}
            </div>
          </div>
          <div className="flex-1 flex flex-col p-6">
            <h3 className="text-lg sm:text-xl font-headline font-bold text-on-surface uppercase mb-3">
              {projects[1].title}
            </h3>
            <p className="text-sm text-on-surface-variant font-body leading-relaxed flex-1">
              {projects[1].description}
            </p>
            <a
              href={projects[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block border border-outline-variant/40 text-primary px-4 py-2 font-mono text-xs font-bold uppercase text-center hover:bg-primary/10 transition-colors"
            >
              visit_project
            </a>
          </div>
        </div>

        {/* 03 — Half-width with icon (6 cols) */}
        <div className="lg:col-span-6 bg-surface-container-low overflow-hidden transition-all duration-300 border-l-2 border-transparent hover:border-tertiary group">
          {/* Image top-left strip */}
          <div className="relative h-52 bg-surface-container-highest overflow-hidden">
            <img
              alt={projects[2].title}
              src={projects[2].imageUrl}
              className="absolute inset-0 w-full h-full object-cover object-left-top grayscale opacity-30 group-hover:opacity-55 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-low" />
            <div className="absolute top-3 left-3 font-mono text-[10px] px-2 py-1 bg-surface-container-highest/80 text-outline uppercase">
              {projects[2].status}
            </div>
          </div>
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-headline font-bold text-on-surface uppercase mb-3">
                {projects[2].title}
              </h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">
                {projects[2].description}
              </p>
              <a
                href={projects[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-outline-variant/40 text-tertiary px-4 py-2 font-mono text-xs font-bold uppercase hover:bg-tertiary/10 transition-colors"
              >
                visit_project
              </a>
            </div>
            <div className="w-20 h-20 sm:w-28 sm:h-28 bg-surface-container-highest flex items-center justify-center relative shrink-0 self-center">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tertiary to-transparent" />
              <span className="material-symbols-outlined text-tertiary text-4xl group-hover:rotate-180 transition-transform duration-500">
                {projects[2].icon}
              </span>
            </div>
          </div>
        </div>

        {/* 04 — Data-heavy terminal card (6 cols) */}
        <div className="lg:col-span-6 bg-surface-container-low overflow-hidden transition-all duration-300 border-l-2 border-transparent hover:border-primary group">
          {/* Image top-left strip */}
          <div className="relative h-52 bg-surface-container-highest overflow-hidden">
            <img
              alt={projects[3].title}
              src={projects[3].imageUrl}
              className="absolute inset-0 w-full h-full object-cover object-left-top grayscale opacity-30 group-hover:opacity-55 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-low" />
            <div className="absolute top-3 left-3 font-mono text-[10px] px-2 py-1 bg-surface-container-highest/80 text-secondary uppercase">
              {projects[3].status}
            </div>
          </div>
          <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-on-surface uppercase mb-2">
                  {projects[3].title}
                </h3>
                <p className="text-xs text-on-surface-variant font-body leading-relaxed">
                  {projects[3].description}
                </p>
              </div>
              <a
                href={projects[3].url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex border border-outline-variant/40 text-primary px-4 py-2 font-mono text-xs font-bold uppercase hover:bg-primary/10 transition-colors"
              >
                view_repo
              </a>
            </div>
            <div className="bg-background/50 p-4 border border-outline-variant/15 font-mono text-[9px] overflow-hidden">
              <div className="text-secondary mb-2">
                {"//"} {projects[3].status}
              </div>
              <div className="text-on-surface-variant opacity-60 space-y-0.5">
                {projects[3].logs?.map((log, i) => (
                  <div key={i}>{log}</div>
                ))}
              </div>
              <div className="mt-4 flex gap-1">
                <div className="h-1 w-full bg-secondary/30" />
                <div className="h-1 w-full bg-secondary/30" />
                <div className="h-1 w-24 bg-secondary" />
              </div>
            </div>
          </div>
        </div>

        {/* 05 — Small card (4 cols) */}
        <div className="lg:col-span-4 bg-surface-container-low overflow-hidden transition-all duration-300 border-l-2 border-transparent hover:border-secondary group flex flex-col">
          <div className="relative h-52 bg-surface-container-highest overflow-hidden">
            <img
              alt={projects[4].title}
              src={projects[4].imageUrl}
              className="absolute inset-0 w-full h-full object-cover object-left-top grayscale opacity-30 group-hover:opacity-55 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-low" />
            <div className="absolute top-3 left-3 font-mono text-[10px] px-2 py-1 bg-surface-container-highest/80 text-outline uppercase">
              {projects[4].status}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="text-xl font-headline font-bold text-on-surface uppercase mb-3">
                {projects[4].title}
              </h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                {projects[4].description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-xl">
                  {projects[4].icon}
                </span>
              </div>
              <a
                href={projects[4].url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-outline-variant/40 text-secondary px-4 py-2 font-mono text-xs font-bold uppercase hover:bg-secondary/10 transition-colors"
              >
                view_repo
              </a>
            </div>
          </div>
        </div>

        {/* 06 — Small card (4 cols) */}
        <div className="lg:col-span-4 bg-surface-container-low overflow-hidden transition-all duration-300 border-l-2 border-transparent hover:border-tertiary group flex flex-col">
          <div className="relative h-52 bg-surface-container-highest overflow-hidden">
            <img
              alt={projects[5].title}
              src={projects[5].imageUrl}
              className="absolute inset-0 w-full h-full object-cover object-left-top grayscale opacity-30 group-hover:opacity-55 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-low" />
            <div className="absolute top-3 left-3 font-mono text-[10px] px-2 py-1 bg-surface-container-highest/80 text-outline uppercase">
              {projects[5].status}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="text-xl font-headline font-bold text-on-surface uppercase mb-3">
                {projects[5].title}
              </h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                {projects[5].description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-xl group-hover:rotate-45 transition-transform duration-300">
                  {projects[5].icon}
                </span>
              </div>
              <a
                href={projects[5].url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-outline-variant/40 text-tertiary px-4 py-2 font-mono text-xs font-bold uppercase hover:bg-tertiary/10 transition-colors"
              >
                view_repo
              </a>
            </div>
          </div>
        </div>

        {/* 07 — Wide card (4 cols) */}
        <div className="lg:col-span-4 bg-surface-container-low overflow-hidden transition-all duration-300 group flex flex-col">
          <div className="relative h-52 bg-surface-container-highest overflow-hidden">
            <img
              alt={projects[6].title}
              src={projects[6].imageUrl}
              className="absolute inset-0 w-full h-full object-cover object-left-top grayscale opacity-30 group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-low" />
            <div className="absolute top-3 left-3 font-mono text-[10px] px-2 py-1 bg-surface-container-highest/80 text-secondary uppercase">
              {projects[6].status}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="text-xl font-headline font-bold text-on-surface uppercase mb-2">
                {projects[6].title}
              </h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                {projects[6].description}
              </p>
            </div>
            <a
              href={projects[6].url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex border border-outline-variant/40 text-primary px-4 py-2 font-mono text-xs font-bold uppercase hover:bg-primary/10 transition-colors w-full justify-center"
            >
              view_repo
            </a>
          </div>
        </div>
      </div>

      {/* ── Footer bar ── */}
      <div className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center max-w-7xl border-t border-outline-variant/15 pt-6 font-mono text-[10px] gap-4">
        <div className="flex flex-wrap gap-4">
          <span className="text-outline uppercase">DISPLAYING: 7_PROJECTS</span>
          <span className="text-outline uppercase">TOTAL_SIZE: 142.4_MB</span>
        </div>
        <div className="flex gap-2">
          <button className="px-2 py-1 bg-surface-container-highest text-primary hover:bg-primary hover:text-on-primary transition-colors">
            1
          </button>
          {/*<button className="px-2 py-1 hover:bg-surface-container-highest text-outline transition-colors">
            NEXT_PAGE
          </button>*/}
        </div>
      </div>
    </MonolithLayout>
  );
}
