import type { Metadata } from "next";
import { DomainGrid } from "@/components/content/DomainGrid";
import { SectionHeader } from "@/components/content/SectionHeader";

export const metadata: Metadata = {
  title: "AWGS 1.0 Governance Domains"
};

export default function GovernanceDomainsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Governance Domains"
        title="Domains"
        description="AWGS requirements are organized into nine domains that help teams plan implementation controls and assessment evidence."
      />
      <DomainGrid />
    </div>
  );
}
