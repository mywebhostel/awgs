import { ComplianceComparison } from "@/components/content/ComplianceComparison";
import { SectionHeader } from "@/components/content/SectionHeader";

export default function ComplianceLevelsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Compliance"
        title="Compliance Levels"
        description="AWGS defines three progressive levels: Agent Ready, Agent Interoperable, and Agent Governed."
      />
      <ComplianceComparison />
    </div>
  );
}
