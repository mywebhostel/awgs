"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavItem, standardNavItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type SidebarNavProps = {
  title?: string;
  items?: NavItem[];
};

export function SidebarNav({ title = "Standard", items = standardNavItems }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:w-64 lg:flex-none">
      <nav aria-label="Standard sections" className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
        <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{title}</p>
        <div className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
          {items.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-ink lg:block lg:whitespace-normal",
                  active && "bg-slate-100 text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
