# AWGS Project Context and Agent Instructions

Status: Maintainer and future-agent guidance

## Project Purpose

This repository contains a public documentation website for the Agentic Web Governance Standard (AWGS). The site presents AWGS 1.0 as an independent, vendor-neutral public draft standard for trustworthy interactions between autonomous agents and digital services.

## Current Implementation

- Framework: Next.js App Router.
- Language: TypeScript.
- Styling: Tailwind CSS.
- Content support: MDX through `@next/mdx`.
- Hosting target: static GitHub Pages export.
- Primary standard source: `content/standard/awgs-1-0-foundation.mdx`.
- Mock assistant: `src/components/chat/ChatPanel.tsx`, `src/app/api/chat/route.ts`, and `src/lib/awgs.ts` `answerFromAwgs`.

## Canonical Source Hierarchy

1. `content/standard/awgs-1-0-foundation.mdx` is the canonical source for AWGS 1.0 standard content.
2. `src/lib/awgs.ts` contains structured presentation, search, planned article, and mock assistant data.
3. `docs/website-specification.md` defines website information architecture and content structure.
4. `docs/rag-assistant-architecture.md` defines the future assistant architecture.
5. `docs/decision-log.md` records project decisions.
6. `README.md` remains the setup, local running, and publishing entry point.

## Editing Instructions

- Preserve AWGS as an independent public standard.
- Preserve vendor neutrality in standard text, examples, and implementation guidance.
- Do not introduce references to private frameworks, private products, or organization-specific dependencies in AWGS content.
- Do not add unsupported origin, authorship, certification, or governance claims.
- Avoid marketing language.
- Avoid duplicating normative text outside the canonical MDX specification.
- When compliance levels, governance domains, glossary definitions, conformance requirements, or assessment model language changes, update the MDX specification first.
- Keep `src/lib/awgs.ts` aligned with the MDX source until a generated data pipeline exists.
- Record significant architecture, publication, source-of-truth, or governance decisions in `docs/decision-log.md`.
- Treat knowledge base content as informative guidance unless the standard explicitly makes it normative.

## Static Hosting Constraints

The website is configured for GitHub Pages static export. This means:

- Pages and assets must work without a Node.js server at runtime.
- Next.js API routes are not executed by GitHub Pages.
- The chat UI must remain usable with static fallback behavior unless a separate backend is configured.
- Asset paths must respect the repository base path for GitHub Pages repository hosting.

## RAG Assistant Constraints

The assistant is currently a mock placeholder. Future work should not claim real retrieval, vector search, or model-backed answers until:

- Content chunking is implemented.
- Source IDs and citations are stable.
- A retrieval store or retrieval service exists.
- The deployed site can reach the backend.
- Evaluation checks confirm answers cite the canonical AWGS source.

## Contribution Context

The site includes a contribution page, but detailed public review workflows are not yet defined. Future contributors should document:

- Issue and proposal categories.
- Editorial review steps.
- Public draft review periods.
- Approval requirements for normative changes.
- Publication and versioning procedures.

## Known Partial Areas

- Knowledge base articles are placeholders, not full articles.
- Search is local and does not yet index full MDX body content.
- Versioning is described in the standard but not implemented as versioned routes.
- RAG assistant architecture is planned but not implemented.
- Accessibility support is present, but automated accessibility checks are not yet documented.
