import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { complianceLevels } from "@/lib/awgs";

const tones = {
  A: "blue",
  AA: "teal",
  AAA: "violet"
} as const;

export function ComplianceComparison() {
  return (
    <section aria-labelledby="compliance-comparison" className="space-y-6">
      <div className="max-w-3xl">
        <Badge tone="blue">Compliance Model</Badge>
        <h2 id="compliance-comparison" className="mt-4 text-3xl font-semibold tracking-normal text-ink">
          Level A, AA, and AAA at a glance
        </h2>
        <p className="mt-3 text-slate-600">
          AWGS uses progressive compliance levels so organizations can state readiness, interoperability, and governance maturity clearly.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {complianceLevels.map((item) => (
          <Card key={item.level} className="flex min-h-[280px] flex-col">
            <div className="flex items-center justify-between gap-3">
              <Badge tone={tones[item.level]}>Level {item.level}</Badge>
              <span className="text-sm font-medium text-slate-500">{item.objective}</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-normal text-ink">{item.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            <ul className="mt-5 space-y-3">
              {item.emphasis.map((entry) => (
                <li key={entry} className="flex gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-standard-teal" aria-hidden="true" />
                  <span>{entry}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
