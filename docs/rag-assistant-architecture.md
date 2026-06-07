# RAG Assistant Architecture

Status: Placeholder architecture for future implementation

## Current State

The AWGS assistant is currently a mock interface. It is designed to show the intended user experience without claiming real retrieval or vector search.

Current files:

- UI component: `src/components/chat/ChatPanel.tsx`
- Placeholder API route: `src/app/api/chat/route.ts`
- Mock answer logic: `src/lib/awgs.ts` `answerFromAwgs`
- Assistant page: `src/app/assistant/page.tsx`

The API route returns deterministic answers based on simple question matching. It also returns a source object pointing to `/standard/full`.

GitHub Pages does not run Next.js API routes. On static hosting, the chat component falls back to the same mock answer logic in the browser if `/api/chat` is unavailable.

## Non-Goals for the Current Placeholder

- No real vector search.
- No external model invocation.
- No claim of exhaustive legal, technical, or compliance assessment.
- No certification or conformance determination.
- No private or vendor-specific backend dependency.

## Target Architecture

Future retrieval-augmented generation should use the AWGS content corpus as its source of truth.

Recommended corpus:

- `content/standard/awgs-1-0-foundation.mdx`
- Future `content/knowledge-base/*.mdx` articles
- Future versioned standard files
- Future public review notes, if approved as citeable informative content

Recommended pipeline:

1. Parse MDX content into structured sections.
2. Split content into chunks with stable source IDs.
3. Attach metadata for title, route, AWGS version, section, principle, domain, compliance level, and content type.
4. Generate embeddings for each chunk.
5. Store vectors and metadata in a retrieval store.
6. Retrieve relevant chunks for a user question.
7. Generate an answer using retrieved excerpts and citation rules.
8. Return answer text, source references, and assistant mode.

## Source IDs

Source IDs should be stable across rebuilds. Suggested pattern:

```text
awgs:1.0:section-6
awgs:1.0:section-6:level-aa
awgs:1.0:domain-d3
awgs:1.0:glossary:provenance
kb:1.0:preparing-agent-ready-service:introduction
```

## Response Shape

The current mock response shape can be extended rather than replaced:

```json
{
  "answer": "Answer text.",
  "sources": [
    {
      "title": "AWGS 1.0 Foundation Specification",
      "href": "/standard/full",
      "sourceId": "awgs:1.0:section-6"
    }
  ],
  "mode": "retrieval"
}
```

## Answering Rules

Future assistant answers should:

- Cite the canonical AWGS source when describing standard requirements.
- Distinguish normative requirements from informative guidance.
- Avoid inventing compliance requirements.
- Avoid claiming certification outcomes.
- Say when the current corpus does not contain enough information.
- Preserve vendor neutrality.
- Prefer stable section links and source IDs.

## Deployment Options

Because GitHub Pages is static, a production RAG assistant needs one of the following:

- A separate server or serverless endpoint configured as the chat backend.
- A static-only search assistant that retrieves from a generated local index without model-backed generation.
- A hybrid approach where static search works locally and generation is enabled only where a backend is configured.

Any backend should be documented before being connected to the public site.

## Evaluation

Before enabling real RAG behavior, add checks for:

- Retrieval precision on principles, domains, compliance levels, conformance, glossary, and assessment questions.
- Citation coverage for every answer that references the standard.
- Refusal or limitation behavior for unsupported topics.
- Version-aware answers when multiple AWGS versions exist.
- Accessibility and keyboard usability of the chat interface.

## Implementation Steps

1. Move future knowledge base articles into MDX content files.
2. Add a content parser that extracts headings, section paths, and metadata.
3. Define stable source IDs and section anchors.
4. Generate a local searchable index for static search.
5. Add retrieval storage for semantic search.
6. Replace `answerFromAwgs` with a retrieval-backed answer function in server-capable deployments.
7. Keep the static fallback for GitHub Pages unless a deployed backend URL is configured.
