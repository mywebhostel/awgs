import { Card } from "@/components/content/Card";
import { principles } from "@/lib/awgs";

export function PrinciplesGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {principles.map((principle) => (
        <Card key={principle.id}>
          <p className="text-sm font-semibold text-standard-blue">{principle.id}</p>
          <h2 className="mt-2 text-xl font-semibold tracking-normal text-ink">{principle.name}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{principle.summary}</p>
        </Card>
      ))}
    </div>
  );
}
