# Maintenance Protocol

## Purpose

The steward files are living rules that should evolve with project needs.

The repository has two main steward rule sets:

- `standard-steward.md`
- `website-steward.md`

Do not create more than two main stewards unless the user explicitly changes the governance model.

## When To Review Steward Rules

Review steward rules when:

- Project scope changes.
- AWGS maturity changes.
- AWGS 1.1 work begins.
- Certification or validator work becomes active.
- RAG moves from mock to real implementation.
- A recurring agent mistake is observed.
- The user corrects project direction.
- Website architecture changes.
- Conformance language changes.
- Legal or policy positioning changes.
- A new document type is introduced.

## When To Update Steward Rules

Update steward rules only when:

- The change reflects an accepted project decision.
- The change prevents repeated mistakes.
- The change clarifies current scope.
- The change removes outdated guidance.
- The change improves future agent consistency.

## When Not To Update Steward Rules

Do not update steward rules just because:

- A one-off task was completed.
- Wording changed slightly.
- A temporary experiment was added.
- A future idea was mentioned but not accepted.

## Required Update Process

When updating a steward rule:

1. Identify which steward is affected.
2. Check whether the change affects project scope.
3. Update the relevant steward file.
4. Update `AGENTS.md` only if global guidance changes.
5. Update `steward-changelog.md`.
6. Add unresolved future items to `steward-backlog.md`.
7. Do not implement future-stage features unless explicitly requested.

## Versioning

Use simple semantic versioning:

- Patch version for small clarifications.
- Minor version for new rules or sections.
- Major version for substantial governance changes.
