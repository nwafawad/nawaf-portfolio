# Project evidence

Reviewed on 2026-09-23 through the GitHub connector. This record supports the
portfolio copy; it is a source review, not a report of running these applications
or their test suites. Links below pin the reviewed repository snapshots.

## Selection and attribution

Selected order: Asala Hub, Momentum, RECYX. Shilla and the Elevanda project entry
are excluded at the owner's request. The existing internship biography and
downloadable résumé are outside this project-content refresh.

Existing Asala and Momentum role labels are retained from the portfolio. Their
descriptions use project-level wording and do not assign individual subsystems
to Nawaf without contribution evidence. RECYX's README explicitly credits Nawaf
with backend development, authentication, and listing/technician/transaction
routers. Other team roles must not be presented as his individual work.

## Asala Hub

Repository: `nwafawad/Asala_Hub`  
Commit: `9f847e39e7046bad72bdcae23f02434f6479e811`

- [README](https://github.com/nwafawad/Asala_Hub/blob/9f847e39e7046bad72bdcae23f02434f6479e811/README.md): product audience, role-based portals, Next.js/FastAPI/PostgreSQL architecture.
- [Browser database](https://github.com/nwafawad/Asala_Hub/blob/9f847e39e7046bad72bdcae23f02434f6479e811/frontend/src/lib/db.ts): Dexie tables for cached courses, modules, submissions, and mutation logs.
- [Sync provider](https://github.com/nwafawad/Asala_Hub/blob/9f847e39e7046bad72bdcae23f02434f6479e811/frontend/src/context/SyncContext.tsx): connectivity handling, pending/failed states, batch processing, and retry backoff.
- [Sync service](https://github.com/nwafawad/Asala_Hub/blob/9f847e39e7046bad72bdcae23f02434f6479e811/backend/app/services/sync_service.py): transaction-ID checks, schema versions, submission merge/conflict handling, and grade-write permissions.
- [Sync tests](https://github.com/nwafawad/Asala_Hub/blob/9f847e39e7046bad72bdcae23f02434f6479e811/backend/tests/test_sync.py): cases for duplicates, gzip payloads, text merges, conflicts, and role checks. Test existence does not establish current passing status.

Removed: 15 chapters under 8 MB, 80% payload reduction, Gemini-generated review
cards, and a blanket last-write-wins explanation. The inspected code supports
more specific reconciliation behavior. Do not call its two-input text merge a
general three-way merge solely because a comment uses that term. Duplicate checks
are described as checks, not a proven concurrency guarantee.

## Momentum / Himma

Repository: `nwafawad/himma`  
Commit: `ed5bc22a5488bdbeece7e5dae794e3aa6a2aba8d`

- [README](https://github.com/nwafawad/himma/blob/ed5bc22a5488bdbeece7e5dae794e3aa6a2aba8d/README.md): personal learning activities, reflections, and architecture.
- [Frontend manifest](https://github.com/nwafawad/himma/blob/ed5bc22a5488bdbeece7e5dae794e3aa6a2aba8d/frontend/package.json): Next.js, React, and TypeScript dependencies.
- [Import service](https://github.com/nwafawad/himma/blob/ed5bc22a5488bdbeece7e5dae794e3aa6a2aba8d/backend/src/modules/imports/import.service.ts): normalized/deduplicated staging and transactional confirmation into activity records.
- [AI pipeline](https://github.com/nwafawad/himma/blob/ed5bc22a5488bdbeece7e5dae794e3aa6a2aba8d/backend/src/modules/insights/ai/aiEngine.service.ts): Zod output validation, citation-ID checks, retries, and local heuristic paths for absent API configuration and quota errors.
- [Insight service](https://github.com/nwafawad/himma/blob/ed5bc22a5488bdbeece7e5dae794e3aa6a2aba8d/backend/src/modules/insights/insights.service.ts): persistence of insight runs and feedback-driven profile correction through Prisma.

Removed: recruitment screening, candidate competency benchmarks, FastAPI/Pydantic/
Supabase stack, zero parsing failures, and cached responses under 150 ms. The
public repository represents a personal learning implementation. Citation-ID
validation does not prove the truth of model interpretations or learner mastery.
Import acceptance and insight feedback are distinct flows; do not imply all
generated insights remain unpersisted until accepted.

## RECYX

Repository: `nwafawad/foundationsproject`  
Commit: `390fcd79f2be9fece5beff14b5901f487f0e521e`

- [README and team contributions](https://github.com/nwafawad/foundationsproject/blob/390fcd79f2be9fece5beff14b5901f487f0e521e/README.md): Rwanda marketplace audience, team attribution, SQLite development setup, documented PostgreSQL deployment, and demo-data limitation.
- [Transaction service](https://github.com/nwafawad/foundationsproject/blob/390fcd79f2be9fece5beff14b5901f487f0e521e/backend/app/services/transaction_service.py): available-listing checks, self-offer prevention, participant checks, and allowed state transitions.
- [State-machine tests](https://github.com/nwafawad/foundationsproject/blob/390fcd79f2be9fece5beff14b5901f487f0e521e/backend/tests/test_transaction_state_machine.py): tests targeting the transition map; not evidence of concurrent request safety.

Removed: SELECT FOR UPDATE locking, double-entry ledger, retry-safe transaction
hashes, 50-request claim benchmark, 92% coverage, and sub-60 ms confirmation. The
inspected service does not substantiate those guarantees. The README's production
badge and payment-integration descriptions are not promoted to verified claims.
No live-demo link is published by this refresh.

## Content maintenance

- Recheck source code before adding a capability or changing the stack. Treat
  README assertions as documentation when the implementation does not support them.
- Record the measurement setup and result before adding performance figures.
- Keep illustrative diagrams visibly labelled as schematics.
- Keep public repository links in frontmatter; commit-pinned evidence stays here.
- Retain existing slugs. `displayOrder` controls both the homepage and next-project
  navigation; omitted order sorts last with slug as the tie-breaker. Omitted
  `repositoryUrls` produces no source-link navigation.
