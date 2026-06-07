import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, GitPullRequest, Layers3, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { ComplianceComparison } from "@/components/content/ComplianceComparison";
import { DomainGrid } from "@/components/content/DomainGrid";
import { SearchInput } from "@/components/search/SearchInput";
import { ChatPanel } from "@/components/chat/ChatPanel";
import { principles } from "@/lib/awgs";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const heroImageSrc = `${basePath}/awgs-governance-map.png`;

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <Badge tone="teal">Public Draft Standard</Badge>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal text-ink sm:text-6xl">
              Agentic Web Governance Standard
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              AWGS establishes a vendor-neutral framework for safe, transparent, interoperable, accountable, and trustworthy interactions between AI agents and digital services.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/standard"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Read the Standard
              </Link>
              <Link
                href="/standard/compliance-levels"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-slate-50"
              >
                <Layers3 className="h-4 w-4" aria-hidden="true" />
                View Compliance Levels
              </Link>
              <Link
                href="/contribute"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-slate-50"
              >
                <GitPullRequest className="h-4 w-4" aria-hidden="true" />
                Contribute
              </Link>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-soft lg:min-h-[460px]">
            <Image
              src={heroImageSrc}
              alt="Abstract governance map showing standards, safeguards, identity, privacy, audit, and oversight connections."
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {principles.slice(0, 4).map((principle) => (
            <Card key={principle.id}>
              <p className="text-xs font-semibold text-standard-blue">{principle.id}</p>
              <h2 className="mt-2 text-lg font-semibold tracking-normal text-ink">{principle.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{principle.summary}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <ComplianceComparison />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <div>
          <Badge tone="neutral">Governance Domains</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink">Organized for assessment and implementation</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            AWGS groups requirements across discoverability, interoperability, identity, authorization, transparency, accountability, trust, privacy, and safety.
          </p>
          <div className="mt-8">
            <DomainGrid />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <Badge tone="blue">Search</Badge>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal text-ink">Find AWGS sections</h2>
          </div>
          <SearchInput compact limit={4} />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <Badge tone="teal">Future Interface</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink">RAG-ready assistant shell</h2>
            <p className="mt-3 text-slate-600">
              The site includes a chat interface and API route prepared for a future retrieval pipeline over AWGS content. The current endpoint returns mock responses from the foundation specification.
            </p>
            <Link
              href="/assistant"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-standard-blue hover:text-blue-700"
            >
              Open assistant page
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ChatPanel />
        </div>
      </section>
    </div>
  );
}
