---
name: standard-steward
version: 0.1.0
status: active
scope: standard-content
---

# Agentic Standard Steward

## Purpose

Use these rules when maintaining Agentic Accessibility vision documents, AWGS standard content, compliance levels, governance domains, glossary terms, conformance language, future roadmap, or standard-related documentation.

This steward protects the meaning, neutrality, maturity, and credibility of the standard.

This is a living steward document. Update it through `docs/agent-rules/maintenance-protocol.md` when project decisions, maturity boundaries, document types, or recurring agent mistakes require durable rule changes.

## Use this steward for

- Editing AWGS standard text.
- Editing Agentic Accessibility vision text.
- Editing the manifesto.
- Editing principles.
- Editing governance domains.
- Editing compliance level descriptions.
- Editing conformance language.
- Editing glossary terms.
- Editing decision logs.
- Preparing future AWGS 1.1 requirement structures.
- Reviewing whether a proposed change belongs in AWGS 1.0, AWGS 1.1, knowledge base, or future work.

## Core Rules

### 1. Preserve The Hierarchy

Agentic Accessibility is the broader initiative.

AWGS is the first standard under that initiative.

Do not collapse them into the same thing.

Do not present AWGS as the entire initiative.

### 2. Preserve Vendor Neutrality

Do not reference private frameworks, commercial products, proprietary platforms, or private legacy names from earlier drafts.

Do not imply that any specific company owns, controls, or certifies AWGS.

Do not introduce vendor or product dependencies into AWGS meaning, examples, conformance language, or future-work descriptions.

### 3. Protect AWGS 1.0 Maturity Boundaries

AWGS 1.0 is a foundation specification.

Do not convert AWGS 1.0 into a full certification framework.

Do not add detailed testable controls unless the task explicitly concerns AWGS 1.1.

Do not claim that Level A, Level AA, or Level AAA are independently certifiable yet.

Preferred language:

- "AWGS 1.0 defines provisional maturity levels."
- "Formal testable conformance criteria are expected in a future AWGS 1.1 Requirements and Success Criteria document."

Avoid language such as:

- "Certified AWGS Level AA"
- "Guaranteed compliance"
- "Legally compliant"
- "Passed certification"

### 4. Keep Normative Language Controlled

Use MUST, SHALL, REQUIRED, and SHALL NOT only in normative standard sections.

Avoid normative language in:

- Vision pages.
- Manifesto.
- Knowledge base.
- Research notes.
- Planned future work.
- Explanatory examples.

When content is informative, label it clearly.

### 5. Separate Document Types

Use the right document type:

- Manifesto: why the initiative matters.
- Vision: long-term direction.
- Foundation specification: principles, domains, and scope.
- Requirements specification: testable criteria.
- Assessment methodology: how criteria are tested.
- Knowledge base: explanations and examples.
- Research: exploratory analysis.
- Decision log: accepted project decisions.

Do not mix these unnecessarily.

### 6. Handle Future Work Carefully

Future work may include:

- Agent Capability Manifest.
- `.well-known/agents.json`.
- Agent Identity Profile.
- Agent Trust Metadata.
- Agent Governance Profiles.
- AWGS 1.1 Requirements.
- Assessment Methodology.
- Certification.
- Validators.
- Real RAG.

Mark all such items as:

- "Exploratory"
- "Future Work"
- "Planned"
- "Not a current AWGS 1.0 requirement"

Do not add a mandatory `agents.json` requirement unless a future standard explicitly adopts one.

### 7. Be Careful With Legal Analogies

It is acceptable to explain that Agentic Accessibility is conceptually inspired by digital accessibility, Universal Design, and WCAG-like thinking.

Do not claim that current accessibility laws require agentic access.

Do not claim that AWGS satisfies any law.

Do not present AWGS as legally compliant, legally required, or sufficient for legal compliance.

### 8. Maintain Glossary Consistency

When adding or changing a key term, check whether the glossary needs updating.

Important terms include:

- Agentic Accessibility
- Agent
- Autonomous Agent
- Digital Service
- Capability
- Delegation
- Identity
- Authorization
- Provenance
- Trust Signal
- Human Oversight
- Conformance
- Compliance Level
- Informative
- Normative

### 9. Preserve Public-Interest Tone

Use neutral, precise language.

Prefer:

- "supports"
- "promotes"
- "provides guidance for"
- "defines a foundation for"

Avoid:

- "revolutionary"
- "market-leading"
- "guaranteed"
- "certified"
- "enterprise-grade"
- "AI-powered platform"

## Standard Editing Workflow

Before editing standard-related content:

1. Identify the document type.
2. Determine whether the change is normative, informative, or exploratory.
3. Check whether the change affects existing definitions, compliance levels, domains, or conformance language.
4. Preserve vendor neutrality.
5. Update related glossary entries if needed.
6. Update the decision log if the change affects project direction.
7. Update the changelog or website log if user-visible.

## Quality Checklist

Before finishing, verify:

- Agentic Accessibility remains the broader initiative.
- AWGS remains the first standard.
- No private legacy framework or product references exist.
- No commercial claims were introduced.
- No certification claims were introduced.
- AWGS 1.0 remains a foundation specification.
- Future work is clearly marked.
- Normative language is controlled.
- Glossary terms remain consistent.
- Decision log is updated when needed.
