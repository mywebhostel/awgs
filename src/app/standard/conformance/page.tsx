import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";

const conformanceCriteria = [
  "Mandatory requirements are satisfied.",
  "Required governance controls are operational.",
  "Required documentation exists.",
  "Compliance is maintained during the claim period."
];

const claimExamples = ["AWGS Level A", "AWGS Level AA", "AWGS Level AAA"];

export default function ConformancePage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Conformance"
        title="Claiming AWGS Conformance"
        description="Organizations should clearly state the level of compliance being claimed. Partial implementation shall not be represented as full compliance."
      />

      <Card>
        <Badge tone="blue">Claim Requirements</Badge>
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
        <Badge tone="teal">Claim Examples</Badge>
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
