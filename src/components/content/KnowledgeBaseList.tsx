import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { knowledgeBaseArticles } from "@/lib/awgs";

export function KnowledgeBaseList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {knowledgeBaseArticles.map((article) => (
        <Card key={article.title} className="flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-xl font-semibold tracking-normal text-ink">{article.title}</h2>
            <Badge tone="amber">{article.status}</Badge>
          </div>
          <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{article.description}</p>
          <Link
            href={article.href}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-standard-blue hover:text-blue-700"
          >
            Article outline
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Card>
      ))}
    </div>
  );
}
