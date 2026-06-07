import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";
import { agenticAccessibilityDefinition } from "@/lib/awgs";

const webShifts = [
  {
    title: "Human Web",
    description: "People directly navigate pages, forms, and services through browsers and assistive technologies."
  },
  {
    title: "Search Web",
    description: "Search engines organize public information and help people find services, answers, and resources."
  },
  {
    title: "Accessible Web",
    description: "Accessibility standards and universal design practices improve participation for people using diverse abilities, tools, and contexts."
  },
  {
    title: "Agentic Web",
    description: "Trusted autonomous agents may increasingly discover, interpret, negotiate with, and act across digital services on behalf of people and organizations."
  }
];

export default function AgenticAccessibilityPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Agentic Accessibility"
        title="Trusted access through autonomous agents"
        description="Agentic Accessibility frames a public-interest approach to digital systems that can be used through trusted autonomous agents acting on behalf of people and organizations."
      />

      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <Badge tone="teal">Definition</Badge>
        <p className="mt-4 text-lg leading-8 text-slate-700">{agenticAccessibilityDefinition}</p>
      </section>

      <section className="space-y-5">
        <div>
          <Badge tone="blue">Web Evolution</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink">From direct use to delegated interaction</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {webShifts.map((item) => (
            <Card key={item.title}>
              <h3 className="text-xl font-semibold tracking-normal text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <Badge tone="neutral">Why It Matters</Badge>
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">People may interact through agents</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Digital services are increasingly complex. People and organizations may delegate tasks such as discovery,
            comparison, scheduling, purchasing, reporting, and service interaction to AI agents that need reliable ways to
            understand capabilities, authority, risk, and consequences.
          </p>
        </Card>
        <Card>
          <Badge tone="neutral">Trusted Representatives</Badge>
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">Agent access needs governance</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Trusted digital representatives need discoverability, identity, authorization, transparency, accountability,
            trust, privacy, safety, and human oversight so services can distinguish legitimate delegated access from
            unsafe or unauthorized automation.
          </p>
        </Card>
      </section>

      <section className="rounded-lg border border-slate-200 bg-slate-50 p-6">
        <Badge tone="amber">Standards Analogy</Badge>
        <h2 className="mt-4 text-2xl font-semibold tracking-normal text-ink">A standards-oriented accessibility frame</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Agentic Accessibility is analogous to Universal Design and WCAG in the sense that it asks how digital systems can
          be made more broadly usable through shared design principles and public standards. This analogy should not be read
          as a legal claim or as a statement that existing accessibility law already covers agent-mediated interaction.
        </p>
      </section>

      <section className="rounded-lg border border-teal-200 bg-teal-50/70 p-6">
        <Badge tone="teal">AWGS Relationship</Badge>
        <h2 className="mt-4 text-2xl font-semibold tracking-normal text-ink">AWGS is the first concrete standard</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          AWGS supports this broader vision by defining governance, interoperability, transparency, accountability, trust,
          privacy, safety, and human oversight requirements for agentic digital services.
        </p>
        <Link href="/standards/awgs" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-standard-blue">
          Explore AWGS 1.0
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
