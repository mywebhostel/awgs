import type { Metadata } from "next";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";
import { agenticAccessibilityPrinciples } from "@/lib/awgs";

export const metadata: Metadata = {
  title: "Agentic Accessibility Principles"
};

export default function VisionPrinciplesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Vision"
        title="Agentic Accessibility Principles"
        description="High-level principles for digital services that may be accessed through trusted autonomous agents."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {agenticAccessibilityPrinciples.map((principle) => (
          <Card key={principle.name}>
            <Badge tone="teal">Principle</Badge>
            <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">{principle.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{principle.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
