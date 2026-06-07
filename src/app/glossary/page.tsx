import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { SectionHeader } from "@/components/content/SectionHeader";
import { glossary } from "@/lib/awgs";

export const metadata: Metadata = {
  title: "Glossary"
};

export default function GlobalGlossaryPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Glossary"
        title="Initiative Glossary"
        description="Shared definitions used across Agentic Accessibility and AWGS materials."
      />

      <dl className="grid gap-4">
        {glossary.map((entry) => (
          <div key={entry.term} className="rounded-lg border border-slate-200 bg-white p-5">
            <dt className="text-lg font-semibold tracking-normal text-ink">{entry.term}</dt>
            <dd className="mt-2 text-sm leading-6 text-slate-600">{entry.definition}</dd>
          </div>
        ))}
      </dl>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
        <Badge tone="neutral">AWGS Reference</Badge>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          The AWGS 1.0 glossary remains part of the canonical Foundation Specification. This page provides a broader
          initiative-level entry point for the same definitions.
        </p>
        <Link href="/standards/awgs/glossary" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-standard-blue">
          Open AWGS glossary
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
