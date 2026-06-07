import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";
import { futureStandardAreas } from "@/lib/awgs";

export default function FutureWorkPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Exploratory / Future Work"
        title="Future standard areas"
        description="These areas are candidates for future research, drafting, and public review. They are not published standards or finalized requirements."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {futureStandardAreas.map((item) => (
          <Card key={item.title}>
            <Badge tone="violet">{item.status}</Badge>
            <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
