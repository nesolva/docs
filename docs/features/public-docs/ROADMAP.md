# Public docs: roadmap

## Goal
docs.nesolva.com helps end users and merchant admins of Ailita and Alfred do things on their own: get started,
manage their account, recover access, fix common problems, and find support. Spanish first, then English.

## Decisions
- No API reference and no SDK docs. Ailita and Alfred have no official public API yet, and the SDK is internal.
- Audience: end users and merchant admins only. Developer and internal material goes to a separate private site.
- Content rules: every page follows the content rules in the worker's session brief and passes
  `scripts/check-public-content.sh`. If your brief has no content rules, stop and ask. Don't guess.
- Source of truth for flows, labels and error messages: [SOURCE-FACTS.md](SOURCE-FACTS.md). Writers have no
  access to the product repos. A fact that isn't there is not invented: write it under the task's Result.
- Spanish is the default language. English comes in phase 3. Both use the Mintlify `navigation.languages` structure
  from the start (`es/...`, `en/...`), so phase 3 doesn't move any paths.
- Phase 1 creates every page as a stub and owns `docs.json`. Phase 2 tasks only fill their own pages and never edit
  `docs.json`, so parallel PRs don't conflict.
- This plan lives in the public repo under `docs/features/` and is excluded from the site by `.mintignore`. It must
  contain nothing the content rules forbid.
- Spanish in voseo ("ingresá", "revisá"), the same register as the product UIs.
- Release branches: `release/public-docs-p<n>` is cut from main when its phase starts. Phase 2 starts after phase 1
  is merged to main.
- Style: AGENTS.md (second person, active voice, sentence-case headings, **bold** for UI labels). Use the UI's exact
  labels from SOURCE-FACTS.md.

## Contracts
- Page paths: `es/<section>/<page>.mdx`. Phase 3 mirrors them under `en/`. The page list is in T-01.
- Every page has frontmatter with `title`, `description` and `icon`, and ends with a "¿Necesitas ayuda?"
  (`en`: "Need help?") snippet from `snippets/`, which links to support.
- Troubleshooting entries use one shape: **Symptom** (the exact message or what the user sees), **Why** (in
  user terms), **What to do** (steps), **Still stuck** (link to support).
- No numbers for limits, waits or lifetimes ("after several attempts", "the code expires after a few minutes").
- No screenshots in phases 1–3 (see Open questions).

## Phases and tasks
<!-- Release PR: release/public-docs-p<n> → main; task PRs target the phase's release branch. Phase 1: #2, phase 2: #8 (merged). -->
### Phase 1: foundation (ships a clean site with stubs)
| Task | Repo | Depends on | Status | PR | Note |
|---|---|---|---|---|---|
| [T-01](tasks/T-01.md) Remove template, set up skeleton, content check | nesolva/docs | — | merged | [#1](https://github.com/nesolva/docs/pull/1) | release PR [#2](https://github.com/nesolva/docs/pull/2) |

### Phase 2: Spanish content (parallel)
| Task | Repo | Depends on | Status | PR | Note |
|---|---|---|---|---|---|
| [T-02](tasks/T-02.md) Ailita: getting started and your account (end users) | nesolva/docs | T-01 merged | merged | [#4](https://github.com/nesolva/docs/pull/4) |
| [T-03](tasks/T-03.md) Ailita for organization administrators | nesolva/docs | T-01 merged | merged | [#6](https://github.com/nesolva/docs/pull/6) |
| [T-04](tasks/T-04.md) Ailita: recover access and troubleshooting | nesolva/docs | T-01 merged | merged | [#7](https://github.com/nesolva/docs/pull/7) |
| [T-05](tasks/T-05.md) Alfred section | nesolva/docs | T-01 merged | merged | [#5](https://github.com/nesolva/docs/pull/5) |
| [T-06](tasks/T-06.md) Help: support, status, changelog, data and privacy | nesolva/docs | T-01 merged | merged | [#3](https://github.com/nesolva/docs/pull/3) |

### Phase 3: English
| Task | Repo | Depends on | Status | PR | Note |
|---|---|---|---|---|---|
| [T-07](tasks/T-07.md) English version of every page and language switcher | nesolva/docs | phase 2 merged | todo | | |

## Open questions
- Is the data and privacy page reviewed by legal before it is published? (Nicolás)
- What is the status page URL, and does a changelog already exist? (Nicolás) If not, T-06 publishes a changelog
  page with a single entry and leaves out the status link.
- Screenshots: from which environment and account can they be taken without real data? (Nicolás)
- Is the default language Spanish or English? Spanish is assumed. (Nicolás)
- Alfred in English shows raw status codes (PENDING, MANUAL_REVIEW…). Fix that in alfred-ui before T-07, or have T-07
  document the codes. (Nicolás)
- Should the public docs state the password minimum length? Not stated for now. (Nicolás)

## Log
- 2026-11-05: phase 2 merged to main (#8).
- 2026-11-05: phase 2 integrated (#3–#7). The content check no longer flags accented Spanish words or the status "Pendiente".
- 2026-11-05: T-01 integrated (#1). Phase 2 started from release/public-docs-p2, cut from release/public-docs-p1.
- 2026-11-04: plan created. The Ailita SDK pages were removed from the public site, and the repo history was
  replaced with a single commit.
