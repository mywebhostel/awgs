"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Menu, MessageSquare, Search, X } from "lucide-react";
import { useState } from "react";
import { topNavItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Agentic Accessibility home">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-ink text-white">
            <BookOpen className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="truncate text-sm font-semibold tracking-normal text-ink sm:text-base">Agentic Accessibility</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {topNavItems.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`) ||
              item.children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`));
            return item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-ink",
                    active && "bg-slate-100 text-ink"
                  )}
                  aria-haspopup="true"
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-64 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-soft">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-ink",
                  active && "bg-slate-100 text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/search"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 hover:text-ink"
            aria-label="Search"
            title="Search"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/assistant"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 hover:text-ink"
            aria-label="RAG assistant"
            title="RAG assistant"
          >
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav aria-label="Mobile primary" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {topNavItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="ml-3 border-l border-slate-200 pl-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-200 pt-3">
              <Link href="/search" className="rounded-md border border-slate-200 px-3 py-2 text-sm font-medium">
                Search
              </Link>
              <Link href="/assistant" className="rounded-md border border-slate-200 px-3 py-2 text-sm font-medium">
                Assistant
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
