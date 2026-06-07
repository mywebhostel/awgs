# AWGS Website Specification

Status: Historical maintainer documentation

The canonical website architecture specification is now `docs/website-spec.md`.

This file is retained as the earlier AWGS-only website specification created before the site was expanded into the public home for the broader Agentic Accessibility Initiative.

## Purpose

The AWGS website is a public standards documentation portal for the Agentic Web Governance Standard. It should present the foundation specification, implementation guidance, conformance model, knowledge base, search, and assistant placeholder in a neutral, accessible, maintainable format.

The website should feel comparable in structure and credibility to mature standards and developer documentation portals, while preserving AWGS as an independent public standard.

## Design Principles

- Present AWGS as a standards document first, not as a product.
- Preserve vendor neutrality in standard content, examples, and contributor guidance.
- Keep normative content in a single canonical source.
- Make public draft status, conformance limits, and future roadmap items clear.
- Favor accessible, readable, responsive documentation patterns.
- Avoid marketing language and unsupported claims.

## Current Information Architecture

Top navigation:

- Standard: `/standard`
- Guidelines: `/guidelines`
- Knowledge Base: `/knowledge-base`
- Contribute: `/contribute`
- About: `/about`

Utility routes:

- Search: `/search`
- Assistant: `/assistant`
- Change Log: `/changelog`
- Version Log: `/versions`
- Website Technical Log: `/website-log`

Standard sidebar:

- Overview: `/standard/overview`
- Principles: `/standard/principles`
- Governance Domains: `/standard/governance-domains`
- Compliance Levels: `/standard/compliance-levels`
- Conformance: `/standard/conformance`
- Assessment Model: `/standard/assessment-model`
- Glossary: `/standard/glossary`
- Future Roadmap: `/standard/future-roadmap`
- Full Foundation Spec: `/standard/full`

## Content Sources

| Content Area | Current Location | Role |
|--------------|------------------|------|
| Full AWGS 1.0 Foundation Specification | `content/standard/awgs-1-0-foundation.mdx` | Canonical normative and informative source document. |
| Rendered standard sections | `src/app/standard/*` | User-facing section pages derived from the specification. |
| Structured page data | `src/lib/awgs.ts` | Presentation data for cards, search, glossary display, roadmap display, planned articles, and mock assistant answers. |
| Navigation | `src/lib/navigation.ts` | Top navigation and standard sidebar route list. |
| Knowledge base placeholders | `src/lib/awgs.ts`; `src/app/knowledge-base/*` | Planned article metadata and placeholder article outline routes. |
| RAG assistant UI and mock route | `src/components/chat/ChatPanel.tsx`; `src/app/api/chat/route.ts` | Placeholder assistant interface and local/server mock endpoint. |
| Public AWGS change log | `content/public/changelog.mdx`; `src/app/changelog/page.tsx` | Public record of AWGS standard and guideline changes. |
| Public AWGS version log | `content/public/version-log.mdx`; `src/app/versions/page.tsx` | Public record of AWGS standard and guideline versions. |
| Website technical log | `content/public/website-log.mdx`; `src/app/website-log/page.tsx` | Technical record of website implementation, repository, hosting, and tooling changes. |

## Source-of-Truth Policy

The canonical AWGS standard text is `content/standard/awgs-1-0-foundation.mdx`.

When changing principles, governance domains, compliance levels, conformance requirements, assessment model text, glossary definitions, or roadmap language:

1. Update the MDX specification first.
2. Update `src/lib/awgs.ts` only to keep presentation, search, and mock assistant data aligned.
3. Record material editorial or structural decisions in `docs/decision-log.md`.
4. Avoid creating separate normative copies in route pages or documentation files.

Long term, structured data should be generated from content where practical.

## Page Requirements

The homepage should include:

- The title "Agentic Web Governance Standard".
- Public draft status.
- Clear summary language derived from the specification.
- Calls to action for reading the standard, viewing compliance levels, and contributing.
- Compliance comparison for Level A, Level AA, and Level AAA.
- Governance domain overview.
- Search entry point.
- RAG assistant placeholder preview.

Standard pages should:

- Preserve the sidebar.
- Keep section titles aligned with the foundation specification.
- Avoid changing normative meaning when summarizing.
- Link to the full specification where appropriate.

Guidelines and knowledge base pages should:

- Present practical guidance as informative, not normative.
- Link back to relevant AWGS principles, domains, levels, conformance rules, and assessment methods.
- Avoid implying certification or full compliance unless criteria are defined.

## Knowledge Base Structure

Current planned article metadata lives in `src/lib/awgs.ts`.

Future knowledge base articles should move into `content/knowledge-base/*.mdx` or an equivalent content collection. Recommended frontmatter:

```yaml
title: ""
slug: ""
status: "draft"
awgsVersion: "1.0"
summary: ""
principles: []
domains: []
levels: []
lastReviewed: ""
```

Recommended article sections:

- Purpose and audience.
- Related AWGS sections.
- Implementation guidance.
- Evidence and artifacts.
- Assessment considerations.
- Open questions for public review.

Knowledge base content should not redefine compliance levels, domains, glossary terms, or conformance requirements. It should cite the canonical standard instead.

## Search

Current search is client-side and uses `searchIndex` in `src/lib/awgs.ts`.

Future search should:

- Index MDX headings and body text.
- Include knowledge base article content.
- Support stable section anchors.
- Include version metadata.
- Show excerpts and source page links.

## Accessibility

The site should preserve:

- Semantic landmarks for header, navigation, main content, and footer.
- Keyboard-accessible navigation and controls.
- Focus-visible styles.
- Screen-reader labels for icon-only links and form inputs.
- Responsive layouts for small and large screens.

Recommended future checks:

- Add a skip link to the root layout.
- Add automated accessibility checks for key pages.
- Document contrast and keyboard navigation checks before major releases.

## Deployment

The project is configured for static export:

- `next.config.mjs` uses `output: "export"`.
- The GitHub Actions workflow builds the site and publishes `out/` to `gh-pages`.
- Repository-aware base path handling supports GitHub Pages repository URLs.

GitHub Pages does not execute Next.js API routes. The chat panel therefore falls back to local mock answer logic when `/api/chat` is unavailable on static hosting.

## Maintenance Checklist

Before publishing a material content change:

- Confirm the MDX specification remains the canonical source.
- Sync any affected `src/lib/awgs.ts` display data.
- Update search entries for new or renamed pages.
- Update the decision log for architectural, governance, or publication decisions.
- Run local type and build checks when code changes are included.
- Verify that no vendor-specific requirement has been introduced into AWGS content.
