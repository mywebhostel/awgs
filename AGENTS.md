# Agent Instructions

This repository is the public website for the Agentic Accessibility Initiative.

## Global Project Hierarchy

- Treat Agentic Accessibility as the broad initiative.
- Treat AWGS as the first concrete standard under that initiative.
- Do not collapse Agentic Accessibility and AWGS into the same thing.
- Do not present AWGS as the entire initiative.

## Steward Rule Files

- Use `docs/agent-rules/standard-steward.md` when maintaining Agentic Accessibility vision content, AWGS standard content, conformance language, compliance levels, governance domains, glossary terms, decision logs, or standard-related documentation.
- Use `docs/agent-rules/website-steward.md` when maintaining website routes, navigation, footer, metadata, search, assistant UI, accessibility, layout, MDX rendering, or GitHub Pages deployment.
- If a website change alters standard meaning, apply both steward documents.
- Use `docs/agent-rules/maintenance-protocol.md` when steward rules need to evolve.
- Record steward rule changes in `docs/agent-rules/steward-changelog.md`.
- Track unresolved steward-rule future work in `docs/agent-rules/steward-backlog.md`.

## Steward Maintenance

- The Standard Steward and Website Steward are living project rules.
- Review steward rules when project scope, standard maturity, website architecture, conformance language, or public positioning changes.
- Do not update steward rules casually.
- Update steward rules when a new rule prevents repeated mistakes, reflects an accepted decision, clarifies current scope, removes outdated guidance, or improves future consistency.
- Do not create more than two main steward rule sets unless the user explicitly changes the governance model.
- Related files:
  - `docs/agent-rules/standard-steward.md`
  - `docs/agent-rules/website-steward.md`
  - `docs/agent-rules/maintenance-protocol.md`
  - `docs/agent-rules/steward-changelog.md`
  - `docs/agent-rules/steward-backlog.md`

## Source-of-Truth Rules

- Treat `content/standard/awgs-1-0-foundation.mdx` as the canonical AWGS 1.0 Foundation Specification.
- Treat `docs/agentic-accessibility-vision.md` as the canonical initiative vision document.
- Treat `docs/awgs-standard.md` as the canonical repository guide to AWGS source-of-truth handling.
- Treat `docs/website-spec.md` as the canonical website architecture specification.
- Treat `docs/awgs-decisions.md` and `docs/decision-log.md` as decision history.
- Treat `src/lib/awgs.ts` as structured presentation, search, planned article, and mock assistant data, not as an independent normative source.
- Do not duplicate normative AWGS requirements outside the canonical MDX source.
- When AWGS content changes, update the MDX source first and then update display/search data.

## Vendor Neutrality

- Preserve vendor neutrality.
- Do not reference private framework or product names from earlier drafts.
- Avoid commercial product language, sales copy, and startup-style positioning.
- Do not imply that any specific company owns, controls, or certifies AWGS.

## AWGS 1.0 Maturity Boundaries

- Do not claim formal certification exists.
- Keep exploratory future work clearly labeled as exploratory.
- Treat AWGS 1.0 as a foundation specification, not a full certification scheme.
- Treat AWGS 1.1 as the expected place for future normative requirements and success criteria.
- Treat Level A, Level AA, and Level AAA as provisional maturity targets, not independently certified claims.
- Do not add detailed testable controls unless the task explicitly concerns a future requirements specification.

## Normative vs Informative Content

- Treat the Agentic Accessibility Manifesto as informative and non-normative.
- Treat future Agent Capability Manifest work as exploratory unless it is formally drafted and published.
- Use MUST, SHALL, REQUIRED, and SHALL NOT only in normative standard sections.
- Avoid normative language in vision pages, the manifesto, knowledge base content, research notes, planned future work, and explanatory examples.
- Keep guidance and knowledge base content informative unless the standard explicitly makes it normative.

## Legal Caution

- It is acceptable to explain that Agentic Accessibility is conceptually inspired by digital accessibility, Universal Design, and WCAG-like thinking.
- Do not claim that current accessibility laws require agentic access.
- Do not claim that AWGS satisfies any law.
- Do not add unsupported origin, authorship, certification, or governance claims.

## Public Tone

- Use neutral, precise, public-interest language.
- Prefer language such as "supports", "promotes", "provides guidance for", and "defines a foundation for".
- Avoid language such as "revolutionary", "market-leading", "guaranteed", "certified", "enterprise-grade", and "AI-powered platform".

## Current Phase Scope Control

- Treat the current phase as cleanup, consolidation, and consistency work.
- Prioritize initiative framing, AWGS positioning, navigation, routes, footer, metadata, knowledge base structure, manifesto status, conformance wording, documentation, decision logs, and GitHub Pages compatibility.
- Do not implement AWGS 1.1 normative requirements, certification programs, compliance badges, formal audit workflows, validator tools, real RAG/vector search, Agent Capability Manifest requirements, mandatory `agents.json`, legal compliance claims, or commercial product flows unless explicitly requested.
- Mention future-stage concepts only as exploratory or planned work.
- When uncertain, preserve the AWGS 1.0 Foundation Specification scope.

## Implementation Rules

- Preserve GitHub Pages compatibility.
- Preserve responsive and accessible documentation patterns.
- Use existing components and route structure before creating new abstractions.
- Prefer consolidation over duplicate documentation.

## Change Tracking

- Update public logs when standard, guideline, or website architecture changes.
- Update `content/public/changelog.mdx` for public changes to the Agentic Accessibility vision, AWGS standard, or supporting guidelines.
- Update `content/public/version-log.mdx` for version/status changes.
- Update `content/public/website-log.mdx` for website implementation, repository, hosting, tooling, route, metadata, or maintenance-rule changes.
- Update `docs/awgs-decisions.md` or `docs/decision-log.md` when a change affects project direction, source-of-truth policy, governance, publication, or scope.
