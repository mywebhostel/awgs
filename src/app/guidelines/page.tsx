import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { DomainGrid } from "@/components/content/DomainGrid";
import { PrinciplesGrid } from "@/components/content/PrinciplesGrid";
import { SectionHeader } from "@/components/content/SectionHeader";

export const metadata: Metadata = {
  title: "Guidelines"
};

export default function GuidelinesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Guidelines"
        title="Implementation Guidance"
        description="Guidance connects the Agentic Accessibility vision to AWGS 1.0 principles, governance domains, maturity targets, and assessment considerations."
      />

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <ShieldCheck className="h-6 w-6 text-standard-teal" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">Start with principles</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Use the core principles to frame agent-facing capabilities, policies, and safeguards before selecting implementation controls.
          </p>
        </Card>
        <Card>
          <ShieldCheck className="h-6 w-6 text-standard-blue" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">Map controls to domains</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Organize evidence across discoverability, interoperability, identity, authorization, transparency, accountability, trust, privacy, and safety.
          </p>
        </Card>
        <Card>
          <ShieldCheck className="h-6 w-6 text-standard-amber" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">Select a compliance level</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Use Level A, AA, or AAA as maturity targets while avoiding certification claims until formal testable criteria exist.
          </p>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Badge tone="teal">Principles</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink">Design commitments</h2>
          </div>
          <Link href="/standards/awgs/principles" className="inline-flex items-center gap-2 text-sm font-semibold text-standard-blue">
            View principles
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <PrinciplesGrid />
      </section>

      <section className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Badge tone="blue">Domains</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink">Control areas</h2>
          </div>
          <Link href="/standards/awgs/domains" className="inline-flex items-center gap-2 text-sm font-semibold text-standard-blue">
            View domains
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <DomainGrid />
      </section>
    </div>
  );
}
