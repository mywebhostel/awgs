# AWGS Repository Audit and Documentation Consolidation

Date: 2026-06-07

Scope: Markdown, MDX, README, content files, source comments, route components, shared libraries, configuration, GitHub Actions workflow, package metadata, and project metadata were reviewed. Generated, dependency, export, and Git internals were excluded from content evaluation.

## Audit Inventory

This table reflects the repository state observed before the new documentation files in `docs/` were added.

| Topic | Exists | Location | Coverage | Recommendation |
|---------|---------|----------|----------|---------------|
| AWGS Foundation Specification | Yes | `content/standard/awgs-1-0-foundation.mdx`; rendered by `src/app/standard/full/page.tsx`; summarized in `src/app/standard/*` and `src/lib/awgs.ts` | Complete | Keep As Is |
| AWGS Origin and Vision | Yes | Vision in `content/standard/awgs-1-0-foundation.mdx` section 1.2 and `src/app/standard/page.tsx`; contextual origin in the executive summary and `src/app/about/page.tsx` | Partial | Expand |
| AWGS Decision Log | No | No decision log, changelog, ADR, or equivalent repository document found | Missing | Create New |
| Website Specification | Yes | `README.md`, route structure under `src/app/`, reusable components under `src/components/`, and navigation in `src/lib/navigation.ts` | Partial | Create New |
| Project Context / Agent Instructions | Yes | `README.md` gives stack, run, deployment, content, and future RAG notes; no repository-level contributor or future-agent instruction document found | Partial | Create New |
| Knowledge Base Structure | Yes | `src/lib/awgs.ts` `knowledgeBaseArticles`; `src/app/knowledge-base/page.tsx`; `src/app/knowledge-base/[slug]/page.tsx`; README project structure | Partial | Consolidate |
| RAG Assistant Architecture | Yes | `README.md` Assistant and Future RAG Implementation; `docs/rag-assistant-architecture.md`; `src/components/chat/ChatPanel.tsx`; `src/app/api/chat/route.ts`; `src/lib/rag.ts` `answerFromAwgs` | Partial | Expand |
| Compliance Level Definitions | Yes | `content/standard/awgs-1-0-foundation.mdx` section 6; `src/lib/awgs.ts` `complianceLevels`; `src/app/standard/compliance-levels/page.tsx` | Complete | Consolidate |
| Governance Domain Definitions | Yes | `content/standard/awgs-1-0-foundation.mdx` section 5; `src/lib/awgs.ts` `domains`; `src/app/standard/governance-domains/page.tsx` | Complete | Consolidate |
| Glossary | Yes | `content/standard/awgs-1-0-foundation.mdx` section 12; `src/lib/awgs.ts` `glossary`; `src/app/standard/glossary/page.tsx` | Complete | Consolidate |

## Source of Truth

The recommended documentation hierarchy is:

| Area | Canonical Location | Notes |
|------|--------------------|-------|
| Normative AWGS 1.0 Foundation Specification | `content/standard/awgs-1-0-foundation.mdx` | This should remain the source for compliance, conformance, governance domains, principles, assessment, glossary, and roadmap language. |
| Rendered full standard | `src/app/standards/awgs/full/page.tsx`; compatibility route `src/app/standard/full/page.tsx` | Imports and renders the canonical MDX source. |
| Structured website data | `src/lib/awgs.ts` | Current source for cards, search entries, and planned KB article metadata. Treat as presentation/index data, not independent normative content. |
| Static retrieval assistant | `src/lib/rag.ts` | Current source for the GitHub Pages-compatible assistant corpus, ranking, cited source output, and deterministic answer formatting. Treat as implementation support, not independent normative content. |
| Website information architecture | `docs/website-specification.md` | Canonical repository document for site pages, route responsibilities, content hierarchy, search, knowledge base structure, accessibility, and deployment constraints. |
| Project context and future-agent instructions | `docs/project-context.md` | Canonical contributor and future-agent guidance for preserving vendor neutrality, source hierarchy, and static hosting constraints. |
| Decision history | `docs/decision-log.md` | Canonical record for implementation and documentation decisions. |
| RAG assistant architecture | `docs/rag-assistant-architecture.md` | Canonical architecture plan for moving from the current mock assistant to retrieval with citations. |
| Installation and publishing | `README.md` | Should remain focused on setup, local execution, GitHub Pages deployment, and pointers to canonical docs. |

## Website Evaluation Against AWGS Vision

### Standards Portal Quality

The current implementation meets the basic expectations of a public standard portal:

- It has a neutral visual design, clear public draft status, standards-oriented language, and no required vendor dependency in the AWGS content.
- It uses a conventional top navigation and a standard-specific sidebar.
- It separates the landing page, standard overview, principles, governance domains, compliance levels, conformance, assessment model, glossary, roadmap, knowledge base, search, and assistant surfaces.
- It renders the complete AWGS Foundation Specification from MDX.
- It provides reusable layout, navigation, card, badge, search, and chat components.

Compared with mature documentation portals such as W3C/WCAG, OWASP, NIST, MDN, and Kubernetes documentation, the project is a strong early public draft site but not yet a mature standards portal.

### Navigation

Strengths:

- Primary navigation includes Standard, Guidelines, Knowledge Base, Contribute, and About.
- Standard pages have a persistent section sidebar.
- Search and assistant entry points are available from the header.

Gaps:

- No version selector or archived version navigation.
- No breadcrumb trail for deep pages.
- Full specification lacks generated heading anchors or an in-page table of contents.

### Information Architecture

Strengths:

- Core standard sections are organized into expected route groups.
- The full MDX specification and structured section pages coexist cleanly.
- Knowledge base routes are prepared for future articles.

Gaps:

- Normative content is duplicated between the MDX file and `src/lib/awgs.ts`.
- Knowledge base metadata lives in code rather than a content collection.
- Website architecture was implicit until `docs/website-specification.md` was added.

### Search

Strengths:

- Client-side search exists and is accessible from a dedicated search page and homepage.
- Search covers key standard sections and planned knowledge base material.

Gaps:

- Search does not index full MDX body text or future article body content.
- Search results do not expose excerpt matches, section anchors, or version metadata.

### Readability

Strengths:

- The site uses readable typography, restrained cards, clear section headers, and concise standard language.
- The full specification has prose styling suitable for public review.

Gaps:

- The full specification would benefit from heading anchors, a local contents list, and stable section IDs.
- Long-term publication should distinguish normative and informative content more visibly.

### Accessibility

Strengths:

- The layout uses semantic `header`, `nav`, `main`, and `footer` landmarks.
- Navigation and icon-only links include accessible labels.
- Focus-visible styling is present.
- Form inputs include screen-reader labels.

Gaps:

- No skip link is present.
- No automated accessibility test or documented accessibility acceptance check is present.
- Color contrast appears conservative, but no automated contrast report is documented.

### Standards Credibility

Strengths:

- The standard is framed as a public draft.
- Vendor neutrality is explicit in the foundation specification.
- Conformance, assessment, glossary, and future roadmap sections exist.

Gaps:

- No decision log existed before this audit.
- Contribution process is described at a high level but does not define issue labels, review stages, publication approval, or maintenance roles.
- Versioning is mentioned in the standard but not implemented as a repository publication workflow.

### Long-Term Maintainability

Strengths:

- Static export is suitable for GitHub Pages.
- The component structure is reusable and compact.
- MDX support is already configured.
- The deployment workflow is straightforward.

Gaps:

- Manual synchronization is required between the canonical MDX standard and structured UI data.
- Knowledge base article outlines are generated from code rather than MDX content files.
- The RAG placeholder has no retrieval architecture beyond README notes until the new architecture document.

## Genuine Gaps

The following gaps are genuine based on repository evidence:

- Missing decision log or architecture decision record.
- Missing canonical website specification and content hierarchy document.
- Missing repository-level project context and future-agent instructions.
- Partial RAG assistant architecture documentation.
- Partial knowledge base architecture documentation.
- No documented source-of-truth policy before this audit.
- No documented process for keeping `src/lib/awgs.ts` synchronized with the MDX standard.
- No implemented standard version selector or archived publication model.
- No detailed contribution workflow for public review, issue handling, editorial review, or publication approval.
- No generated full-text search index from MDX or future knowledge base content.
- No automated accessibility verification documented.

The following are not gaps:

- Foundation specification.
- Compliance level definitions.
- Governance domain definitions.
- Glossary.
- Standard overview, principles, conformance, assessment model, and future roadmap pages.
- Search UI.
- Static retrieval assistant UI and local/server API route.

## Documentation Created

The following files were created because they improve maintainability and avoid duplicating normative standard content:

- `docs/AWGS_Repository_Audit.md`
- `docs/decision-log.md`
- `docs/awgs-decisions.md`
- `docs/awgs-standard.md`
- `docs/agentic-accessibility-vision.md`
- `docs/website-specification.md`
- `docs/website-spec.md`
- `docs/project-context.md`
- `docs/rag-assistant-architecture.md`
- `content/public/changelog.mdx`
- `content/public/version-log.mdx`
- `content/public/website-log.mdx`

`README.md` was updated only to point maintainers to the canonical documentation map.

## Recommendations

### Quick Wins

- Add a skip link to the site layout.
- Add heading anchors and a local table of contents to the full specification page.
- Add a short contribution workflow covering issues, review, and publication approval.
- Add a small synchronization checklist for changes to compliance levels, domains, glossary, and search data.
- Add a lightweight accessibility check using Playwright or an equivalent automated tool.

### Medium-Term Improvements

- Move knowledge base articles into `content/knowledge-base/*.mdx` with frontmatter.
- Generate search index entries from MDX and knowledge base content instead of maintaining all search data manually.
- Add versioned standard routes such as `/standard/1.0/` before AWGS 1.1 work begins.
- Add stable IDs for principles, domains, levels, glossary terms, and conformance criteria.
- Add contribution templates for public review comments, glossary proposals, governance domain proposals, and conformance questions.
- Add a content build step that checks for drift between MDX source content and structured UI data.

### Long-Term Roadmap

- Define AWGS 1.1 requirements as versioned content, not as changes directly overwriting AWGS 1.0.
- Expand the knowledge base into implementation guides, assessment playbooks, evidence examples, and public review notes.
- Implement the RAG assistant with source chunking, stable citations, retrieval evaluation, and out-of-scope safeguards.
- Create a versioning and archival model for public draft, final, superseded, and withdrawn versions.
- If certification or assurance is ever considered, define the model separately from current AWGS 1.0 maturity target statements, with clear criteria, evidence handling, and governance review.
- Publish a maintenance model that identifies roles for editors, reviewers, contributors, and standard stewards.
