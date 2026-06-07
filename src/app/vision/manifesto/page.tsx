import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";
import { agenticAccessibilityDefinition } from "@/lib/awgs";

export const metadata: Metadata = {
  title: "Agentic Accessibility Manifesto"
};

const values = [
  "Human agency over automation for its own sake",
  "Authorized delegation over forced direct interaction",
  "Machine-readable clarity over fragile interpretation",
  "Interoperability over platform lock-in",
  "Verifiable trust over implicit assumptions",
  "Explainable outcomes over opaque automation",
  "Privacy-preserving access over unrestricted data exposure",
  "Accountability over invisible action",
  "Human oversight over unchecked autonomy"
];

export default function ManifestoPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Informative Vision Document"
        title="Agentic Accessibility Manifesto"
        description="A non-normative statement of values for trusted agent-mediated access to digital services."
      />

      <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <Badge tone="amber">Status</Badge>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          This is not a technical standard, certification scheme, or legal requirement.
        </p>
      </section>

      <Card>
        <Badge tone="teal">Definition</Badge>
        <p className="mt-4 text-lg leading-8 text-slate-700">{agenticAccessibilityDefinition}</p>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          The Agentic Web should strengthen human agency, not weaken it.
        </p>
      </Card>

      <section>
        <Badge tone="blue">We Value</Badge>
        <div className="mt-5 grid gap-3">
          {values.map((value) => (
            <div key={value} className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700">
              {value}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-teal-200 bg-teal-50/70 p-6">
        <Badge tone="teal">Relationship to AWGS</Badge>
        <p className="mt-4 text-sm leading-6 text-slate-700">
          AWGS is one practical standard developed to support this vision.
        </p>
        <Link href="/standards/awgs" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-standard-blue">
          Explore AWGS 1.0
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
