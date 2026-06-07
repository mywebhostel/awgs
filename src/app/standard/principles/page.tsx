import { PrinciplesGrid } from "@/components/content/PrinciplesGrid";
import { SectionHeader } from "@/components/content/SectionHeader";

export default function PrinciplesPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Core Principles"
        title="Principles"
        description="The AWGS principles guide design, implementation, assessment, and governance decisions for agentic web interactions."
      />
      <PrinciplesGrid />
    </div>
  );
}
