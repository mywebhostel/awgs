import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { SectionHeader } from "@/components/content/SectionHeader";
import { roadmapItems } from "@/lib/awgs";

export const metadata: Metadata = {
  title: "AWGS Future Roadmap"
};

export default function FutureRoadmapPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Future Directions"
        title="Future Roadmap"
        description="Future AWGS directions are exploratory until drafted, reviewed, and published as versioned standard material."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {roadmapItems.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-5">
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-slate-100 text-standard-blue">
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <Badge tone="neutral">Planned</Badge>
              <h2 className="mt-2 text-lg font-semibold tracking-normal text-ink">{item}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
