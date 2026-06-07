import Link from "next/link";
import { Badge } from "@/components/content/Badge";

export function InitiativeNotice() {
  return (
    <aside className="rounded-lg border border-teal-200 bg-teal-50/70 p-5">
      <Badge tone="teal">Agentic Accessibility Initiative</Badge>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        AWGS is the first standard developed under the broader Agentic Accessibility vision. It remains vendor-neutral,
        implementation-independent, and focused on trustworthy agentic digital services.
      </p>
      <Link href="/vision/agentic-accessibility" className="mt-3 inline-flex text-sm font-semibold text-standard-blue hover:text-blue-700">
        Read the vision
      </Link>
    </aside>
  );
}
