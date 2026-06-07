# AWGS Decision Log

Status: Active repository record

This log records project decisions that can be observed from the repository and decisions introduced during documentation consolidation. It does not create new AWGS normative requirements.

| Date | Decision | Status | Evidence | Rationale |
|------|----------|--------|----------|-----------|
| 2026-06-07 | Use `content/standard/awgs-1-0-foundation.mdx` as the canonical AWGS 1.0 Foundation Specification. | Active | `content/standard/awgs-1-0-foundation.mdx`; `src/app/standard/full/page.tsx` | Keeps normative content in one maintainable source. |
| 2026-06-07 | Build the website as a Next.js App Router documentation portal with TypeScript, Tailwind CSS, and MDX support. | Active | `package.json`; `next.config.mjs`; `src/app/*`; `src/components/*` | Supports a modern standards documentation site while retaining MDX content authoring. |
| 2026-06-07 | Export the site statically for GitHub Pages. | Active | `next.config.mjs` `output: "export"`; `.github/workflows/deploy-pages.yml` | Allows the public website to run without a server runtime. |
| 2026-06-07 | Deploy the static export to the `gh-pages` branch from pushes to `main`. | Active | `.github/workflows/deploy-pages.yml` | Keeps production publishing simple for a GitHub-hosted standards site. |
| 2026-06-07 | Use repository-aware `basePath` and `assetPrefix` behavior for GitHub Pages repository sites. | Active | `next.config.mjs`; `src/app/page.tsx` hero image path | Ensures static assets load correctly when the site is hosted below a repository path. |
| 2026-06-07 | Keep the RAG assistant as a deterministic mock placeholder until retrieval, citations, and deployment architecture are implemented. | Active | `src/components/chat/ChatPanel.tsx`; `src/app/api/chat/route.ts`; `src/lib/awgs.ts` `answerFromAwgs` | Avoids implying that real retrieval or vector search is already available. |
| 2026-06-07 | Treat `src/lib/awgs.ts` as structured presentation and index data, not as the independent normative source. | Active | Repository audit result | Reduces drift risk between rendered UI cards and the canonical MDX specification. |
| 2026-06-07 | Add public AWGS change and version logs as public MDX content rendered by site routes. | Active | `content/public/changelog.mdx`; `content/public/version-log.mdx`; `src/app/changelog/page.tsx`; `src/app/versions/page.tsx` | Makes AWGS standard and guideline publication history visible to public readers without adding normative requirements. |
| 2026-06-07 | Separate AWGS publication logs from website technical history. | Active | `content/public/changelog.mdx`; `content/public/version-log.mdx`; `content/public/website-log.mdx`; `src/app/website-log/page.tsx` | Keeps AWGS standard and guideline publication records distinct from implementation, hosting, and repository changes. |
| 2026-06-07 | Reposition the website as the public home for the Agentic Accessibility Initiative with AWGS as the first standard. | Active | `src/app/page.tsx`; `src/app/vision/*`; `src/app/standards/*`; `docs/agentic-accessibility-vision.md`; `docs/website-spec.md` | Establishes the broader initiative architecture while preserving AWGS 1.0 content and legacy routes. |
| 2026-06-07 | Add the Agentic Accessibility Manifesto as an informative, non-normative vision document. | Active | `src/app/vision/manifesto/page.tsx`; `docs/agentic-accessibility-vision.md` | Provides a value statement without creating technical requirements, certification, or legal obligations. |
| 2026-06-07 | Clarify AWGS 1.0 conformance as provisional maturity targets until AWGS 1.1 requirements exist. | Active | `src/app/standard/conformance/page.tsx`; `src/components/content/ComplianceComparison.tsx` | Prevents Level A, Level AA, and Level AAA from being mistaken for independently certified claims. |
| 2026-06-07 | Keep Agent Capability Manifest work exploratory. | Active | `src/app/standards/future-work/page.tsx`; `src/lib/awgs.ts` | Avoids presenting future capability manifest work as a finalized standard. |

## Open Decisions

- Define the publication workflow for AWGS 1.0 finalization, AWGS 1.1 drafts, and archived versions.
- Define contributor roles, review stages, and approval requirements for public standard updates.
- Decide whether structured UI data should be generated from MDX or maintained manually with explicit drift checks.
- Define the RAG assistant deployment model for a static GitHub Pages site.
- Define whether future certification material belongs in the standard, the knowledge base, or a separate program document.
