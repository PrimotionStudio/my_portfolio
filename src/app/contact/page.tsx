"use client";

import React from "react";
import { MonolithLayout } from "@/components/layout/monolith-layout";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Contact() {
  return (
    <MonolithLayout>
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Terminal Section */}
        <section className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] text-tertiary uppercase tracking-[0.2em]">
              BUILD_VER: 2.1.0 // MODULE: CONTACT_CONSOLE
            </span>
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary uppercase">
              Initialize
              <br />
              Transmission
            </h1>
          </div>

          {/* Console Window */}
          <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 shadow-2xl">
            {/* Window Controls */}
            <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-outline-variant/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-error/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-secondary/30"></div>
              </div>
              <span className="font-mono text-[10px] text-outline">
                SESSION: WEST-AFRICA-NIGERIA
              </span>
            </div>
            {/* Console Body */}
            <div className="p-6 font-mono text-sm md:text-base flex flex-col gap-4 min-h-[400px]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-outline">
                  <span className="text-secondary uppercase">[SUCCESS]</span>
                  <span>Network handshake complete.</span>
                </div>
                <div className="text-outline">Ready for user input...</div>
              </div>

              {/* Prompt Sequence */}
              <div className="flex flex-col gap-6 mt-4">
                {/* Name Prompt */}
                <div className="flex flex-col gap-2">
                  <label className="text-primary font-bold uppercase">ENTER_NAME:</label>
                  <div className="flex items-center gap-2 bg-surface-container-lowest p-3 border-b border-outline-variant/30 group">
                    <span className="text-primary">&gt;</span>
                    <input
                      className="bg-transparent border-none focus:ring-0 p-0 w-full text-on-surface placeholder:text-outline-variant font-mono"
                      placeholder="Type name..."
                      type="text"
                    />
                  </div>
                </div>
                {/* Email Prompt */}
                <div className="flex flex-col gap-2">
                  <label className="text-primary font-bold uppercase">ENTER_EMAIL:</label>
                  <div className="flex items-center gap-2 bg-surface-container-lowest p-3 border-b border-outline-variant/30">
                    <span className="text-primary">&gt;</span>
                    <input
                      className="bg-transparent border-none focus:ring-0 p-0 w-full text-on-surface placeholder:text-outline-variant font-mono"
                      placeholder="user@theprimotionstudio.com"
                      type="email"
                    />
                  </div>
                </div>
                {/* Message Prompt */}
                <div className="flex flex-col gap-2">
                  <label className="text-primary font-bold uppercase">TYPE_MESSAGE:</label>
                  <div className="flex flex-start gap-2 bg-surface-container-lowest p-3 border-b border-outline-variant/30 min-h-[120px]">
                    <span className="text-primary mt-1">&gt;</span>
                    <textarea
                      className="bg-transparent border-none focus:ring-0 p-0 w-full text-on-surface placeholder:text-outline-variant font-mono resize-none"
                      placeholder="Enter transmission data..."
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-primary-container text-on-primary-container font-mono px-6 py-2 rounded-lg font-bold tracking-tight hover:shadow-[0_0_20px_rgba(171,199,255,0.2)] transition-all scale-98-active uppercase flex items-center gap-2">
                    <span>Execute_Send</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                  <div className="flex items-center gap-2 text-outline font-mono text-[10px]">
                    <span className="cursor-blink">_</span>
                    <span>AWAITING_COMMAND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar Info / System Shortcuts */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          {/* Identity Verification */}
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <h3 className="font-mono text-xs font-bold text-outline uppercase mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              Security_Protocol
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between font-mono text-[10px] uppercase">
                <span className="text-outline">Name:</span>
                <span className="text-secondary">MARTINS OKANLAWON</span>
              </div>
              <div className="flex justify-between font-mono text-[10px] uppercase">
                <span className="text-outline">Status:</span>
                <span className="text-secondary">Verified</span>
              </div>
              <div className="flex justify-between font-mono text-[10px] uppercase">
                <span className="text-outline">Encryption:</span>
                <span className="text-on-surface uppercase">AES-256</span>
              </div>
              <div className="flex justify-between font-mono text-[10px] uppercase">
                <span className="text-outline">Access_Level:</span>
                <span className="text-tertiary">Public_Key</span>
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant/10">
                <img
                  alt="Identity context"
                  className="w-full h-60 object-cover rounded opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                  src="/prime.jpg"
                />
              </div>
            </div>
          </div>
          {/* System Shortcuts Card */}
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <h3 className="font-mono text-xs font-bold text-outline uppercase mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">terminal</span>
              System_Shortcuts
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="https://github.com/primotionstudio"
                target="_blank"
                className="group flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-primary/5 transition-colors border border-outline-variant/5 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-base">code</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-sm tracking-tight text-on-surface">
                      GITHUB
                    </p>
                    <p className="font-mono text-[10px] text-outline">/repos/archive</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                  arrow_outward
                </span>
              </Link>
              <Link
                href="https://linkedin.com/in/theprimotionstudio"
                target="_blank"
                className="group flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-primary/5 transition-colors border border-outline-variant/5 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-base">link</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-sm tracking-tight text-on-surface">
                      LINKEDIN
                    </p>
                    <p className="font-mono text-[10px] text-outline">/in/system-architect</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                  arrow_outward
                </span>
              </Link>
              <Link
                href="mailto:oyedelenewton@gmail.com"
                className="group flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-primary/5 transition-colors border border-outline-variant/5 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-base">mail</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-sm tracking-tight text-on-surface">
                      EMAIL
                    </p>
                    <p className="font-mono text-[10px] text-outline">/new_message</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                  arrow_outward
                </span>
              </Link>

              <Link
                href="https://www.instagram.com/theprimotionstudio"
                target="_blank"
                className="group flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-primary/5 transition-colors border border-outline-variant/5 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-base">
                      <Instagram />
                    </span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-sm tracking-tight text-on-surface">
                      SOCIALS
                    </p>
                    <p className="font-mono text-[10px] text-outline">/chat</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                  arrow_outward
                </span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </MonolithLayout>
  );
}
