import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";
import { futureStandardAreas } from "@/lib/awgs";

export const metadata: Metadata = {
  title: "Standards"
};

export default function StandardsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Standards"
        title="Standards under the Agentic Accessibility Initiative"
        description="AWGS 1.0 is the first concrete standard. Future areas are exploratory until they are drafted, reviewed, and published."
      />

      <Card className="border-teal-200 bg-teal-50/60">
        <Badge tone="teal">Published Public Draft</Badge>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal text-ink">AWGS 1.0</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
              The Agentic Web Governance Standard is the first standard developed under the broader Agentic Accessibility
              vision. It defines vendor-neutral governance, interoperability, transparency, accountability, trust, privacy,
              safety, and oversight expectations for agentic digital services.
            </p>
          </div>
          <Link
            href="/standards/awgs"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Open AWGS 1.0
          </Link>
        </div>
      </Card>

      <section className="space-y-5">
        <div>
          <Badge tone="violet">Exploratory / Future Work</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink">Future standard areas</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            These topics are research directions and planning areas. They are not finalized requirements or certification criteria.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {futureStandardAreas.map((item) => (
            <Card key={item.title}>
              <Badge tone="neutral">{item.status}</Badge>
              <h3 className="mt-4 text-xl font-semibold tracking-normal text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
        <Link href="/standards/future-work" className="inline-flex items-center gap-2 text-sm font-semibold text-standard-blue">
          Read future work notes
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
