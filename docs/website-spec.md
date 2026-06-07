# Website Specification

Status: Canonical website architecture specification

## Purpose

The website is the public home for the Agentic Accessibility Initiative. It presents the broader vision, standards under that vision, and AWGS as the first concrete standard.

The site should feel like a credible public standards initiative, comparable in seriousness to W3C, WCAG, OWASP, NIST, MDN, and mature developer documentation portals.

## Conceptual Hierarchy

```text
Agentic Accessibility Initiative
  Standards
    AWGS - Agentic Web Governance Standard
```

Agentic Accessibility is the broad vision. AWGS is the implementation standard.

## Primary Navigation

- Vision: `/vision`
- Standards: `/standards`
  - AWGS 1.0: `/standards/awgs`
- Knowledge Base: `/knowledge-base`
- Glossary: `/glossary`
- Research: `/research`
- Contribute: `/contribute`

## Primary Route Structure

```text
/
/vision
/vision/agentic-accessibility
/vision/principles
/vision/manifesto
/standards
/standards/awgs
/standards/awgs/overview
/standards/awgs/principles
/standards/awgs/domains
/standards/awgs/compliance-levels
/standards/awgs/conformance
/standards/awgs/assessment-model
/standards/awgs/glossary
/standards/awgs/full
/standards/future-work
/knowledge-base
/glossary
/research
/contribute
```

Legacy `/standard/*` routes remain available for compatibility.

## Homepage Requirements

The homepage should introduce the Agentic Accessibility Initiative, not only AWGS.

Hero title:

```text
Building the foundation for a trusted Agentic Web
```

Hero subtitle:

```text
The Agentic Accessibility Initiative promotes open, vendor-neutral principles and standards for trustworthy interaction between autonomous agents and digital services.
```

Primary CTA:

```text
Explore AWGS 1.0
```

Secondary CTA:

```text
Read the Vision
```

Required homepage sections:

- What is Agentic Accessibility?
- Why the Agentic Web needs governance
- AWGS as the first standard
- Core initiative principles
- Future work
- Search / knowledge access
- RAG assistant placeholder

## Content Source Rules

- Agentic Accessibility vision: `docs/agentic-accessibility-vision.md` and `/vision/agentic-accessibility`.
- Agentic Accessibility manifesto: `/vision/manifesto`.
- AWGS standard content: `content/standard/awgs-1-0-foundation.mdx`.
- Structured presentation and search data: `src/lib/awgs.ts`.
- Public AWGS change log: `content/public/changelog.mdx`.
- Public AWGS version log: `content/public/version-log.mdx`.
- Website technical log: `content/public/website-log.mdx`.

## Current Phase Scope

This phase is a cleanup, consolidation, and consistency phase. It should preserve the AWGS 1.0 Foundation Specification scope.

Priorities are consistent Agentic Accessibility Initiative framing, AWGS 1.0 positioning, navigation cleanup, route consolidation, footer and metadata consistency, knowledge base structure, manifesto status, conformance wording, documentation, decision logs, and GitHub Pages compatibility.

Do not implement AWGS 1.1 normative requirements, certification programs, compliance badges, formal audit workflows, validator tools, real RAG/vector search, Agent Capability Manifest requirements, mandatory `agents.json`, legal compliance claims, or commercial product flows unless explicitly requested.

## Knowledge Base Categories

The knowledge base should prepare categories for:

- Introduction
- Agentic Accessibility
- AWGS
- Discoverability
- Interoperability
- Identity
- Authorization
- Transparency
- Accountability
- Trust
- Privacy
- Safety
- Human Oversight
- Future Work

## RAG Assistant

The current assistant is a mock placeholder. It may answer deterministic questions about:

- Agentic Accessibility
- Manifesto
- AWGS
- Governance domains
- Compliance levels
- Glossary
- Research
- Future work
- Exploratory future requirements planning

Future RAG pipeline:

```text
Markdown/MDX content -> chunking -> embeddings -> vector store -> retrieval -> cited answers
```

Do not claim real vector search exists until implemented and deployed.

## Design Requirements

- Neutral public standard visual language.
- No commercial product framing.
- No formal certification claims.
- Any future certification discussion must remain exploratory until separately drafted and approved.
- AWGS 1.0 conformance levels should be presented as maturity targets until AWGS 1.1 requirements exist.
- Responsive layout.
- Accessible navigation, forms, focus states, and semantic landmarks.
- Stable GitHub Pages static export.
- Reusable layout and content components.

## Maintenance Checklist

- Preserve vendor neutrality.
- Keep AWGS under Agentic Accessibility.
- Keep future work clearly labeled exploratory.
- Update public logs after material standard, guideline, or website architecture changes.
- Run typecheck and build before deployment.
- Verify public URLs after GitHub Pages deployment.
