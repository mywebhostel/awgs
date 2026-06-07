"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/content/Badge";
import { searchIndex } from "@/lib/awgs";

type SearchInputProps = {
  compact?: boolean;
  limit?: number;
};

export function SearchInput({ compact = false, limit }: SearchInputProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return compact ? searchIndex.slice(0, limit ?? 4) : searchIndex;
    }

    return searchIndex
      .map((item) => {
        const text = `${item.title} ${item.category} ${item.description} ${item.keywords.join(" ")}`.toLowerCase();
        const score =
          (item.title.toLowerCase().includes(normalized) ? 4 : 0) +
          (item.category.toLowerCase().includes(normalized) ? 2 : 0) +
          (text.includes(normalized) ? 1 : 0);
        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }, [compact, limit, query]);

  return (
    <div className="space-y-4">
      <label className="relative block">
        <span className="sr-only">Search AWGS documentation</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-12 w-full rounded-lg border border-slate-300 bg-white pl-12 pr-4 text-base text-ink shadow-sm placeholder:text-slate-400 focus:border-standard-blue"
          placeholder="Search vision, standards, domains, levels, glossary..."
          type="search"
        />
      </label>

      <div className="grid gap-3">
        {results.length > 0 ? (
          results.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:shadow-soft"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base font-semibold tracking-normal text-ink">{item.title}</h2>
                <Badge tone="neutral">{item.category}</Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </Link>
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-600">
            No matching AWGS pages found.
          </div>
        )}
      </div>
    </div>
  );
}
