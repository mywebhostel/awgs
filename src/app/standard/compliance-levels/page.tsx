import type { Metadata } from "next";
import { ComplianceComparison } from "@/components/content/ComplianceComparison";
import { SectionHeader } from "@/components/content/SectionHeader";

export const metadata: Metadata = {
  title: "AWGS 1.0 Compliance Levels"
};

export default function ComplianceLevelsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Compliance"
        title="Compliance Levels"
        description="AWGS 1.0 defines three progressive maturity targets: Agent Ready, Agent Interoperable, and Agent Governed."
      />
      <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm leading-6 text-slate-700">
          AWGS 1.0 provides foundation guidance, principles, domains, and provisional compliance levels. Formal testable
          conformance criteria are expected in a future AWGS 1.1 Requirements and Success Criteria document.
        </p>
      </section>
      <ComplianceComparison />
    </div>
  );
}
