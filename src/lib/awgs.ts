export type Principle = {
  id: string;
  name: string;
  summary: string;
};

export type Domain = {
  id: string;
  name: string;
  focus: string;
  examples: string[];
};

export type ComplianceLevel = {
  level: "A" | "AA" | "AAA";
  name: string;
  objective: string;
  description: string;
  emphasis: string[];
};

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export type SearchItem = {
  title: string;
  href: string;
  category: string;
  description: string;
  keywords: string[];
};

export type FutureStandardArea = {
  title: string;
  status: "Exploratory / Future Work";
  description: string;
};

export const agenticAccessibilityDefinition =
  "The principle that individuals and organizations should be able to interact with digital systems through trusted autonomous agents acting on their behalf.";

export const agenticAccessibilityPrinciples = [
  {
    name: "Delegated Access",
    description: "People and organizations should be able to authorize trusted agents to interact with digital services on their behalf."
  },
  {
    name: "Machine-Readable Participation",
    description: "Digital services should expose capabilities, policies, and constraints in forms that autonomous agents can discover and understand."
  },
  {
    name: "Transparent Representation",
    description: "Agent actions should be understandable to users, services, and reviewers, especially when outcomes have significant consequences."
  },
  {
    name: "Accountable Automation",
    description: "Agent-mediated interactions should preserve auditability, provenance, oversight, and meaningful routes for correction or escalation."
  }
];

export const principles: Principle[] = [
  {
    id: "P1",
    name: "Discoverability",
    summary: "Capabilities should be discoverable and understandable by agents."
  },
  {
    id: "P2",
    name: "Interoperability",
    summary: "Digital systems should support interoperable agent interactions."
  },
  {
    id: "P3",
    name: "Transparency",
    summary: "Actions, decisions, and outcomes should be explainable."
  },
  {
    id: "P4",
    name: "Accountability",
    summary: "Agent actions should be traceable and auditable."
  },
  {
    id: "P5",
    name: "Trust",
    summary: "Identity, provenance, and authenticity should be verifiable."
  },
  {
    id: "P6",
    name: "Privacy",
    summary: "Personal and sensitive information should be processed responsibly."
  },
  {
    id: "P7",
    name: "Safety",
    summary: "Digital systems should implement safeguards against harmful or unintended agent behavior."
  },
  {
    id: "P8",
    name: "Human Oversight",
    summary:
      "Digital systems should provide mechanisms for review, intervention, escalation, or override when significant consequences may arise."
  }
];

export const domains: Domain[] = [
  {
    id: "D1",
    name: "Discoverability",
    focus: "Machine-readable discovery of services and capabilities.",
    examples: ["Capability descriptions", "Service catalogs", "Structured metadata", "Machine-readable documentation"]
  },
  {
    id: "D2",
    name: "Interoperability",
    focus: "Communication and integration between agents and systems.",
    examples: ["Service interfaces", "Standardized interaction mechanisms", "Capability exchange", "Protocol compatibility"]
  },
  {
    id: "D3",
    name: "Identity",
    focus: "Identifying agents and services.",
    examples: ["Agent identity", "Service identity", "Credential management", "Delegated identity"]
  },
  {
    id: "D4",
    name: "Authorization",
    focus: "Permissions and delegated authority.",
    examples: ["Access scopes", "Least privilege", "Delegated permissions", "Purpose-based access"]
  },
  {
    id: "D5",
    name: "Transparency",
    focus: "Explainability and visibility of actions.",
    examples: ["Decision explanations", "Policy explanations", "Action explanations"]
  },
  {
    id: "D6",
    name: "Accountability",
    focus: "Traceability and auditability.",
    examples: ["Audit logs", "Event records", "Provenance tracking", "Accountability records"]
  },
  {
    id: "D7",
    name: "Trust",
    focus: "Establishing confidence in interactions.",
    examples: ["Verification mechanisms", "Reputation indicators", "Authenticity validation", "Source trustworthiness"]
  },
  {
    id: "D8",
    name: "Privacy",
    focus: "Responsible handling of information.",
    examples: ["Consent", "Data minimization", "Purpose limitation", "Privacy controls"]
  },
  {
    id: "D9",
    name: "Safety",
    focus: "Operational safeguards.",
    examples: ["Risk assessment", "Human approval workflows", "Escalation mechanisms", "Rate limiting", "Operational constraints"]
  }
];

export const complianceLevels: ComplianceLevel[] = [
  {
    level: "A",
    name: "Agent Ready",
    objective: "Agent Awareness",
    description: "The system provides sufficient information for agents to discover and understand available capabilities.",
    emphasis: ["Capability visibility", "Machine-readable documentation", "Basic governance readiness"]
  },
  {
    level: "AA",
    name: "Agent Interoperable",
    objective: "Agent Interaction",
    description: "The system supports secure and governed interaction between agents and digital services.",
    emphasis: ["Secure interaction", "Delegated permissions", "Governed service access"]
  },
  {
    level: "AAA",
    name: "Agent Governed",
    objective: "Agent Trustworthiness",
    description: "The system demonstrates mature governance, trust, transparency, and safety controls.",
    emphasis: ["Mature assurance", "Traceability", "Trust, safety, and oversight controls"]
  }
];

export const governanceRequirements = [
  "Identity management",
  "Authorization management",
  "Agent access management",
  "Privacy management",
  "Risk management",
  "Trust management",
  "Incident handling",
  "Audit management",
  "Policy management"
];

export const assessmentMethods = [
  {
    name: "Automated Assessment",
    description: "Machine-assisted checks for discoverability, metadata, interfaces, and configuration.",
    examples: ["Metadata validation", "Capability discovery", "Interface analysis", "Configuration validation"]
  },
  {
    name: "Semi-Automated Assessment",
    description: "Evaluator-supported reviews of governance artifacts and policy evidence.",
    examples: ["Explainability evaluation", "Governance artifact review", "Policy validation"]
  },
  {
    name: "Manual Assessment",
    description: "Human review of operational governance, incident handling, and oversight practices.",
    examples: ["Operational governance reviews", "Incident response processes", "Human oversight procedures"]
  }
];

export const glossary: GlossaryTerm[] = [
  {
    term: "Agentic Accessibility",
    definition:
      "The principle that individuals and organizations should be able to interact with digital systems through trusted autonomous agents acting on their behalf."
  },
  {
    term: "Agent",
    definition: "A software entity capable of performing actions on behalf of a user, organization, or another system."
  },
  {
    term: "Autonomous Agent",
    definition: "An agent capable of making decisions and performing actions without direct human intervention."
  },
  {
    term: "Capability",
    definition: "A function, action, or service that may be invoked by an agent."
  },
  {
    term: "Delegation",
    definition: "The assignment of authority from one entity to another."
  },
  {
    term: "Digital Service",
    definition: "A system, application, website, API, or platform accessible through digital interfaces."
  },
  {
    term: "Identity",
    definition: "Information used to uniquely identify an agent, service, or actor."
  },
  {
    term: "Provenance",
    definition: "Information describing the origin and history of an action, decision, or piece of information."
  },
  {
    term: "Trust Signal",
    definition: "Evidence that contributes to confidence in the authenticity, reliability, or integrity of an entity."
  },
  {
    term: "Human Oversight",
    definition: "The ability for humans to review, intervene, approve, reject, or override agent actions."
  }
];

export const roadmapItems = [
  "Agent-to-Agent Governance",
  "Multi-Agent Systems",
  "Autonomous Transaction Governance",
  "Agent Identity Frameworks",
  "Federated Trust Networks",
  "Agent Reputation Systems",
  "Continuous Compliance Models",
  "Agent Safety Certification"
];

export const futureStandardAreas: FutureStandardArea[] = [
  {
    title: "Agent Capability Manifest",
    status: "Exploratory / Future Work",
    description: "A possible format for describing agent-accessible capabilities, limits, service boundaries, and machine-readable policies."
  },
  {
    title: "Agent Identity Profile",
    status: "Exploratory / Future Work",
    description: "A possible profile for identifying agents, delegated authority, service identities, credentials, and trusted representatives."
  },
  {
    title: "Agent Trust Metadata",
    status: "Exploratory / Future Work",
    description: "A possible metadata model for provenance, authenticity, reliability signals, and trust context in agentic interactions."
  },
  {
    title: "Agent Governance Profiles",
    status: "Exploratory / Future Work",
    description: "Possible implementation profiles for governance domains, risk posture, oversight expectations, and assurance evidence."
  },
  {
    title: "Agent-to-Agent Governance",
    status: "Exploratory / Future Work",
    description: "Future governance models for interactions involving multiple agents, delegated tasks, and shared accountability."
  },
  {
    title: "Continuous Compliance Models",
    status: "Exploratory / Future Work",
    description: "Future approaches for monitoring compliance signals, evidence freshness, and conformance claims over time."
  }
];

export const knowledgeBaseArticles = [
  {
    title: "Preparing an Agent-Ready Service",
    href: "/knowledge-base/preparing-agent-ready-service",
    status: "Planned",
    category: "AWGS",
    description: "Guidance for documenting capabilities, service boundaries, and machine-readable metadata."
  },
  {
    title: "Evidence Collection for AWGS Assessment",
    href: "/knowledge-base/evidence-collection",
    status: "Planned",
    category: "AWGS",
    description: "A future checklist for gathering governance, privacy, risk, and audit artifacts."
  },
  {
    title: "Designing Human Oversight Workflows",
    href: "/knowledge-base/human-oversight-workflows",
    status: "Planned",
    category: "Human Oversight",
    description: "Patterns for review, escalation, approval, rejection, and override controls."
  },
  {
    title: "Agent Identity and Delegated Authority",
    href: "/knowledge-base/agent-identity-delegation",
    status: "Planned",
    category: "Identity",
    description: "Conceptual guidance for identity, credential management, access scopes, and delegated permissions."
  }
];

export const knowledgeBaseCategories = [
  "Introduction",
  "Agentic Accessibility",
  "AWGS",
  "Discoverability",
  "Interoperability",
  "Identity",
  "Authorization",
  "Transparency",
  "Accountability",
  "Trust",
  "Privacy",
  "Safety",
  "Human Oversight",
  "Future Work"
];

export const searchIndex: SearchItem[] = [
  {
    title: "Agentic Accessibility Vision",
    href: "/vision/agentic-accessibility",
    category: "Vision",
    description: "The broader public-interest vision for trusted agent-mediated access to digital services.",
    keywords: ["agentic accessibility", "vision", "trusted agents", "digital representatives", "universal design"]
  },
  {
    title: "Initiative Principles",
    href: "/vision/principles",
    category: "Vision",
    description: "Principles for delegated access, machine-readable participation, transparent representation, and accountable automation.",
    keywords: ["principles", "delegated access", "machine readable", "transparency", "accountability"]
  },
  {
    title: "Standards",
    href: "/standards",
    category: "Standards",
    description: "Standards under the Agentic Accessibility Initiative, beginning with AWGS 1.0.",
    keywords: ["standards", "awgs", "agentic accessibility", "future standards"]
  },
  {
    title: "AWGS Overview",
    href: "/standards/awgs/overview",
    category: "Standard",
    description: "Purpose, vision, vendor neutrality, scope, and the public draft status of AWGS 1.0.",
    keywords: ["purpose", "vision", "scope", "vendor neutrality", "public draft", "awgs"]
  },
  {
    title: "Core Principles",
    href: "/standards/awgs/principles",
    category: "Guidelines",
    description: "Discoverability, interoperability, transparency, accountability, trust, privacy, safety, and human oversight.",
    keywords: ["principles", "discoverability", "privacy", "safety", "human oversight"]
  },
  {
    title: "Governance Domains",
    href: "/standards/awgs/domains",
    category: "Standard",
    description: "Nine governance domains that organize AWGS requirements and implementation controls.",
    keywords: ["domains", "identity", "authorization", "accountability", "trust"]
  },
  {
    title: "Compliance Levels",
    href: "/standards/awgs/compliance-levels",
    category: "Conformance",
    description: "Compare Level A, Level AA, and Level AAA objectives and maturity expectations.",
    keywords: ["level a", "level aa", "level aaa", "compliance", "agent ready", "agent governed"]
  },
  {
    title: "Conformance",
    href: "/standards/awgs/conformance",
    category: "Conformance",
    description: "Rules for claiming conformance and maintaining compliance during a claim period.",
    keywords: ["claim", "mandatory", "documentation", "conformance"]
  },
  {
    title: "Assessment Model",
    href: "/standards/awgs/assessment-model",
    category: "Assessment",
    description: "Automated, semi-automated, and manual evaluation methods for AWGS assessments.",
    keywords: ["assessment", "automated", "manual", "validation", "review"]
  },
  {
    title: "Glossary",
    href: "/glossary",
    category: "Reference",
    description: "Definitions for Agentic Accessibility, agents, capabilities, delegation, digital services, provenance, and trust signals.",
    keywords: ["glossary", "definitions", "agentic accessibility", "agent", "capability", "provenance"]
  },
  {
    title: "Future Work",
    href: "/standards/future-work",
    category: "Research",
    description: "Exploratory future areas including capability manifests, identity profiles, trust metadata, and continuous compliance.",
    keywords: ["future", "exploratory", "capability manifest", "identity profile", "trust metadata"]
  },
  {
    title: "Knowledge Base",
    href: "/knowledge-base",
    category: "Knowledge Base",
    description: "Prepared structure for future implementation articles and practical guidance.",
    keywords: ["articles", "guidance", "implementation", "knowledge base"]
  },
  {
    title: "RAG Assistant",
    href: "/assistant",
    category: "Tools",
    description: "Placeholder chat interface for future retrieval-augmented assistance over Agentic Accessibility and AWGS content.",
    keywords: ["chat", "rag", "assistant", "mock", "agentic accessibility", "awgs"]
  },
  {
    title: "Change Log",
    href: "/changelog",
    category: "Publication",
    description: "Public record of changes to the AWGS standard and supporting guidelines.",
    keywords: ["changes", "changelog", "updates", "standard", "guidelines"]
  },
  {
    title: "Version Log",
    href: "/versions",
    category: "Publication",
    description: "Public record of AWGS standard and guideline versions.",
    keywords: ["versions", "version log", "awgs 1.0", "guidelines", "history"]
  },
  {
    title: "Website Technical Log",
    href: "/website-log",
    category: "Publication",
    description: "Technical record of website implementation, repository, hosting, and tooling changes.",
    keywords: ["website", "technical log", "hosting", "deployment", "repository"]
  },
  {
    title: "Research",
    href: "/research",
    category: "Research",
    description: "Open research directions for agentic access, governance, trust, safety, and future standards.",
    keywords: ["research", "future work", "governance", "trust", "safety"]
  }
];

export function answerFromAwgs(question: string) {
  const normalized = question.toLowerCase();

  if (normalized.includes("agentic accessibility") || normalized.includes("vision") || normalized.includes("trusted agent")) {
    return `Agentic Accessibility is ${agenticAccessibilityDefinition} AWGS is the first concrete standard supporting this broader vision.`;
  }

  if (normalized.includes("compliance") || normalized.includes("level")) {
    return "AWGS defines three compliance levels: Level A for Agent Ready systems, Level AA for Agent Interoperable systems, and Level AAA for Agent Governed systems with mature trust, transparency, safety, and oversight controls.";
  }

  if (normalized.includes("principle") || normalized.includes("privacy") || normalized.includes("safety")) {
    return "AWGS is guided by eight core principles: discoverability, interoperability, transparency, accountability, trust, privacy, safety, and human oversight.";
  }

  if (normalized.includes("domain") || normalized.includes("identity") || normalized.includes("authorization")) {
    return "AWGS organizes requirements into governance domains covering discoverability, interoperability, identity, authorization, transparency, accountability, trust, privacy, and safety.";
  }

  if (normalized.includes("assessment") || normalized.includes("evaluate") || normalized.includes("audit")) {
    return "AWGS assessments may combine automated checks, semi-automated artifact reviews, and manual reviews of governance, incident response, and human oversight procedures.";
  }

  if (normalized.includes("conformance") || normalized.includes("claim")) {
    return "Organizations may claim AWGS conformance only when mandatory requirements are satisfied, required controls are operational, required documentation exists, and compliance is maintained during the claim period.";
  }

  if (normalized.includes("future") || normalized.includes("roadmap") || normalized.includes("manifest") || normalized.includes("identity profile")) {
    return "Future work is exploratory and may include an Agent Capability Manifest, Agent Identity Profile, Agent Trust Metadata, Agent Governance Profiles, Agent-to-Agent Governance, and Continuous Compliance Models. These are not finalized requirements.";
  }

  return "The Agentic Accessibility Initiative promotes open, vendor-neutral principles and standards for trustworthy interaction between autonomous agents and digital services. AWGS is the first standard under that vision. This assistant is currently a mock placeholder and does not perform real retrieval yet.";
}
