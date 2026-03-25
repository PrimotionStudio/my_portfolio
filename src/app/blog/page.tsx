"use client";

import React from 'react';
import { MonolithLayout } from '@/components/layout/monolith-layout';
import Link from 'next/link';

const blogPosts = [
  {
    id: "01",
    date: "2024.10.24",
    title: "High-Concurrency Architectures with Hono",
    summary: "Exploring the benefits of using Hono for building performant API design and digital infrastructure.",
    tags: ["Backend", "Hono", "API"]
  },
  {
    id: "02",
    date: "2024.09.15",
    title: "Secure Transmission Protocols in Web Dev",
    summary: "A deep dive into implementing end-to-end encryption and custom routing engines for SMTP/IMAP servers.",
    tags: ["Security", "Networking"]
  },
  {
    id: "03",
    date: "2024.08.02",
    title: "Scaling Horizontally without Friction",
    summary: "Technical insights on building digital infrastructure that scales horizontally in a cloud-native environment.",
    tags: ["DevOps", "Scaling"]
  }
];

export default function Blog() {
  return (
    <MonolithLayout>
      <header className="mb-12 max-w-5xl">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[10px] text-tertiary uppercase tracking-[0.2em]">BUILD_VER: 1.0.4 // MODULE: SYSTEM_LOGS</span>
          <span className="h-px flex-1 bg-outline-variant opacity-15"></span>
        </div>
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary tracking-tighter uppercase mb-4">Technical Logs</h1>
        <p className="font-mono text-sm text-on-surface-variant max-w-2xl">
          Accessing <span className="text-secondary">~/monolith/src/blog/*</span>. Analyzing technical insights and architectural documentation.
        </p>
      </header>

      <div className="space-y-8 max-w-4xl">
        {blogPosts.map((post) => (
          <article key={post.id} className="group relative bg-surface-container-low p-8 border-l-2 border-transparent hover:border-primary transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
              <span className="font-mono text-[10px] text-outline uppercase">POST_ID: {post.id} {"//"} {post.date}</span>
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] px-2 py-0.5 bg-surface-container-highest text-primary uppercase">{tag}</span>
                ))}
              </div>
            </div>
            <h2 className="text-2xl font-headline font-bold text-on-surface uppercase mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
            <p className="text-sm text-on-surface-variant mb-6 font-body leading-relaxed">
              {post.summary}
            </p>
            <button className="flex items-center gap-2 font-mono text-xs text-primary uppercase hover:underline">
              <span>Read_Full_Log</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-between items-center max-w-4xl border-t border-outline-variant/15 pt-6 font-mono text-[10px]">
        <span className="text-outline uppercase">Displaying: {blogPosts.length}_Logs</span>
        <div className="flex gap-2">
          <button className="px-2 py-1 bg-surface-container-highest text-primary">1</button>
          <button className="px-2 py-1 text-outline hover:text-primary">2</button>
          <span className="text-outline">...</span>
          <button className="px-2 py-1 text-outline hover:text-primary uppercase">Next_Entry</button>
        </div>
      </div>
    </MonolithLayout>
  );
}
