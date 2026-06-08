import {
  agenticAccessibilityDefinition,
  agenticAccessibilityPrinciples,
  assessmentMethods,
  complianceLevels,
  domains,
  futureStandardAreas,
  glossary,
  governanceRequirements,
  knowledgeBaseArticles,
  principles,
  searchIndex
} from "@/lib/awgs";

export type RagSource = {
  title: string;
  href: string;
  sourceId: string;
  category: string;
  excerpt: string;
};

export type RagAnswer = {
  answer: string;
  sources: RagSource[];
  mode: "static-retrieval";
  matchedTopics: string[];
  confidence: "high" | "medium" | "low";
};

type RagChunk = {
  sourceId: string;
  title: string;
  href: string;
  category: string;
  text: string;
  keywords: string[];
  priority?: number;
};

type RankedChunk = RagChunk & {
  score: number;
};

const stopWords = new Set([
  "about",
  "after",
  "also",
  "and",
  "are",
  "can",
  "does",
  "for",
  "from",
  "how",
  "into",
  "its",
  "more",
  "should",
  "that",
  "the",
  "this",
  "through",
  "what",
  "when",
  "where",
  "which",
  "why",
  "with"
]);

const standardHref = "/standards/awgs/full";

const staticRagChunks: RagChunk[] = [
  {
    sourceId: "initiative:agentic-accessibility:definition",
    title: "Agentic Accessibility Definition",
    href: "/vision/agentic-accessibility",
    category: "Vision",
    text: `Agentic Accessibility is ${agenticAccessibilityDefinition} The initiative is broader than any one standard and focuses on trusted interaction between autonomous agents and digital services.`,
    keywords: ["agentic accessibility", "vision", "trusted agents", "autonomous agents", "digital services"],
    priority: 4
  },
  {
    sourceId: "initiative:awgs:first-standard",
    title: "AWGS as the First Standard",
    href: "/standards/awgs/overview",
    category: "AWGS",
    text: "AWGS 1.0 is the first standard developed under the broader Agentic Accessibility vision. It is vendor-neutral and implementation-independent, and it defines a foundation for governance, interoperability, transparency, accountability, trust, privacy, safety, and human oversight in agentic digital services.",
    keywords: ["awgs", "first standard", "vendor neutral", "implementation independent", "foundation specification"],
    priority: 4
  },
  {
    sourceId: "awgs:1.0:principles:summary",
    title: "AWGS Core Principles",
    href: "/standards/awgs/principles",
    category: "Principles",
    text: `AWGS is organized around eight core principles: ${principles.map((principle) => principle.name).join(", ")}. These principles guide the treatment of agent-mediated access, governance, trust, privacy, safety, and oversight.`,
    keywords: ["principles", "core principles", ...principles.map((principle) => principle.name)],
    priority: 3
  },
  {
    sourceId: "awgs:1.0:domains:summary",
    title: "AWGS Governance Domains",
    href: "/standards/awgs/domains",
    category: "Governance Domains",
    text: `AWGS organizes governance into nine domains: ${domains.map((domain) => domain.name).join(", ")}. These domains structure governance expectations for agentic interactions without locking the standard to a private product or single protocol.`,
    keywords: ["domains", "governance domains", ...domains.map((domain) => domain.name)],
    priority: 3
  },
  {
    sourceId: "awgs:1.0:levels:summary",
    title: "AWGS Compliance Levels",
    href: "/standards/awgs/compliance-levels",
    category: "Compliance Levels",
    text: "AWGS 1.0 defines provisional maturity levels: Level A is Agent Ready, Level AA is Agent Interoperable, and Level AAA is Agent Governed. Formal testable conformance criteria are expected in a future AWGS 1.1 Requirements and Success Criteria document.",
    keywords: ["compliance", "level a", "level aa", "level aaa", "maturity", "agent ready", "agent interoperable", "agent governed"],
    priority: 4
  },
  {
    sourceId: "awgs:1.0:conformance",
    title: "AWGS Conformance",
    href: "/standards/awgs/conformance",
    category: "Conformance",
    text: "AWGS 1.0 provides foundation guidance, principles, domains, and provisional maturity targets. Level A, Level AA, and Level AAA should not be described as independently certified claims until future testable requirements and an assessment methodology are published.",
    keywords: ["conformance", "claim", "certification", "maturity targets", "requirements", "success criteria"],
    priority: 4
  },
  {
    sourceId: "awgs:1.0:assessment:model",
    title: "AWGS Assessment Model",
    href: "/standards/awgs/assessment-model",
    category: "Assessment",
    text: "The AWGS assessment model may combine automated checks, semi-automated review of governance artifacts, and manual review of operational governance, incident handling, and human oversight procedures.",
    keywords: ["assessment", "evaluate", "audit", "automated", "semi-automated", "manual review"],
    priority: 3
  },
  {
    sourceId: "awgs:1.0:governance:requirements",
    title: "Governance Requirement Areas",
    href: standardHref,
    category: "Governance",
    text: `AWGS governance requirement areas include ${governanceRequirements.join(", ")}. These areas help organize evidence and governance practices for agentic digital services.`,
    keywords: ["governance requirements", "identity management", "authorization management", "risk management", "incident handling", "audit management"],
    priority: 3
  },
  {
    sourceId: "initiative:future-work:summary",
    title: "Exploratory Future Work",
    href: "/standards/future-work",
    category: "Future Work",
    text: `Future areas are exploratory and not current AWGS 1.0 requirements. They include ${futureStandardAreas.map((area) => area.title).join(", ")}.`,
    keywords: ["future work", "exploratory", "roadmap", ...futureStandardAreas.map((area) => area.title)],
    priority: 3
  },
  ...agenticAccessibilityPrinciples.map((principle): RagChunk => ({
    sourceId: `initiative:principle:${slugify(principle.name)}`,
    title: `Agentic Accessibility Principle: ${principle.name}`,
    href: "/vision/principles",
    category: "Vision Principles",
    text: `${principle.name}: ${principle.description}`,
    keywords: ["agentic accessibility", "principle", principle.name],
    priority: 2
  })),
  ...principles.map((principle): RagChunk => ({
    sourceId: `awgs:1.0:principle:${principle.id.toLowerCase()}`,
    title: `${principle.id} ${principle.name}`,
    href: "/standards/awgs/principles",
    category: "AWGS Principle",
    text: `${principle.id} ${principle.name}: ${principle.summary}`,
    keywords: ["awgs", "principle", principle.id, principle.name],
    priority: 2
  })),
  ...domains.map((domain): RagChunk => ({
    sourceId: `awgs:1.0:domain:${domain.id.toLowerCase()}`,
    title: `${domain.id} ${domain.name}`,
    href: "/standards/awgs/domains",
    category: "Governance Domain",
    text: `${domain.id} ${domain.name}: ${domain.focus} Examples include ${domain.examples.join(", ")}.`,
    keywords: ["awgs", "domain", "governance domain", domain.id, domain.name, ...domain.examples],
    priority: 2
  })),
  ...complianceLevels.map((level): RagChunk => ({
    sourceId: `awgs:1.0:level:${level.level.toLowerCase()}`,
    title: `Level ${level.level}: ${level.name}`,
    href: "/standards/awgs/compliance-levels",
    category: "Compliance Level",
    text: `Level ${level.level} is ${level.name}. Objective: ${level.objective}. ${level.description} Emphasis: ${level.emphasis.join(", ")}.`,
    keywords: ["awgs", "compliance", `level ${level.level}`, level.name, level.objective, ...level.emphasis],
    priority: 2
  })),
  ...assessmentMethods.map((method): RagChunk => ({
    sourceId: `awgs:1.0:assessment:${slugify(method.name)}`,
    title: method.name,
    href: "/standards/awgs/assessment-model",
    category: "Assessment Method",
    text: `${method.name}: ${method.description} Examples include ${method.examples.join(", ")}.`,
    keywords: ["assessment", method.name, ...method.examples],
    priority: 2
  })),
  ...glossary.map((entry): RagChunk => ({
    sourceId: `awgs:1.0:glossary:${slugify(entry.term)}`,
    title: `Glossary: ${entry.term}`,
    href: "/glossary",
    category: "Glossary",
    text: `${entry.term}: ${entry.definition}`,
    keywords: ["glossary", "definition", entry.term],
    priority: 2
  })),
  ...knowledgeBaseArticles.map((article): RagChunk => ({
    sourceId: `kb:planned:${slugify(article.title)}`,
    title: article.title,
    href: article.href,
    category: "Knowledge Base",
    text: `${article.title}: ${article.description} Status: ${article.status}. ${article.note}`,
    keywords: ["knowledge base", article.category, article.title],
    priority: 1
  })),
  ...futureStandardAreas.map((area): RagChunk => ({
    sourceId: `future:${slugify(area.title)}`,
    title: area.title,
    href: "/standards/future-work",
    category: "Future Work",
    text: `${area.title}: ${area.description} Status: ${area.status}. This is not a current AWGS 1.0 requirement.`,
    keywords: ["future work", "exploratory", area.title],
    priority: 2
  })),
  ...searchIndex.map((item): RagChunk => ({
    sourceId: `site:${slugify(item.title)}`,
    title: item.title,
    href: item.href,
    category: item.category,
    text: item.description,
    keywords: item.keywords,
    priority: 1
  }))
];

export function answerFromAwgs(question: string): RagAnswer {
  const query = question.trim();

  if (!query) {
    const defaultSources = sourceList(defaultChunks());
    return {
      answer:
        "Ask a question about Agentic Accessibility, AWGS 1.0, governance domains, compliance levels, conformance, glossary terms, knowledge base topics, or exploratory future work.",
      sources: defaultSources,
      mode: "static-retrieval",
      matchedTopics: defaultSources.map((source) => source.title),
      confidence: "low"
    };
  }

  const ranked = rankChunks(query);
  const selected = ranked.length > 0 ? diversify(ranked).slice(0, 4) : defaultChunks();
  const confidence = confidenceFor(selected);
  const matchedTopics = selected.map((chunk) => chunk.title);
  const lead =
    confidence === "low"
      ? "I could not find an exact match in the current public corpus. The closest current references are:"
      : "Based on the current Agentic Accessibility and AWGS public corpus:";
  const bullets = selected.map((chunk) => `- ${chunk.title}: ${shorten(chunk.text, 320)}`).join("\n");

  return {
    answer: `${lead}\n\n${bullets}\n\nThis is a static retrieval answer with cited site sources. It does not perform vector search, model-backed generation, certification assessment, or legal analysis.`,
    sources: sourceList(selected),
    mode: "static-retrieval",
    matchedTopics,
    confidence
  };
}

export function getStaticRagCorpus() {
  return staticRagChunks;
}

function rankChunks(query: string): RankedChunk[] {
  const normalizedQuery = normalize(query);
  const queryTokens = tokenize(query);

  if (queryTokens.length === 0) return [];

  return staticRagChunks
    .map((chunk) => {
      const titleTokens = new Set(tokenize(chunk.title));
      const categoryTokens = new Set(tokenize(chunk.category));
      const keywordTokens = new Set(chunk.keywords.flatMap((keyword) => tokenize(keyword)));
      const textTokens = new Set(tokenize(chunk.text));

      let score = chunk.priority ?? 1;

      for (const token of queryTokens) {
        if (titleTokens.has(token)) score += 7;
        if (keywordTokens.has(token)) score += 5;
        if (categoryTokens.has(token)) score += 3;
        if (textTokens.has(token)) score += 1;
      }

      for (const keyword of chunk.keywords) {
        if (normalizedQuery.includes(normalize(keyword))) score += 8;
      }

      if (normalize(chunk.title).includes(normalizedQuery)) score += 10;
      if (normalizedQuery.includes("level aa") && chunk.text.toLowerCase().includes("level aa")) score += 8;
      if (normalizedQuery.includes("level aaa") && chunk.text.toLowerCase().includes("level aaa")) score += 8;
      if (normalizedQuery.includes("level a") && chunk.text.toLowerCase().includes("level a")) score += 4;

      return { ...chunk, score };
    })
    .filter((chunk) => chunk.score > (chunk.priority ?? 1))
    .sort((a, b) => b.score - a.score || (b.priority ?? 1) - (a.priority ?? 1) || a.title.localeCompare(b.title));
}

function diversify(chunks: RankedChunk[]): RankedChunk[] {
  const selected: RankedChunk[] = [];
  const seenSourceIds = new Set<string>();
  const seenTitles = new Set<string>();

  for (const chunk of chunks) {
    if (seenSourceIds.has(chunk.sourceId) || seenTitles.has(chunk.title)) continue;
    selected.push(chunk);
    seenSourceIds.add(chunk.sourceId);
    seenTitles.add(chunk.title);
    if (selected.length >= 6) break;
  }

  return selected;
}

function sourceList(chunks: RagChunk[]): RagSource[] {
  const seen = new Set<string>();
  const sources: RagSource[] = [];

  for (const chunk of chunks) {
    const key = `${chunk.href}:${chunk.sourceId}`;
    if (seen.has(key)) continue;
    seen.add(key);
    sources.push({
      title: chunk.title,
      href: chunk.href,
      sourceId: chunk.sourceId,
      category: chunk.category,
      excerpt: shorten(chunk.text, 180)
    });
  }

  return sources;
}

function defaultChunks(): RankedChunk[] {
  return staticRagChunks
    .filter((chunk) =>
      [
        "initiative:agentic-accessibility:definition",
        "initiative:awgs:first-standard",
        "awgs:1.0:principles:summary",
        "awgs:1.0:levels:summary"
      ].includes(chunk.sourceId)
    )
    .map((chunk) => ({ ...chunk, score: chunk.priority ?? 1 }));
}

function confidenceFor(chunks: RankedChunk[]): RagAnswer["confidence"] {
  const topScore = chunks[0]?.score ?? 0;
  if (topScore >= 18) return "high";
  if (topScore >= 8) return "medium";
  return "low";
}

function tokenize(input: string) {
  return normalize(input)
    .split(" ")
    .filter((token) => token.length > 1 && !stopWords.has(token));
}

function normalize(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(input: string) {
  return normalize(input).replace(/\./g, "").replace(/\s+/g, "-");
}

function shorten(input: string, maxLength: number) {
  if (input.length <= maxLength) return input;
  const trimmed = input.slice(0, maxLength - 1);
  const lastSpace = trimmed.lastIndexOf(" ");
  return `${trimmed.slice(0, lastSpace > 80 ? lastSpace : trimmed.length).trim()}...`;
}
