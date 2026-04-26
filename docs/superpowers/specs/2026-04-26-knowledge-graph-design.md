# Knowledge Graph / Public Journal — Design

**Date:** 2026-04-26
**Status:** Spec for review
**Owner:** Avyuk

## 1. Goal

Replace the existing Jekyll site at `avyukd.github.io` with a public, graph-rendered digital garden. Daily journal entries and longform posts live in a markdown vault; the static site renders them as an explorable knowledge graph, navigable by date or by topic.

The graph is the front door. A first-time visitor lands on the global graph, can pick a date to see that day's entries, or click any node to dive into a topic and explore its subgraph.

## 2. Non-goals

- Not multi-user. Single author (Avyuk), no auth, no comments.
- Not a CMS. Authoring happens in Claude Code against the local repo, not in a browser.
- Not a search engine. Quartz's built-in client-side search is enough; no external index.
- Not preserving the existing Jekyll site. The cutover is total. Pre-cutover state lives in a git tag (`pre-quartz`).
- Not backfilling the 11 `_posts/` from 2024–2025 in this phase. Those will arrive later from GDrive in a separate import pass.

## 3. Stack

- **Quartz v4** as the static site generator. Vendored into the repo (Quartz's recommended workflow), not used as a dependency.
- **Bun** as runtime and package manager.
- **GitHub Actions** for build; **GitHub Pages** for hosting (root `avyukd.github.io`).
- **Anthropic SDK** (TypeScript) for the bootstrap enrichment script and the `/journal` slash command.
- **Claude Opus 4.7** for enrichment and journal authoring (highest-quality link inference is worth the cost; volume is low — one entry/day).

## 4. Repo layout

```
avyukd.github.io/
├── content/                          # the vault
│   ├── index.md                      # graph-landing front page
│   ├── journal/
│   │   └── YYYY-MM-DD.md             # one per day
│   ├── posts/
│   │   ├── legacy/                   # the 13 enriched root posts land here
│   │   └── <slug>.md                 # future longform
│   └── topics/
│       └── <topic-slug>.md           # concept stubs
├── quartz/                           # vendored Quartz framework
│   └── plugins/
│       └── custom/                   # our additions (see §6)
├── quartz.config.ts                  # Quartz config + plugin wiring
├── quartz.layout.ts                  # page layouts
├── .github/workflows/deploy.yml
├── .claude/
│   └── skills/
│       └── journal/                  # /journal slash command
│           └── SKILL.md
├── scripts/
│   └── enrich-legacy.ts              # one-shot bootstrap enrichment
├── docs/superpowers/specs/
│   └── 2026-04-26-knowledge-graph-design.md   # this file
└── README.md
```

## 5. Content model

Three node types, distinguished by folder and `type` frontmatter.

### 5.1 Journal entry

- **Path:** `content/journal/YYYY-MM-DD.md`
- **One per day.** Filename is the canonical date; no time component.
- **Frontmatter:**
  ```yaml
  ---
  title: YYYY-MM-DD
  date: YYYY-MM-DD
  type: journal
  tags: [tag1, tag2]
  ---
  ```
- **Body:** free-form prose, `[[wikilinks]]` to topic notes and other entries.

### 5.2 Longform post

- **Path:** `content/posts/<slug>.md`, or `content/posts/legacy/<original-filename>.md` for the 13 imported essays.
- **Frontmatter:**
  ```yaml
  ---
  title: Human Title
  date: YYYY-MM-DD
  type: post
  tags: [tag1, tag2, tag3]
  summary: One-line description used by previews and AI context.
  ---
  ```

### 5.3 Topic note

- **Path:** `content/topics/<kebab-slug>.md`
- **Frontmatter:**
  ```yaml
  ---
  title: Display Name
  type: topic
  tags: [parent-tag1, parent-tag2]
  ---
  ```
- **Body:** optional curator prose. Backlinks (auto-rendered by Quartz) are the primary value.
- **Created by:** the bootstrap enrichment pass for legacy seeding, and by the `/journal` skill on demand when the user references a new concept.

### 5.4 Tags vs topic notes

Distinct, complementary primitives:

- **Tags** are flat metadata. Coarse-grained categories (`investing`, `commodities`, `meta`). One tag groups many notes for filtering.
- **Topic notes** are nodes. Fine-grained concepts (`uranium`, `palantir`, `VAL-warrants`). One topic note is a destination — you click it to read about it and see all backlinks.

The bootstrap pass picks ~5–10 high-level tags and treats company/concept names as topic notes.

## 6. Custom Quartz pieces

Quartz v4 gives us most of what we need out of the box: wikilinks, backlinks, transclusions, tags, force-directed graph, search, SPA routing. The custom work is small and additive.

### 6.1 Landing page (graph-dominant)

`content/index.md` is rewired so the front page renders the global graph fullscreen-ish (~80% of viewport), with a thin top header containing the site title and one-line tagline, and a small date-picker control in a corner of the header.

Implementation: a custom layout variant (`quartz.layout.ts`) used only for `index.md` that swaps the normal article body for the existing `Graph` component pinned to fill the available space. No new rendering code — we lean on Quartz's existing `Graph.tsx`.

### 6.2 Date picker / calendar component

A new client-side component, `Calendar.tsx`, mounted in the header (or in a sidebar slot — to be finalized during implementation). Behavior:

- Renders a compact calendar grid (current month + month navigation).
- Days that have a journal entry are highlighted.
- Clicking a day navigates to `/journal/YYYY-MM-DD`.

Powered by a new emitter plugin (§6.3) that ships a JSON index of all journal dates.

### 6.3 New emitter: `JournalIndex`

A custom Quartz emitter at `quartz/plugins/custom/journalIndex.ts`. At build time it:

- Walks all files under `content/journal/`.
- Emits `static/journal-index.json`: `{ "dates": ["2026-04-26", "2026-04-27", ...] }`.
- The `Calendar` component fetches this on mount.

This mirrors how the existing `ContentIndex` plugin powers the graph and search.

### 6.4 Topic-subgraph view

Already free from Quartz: clicking a topic node lands you on the topic's page, which renders a *local* graph (depth=1 by default — configurable) plus the auto-generated backlinks list. We just enable `Graph` in the topic-page layout and tune `localGraph.depth` to 2 for richer exploration.

### 6.5 Optional: tag-filtered global graph

Quartz's graph already supports `showTags` / `removeTags`. We wire a small "filter by tag" affordance into the global graph header that toggles which tags are rendered. If this turns out to be more involved than expected during implementation, defer it — it's not on the critical path.

## 7. Bootstrap: enrichment of the 13 legacy posts

A one-shot script: `scripts/enrich-legacy.ts`. Run once to seed the vault.

### 7.1 Inputs

The 13 root-level `.md` files currently in the repo (2020-12 through 2023-02).

### 7.2 Pipeline

For each post:

1. **Parse** the existing markdown. Extract date from filename, infer title from filename (kebab-case → title-case unless overridden).
2. **First pass — single-doc enrichment.** Send the post body to Claude with a structured-output schema asking for:
   - 3–7 tags (from a controlled vocabulary the script accumulates as it runs)
   - 1-line summary
   - List of candidate topic-note names mentioned (companies, concepts, people)
3. **Accumulate** the global candidate-topic set across all posts.
4. **Second pass — cross-linking.** With the full set of topics known, send each post body again with the topic list and ask Claude to insert `[[topic-slug]]` wikilinks at appropriate first mentions in the prose. Output is the rewritten body.
5. **Emit** the enriched post to `content/posts/legacy/<original-filename>.md` with frontmatter from step 2 and body from step 4.
6. **Emit** stub topic notes to `content/topics/<slug>.md` for every accumulated topic, with empty body and inferred parent tags.

The two-pass design avoids the "tag hallucination" problem — the second pass only links to topics that actually exist after the first pass settles.

### 7.3 Token cost

Bounded: 13 posts × 2 passes × ~5–13K each = ~150K input tokens, ~50K output. Well under $5 on Opus 4.7. Run once, commit results, never run again.

### 7.4 Determinism / review

Output is committed to git as a single commit on `main` (solo repo, no PR flow). The user reviews the diff before pushing and can edit or revert any of the enriched output. The script is idempotent only in the sense that re-running it overwrites the legacy folder — it's not designed to be re-run incrementally.

## 8. Daily journal workflow — `/journal` slash command

A Claude Code skill at `.claude/skills/journal/SKILL.md`. Invoked as `/journal` from inside the repo.

### 8.1 Flow

1. **Greet & prompt.** Ask for the day's raw thoughts (text, can be long-form rambles).
2. **Read context.** Skill loads:
   - List of all existing topic notes (`content/topics/*.md` filenames + frontmatter)
   - Recent journal entries (last 7 days, full content) for tonal/topical continuity
   - Tag vocabulary
3. **Compose draft.** Claude writes a structured journal entry: cleans up the prose lightly (preserving voice), adds frontmatter, inserts `[[wikilinks]]` to existing topic notes where natural, identifies any *new* topic notes that should be created.
4. **Review with user.** Show the draft. User edits inline / accepts / rejects.
5. **Write files.**
   - `content/journal/YYYY-MM-DD.md` (the entry)
   - `content/topics/<new-topic-slug>.md` (stubs for any newly identified concepts)
6. **Commit.** With a message like `journal: 2026-04-26`.

### 8.2 Handling existing-day entries

If `content/journal/YYYY-MM-DD.md` already exists, the skill appends to it under a new `## <time>` heading rather than overwriting. (Single source of truth per day.)

### 8.3 Voice preservation

The skill's prompt is conservative: minimal copy-editing, no rewriting for "clarity," preserve sentence structure and idiom. The user's raw input is the canonical voice; the AI's job is structure (frontmatter, links, file placement) and *suggestion* (new topic stubs), not authorship.

## 9. Build & deploy

### 9.1 Local

- `bun install`
- `bun run build` → static output in `public/`
- `bun run dev` → local dev server with hot reload

### 9.2 CI

`.github/workflows/deploy.yml` triggers on push to `main`:

1. Checkout, install Bun.
2. `bun install`.
3. `bun run build`.
4. Deploy `public/` to `gh-pages` branch via `peaceiris/actions-gh-pages` (or GitHub's first-party Pages action).

GitHub Pages is configured to serve from the `gh-pages` branch root.

### 9.3 Domain

Stays at `avyukd.github.io` (root user-pages). No CNAME / custom domain in this phase.

## 10. Migration plan

In order:

1. **Tag current state:** `git tag pre-quartz && git push origin pre-quartz`. Recoverable forever.
2. **Wipe** the working tree of the existing Jekyll site (keep `.git`, keep this `docs/` folder).
3. **Scaffold** Quartz v4 into the repo per Quartz's official setup.
4. **Move** the 13 legacy `.md` files into a temp staging dir; run the enrichment script; output lands under `content/posts/legacy/` and `content/topics/`.
5. **Wire** custom plugins/components (§6).
6. **Configure** GitHub Pages to deploy from the `gh-pages` branch (one-time manual step in repo Settings → Pages).
7. **Push.** First deploy goes live.

The 11 `_posts/` files from 2024–2025 are not migrated in this phase; they're deferred until the GDrive backfill.

## 11. Open questions to resolve during implementation

These are not blockers for the spec but will need decisions in the plan:

- Exact Calendar component placement: header vs. floating panel vs. sidebar slot.
- Whether the enrichment script's two passes use prompt caching (probably yes — the topic vocabulary on pass 2 is a stable prefix).
- Whether to enable Quartz's RSS / sitemap plugins (low cost; probably yes).
- Whether topic-note pages should auto-render a list of related topics (would require a small extension to the local graph, or be done as a build-time emitter).

## 12. Success criteria

This phase is done when:

1. Visiting `avyukd.github.io` shows the global graph as the front page, with all 13 legacy posts plus their topic stubs as nodes.
2. Clicking a node navigates to that note; the topic's local graph + backlinks render correctly.
3. The date picker in the header navigates to `/journal/YYYY-MM-DD` for any date with a journal entry.
4. Running `/journal` in Claude Code from the repo produces a committed journal entry with frontmatter, links, and any new topic stubs — end to end, in one session.
5. Pushing to `main` triggers the GH Actions build and the new content is live within a few minutes.
