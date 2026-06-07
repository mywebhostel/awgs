import { GitPullRequest, MessagesSquare, ScrollText } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";

const contributionPaths = [
  {
    title: "Vision work",
    description: "Help clarify Agentic Accessibility principles, public-interest framing, and explanatory material.",
    icon: ScrollText
  },
  {
    title: "Standard review",
    description: "Review AWGS domains, compliance maturity targets, conformance language, glossary terms, and future AWGS 1.1 requirements.",
    icon: GitPullRequest
  },
  {
    title: "Knowledge and research",
    description: "Contribute knowledge base articles, research notes, future-work proposals, and public review process improvements.",
    icon: MessagesSquare
  }
];

const contributionAreas = [
  "Agentic Accessibility vision work",
  "AWGS standard review",
  "Glossary improvements",
  "Knowledge base articles",
  "Research notes",
  "Future AWGS 1.1 requirements",
  "Public review process"
];

const workflow = ["Draft", "Public Review", "Candidate Draft", "Stable Version", "Archived / Superseded"];

export default function ContributePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Contribute"
        title="Contribute to the Initiative"
        description="The Agentic Accessibility Initiative and AWGS are designed to be maintained through open governance, public review, consultation, and contributor participation."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {contributionPaths.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title}>
              <Icon className="h-6 w-6 text-standard-teal" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </Card>
          );
        })}
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <Badge tone="blue">Open Governance</Badge>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
          The governance process may include contributors, public review periods, and open consultation. This page does not imply
          that a formal standards body already exists.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <Badge tone="teal">Contribution Areas</Badge>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
            {contributionAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <Badge tone="neutral">Standards Workflow</Badge>
          <div className="mt-5 grid gap-3">
            {workflow.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold text-slate-700">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
