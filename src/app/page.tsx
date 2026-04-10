"use client";

import React from "react";
import { MonolithLayout } from "@/components/layout/monolith-layout";
import Link from "next/link";
import { GitHubCalendar } from "react-github-calendar";

export default function Home() {
  return (
    <MonolithLayout>
      <section className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className="font-mono text-[10px] text-outline uppercase tracking-[0.2em]">
            BUILD_VER: 2.1.0 // SESSION_ID: 0x
            {Math.floor(Math.random() * 65536)
              .toString(16)
              .padStart(4, "0")
              .toUpperCase()}
          </p>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-primary uppercase">
            SYSTEM_ARCHITECT
          </h1>
        </div>

        {/* Terminal Interface */}
        <div className="bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/20 shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-surface-container-high px-4 py-2 flex justify-between items-center">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-error/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-tertiary/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
            </div>
            <span className="font-mono text-[10px] text-outline">guest@theprimotionstudio: ~</span>
          </div>
          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm md:text-base space-y-4 leading-relaxed">
            <div className="flex gap-3">
              <span className="text-secondary">guest@theprimotionstudio:~$</span>
              <span className="text-on-surface">whoami</span>
            </div>
            <div className="text-on-surface-variant space-y-2">
              <p className="text-primary font-bold">NAME: MARTINS_OKANLAWON</p>
              <p>ROLE: FULL_STACK_ENGINEER // ETHICAL_HACKER</p>
              <p>
                STACK: <span className="text-tertiary">Next.js</span>,{" "}
                <span className="text-tertiary">PHP</span>,{" "}
                <span className="text-tertiary">Python</span>,{" "}
                <span className="text-tertiary">PostgreSQL</span>
              </p>
              <p className="opacity-80">
                Highly motivated and versatile programmer with over 5 years of experience in
                full-stack development. Proficient in PHP, JavaScript/Typescript, C, Python, and
                various scripting languages. Aiming to create solutions, learn from every mistake,
                and look at the bigger picture in every situation.
              </p>
            </div>
            <div className="pt-6">
              <p className="text-outline text-xs mb-4 uppercase tracking-widest">
                Available Commands:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/projects"
                  className="group cursor-pointer hover:bg-surface-container-highest p-3 transition-colors border-b border-transparent hover:border-secondary"
                >
                  <span className="text-secondary block mb-1">ls projects</span>
                  <span className="text-xs text-outline italic">View architecture portfolio</span>
                </Link>
                <Link
                  href="/experience"
                  className="group cursor-pointer hover:bg-surface-container-highest p-3 transition-colors border-b border-transparent hover:border-secondary"
                >
                  <span className="text-secondary block mb-1">cd experience</span>
                  <span className="text-xs text-outline italic">Professional history</span>
                </Link>
                <Link
                  href="/contact"
                  className="group cursor-pointer hover:bg-surface-container-highest p-3 transition-colors border-b border-transparent hover:border-secondary"
                >
                  <span className="text-secondary block mb-1">cat contact.txt</span>
                  <span className="text-xs text-outline italic">Initialize communication</span>
                </Link>
                <Link
                  href="/blog"
                  className="group cursor-pointer hover:bg-surface-container-highest p-3 transition-colors border-b border-transparent hover:border-secondary"
                >
                  <span className="text-secondary block mb-1">./blog --latest</span>
                  <span className="text-xs text-outline italic">Technical insights</span>
                </Link>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <span className="text-secondary">guest@theprimotionstudio:~$</span>
              <span className="w-2.5 h-5 bg-primary cursor-blink"></span>
            </div>
          </div>
        </div>

        {/* Bento Stats / Features */}
        <GitHubCalendar username="primotionstudio" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="https://streak-stats.demolab.com?user=PrimotionStudio&amp;theme=dark"
            className="w-full md:col-span-2"
          />

          <div className="bg-primary-container p-8 text-on-primary-container relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest mb-2 block opacity-70">
                  CURRENT_STATUS
                </span>
                <img src="https://komarev.com/ghpvc/?username=PrimotionStudio" />
              </div>
              <h3 className="font-headline text-2xl font-bold leading-tight uppercase">
                Open for Collaboration
              </h3>
              <p className="mt-4 text-sm opacity-80 font-medium">
                Seeking high-impact backend roles or complex full-stack contracts.
              </p>
              <button className="mt-8 px-4 py-2 bg-on-primary-container text-white text-xs font-mono uppercase tracking-widest hover:opacity-90 transition-opacity">
                <Link href="/contact">SEND_SIGNAL</Link>
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span className="material-symbols-outlined text-9xl">terminal</span>
            </div>
          </div>
        </div>
      </section>
    </MonolithLayout>
  );
}
