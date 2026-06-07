import { GitPullRequest, MessagesSquare, ScrollText } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { SectionHeader } from "@/components/content/SectionHeader";

const contributionPaths = [
  {
    title: "Review the draft",
    description: "Identify unclear requirements, missing definitions, and places where AWGS conformance language should be more precise.",
    icon: ScrollText
  },
  {
    title: "Propose guidance",
    description: "Suggest implementation notes, examples, assessment evidence, and knowledge base articles that support Agentic Accessibility and AWGS.",
    icon: GitPullRequest
  },
  {
    title: "Join discussion",
    description: "Contribute to open consultation around governance domains, compliance levels, assessment methods, and future roadmap items.",
    icon: MessagesSquare
  }
];

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
          The standard governance process may include working groups, contributors, public review periods, and open consultation. Major revisions should undergo public review before publication.
        </p>
      </section>
    </div>
  );
}
