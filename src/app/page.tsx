import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Network, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { Card } from "@/components/content/Card";
import { ComplianceComparison } from "@/components/content/ComplianceComparison";
import { ChatPanel } from "@/components/chat/ChatPanel";
import { SearchInput } from "@/components/search/SearchInput";
import {
  agenticAccessibilityDefinition,
  agenticAccessibilityPrinciples,
  futureStandardAreas
} from "@/lib/awgs";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const heroImageSrc = `${basePath}/awgs-governance-map.png`;

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <Badge tone="teal">Agentic Accessibility Initiative</Badge>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal text-ink sm:text-6xl">
              Building the foundation for a trusted Agentic Web
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              The Agentic Accessibility Initiative promotes open, vendor-neutral principles and standards for trustworthy
              interaction between autonomous agents and digital services.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/standards/awgs"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Explore AWGS 1.0
              </Link>
              <Link
                href="/vision/agentic-accessibility"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-slate-50"
              >
                Read the Vision
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
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

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <Badge tone="blue">What is Agentic Accessibility?</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink">
            Access through trusted digital representatives
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{agenticAccessibilityDefinition}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <Network className="h-5 w-5 text-standard-teal" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold tracking-normal text-ink">Authorized delegation</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Agentic access should let people and organizations delegate digital interaction to trusted representatives
              without forcing every service interaction to remain manual.
            </p>
          </Card>
          <Card>
            <Network className="h-5 w-5 text-standard-blue" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold tracking-normal text-ink">Standards-based trust</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Agentic services need shared expectations for discovery, authority, transparency, accountability, privacy,
              safety, and oversight.
            </p>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
          <Card>
            <Badge tone="neutral">Governance Need</Badge>
            <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">Why the Agentic Web needs governance</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              As agents discover services, request access, exchange data, and perform actions, digital systems need shared
              expectations for trust, authorization, transparency, accountability, privacy, safety, and oversight.
            </p>
          </Card>
          <Card>
            <Badge tone="teal">First Standard</Badge>
            <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">AWGS as the first standard</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              AWGS turns the broader Agentic Accessibility vision into concrete governance domains, compliance levels,
              conformance expectations, and assessment guidance for agentic digital services.
            </p>
            <Link href="/standards/awgs/overview" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-standard-blue">
              Read AWGS overview
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Card>
          <Card>
            <Badge tone="amber">Public Draft</Badge>
            <h2 className="mt-4 text-xl font-semibold tracking-normal text-ink">Neutral, implementation-independent guidance</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              AWGS does not require a specific vendor, product, framework, protocol, or technology. It defines governance
              expectations that can be implemented across different operational environments.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <Badge tone="teal">Core Principles</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink">Core initiative principles</h2>
          <p className="mt-3 text-slate-600">
            These principles guide Agentic Accessibility vision work and help frame the standards that support trusted
            agent-mediated interaction.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {agenticAccessibilityPrinciples.map((principle) => (
            <Card key={principle.name}>
              <h3 className="text-lg font-semibold tracking-normal text-ink">{principle.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{principle.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <ComplianceComparison />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <div>
          <Badge tone="violet">Future Work</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink">Exploratory areas for future standards</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Future work is exploratory and should not be interpreted as finalized requirements or certification criteria.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {futureStandardAreas.slice(0, 4).map((item) => (
              <Card key={item.title}>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 flex-none text-standard-teal" aria-hidden="true" />
                  <div>
                    <Badge tone="neutral">{item.status}</Badge>
                    <h3 className="mt-3 text-lg font-semibold tracking-normal text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Link href="/standards/future-work" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-standard-blue">
            View future work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="space-y-6">
          <div>
            <Badge tone="blue">Search</Badge>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal text-ink">Find initiative sections</h2>
          </div>
          <SearchInput compact limit={5} />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <Badge tone="blue">Knowledge Access</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink">Static retrieval assistant</h2>
            <p className="mt-3 text-slate-600">
              The assistant retrieves cited answers from current Agentic Accessibility vision, AWGS standard, glossary,
              knowledge base, research, and future-work content. Vector search and model-backed generation remain future
              implementation work.
            </p>
          </div>
          <ChatPanel />
        </div>
      </section>
    </div>
  );
}
