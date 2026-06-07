# Agentic Accessibility Initiative Website

Modern documentation website for the Agentic Accessibility Initiative, with the Agentic Web Governance Standard (AWGS) 1.0 as the first standard.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX content support through `@next/mdx`
- Mock RAG chat UI and `/api/chat` placeholder route

## Project Structure

```text
content/
  public/
    changelog.mdx
    version-log.mdx
    website-log.mdx
  standard/
    awgs-1-0-foundation.mdx
src/
  app/
    api/chat/
    assistant/
    guidelines/
    glossary/
    knowledge-base/
    research/
    search/
    standard/
    standards/
    vision/
  components/
    chat/
    content/
    layout/
    search/
  lib/
public/
  awgs-governance-map.png
```

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The build exports a static site to `out/`, which is suitable for GitHub Pages.

## Publish to GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. Create a GitHub repository for the site.
2. Push this project to the repository's `main` branch.
3. In GitHub, open the repository settings and enable Pages with **Source: Deploy from a branch**.
4. Select the `gh-pages` branch and the repository root.
5. The workflow will build the static site and update the `gh-pages` branch on future pushes.

For a repository named `awgs-docs-site`, the site will be published under a URL like:

```text
https://YOUR-USERNAME.github.io/awgs-docs-site/
```

For a user or organization Pages repository named `YOUR-USERNAME.github.io`, the site will be published at:

```text
https://YOUR-USERNAME.github.io/
```

GitHub Pages does not run Next.js API routes. The `/api/chat` route remains available for local/server deployments, while the browser chat component falls back to the same mock AWGS answer logic when deployed as a static GitHub Pages site.

## Content

The full AWGS source document is stored at `content/standard/awgs-1-0-foundation.mdx` and rendered on `/standards/awgs/full`.

Structured section pages use the same specification vocabulary through `src/lib/awgs.ts`, which keeps principles, domains, compliance levels, glossary terms, roadmap items, knowledge base placeholders, and the local search index in one place.

## Documentation Map

Repository-level documentation lives in `docs/`:

- `docs/AWGS_Repository_Audit.md` - repository audit, source-of-truth map, gaps, and improvement roadmap.
- `docs/agentic-accessibility-vision.md` - canonical Agentic Accessibility vision.
- `docs/awgs-standard.md` - AWGS source-of-truth and route guide.
- `docs/awgs-decisions.md` - initiative and AWGS decision record.
- `docs/website-spec.md` - canonical website information architecture, content hierarchy, knowledge base structure, search expectations, accessibility notes, and deployment constraints.
- `docs/website-specification.md` - historical AWGS-only website specification retained for context.
- `docs/project-context.md` - maintainer and future-agent instructions for preserving vendor neutrality and the canonical content hierarchy.
- `docs/rag-architecture.md` - canonical future retrieval architecture.
- `docs/rag-assistant-architecture.md` - current mock assistant behavior and future retrieval architecture.
- `docs/decision-log.md` - observed and intentional project decisions.
- `AGENTS.md` - instructions for future coding agents.

Public publication records live in `content/public/` and are rendered on the site:

- `content/public/changelog.mdx` - AWGS standard and guidelines change log rendered at `/changelog`.
- `content/public/version-log.mdx` - AWGS standard and guidelines version log rendered at `/versions`.
- `content/public/website-log.mdx` - website technical log rendered at `/website-log`.

## Future RAG Implementation

The chat UI is implemented in `src/components/chat/ChatPanel.tsx`. The placeholder endpoint is `src/app/api/chat/route.ts`.

To implement retrieval-augmented generation later:

1. Split AWGS MDX and knowledge base articles into chunks with stable source IDs.
2. Generate embeddings for each chunk.
3. Store embeddings and source metadata in a vector store.
4. Replace `answerFromAwgs` with retrieval against the vector store.
5. Pass retrieved excerpts and citations to the answer-generation model.
6. Return source references in the existing `sources` response field.

The current route intentionally returns deterministic mock answers and does not perform real vector search.
