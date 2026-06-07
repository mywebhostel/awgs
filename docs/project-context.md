# AWGS Project Context and Agent Instructions

Status: Maintainer and future-agent guidance

## Project Purpose

This repository contains the public website for the Agentic Accessibility Initiative. The site presents Agentic Accessibility as the broader vision and AWGS 1.0 as the first independent, vendor-neutral public draft standard under that initiative.

## Current Implementation

- Framework: Next.js App Router.
- Language: TypeScript.
- Styling: Tailwind CSS.
- Content support: MDX through `@next/mdx`.
- Hosting target: static GitHub Pages export.
- Primary vision source: `docs/agentic-accessibility-vision.md`.
- Primary standard source: `content/standard/awgs-1-0-foundation.mdx`.
- Mock assistant: `src/components/chat/ChatPanel.tsx`, `src/app/api/chat/route.ts`, and `src/lib/awgs.ts` `answerFromAwgs`.

## Canonical Source Hierarchy

1. `docs/agentic-accessibility-vision.md` is the canonical source for the broader initiative vision.
2. `content/standard/awgs-1-0-foundation.mdx` is the canonical source for AWGS 1.0 standard content.
3. `docs/awgs-standard.md` defines AWGS source-of-truth handling.
4. `src/lib/awgs.ts` contains structured presentation, search, planned article, and mock assistant data.
5. `docs/website-spec.md` defines website information architecture and content structure.
6. `docs/rag-assistant-architecture.md` defines the future assistant architecture.
7. `docs/awgs-decisions.md` and `docs/decision-log.md` record project decisions.
8. `README.md` remains the setup, local running, and publishing entry point.

## Editing Instructions

- Preserve Agentic Accessibility as the broad initiative.
- Preserve AWGS as the first independent public standard under that initiative.
- Preserve vendor neutrality in standard text, examples, and implementation guidance.
- Do not introduce references to private frameworks, private products, or organization-specific dependencies in AWGS content.
- Do not add unsupported origin, authorship, certification, or governance claims.
- Avoid marketing language.
- Keep future standards and future certification programs clearly marked as exploratory until published.
- Keep the Agentic Accessibility Manifesto informative and non-normative.
- Keep AWGS 1.0 conformance language provisional until AWGS 1.1 requirements and success criteria exist.
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
