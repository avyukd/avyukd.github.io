# avyukd.github.io

Public knowledge graph + journal. Built on [Quartz v4](https://quartz.jzhao.xyz).

Live at https://avyukd.github.io.

## Local development

```bash
bun install
bun run dev    # http://localhost:8080
bun run build  # → public/
```

Requires Node 22+ and Bun.

## Authoring

- **New journal entry:** in Claude Code, run `/journal` (slash command at `.claude/commands/journal.md`). It drafts an entry from your raw thoughts, inserts wikilinks to existing topic notes, proposes new topic stubs, writes the file, and commits.
- **New longform post:** add a markdown file under `content/posts/` with `type: post` frontmatter.
- **New topic stub:** add a file under `content/topics/` with `type: topic` frontmatter, or let `/journal` create it.

## Content layout

```
content/
├── index.md            # graph-landing page
├── journal/            # YYYY-MM-DD.md, one per day
├── posts/
│   └── legacy/         # 12 enriched essays from 2020–2022
└── topics/             # concept stubs (uranium.md, palantir.md, …)
```

## Custom Quartz pieces

- `quartz/plugins/custom/journalIndex.ts` — emitter that writes `static/journal-index.json` (powers the date picker).
- `quartz/components/Calendar.tsx` — header date-picker that opens to a month grid; days with entries are clickable.
- `quartz/components/Graph.tsx` — patched so the index page (`cssclasses: [graph-landing]`) renders the global graph inline.
- `quartz/styles/custom.scss` — landing-page CSS that promotes the graph into a 78vh full-width band.

## Architecture & history

- Design spec: `docs/superpowers/specs/2026-04-26-knowledge-graph-design.md`
- Implementation plan: `docs/superpowers/plans/2026-04-26-knowledge-graph.md`
- Pre-Quartz Jekyll site: tag `pre-quartz`

## Deploy

`main` → GitHub Actions (`.github/workflows/deploy.yml`) → GitHub Pages.
