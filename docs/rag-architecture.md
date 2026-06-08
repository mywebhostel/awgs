# RAG Architecture

Status: Canonical future vector/model retrieval architecture

The current assistant performs deterministic static retrieval over the public site corpus. It does not perform vector search, model-backed generation, certification assessment, or formal conformance evaluation.

See `docs/rag-assistant-architecture.md` for current implementation-specific assistant notes.

## Future Corpus

Future retrieval should cover:

- Agentic Accessibility vision documents
- AWGS standard documents
- Knowledge base articles
- Glossary entries
- Research notes
- Future AWGS requirements and success criteria

## Pipeline

The current static assistant uses a curated local corpus and lexical scoring. Future retrieval-augmented generation should move toward:

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
