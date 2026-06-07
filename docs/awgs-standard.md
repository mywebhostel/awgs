# AWGS Standard

Status: Canonical AWGS source-of-truth guide

## Role

The Agentic Web Governance Standard (AWGS) is the first concrete standard developed under the broader Agentic Accessibility Initiative.

AWGS defines a vendor-neutral and implementation-independent framework for safe, transparent, interoperable, accountable, and trustworthy interaction between autonomous agents and digital services.

## Canonical Source

The canonical AWGS 1.0 Foundation Specification is:

```text
content/standard/awgs-1-0-foundation.mdx
```

The rendered full standard is:

```text
/standards/awgs/full
```

Legacy compatibility route:

```text
/standard/full
```

## Required AWGS Sections

AWGS should continue to include:

- Executive Summary
- Purpose
- Vision
- Vendor Neutrality
- Scope
- Core Principles
- Governance Domains
- Compliance Levels
- Conformance
- Assessment Model
- Governance Requirements
- Standard Governance
- Normative and Informative Content
- Glossary
- Future Directions

## Source-of-Truth Rules

- Update `content/standard/awgs-1-0-foundation.mdx` first for normative AWGS changes.
- Update `src/lib/awgs.ts` only to keep cards, search, glossary display, knowledge base metadata, and mock assistant answers aligned.
- Do not redefine compliance levels, governance domains, glossary terms, or conformance requirements in separate documents.
- Treat AWGS 1.0 Level A, Level AA, and Level AAA as provisional maturity targets.
- Expect formal testable conformance criteria in a future AWGS 1.1 Requirements and Success Criteria document.
- Do not present AWGS 1.0 as a full certification scheme.
- Keep future standards exploratory until formally drafted and published. If certification or assurance is ever considered, keep it separate from current AWGS 1.0 maturity target statements.
- Record material decisions in `docs/awgs-decisions.md` and `docs/decision-log.md`.

## Current Primary Routes

- `/standards/awgs`
- `/standards/awgs/overview`
- `/standards/awgs/principles`
- `/standards/awgs/domains`
- `/standards/awgs/compliance-levels`
- `/standards/awgs/conformance`
- `/standards/awgs/assessment-model`
- `/standards/awgs/glossary`
- `/standards/awgs/full`

Legacy `/standard/*` routes are retained for compatibility.
