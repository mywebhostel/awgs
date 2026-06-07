import type { Metadata } from "next";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";

export const metadata: Metadata = {
  title: "AWGS 1.0 Overview"
};

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Foundation"
        title="Overview"
        description="AWGS 1.0 is the first public draft standard under the Agentic Accessibility vision. It enables safe, transparent, interoperable, accountable, and trustworthy interactions between autonomous agents and digital services."
      />

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <Badge tone="blue">Purpose</Badge>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>Promote safe and responsible agent interactions.</li>
            <li>Improve interoperability across agent ecosystems.</li>
            <li>Increase transparency and accountability.</li>
            <li>Support trust, provenance, and privacy-preserving practices.</li>
            <li>Provide a foundation for future measurable conformance criteria.</li>
          </ul>
        </Card>
        <Card>
          <Badge tone="teal">Vendor Neutrality</Badge>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Compliance with AWGS shall not require the use of any specific vendor, platform, product, framework, protocol, or technology. Organizations may implement AWGS using technologies appropriate to their operational environment.
          </p>
        </Card>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <Badge tone="neutral">Scope</Badge>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-normal text-ink">In scope</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Websites, APIs, SaaS platforms, web applications, agent platforms, agent-accessible services, digital services, machine-readable services, and agent-to-agent interaction services.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-normal text-ink">Out of scope for 1.0</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Robotics, autonomous vehicles, industrial control systems, consumer IoT devices, and embedded systems. Future versions may expand coverage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
