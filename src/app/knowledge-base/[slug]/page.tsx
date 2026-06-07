import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { knowledgeBaseArticles } from "@/lib/awgs";

type KnowledgeBaseArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function slugFromHref(href: string) {
  return href.split("/").filter(Boolean).at(-1) ?? "";
}

export function generateStaticParams() {
  return knowledgeBaseArticles.map((article) => ({ slug: slugFromHref(article.href) }));
}

export default async function KnowledgeBaseArticlePage({ params }: KnowledgeBaseArticlePageProps) {
  const { slug } = await params;
  const article = knowledgeBaseArticles.find((item) => slugFromHref(item.href) === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/knowledge-base" className="inline-flex items-center gap-2 text-sm font-semibold text-standard-blue">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Knowledge Base
      </Link>
      <article className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <Badge tone="amber">{article.status}</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal text-ink">{article.title}</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">{article.description}</p>
        <div className="mt-8 rounded-lg bg-slate-50 p-5">
          <h2 className="text-lg font-semibold tracking-normal text-ink">Draft outline</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
            <li>Purpose and audience</li>
            <li>Relevant AWGS principles and domains</li>
            <li>Recommended implementation evidence</li>
            <li>Assessment considerations</li>
            <li>Open questions for public review</li>
          </ul>
        </div>
      </article>
    </div>
  );
}
