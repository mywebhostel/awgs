import Link from "next/link";
import { ArrowRight, Eye, Network } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";
import { agenticAccessibilityDefinition, agenticAccessibilityPrinciples } from "@/lib/awgs";

export default function VisionPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Vision"
        title="Agentic Accessibility Initiative"
        description="A public-interest initiative for open, vendor-neutral principles and standards that support trustworthy agent-mediated access to digital services."
      />

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <Eye className="h-6 w-6 text-standard-teal" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">Definition</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{agenticAccessibilityDefinition}</p>
        </Card>
        <Card>
          <Network className="h-6 w-6 text-standard-blue" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">First standard</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            AWGS is the first concrete standard under this broader vision. It defines governance, interoperability,
            transparency, accountability, trust, privacy, safety, and human oversight expectations for agentic digital services.
          </p>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {agenticAccessibilityPrinciples.map((principle) => (
          <Card key={principle.name}>
            <Badge tone="neutral">Initiative Principle</Badge>
            <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">{principle.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{principle.description}</p>
          </Card>
        ))}
      </section>

      <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-normal text-ink">Read the full vision</h2>
          <p className="mt-1 text-sm text-slate-600">How agentic access extends the web accessibility and open standards tradition.</p>
        </div>
        <Link
          href="/vision/agentic-accessibility"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Agentic Accessibility
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
