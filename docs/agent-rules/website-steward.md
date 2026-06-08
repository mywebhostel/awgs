---
name: website-steward
version: 0.1.0
status: active
scope: website-maintenance
---

# Agentic Website Steward

## Purpose

Use these rules when maintaining the public website for the Agentic Accessibility Initiative and AWGS.

This steward protects presentation, navigation, accessibility, deployment, consistency, and user experience.

The website should present the standard clearly without changing its meaning.

This is a living steward document. Update it through `docs/agent-rules/maintenance-protocol.md` when website architecture, routing, navigation, public positioning, deployment constraints, or recurring agent mistakes require durable rule changes.

## Use This Steward For

- Homepage updates.
- Navigation changes.
- Routing changes.
- Footer updates.
- Metadata and SEO.
- Design and layout.
- Mobile responsiveness.
- Accessibility improvements.
- Knowledge base structure.
- Glossary presentation.
- Research pages.
- Search behavior.
- Mock RAG assistant UI.
- GitHub Pages deployment.
- MDX rendering.
- Content organization.
- Website logs.

## Core Rules

### 1. Preserve The Hierarchy Visually

The website should consistently present:

```text
Agentic Accessibility Initiative
  -> Standards
    -> AWGS 1.0
```

The homepage should introduce the broader initiative.

AWGS pages should present AWGS as the first standard.

### 2. Use Consistent Navigation

Preferred top-level navigation:

- Vision
- Standards
- Knowledge Base
- Glossary
- Research
- Contribute

Under Vision:

- Agentic Accessibility
- Manifesto
- Principles

Under Standards:

- AWGS 1.0

Avoid returning to the old AWGS-only navigation unless explicitly requested.

### 3. Preserve Canonical AWGS Route

The canonical AWGS route should be:

```text
/standards/awgs
```

Old routes such as:

```text
/standard
```

should either redirect, alias, or remain compatible without conflicting content.

For GitHub Pages, use the safest static-compatible implementation.

Do not break existing links.

### 4. Do Not Change Standard Meaning Casually

Website edits should not alter the meaning of AWGS requirements, principles, domains, or conformance language unless the task explicitly requests standard content changes.

When changing standard meaning, use the Standard Steward rules.

### 5. Keep GitHub Pages Compatibility

Before finishing, ensure:

- Base path works for `/awgs/`.
- Internal links work.
- Static export/deployment still works.
- Route changes do not break GitHub Pages.
- Assets load correctly.
- No server-only feature is introduced unless supported.

### 6. Maintain Accessibility

The website should itself model accessibility good practice.

Check:

- Semantic headings.
- Keyboard navigation.
- Visible focus states.
- Color contrast.
- Readable typography.
- Responsive layout.
- Descriptive links.
- Alt text where relevant.
- Accessible navigation menus.
- Reduced motion where appropriate.

### 7. Maintain Standards-Portal Tone

The site should feel comparable in seriousness to:

- W3C
- WCAG
- OWASP
- NIST
- MDN
- Kubernetes documentation

Avoid:

- SaaS landing page style.
- Sales language.
- Commercial conversion funnels.
- "Book a demo"
- Exaggerated claims.
- Certification badges before a certification program exists.

### 8. Keep RAG Assistant Mocked Unless Explicitly Requested

The assistant may remain a placeholder.

Allowed:

- UI shell.
- Mock answers.
- Explanation of future retrieval pipeline.
- Prepared architecture documentation.

Do not implement real vector search unless explicitly requested.

Future RAG pipeline may be documented as:

```text
Markdown / MDX content
-> chunking
-> embeddings
-> vector store
-> retrieval
-> cited answers
```

### 9. Keep Search Useful But Simple

Search should cover:

- Agentic Accessibility
- Manifesto
- Vision
- AWGS 1.0
- Principles
- Governance domains
- Compliance levels
- Glossary
- Knowledge base
- Research
- Future work

Do not over-engineer search before the content base is larger.

### 10. Label Future Work Clearly

Future work pages or cards should be marked as:

- Exploratory
- Planned
- Informative
- Not a current AWGS 1.0 requirement

Do not imply future concepts are already finalized.

Future concepts include:

- Agent Capability Manifest.
- `.well-known/agents.json`.
- Agent Identity Profile.
- Agent Trust Metadata.
- Agent Governance Profiles.
- Certification.
- Validators.
- Continuous compliance.
- Real RAG.

Do not add a mandatory `agents.json` requirement through website copy or examples.

## Website Editing Workflow

Before editing website code or content:

1. Identify whether the change is presentation-only or affects standard meaning.
2. If it affects standard meaning, also apply Standard Steward rules.
3. Check whether navigation, footer, metadata, and search need updating.
4. Preserve GitHub Pages compatibility.
5. Avoid unnecessary route duplication.
6. Test internal links where possible.
7. Update website log or changelog for user-visible changes.

## Quality Checklist

Before finishing, verify:

- Homepage uses Agentic Accessibility Initiative framing.
- AWGS is positioned as the first standard.
- Navigation is consistent across pages.
- Footer reflects both Agentic Accessibility and AWGS.
- `/standards/awgs` is canonical.
- Old routes do not conflict.
- Knowledge base supports the broader initiative.
- Manifesto is linked under Vision.
- Conformance language is not too strong.
- No commercial language was introduced.
- No certification claims were introduced.
- No private legacy framework or product references exist.
- GitHub Pages deployment remains functional.
- Mobile navigation works.
- Search includes new content.
- Logs or docs are updated where needed.
