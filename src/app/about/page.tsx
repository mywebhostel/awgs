import type { Metadata } from "next";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="About the Initiative"
        description="The Agentic Accessibility Initiative is the broader public home for open, vendor-neutral principles and standards for trustworthy agent-mediated access to digital services."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <Badge tone="teal">Initiative</Badge>
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">Agentic Accessibility</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Agentic Accessibility is the principle that individuals and organizations should be able to interact with digital systems through trusted autonomous agents acting on their behalf.
          </p>
        </Card>
        <Card>
          <Badge tone="blue">License</Badge>
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">Open Standard</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            The foundation specification is framed as an open standard public review draft.
          </p>
        </Card>
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <Badge tone="neutral">First Standard</Badge>
        <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">AWGS 1.0</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          AWGS is the first concrete standard developed under the broader Agentic Accessibility vision. It remains vendor-neutral and implementation-independent.
        </p>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <Badge tone="neutral">Normative and Informative Content</Badge>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-normal text-ink">Normative content</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Normative content defines requirements necessary for compliance and typically uses terms such as SHALL, SHALL NOT, MUST, and MUST NOT.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-normal text-ink">Informative content</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Informative content provides guidance, examples, explanations, and recommendations. It is not mandatory for compliance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
