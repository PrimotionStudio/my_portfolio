"use client";

import React from 'react';
import { MonolithLayout } from '@/components/layout/monolith-layout';
import Image from 'next/image';

const projects = [
  {
    id: "01",
    title: "Ether_Mail",
    version: "v1.2.0",
    description: "A distributed, high-throughput SMTP/IMAP server built for enterprise scalability. Features end-to-end encryption and custom routing engines.",
    tags: ["Next.js", "Hono", "Postgres"],
    status: "STABLE",
    uptime: "99.98%",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtaUfzW0XwhUOm_PDN2mUe6ef8OJOuT6VLJNvP7ceEBqSePog5JlF2HDaOxZ0Zp4dMjk2P1HHKK_myX-oxXdzvA6tXSVAk-cUsBTzjwmenQm5JKaFkm_BHaYsQfRafwgQiK7OLKDPIr1RIim_DzNDUWr0km1RSozrdf4YKv-ymbXyO91Le9mr6przCjmn_RIT4Rv9Q7bGm9NcxwDDuUyewOveMkIrhsA9rW0IqpFN2jtpO51DY_KYWyMtk3M7H7xNz3eumqt6JEwI"
  },
  {
    id: "02",
    title: "Nexus_Stream",
    version: "v0.8.4",
    description: "Ultra-low latency peer-to-peer video conferencing framework using WebRTC and specialized signaling servers.",
    tags: ["Hono", "Prisma"],
    status: "ACTIVE",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUG0bAfSGMFx4680JL4GkC_1Czy80_4RRF9EXrOdZ7jMqikZA-_54w7ufFB55_CZDUoVrV-vyLRdcdYfHOp0IOtobUM_2iBnf84OuJP6kAFjDUNjYHmn3inJipt8cvs8sId0B4gaYPmdbDNywg5CXjaUwFrGtxnYOsEOrZY0m2owqEtKGcIbs4hFtPOOo18muQFx6G9oKWKQyuv97n_2krEO0-1U-UeDcbiIGz-wAQh7E2os8T0TtomXyOmu3cWKxD9bT1gm903Vc"
  },
  {
    id: "03",
    title: "Void_Query",
    version: "v1.0.1",
    description: "A search abstraction layer that unifies elastic search and vector databases with a single Hono-powered API.",
    tags: ["Next.js", "Postgres"],
    status: "ARCH_TYPE: SERVICE",
    icon: "database"
  },
  {
    id: "04",
    title: "Synth_Auth",
    version: "v2.1.0",
    description: "Identity-as-a-service provider with zero-knowledge proof support.",
    tags: ["Node_20", "Postgres", "Prisma"],
    status: "SECURITY_SCAN",
    logs: [
      "> SHA256 VALIDATED",
      "> JWT_PROVIDER LOADED",
      "> ENCRYPTION_LVL: 4096",
      "> DEPLOYMENT: VERCEL",
      "> BUILD: SUCCESS"
    ]
  }
];

export default function Projects() {
  return (
    <MonolithLayout>
      <header className="mb-12 max-w-5xl">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-tertiary uppercase">SYSTEM_PATH: ~/monolith/src/projects</span>
          <span className="h-px flex-1 bg-outline-variant opacity-15"></span>
          <span className="font-mono text-xs text-secondary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            STABLE_ENVIRONMENT
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary tracking-tighter uppercase mb-4">Project Directory</h1>
        <p className="font-mono text-sm text-on-surface-variant max-w-2xl">
          Executing <span className="text-secondary">ls -la --rich-ui</span>. Analyzing local project archives. Metadata and dependencies extracted from <span className="text-tertiary">package.json</span> and <span className="text-tertiary">docker-compose.yml</span>.
        </p>
      </header>

      <div className="mb-8 font-mono text-sm flex items-center gap-2 border-b border-outline-variant/15 pb-2">
        <span className="text-secondary">visitor@monolith:~$</span>
        <span className="text-on-surface">ls -la projects/</span>
        <span className="w-2 h-5 bg-primary/40 animate-pulse"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl">
        {/* Project 01: Large Highlight */}
        <div className="lg:col-span-8 group relative bg-surface-container-low overflow-hidden transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 p-8 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[10px] py-1 px-2 bg-surface-container-highest text-primary">DRWX------</span>
                  <span className="font-mono text-[10px] text-outline">{projects[0].version}</span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-on-surface uppercase mb-3">{projects[0].title}</h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[0].tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-1 bg-background border border-outline-variant/30 text-secondary">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-primary-container text-on-primary-container px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_15px_rgba(171,199,255,0.2)] transition-all">
                  view_source
                  <span className="material-symbols-outlined text-sm">terminal</span>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative bg-surface-container-highest min-h-[300px] overflow-hidden">
              <img
                alt={projects[0].title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-500"
                src={projects[0].imageUrl}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                <div className="font-mono text-[10px] text-tertiary uppercase">UPTIME: {projects[0].uptime}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 02: Vertical Box */}
        <div className="lg:col-span-4 bg-surface-container-low p-6 flex flex-col transition-all duration-300 group">
          <div className="mb-6 aspect-video bg-surface-container-highest relative overflow-hidden">
            <img
              alt={projects[1].title}
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all"
              src={projects[1].imageUrl}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-primary text-5xl">videocam</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-headline font-bold text-on-surface uppercase">{projects[1].title}</h3>
              <span className="font-mono text-[10px] text-secondary uppercase">{projects[1].status}</span>
            </div>
            <p className="text-sm text-on-surface-variant mb-6 font-body">
              {projects[1].description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {projects[1].tags.map(tag => (
                <span key={tag} className="font-mono text-[10px] px-2 py-1 bg-background border border-outline-variant/30 text-primary">{tag}</span>
              ))}
            </div>
          </div>
          <button className="border border-outline-variant/40 text-primary px-4 py-2 font-mono text-xs font-bold uppercase hover:bg-primary/10 transition-colors">
            inspect_module
          </button>
        </div>

        {/* Project 03: Horizontal Box */}
        <div className="lg:col-span-6 bg-surface-container-low p-8 transition-all duration-300 border-l-2 border-transparent hover:border-tertiary group">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="font-mono text-[10px] text-outline mb-2 uppercase">{projects[2].status}</div>
              <h3 className="text-2xl font-headline font-bold text-on-surface uppercase mb-3">{projects[2].title}</h3>
              <p className="text-sm text-on-surface-variant mb-6 font-body leading-relaxed">
                {projects[2].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[2].tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] px-2 py-1 bg-background border border-outline-variant/30 text-secondary">{tag}</span>
                ))}
              </div>
            </div>
            <div className="w-32 h-32 bg-surface-container-highest flex items-center justify-center relative shrink-0">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tertiary to-transparent"></div>
              <span className="material-symbols-outlined text-tertiary text-4xl group-hover:rotate-180 transition-transform duration-500">{projects[2].icon}</span>
            </div>
          </div>
        </div>

        {/* Project 04: Data-heavy Box */}
        <div className="lg:col-span-6 bg-surface-container-low p-8 transition-all duration-300 border-l-2 border-transparent hover:border-primary group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-headline font-bold text-on-surface uppercase mb-2">{projects[3].title}</h3>
                <p className="text-xs text-on-surface-variant font-body">{projects[3].description}</p>
              </div>
              <div className="space-y-1 font-mono text-[10px] mt-4">
                <div className="flex justify-between border-b border-outline-variant/10 py-1">
                  <span className="text-outline uppercase">RUNTIME:</span>
                  <span className="text-on-surface uppercase">{projects[3].tags[0]}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 py-1">
                  <span className="text-outline uppercase">DATABASE:</span>
                  <span className="text-on-surface uppercase">{projects[3].tags[1]}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 py-1">
                  <span className="text-outline uppercase">ORM:</span>
                  <span className="text-on-surface uppercase">{projects[3].tags[2]}</span>
                </div>
              </div>
            </div>
            <div className="bg-background/50 p-4 border border-outline-variant/15 font-mono text-[9px] overflow-hidden">
              <div className="text-secondary mb-1">{"//"} {projects[3].status}</div>
              <div className="text-on-surface-variant opacity-60">
                {projects[3].logs?.map((log, i) => (
                  <React.Fragment key={i}>
                    {log}<br/>
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-4 flex gap-1">
                <div className="h-1 w-full bg-secondary/30"></div>
                <div className="h-1 w-full bg-secondary/30"></div>
                <div className="h-1 w-24 bg-secondary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-center max-w-7xl border-t border-outline-variant/15 pt-6 font-mono text-[10px] gap-4">
        <div className="flex gap-4">
          <span className="text-outline uppercase">DISPLAYING: 4_PROJECTS</span>
          <span className="text-outline uppercase">TOTAL_SIZE: 142.4_MB</span>
        </div>
        <div className="flex gap-2">
          <button className="px-2 py-1 bg-surface-container-highest text-primary hover:bg-primary hover:text-on-primary transition-colors">1</button>
          <button className="px-2 py-1 hover:bg-surface-container-highest text-outline transition-colors">2</button>
          <button className="px-2 py-1 hover:bg-surface-container-highest text-outline transition-colors">3</button>
          <span className="px-2 py-1 text-outline">...</span>
          <button className="px-2 py-1 hover:bg-surface-container-highest text-outline transition-colors">NEXT_PAGE</button>
        </div>
      </div>
    </MonolithLayout>
  );
}
