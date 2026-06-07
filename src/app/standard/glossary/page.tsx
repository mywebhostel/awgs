import { SectionHeader } from "@/components/content/SectionHeader";
import { glossary } from "@/lib/awgs";

export default function GlossaryPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Reference"
        title="Glossary"
        description="Shared definitions for key AWGS terms used across the foundation specification."
      />

      <dl className="grid gap-4">
        {glossary.map((entry) => (
          <div key={entry.term} className="rounded-lg border border-slate-200 bg-white p-5">
            <dt className="text-lg font-semibold tracking-normal text-ink">{entry.term}</dt>
            <dd className="mt-2 text-sm leading-6 text-slate-600">{entry.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
