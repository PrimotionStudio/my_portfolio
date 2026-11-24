"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Briefcase,
  FolderOpen,
  House,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { cn } from "cn";
import { NAV_ITEMS } from "@/lib/site";

const ICONS: Record<(typeof NAV_ITEMS)[number]["href"], LucideIcon> = {
  "/": House,
  "/projects": FolderOpen,
  "/experience": Briefcase,
  "/blog": BookOpen,
  "/contact": Mail,
};

/** True when the link is the current page (or a page under it). */
function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/** Handwritten links across the top of the sheet (tablets and up). */
export function TopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden sm:block">
      <ul className="flex flex-wrap gap-x-1 gap-y-1">
        {NAV_ITEMS.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = ICONS[item.href];
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-1 font-hand text-2xl leading-8 text-ink-soft transition-colors hover:bg-pen-soft hover:text-pen",
                  active && "marker text-ink",
                )}
              >
                <Icon className="size-4" aria-hidden />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Thumb-reach tab bar for phones. */
export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur sm:hidden"
    >
      <ul className="grid grid-cols-5">
        {NAV_ITEMS.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = ICONS[item.href];
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-medium text-ink-soft",
                  active && "text-pen",
                )}
              >
                <Icon
                  className={cn("size-6", active && "stroke-[2.5]")}
                  aria-hidden
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
