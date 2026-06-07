import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";

export const metadata: Metadata = {
  title: "AWGS 1.0 Conformance Status"
};

const conformanceCriteria = [
  "Relevant foundation guidance has been mapped.",
  "Governance controls have been identified for the selected maturity target.",
  "Supporting documentation is available for review.",
  "Maintenance responsibilities are documented for the target period."
];

const claimExamples = ["AWGS Level A", "AWGS Level AA", "AWGS Level AAA"];

export default function ConformancePage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Conformance"
        title="AWGS 1.0 Conformance Status"
        description="AWGS 1.0 provides foundation guidance, principles, domains, and provisional compliance levels. Formal testable conformance criteria are expected in a future AWGS 1.1 Requirements and Success Criteria document."
      />

      <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <Badge tone="amber">Present-stage status</Badge>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Until AWGS 1.1 exists, Level A, Level AA, and Level AAA should be treated as maturity targets, not independently
          certified claims. AWGS 1.0 does not create a formal certification scheme.
        </p>
      </section>

      <Card>
        <Badge tone="blue">Foundation Expectations</Badge>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {conformanceCriteria.map((criterion) => (
            <li key={criterion} className="flex gap-3 text-sm leading-6 text-slate-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-standard-teal" aria-hidden="true" />
              <span>{criterion}</span>
            </li>
          ))}
        </ul>
      </Card>

      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <Badge tone="teal">Maturity Target Labels</Badge>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          These labels describe provisional maturity targets in AWGS 1.0. They should not be represented as third-party
          certification badges or independently verified claims.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {claimExamples.map((claim) => (
            <div key={claim} className="rounded-lg bg-slate-50 px-4 py-4 text-center text-sm font-semibold text-ink">
              {claim}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
