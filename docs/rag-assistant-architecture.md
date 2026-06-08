# RAG Assistant Architecture

Status: Current static retrieval assistant and future implementation notes

The canonical future vector/model retrieval architecture is `docs/rag-architecture.md`. This file records implementation-specific notes for the current static retrieval assistant.

## Current State

The initiative assistant currently performs deterministic static retrieval over a curated public site corpus. It returns cited answers for Agentic Accessibility, AWGS 1.0, governance domains, compliance levels, conformance, assessment, glossary terms, knowledge base topics, research, and exploratory future work.

It does not perform vector search, model-backed generation, certification assessment, formal conformance evaluation, or legal analysis.

Current files:

- UI component: `src/components/chat/ChatPanel.tsx`
- Local/server API route: `src/app/api/chat/route.ts`
- Static retrieval logic: `src/lib/rag.ts` `answerFromAwgs`
- Assistant page: `src/app/assistant/page.tsx`

The browser UI calls `answerFromAwgs` directly so it works on GitHub Pages, where API routes are not executed. The API route returns the same response shape for local and server-capable deployments.

The current response includes answer text, cited source objects, matched topic titles, confidence, and `mode: "static-retrieval"`.

## Non-Goals for the Current Static Assistant

- No vector search.
- No external model invocation.
- No claim of exhaustive legal, technical, or compliance assessment.
- No certification or conformance determination.
- No private or vendor-specific backend dependency.

## Target Architecture

Future vector/model retrieval-augmented generation should use the Agentic Accessibility and AWGS content corpus as its source of truth.

Recommended corpus:

- `docs/agentic-accessibility-vision.md`
- `content/standard/awgs-1-0-foundation.mdx`
- Future `content/knowledge-base/*.mdx` articles
- Glossary and research notes
- Future AWGS requirements and success criteria
- Future versioned standard files
- Future public review notes, if approved as citeable informative content

Recommended pipeline:

```text
Markdown / MDX content
-> chunking
-> embeddings
-> vector store
-> retrieval
-> cited answers
```

Implementation sequence:

1. Parse Markdown and MDX content into structured sections.
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

The current static retrieval response shape can be extended rather than replaced:

```json
{
  "answer": "Answer text.",
  "sources": [
    {
      "title": "AWGS 1.0 Foundation Specification",
      "href": "/standards/awgs/full",
      "sourceId": "awgs:1.0:section-6"
    }
  ],
  "mode": "static-retrieval"
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

- A static-only search assistant that retrieves from a generated local index without model-backed generation.
- A separate server or serverless endpoint configured as the chat backend.
- A hybrid approach where static search works locally and generation is enabled only where a backend is configured.

Any backend should be documented before being connected to the public site.

## Evaluation

Before enabling vector/model-backed RAG behavior, add checks for:

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
6. Replace or augment the static retrieval path with vector retrieval in server-capable deployments.
7. Keep static retrieval available for GitHub Pages unless a deployed backend URL is configured.
