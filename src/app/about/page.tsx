import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="About AWGS"
        description="The Agentic Web Governance Standard is a vendor-neutral framework for preparing digital systems for trustworthy interactions with autonomous agents."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <Badge tone="teal">Status</Badge>
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">Public Draft Standard</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            AWGS 1.0 is presented as a foundation specification and guidelines document for public review.
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
