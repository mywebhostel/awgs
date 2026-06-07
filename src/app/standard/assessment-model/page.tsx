import type { Metadata } from "next";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";
import { assessmentMethods } from "@/lib/awgs";

export const metadata: Metadata = {
  title: "AWGS 1.0 Assessment Model"
};

export default function AssessmentModelPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Assessment"
        title="Assessment Model"
        description="AWGS 1.0 assessment planning may combine automated checks, semi-automated reviews, and manual review of operational governance practices."
      />

      <div className="grid gap-4">
        {assessmentMethods.map((method) => (
          <Card key={method.name}>
            <Badge tone="neutral">{method.name}</Badge>
            <p className="mt-4 text-sm leading-6 text-slate-600">{method.description}</p>
            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {method.examples.map((example) => (
                <li key={example} className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
                  {example}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
