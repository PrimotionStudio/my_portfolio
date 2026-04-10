"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const TopAppBar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-2 w-full fixed top-0 z-50 bg-[#131313] opacity-40 backdrop-blur-md border-b border-[#abc7ff]/15">
      <div className="flex items-center gap-4">
        <span className="font-mono font-bold text-[#abc7ff] tracking-widest text-xs md:text-sm">
          THE_PRIMOTION_STUDIO_v2.1.0
        </span>
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className="font-headline tracking-tighter uppercase text-xs text-[#abc7ff]/60 hover:text-[#ecffe3] transition-colors duration-200"
          >
            System
          </Link>
          <Link
            href="/projects"
            className="font-headline tracking-tighter uppercase text-xs text-[#abc7ff]/60 hover:text-[#ecffe3] transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="font-headline tracking-tighter uppercase text-xs text-[#abc7ff]/60 hover:text-[#ecffe3] transition-colors duration-200"
          >
            Logs
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-[#abc7ff] text-sm cursor-terminal">
          minimize
        </span>
        <span className="material-symbols-outlined text-[#abc7ff] text-sm cursor-terminal">
          fullscreen
        </span>
        <span className="material-symbols-outlined text-[#abc7ff] text-sm cursor-terminal">
          close
        </span>
      </div>
    </header>
  );
};

export const SideNavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "root", path: "/", icon: "folder" },
    { label: "src/projects", path: "/projects", icon: "folder_open" },
    { label: "src/experience", path: "/experience", icon: "terminal" },
    { label: "src/contact", path: "/contact", icon: "contact_mail" },
    { label: "src/blog", path: "/blog", icon: "description" },
  ];

  return (
    <aside className="fixed left-0 top-12 h-screen flex flex-col pt-8 bg-[#131313] w-64 border-r border-[#abc7ff]/15 z-40 hidden md:flex">
      <div className="px-6 mb-8">
        <h2 className="text-[#abc7ff] font-bold font-mono text-sm uppercase tracking-tight">
          EXPLORER
        </h2>
        <p className="text-[#abc7ff]/40 font-mono text-[10px]">LOCAL_HOST:8080</p>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 py-2 transition-all duration-150 ease-in-out pl-4 ${
                isActive
                  ? "bg-[#abc7ff]/10 text-[#ecffe3] font-bold border-l-4 border-[#ecffe3] pl-3"
                  : "text-[#abc7ff]/50 hover:bg-[#abc7ff]/5 hover:text-[#abc7ff]"
              } font-mono text-sm uppercase tracking-tight`}
            >
              <span className="material-symbols-outlined text-sm">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto p-6 mb-16">
        <div className="bg-surface-container-low p-3 border border-outline-variant/15">
          <p className="font-mono text-[10px] text-outline mb-1 uppercase">System_Health</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(236,255,227,0.5)] animate-pulse"></span>
            <span className="font-mono text-[11px] text-secondary">OPERATIONAL</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export const MobileBottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "projects", path: "/projects", icon: "folder" },
    { label: "experience", path: "/experience", icon: "description" },
    { label: "home", path: "/", icon: "person", isPrimary: true },
    { label: "contact", path: "/contact", icon: "message" },
    { label: "blog", path: "/blog", icon: "contact_mail" },
  ];

  return (
    <nav className="md:hidden fixed bottom-4 border border-outline-variant/10 w-[90%] left-1/2 -translate-x-1/2 bg-surface-container-high/80 backdrop-blur-xl rounded-full px-6 py-2 flex justify-between items-center z-[100] shadow-2xl">
      {navItems.map((item) => (
        <Link key={item.path} href={item.path}>
          {item.isPrimary ? (
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-[0_0_15px_rgba(171,199,255,0.4)]">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
            </div>
          ) : (
            <span
              className={`material-symbols-outlined ${pathname === item.path ? "text-primary" : "text-[#abc7ff]/50"}`}
            >
              {item.icon}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full flex justify-between items-center px-4 py-1 z-50 bg-[#131313] text-[#ecffe3] font-mono text-[10px] uppercase opacity-80 border-t border-[#abc7ff]/15">
      <div className="flex gap-4">
        <span className="hidden sm:inline">© {new Date().getFullYear()} SYSTEM_ARCHITECT</span>
        <span className="opacity-60 hidden md:inline">UPTIME: 99.9%</span>
        <span className="opacity-60 hidden md:inline">LATENCY: 24ms</span>
      </div>
      <div className="flex gap-4">
        <span className="hover:text-[#ffba3f] transition-colors cursor-default">STABLE_BUILD</span>
      </div>
    </footer>
  );
};

export const MonolithLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <TopAppBar />
      <SideNavBar />
      <main className="md:ml-64 pt-16 pb-24 md:pb-12 px-6 md:px-12 min-h-screen">{children}</main>
      <MobileBottomNav />
      <Footer />
    </div>
  );
};
