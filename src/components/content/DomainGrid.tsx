import { Card } from "@/components/content/Card";
import { domains } from "@/lib/awgs";

export function DomainGrid() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {domains.map((domain) => (
        <Card key={domain.id}>
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-xl font-semibold tracking-normal text-ink">{domain.name}</h2>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
              {domain.id}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{domain.focus}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {domain.examples.map((example) => (
              <li key={example} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-standard-teal" aria-hidden="true" />
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
