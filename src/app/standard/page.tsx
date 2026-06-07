import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { ComplianceComparison } from "@/components/content/ComplianceComparison";
import { SectionHeader } from "@/components/content/SectionHeader";
import { governanceRequirements } from "@/lib/awgs";

export default function StandardPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="AWGS 1.0"
        title="Standard Overview"
        description="The Agentic Web Governance Standard defines a common governance framework for interactions involving autonomous AI agents and digital systems."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <Badge tone="blue">Purpose</Badge>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            AWGS promotes safe and responsible agent interactions, improves interoperability, increases transparency and accountability, supports trust and provenance, encourages privacy-preserving practices, and establishes measurable compliance criteria.
          </p>
        </Card>
        <Card>
          <Badge tone="teal">Vision</Badge>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            To establish a trusted, transparent, and governed Agentic Web where autonomous agents and digital systems can interact safely, responsibly, and effectively.
          </p>
        </Card>
      </div>

      <ComplianceComparison />

      <section className="space-y-4">
        <div>
          <Badge tone="neutral">Governance Processes</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink">Implementation areas</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {governanceRequirements.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-normal text-ink">Read the full foundation specification</h2>
          <p className="mt-1 text-sm text-slate-600">The complete Markdown source is rendered as MDX.</p>
        </div>
        <Link
          href="/standard/full"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Full Spec
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
