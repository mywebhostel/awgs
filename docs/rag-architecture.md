# RAG Architecture

Status: Canonical future retrieval architecture

The current assistant is a mock placeholder. It does not perform real vector search, model-backed retrieval, certification assessment, or formal conformance evaluation.

## Future Corpus

Future retrieval should cover:

- Agentic Accessibility vision documents
- AWGS standard documents
- Knowledge base articles
- Glossary entries
- Research notes
- Future AWGS requirements and success criteria

## Pipeline

```text
Markdown / MDX content
-> chunking
-> embeddings
-> vector store
-> retrieval
-> cited answers
```

## Rules

- Cite source documents for standard and guideline claims.
- Distinguish normative standard content from informative guidance.
- Treat future work as exploratory until published.
- Do not invent conformance requirements.
- Do not claim certification or independent verification.
- Preserve vendor neutrality.

See `docs/rag-assistant-architecture.md` for the current implementation-specific assistant notes.
