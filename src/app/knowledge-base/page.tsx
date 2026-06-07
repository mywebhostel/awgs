import { BookOpen, FileClock } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { KnowledgeBaseList } from "@/components/content/KnowledgeBaseList";
import { SectionHeader } from "@/components/content/SectionHeader";
import { knowledgeBaseCategories } from "@/lib/awgs";

export default function KnowledgeBasePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Knowledge Base"
        title="Knowledge Base"
        description="A structured home for future explanatory material, implementation notes, assessment playbooks, and practical guidance across Agentic Accessibility and AWGS."
      />

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <BookOpen className="h-6 w-6 text-standard-blue" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">Article structure</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Future articles can live under `/knowledge-base/[slug]` and link back to relevant Agentic Accessibility principles, AWGS domains, compliance levels, and assessment guidance.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <FileClock className="h-6 w-6 text-standard-teal" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">Editorial status</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Placeholder article outlines are marked planned until reviewed, expanded, and tied to stable conformance criteria.
          </p>
        </div>
      </section>

      <section>
        <Badge tone="blue">Categories</Badge>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {knowledgeBaseCategories.map((category) => (
            <div key={category} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
              {category}
            </div>
          ))}
        </div>
      </section>

      <div>
        <Badge tone="amber">Planned Articles</Badge>
        <div className="mt-5">
          <KnowledgeBaseList />
        </div>
      </div>
    </div>
  );
}
