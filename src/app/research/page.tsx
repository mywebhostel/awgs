import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";
import { futureStandardAreas } from "@/lib/awgs";

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Research"
        title="Research and future work"
        description="Open questions and exploratory areas for the Agentic Accessibility Initiative. Research notes do not create AWGS conformance requirements."
      />

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <Badge tone="blue">Research Questions</Badge>
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">What needs further study?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Future work should examine trustworthy delegation, agent identity, service discoverability, safety boundaries,
            accountability models, privacy-preserving interaction, and versioned conformance evidence.
          </p>
        </Card>
        <Card>
          <Badge tone="amber">Public Review</Badge>
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">How research becomes standards work</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Exploratory ideas should move through drafting, public review, revision, and versioned publication before they
            are treated as standards or requirements.
          </p>
        </Card>
      </section>

      <section className="space-y-5">
        <div>
          <Badge tone="violet">Exploratory / Future Work</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink">Candidate areas</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {futureStandardAreas.map((item) => (
            <Card key={item.title}>
              <h3 className="text-xl font-semibold tracking-normal text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
        <Link href="/standards/future-work" className="inline-flex items-center gap-2 text-sm font-semibold text-standard-blue">
          View future standard areas
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
