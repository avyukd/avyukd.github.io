# Knowledge Graph Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing Jekyll site at `avyukd.github.io` with a Quartz v4 knowledge garden featuring a graph-dominant landing page, a date-picker for navigating daily journal entries, custom emitters for date indexing, and a `/journal` slash command for daily authoring. Bootstrap the vault with the 13 legacy root markdown posts, enriched (tags, summaries, wikilinks, topic stubs) by a one-shot Claude-powered script.

**Architecture:** Vendor Quartz v4 into the repo, add three custom pieces (a `JournalIndex` emitter, a `Calendar` component, an index-page layout that pins the global graph). The bootstrap enrichment runs in two passes (single-doc tagging, then cross-link insertion) using the Anthropic SDK with prompt caching. Deploy via GitHub Actions to GitHub Pages.

**Tech Stack:** Quartz v4, Preact, TypeScript, Bun, unified.js (remark/rehype), Anthropic SDK (Claude Opus 4.7), GitHub Actions, GitHub Pages.

**Working directory:** `/home/avyuk/dev/avyukd.github.io` (already a git repo with the legacy Jekyll site checked in on `main`).

**Reference:** spec at `docs/superpowers/specs/2026-04-26-knowledge-graph-design.md`.

---

## Task 1: Tag and wipe pre-Quartz state

Preserve the existing Jekyll site as a git tag, then clear the working tree to make room for Quartz, while keeping `.git`, the `docs/` directory (containing this plan and the spec), and `.gitignore`.

**Files:**
- Tag: `pre-quartz`
- Keep: `.git/`, `docs/`, `.gitignore`
- Delete: everything else in the working tree

- [ ] **Step 1: Verify clean working tree**

```bash
git status --short
```
Expected: empty output (the spec was already committed in a prior step).

- [ ] **Step 2: Create the safety tag and push**

```bash
git tag pre-quartz
git push origin pre-quartz
```
Expected: `* [new tag] pre-quartz -> pre-quartz` in the push output.

- [ ] **Step 3: Wipe everything except `.git/`, `docs/`, `.gitignore`**

```bash
find . -maxdepth 1 -mindepth 1 \
  ! -name '.git' \
  ! -name 'docs' \
  ! -name '.gitignore' \
  -exec rm -rf {} +
ls -la
```
Expected: only `.`, `..`, `.git`, `.gitignore`, `docs` remain.

- [ ] **Step 4: Commit the wipe**

```bash
git add -A
git commit -m "chore: wipe Jekyll site, preserved at tag pre-quartz"
```

---

## Task 2: Scaffold Quartz v4 into the repo

Pull the Quartz v4 source into a temporary location, then copy its files into the repo root, excluding Quartz's own `docs/` (which would clobber ours) and `.git/`. Pin to a known-good commit so the layout is reproducible.

**Files (created by copy):** `quartz/`, `quartz.config.ts`, `quartz.layout.ts`, `package.json`, `tsconfig.json`, `globals.d.ts`, `index.d.ts`, `.prettierrc`, `.prettierignore`, plus Quartz's `.gitignore` (merged manually if needed).

- [ ] **Step 1: Clone Quartz into /tmp**

```bash
git clone --depth 1 https://github.com/jackyzha0/quartz.git /tmp/quartz-upstream
(cd /tmp/quartz-upstream && git rev-parse HEAD)
```
Expected: clones successfully, prints a commit SHA. Record the SHA in the next commit message.

- [ ] **Step 2: Copy Quartz files into the repo, excluding `.git` and Quartz's `docs/`**

```bash
rsync -av \
  --exclude='.git' \
  --exclude='docs/' \
  --exclude='content/' \
  /tmp/quartz-upstream/ ./
```

The `content/` exclude is intentional — we'll create our own `content/` from scratch in Task 8. Quartz's example content is not what we want.

- [ ] **Step 3: Create our `content/` directory with empty subfolders**

```bash
mkdir -p content/journal content/posts/legacy content/topics
touch content/index.md
```

- [ ] **Step 4: Merge `.gitignore`**

Read `/tmp/quartz-upstream/.gitignore` and append any entries that aren't already in our `.gitignore` (which currently just has `_site`).

```bash
cat /tmp/quartz-upstream/.gitignore
cat .gitignore
```

Replace `.gitignore` with the union, ensuring at minimum these entries are present:
```
node_modules/
public/
.quartz-cache/
*.log
.DS_Store
```

- [ ] **Step 5: Install dependencies with Bun**

```bash
bun install
```
Expected: bun resolves the package.json from upstream Quartz and installs without errors.

- [ ] **Step 6: Commit the scaffold**

```bash
git add -A
git commit -m "chore: scaffold Quartz v4 (upstream <SHA>)"
```
Replace `<SHA>` with the commit hash from Step 1.

---

## Task 3: Smoke-test the Quartz dev server

Confirm that the bare scaffold actually builds and serves before we customize it. This catches packaging / environment issues early.

- [ ] **Step 1: Add a placeholder home page**

Write `content/index.md`:

```markdown
---
title: Avyuk's Knowledge Graph
---

Placeholder. Will be replaced with the graph-landing layout in a later task.
```

- [ ] **Step 2: Run the dev server**

```bash
bun run quartz build --serve --port 8080
```

Expected: build completes, server starts on http://localhost:8080. Open the URL — confirm the placeholder page renders. Stop the server with Ctrl+C.

If `bun run quartz` fails because the script isn't defined, use `npx quartz build --serve --port 8080` instead and update `package.json` to expose a script:

```json
"scripts": {
  "build": "quartz build",
  "dev": "quartz build --serve"
}
```

Then retry `bun run dev`.

- [ ] **Step 3: Commit any package.json edits**

```bash
git add package.json
git commit -m "chore: add bun-friendly build/dev scripts" || echo "no changes"
```

---

## Task 4: Set up enrichment script harness

Create the directory structure and shared types for the bootstrap enrichment script. Add `@anthropic-ai/sdk` to dependencies. Write the entrypoint stub so subsequent tasks have a place to plug into.

**Files:**
- Create: `scripts/enrich-legacy.ts`
- Create: `scripts/types.ts`
- Modify: `package.json` (add dependency, add npm script)

- [ ] **Step 1: Add the Anthropic SDK**

```bash
bun add @anthropic-ai/sdk
bun add -d @types/node
```

- [ ] **Step 2: Create shared types**

Write `scripts/types.ts`:

```typescript
export type LegacyPost = {
  filename: string;       // e.g. "2021-08-09-a-bifurcated-market.md"
  date: string;           // ISO date "YYYY-MM-DD"
  title: string;          // human-readable title
  body: string;           // raw markdown body (no frontmatter)
};

export type Pass1Output = {
  tags: string[];         // 3-7 tags
  summary: string;        // one-line description
  topics: string[];       // candidate topic-note slugs (kebab-case)
};

export type EnrichedPost = {
  filename: string;       // output filename (same as legacy)
  date: string;
  title: string;
  tags: string[];
  summary: string;
  body: string;           // body with [[wikilinks]] inserted
};

export type TopicStub = {
  slug: string;           // kebab-case
  title: string;          // human-readable
  parentTags: string[];   // inferred parent tags (intersection of mentioning posts' tags)
};
```

- [ ] **Step 3: Create the script entrypoint stub**

Write `scripts/enrich-legacy.ts`:

```typescript
#!/usr/bin/env bun
/**
 * One-shot enrichment of the 13 legacy posts.
 * Produces:
 *   content/posts/legacy/<original-filename>.md
 *   content/topics/<slug>.md
 *
 * Re-running overwrites both directories — not designed to be incremental.
 */
import Anthropic from "@anthropic-ai/sdk";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const LEGACY_SOURCE = process.env.LEGACY_SOURCE_DIR ?? "/tmp/legacy-posts";
const OUT_POSTS = "content/posts/legacy";
const OUT_TOPICS = "content/topics";
const MODEL = "claude-opus-4-7";

async function main() {
  console.log("Enrichment script — not yet implemented");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

- [ ] **Step 4: Add the npm script**

In `package.json`, add to `"scripts"`:
```json
"enrich": "bun run scripts/enrich-legacy.ts"
```

- [ ] **Step 5: Commit**

```bash
git add scripts/ package.json bun.lockb
git commit -m "feat(enrich): scaffold enrichment script and types"
```

---

## Task 5: Implement Pass 1 — single-doc enrichment

Take a `LegacyPost` and call Claude to produce tags, summary, and candidate topics. Use structured output via the SDK's tool-calling feature. Write a unit test against a fixture.

**Files:**
- Create: `scripts/pass1.ts`
- Create: `scripts/pass1.test.ts`
- Create: `scripts/fixtures/sample-post.md`

- [ ] **Step 1: Create a fixture**

Write `scripts/fixtures/sample-post.md` (a small synthetic post used only for tests):

```markdown
# Notes on Uranium

The uranium market has been compressed for over a decade. Major producers
like Cameco and Kazatomprom have curtailed production. The supply deficit
is structural, and as utilities resume long-term contracting, prices should
re-rate. I've been holding URNM for two years.
```

- [ ] **Step 2: Write the failing test**

Write `scripts/pass1.test.ts`:

```typescript
import { describe, it, expect } from "bun:test";
import { readFile } from "node:fs/promises";
import { runPass1 } from "./pass1";

describe("runPass1", () => {
  it("returns tags, summary, and topics from a sample post", async () => {
    const body = await readFile("scripts/fixtures/sample-post.md", "utf8");
    const result = await runPass1({
      filename: "2024-01-01-uranium.md",
      date: "2024-01-01",
      title: "Notes on Uranium",
      body,
    });

    expect(result.tags.length).toBeGreaterThanOrEqual(3);
    expect(result.tags.length).toBeLessThanOrEqual(7);
    expect(result.summary.length).toBeGreaterThan(0);
    expect(result.summary.length).toBeLessThan(200);
    expect(result.topics).toContain("uranium");
  }, 60_000);
});
```

- [ ] **Step 3: Run test to verify it fails**

```bash
bun test scripts/pass1.test.ts
```
Expected: FAIL with "Cannot find module ./pass1" or similar.

- [ ] **Step 4: Implement Pass 1**

Write `scripts/pass1.ts`:

```typescript
import Anthropic from "@anthropic-ai/sdk";
import type { LegacyPost, Pass1Output } from "./types";

const MODEL = "claude-opus-4-7";

const SYSTEM = `You are an editorial assistant analyzing a personal blog post.
Your job is to extract metadata that will be used to wire the post into a knowledge graph.

For each post you receive:
1. Pick 3-7 tags. Tags are flat, lowercase-kebab-case categories. Reuse existing tags when possible (you'll be told which exist).
2. Write a one-line summary, max 200 chars, no period at the end. Should describe the post's argument/content concretely.
3. List candidate topic notes — specific entities (companies, people, concepts, securities) the post discusses that deserve their own node in the graph. Use kebab-case slugs. Examples: "uranium", "palantir", "val-warrants", "intrinsic-value". Avoid overly generic concepts like "investing" or "writing" — those are tags, not topics.

Be conservative on topics — only list things the post is materially about, not passing references.`;

export async function runPass1(post: LegacyPost, existingTags: string[] = []): Promise<Pass1Output> {
  const client = new Anthropic();
  const userPrompt = `Existing tag vocabulary (reuse when applicable): ${existingTags.length ? existingTags.join(", ") : "(none yet)"}

Post title: ${post.title}
Post date: ${post.date}

Post body:
---
${post.body}
---

Return your analysis using the provided tool.`;

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 1024,
    system: SYSTEM,
    tools: [
      {
        name: "submit_metadata",
        description: "Submit the extracted tags, summary, and topics for this post.",
        input_schema: {
          type: "object",
          properties: {
            tags: {
              type: "array",
              items: { type: "string" },
              minItems: 3,
              maxItems: 7,
            },
            summary: { type: "string" },
            topics: { type: "array", items: { type: "string" } },
          },
          required: ["tags", "summary", "topics"],
        },
      },
    ],
    tool_choice: { type: "tool", name: "submit_metadata" },
    messages: [{ role: "user", content: userPrompt }],
  });

  const toolUse = response.content.find((b) => b.type === "tool_use");
  if (!toolUse || toolUse.type !== "tool_use") {
    throw new Error("Pass 1: Claude did not return a tool_use block");
  }
  return toolUse.input as Pass1Output;
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY bun test scripts/pass1.test.ts
```
Expected: PASS within 60 seconds. The user's `ANTHROPIC_API_KEY` must be set in the shell.

If the test fails because of an API issue (rate limit, auth), surface the error to the user before proceeding.

- [ ] **Step 6: Commit**

```bash
git add scripts/pass1.ts scripts/pass1.test.ts scripts/fixtures/
git commit -m "feat(enrich): pass 1 — single-doc tag/summary/topic extraction"
```

---

## Task 6: Implement Pass 2 — cross-link insertion

Given a post body and the full set of topic slugs (collected from Pass 1 across all posts), call Claude to insert `[[topic-slug]]` wikilinks at appropriate first mentions.

**Files:**
- Create: `scripts/pass2.ts`
- Create: `scripts/pass2.test.ts`

- [ ] **Step 1: Write the failing test**

Write `scripts/pass2.test.ts`:

```typescript
import { describe, it, expect } from "bun:test";
import { runPass2 } from "./pass2";

describe("runPass2", () => {
  it("inserts wikilinks for known topics on first mention", async () => {
    const body = `The uranium market is interesting. I've been holding URNM
for two years. Cameco's production cuts have been the structural driver.`;

    const topics = ["uranium", "cameco", "urnm"];
    const result = await runPass2(body, topics);

    expect(result).toContain("[[uranium]]");
    expect(result).toContain("[[cameco]]");
    expect(result).toContain("[[urnm]]");
  }, 60_000);

  it("preserves prose structure (paragraph count unchanged)", async () => {
    const body = `Para one with uranium.\n\nPara two with cameco.\n\nPara three.`;
    const result = await runPass2(body, ["uranium", "cameco"]);
    const beforeParas = body.split(/\n\n+/).length;
    const afterParas = result.split(/\n\n+/).length;
    expect(afterParas).toBe(beforeParas);
  }, 60_000);
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
bun test scripts/pass2.test.ts
```
Expected: FAIL with module-not-found.

- [ ] **Step 3: Implement Pass 2**

Write `scripts/pass2.ts`:

```typescript
import Anthropic from "@anthropic-ai/sdk";

const MODEL = "claude-opus-4-7";

const SYSTEM = `You are inserting wikilinks into a markdown post for an Obsidian-style knowledge graph.

Rules:
1. Only link to topic slugs from the provided list. Never invent new ones.
2. Link only the FIRST mention of each topic in the post. Subsequent mentions stay plain text.
3. Use the syntax [[slug]] or [[slug|display text]]. Use the second form only when the prose word differs from the slug (e.g. "Cameco" → [[cameco|Cameco]]).
4. Do NOT modify the prose otherwise. Preserve paragraph breaks, formatting, headings, code blocks, lists, and the author's voice exactly.
5. Do NOT insert links inside code blocks, links, or existing wikilinks.
6. If a topic from the list is not actually mentioned in the post, do not invent a mention for it — just leave it unlinked.

Return only the rewritten markdown body. No commentary, no fences, no preamble.`;

export async function runPass2(body: string, topics: string[]): Promise<string> {
  const client = new Anthropic();
  const userPrompt = `Topic slugs available for linking:
${topics.map((t) => `- ${t}`).join("\n")}

Markdown body:
---
${body}
---

Return the rewritten body with wikilinks inserted at first mentions.`;

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 8192,
    system: SYSTEM,
    messages: [{ role: "user", content: userPrompt }],
  });

  const text = response.content.find((b) => b.type === "text");
  if (!text || text.type !== "text") {
    throw new Error("Pass 2: Claude did not return a text block");
  }
  return text.text.trim();
}
```

- [ ] **Step 4: Run tests to verify pass**

```bash
ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY bun test scripts/pass2.test.ts
```
Expected: both tests PASS.

- [ ] **Step 5: Commit**

```bash
git add scripts/pass2.ts scripts/pass2.test.ts
git commit -m "feat(enrich): pass 2 — cross-link wikilink insertion"
```

---

## Task 7: Wire up the enrichment orchestrator

Replace the stub in `enrich-legacy.ts` with the real pipeline: read every `.md` file in the source directory, run Pass 1 on each (accumulating the tag vocabulary and topic set as it goes), then run Pass 2 on each with the global topic list, then write outputs.

**Files:**
- Modify: `scripts/enrich-legacy.ts`

- [ ] **Step 1: Write helper utilities inline in enrich-legacy.ts**

Replace the contents of `scripts/enrich-legacy.ts`:

```typescript
#!/usr/bin/env bun
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { join, basename } from "node:path";
import type { LegacyPost, EnrichedPost, TopicStub } from "./types";
import { runPass1 } from "./pass1";
import { runPass2 } from "./pass2";

const LEGACY_SOURCE = process.env.LEGACY_SOURCE_DIR ?? "/tmp/legacy-posts";
const OUT_POSTS = "content/posts/legacy";
const OUT_TOPICS = "content/topics";

const FILENAME_RE = /^(\d{4}-\d{2}-\d{2})-(.+)\.md$/;

function parseFilename(filename: string): { date: string; titleSlug: string } | null {
  const m = FILENAME_RE.exec(filename);
  if (!m) return null;
  return { date: m[1], titleSlug: m[2] };
}

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w.length <= 3 && w.toUpperCase() === w ? w : w[0].toUpperCase() + w.slice(1).toLowerCase()))
    .join(" ");
}

function stripFrontmatter(body: string): string {
  if (!body.startsWith("---")) return body;
  const end = body.indexOf("\n---", 3);
  if (end === -1) return body;
  return body.slice(end + 4).replace(/^\n+/, "");
}

function renderFrontmatter(post: EnrichedPost): string {
  const tags = post.tags.map((t) => `  - ${t}`).join("\n");
  return `---
title: ${JSON.stringify(post.title)}
date: ${post.date}
type: post
tags:
${tags}
summary: ${JSON.stringify(post.summary)}
---
`;
}

function renderTopic(topic: TopicStub): string {
  const tags = topic.parentTags.map((t) => `  - ${t}`).join("\n");
  return `---
title: ${JSON.stringify(topic.title)}
type: topic
tags:
${tags}
---

`;
}

async function loadLegacy(): Promise<LegacyPost[]> {
  const files = await readdir(LEGACY_SOURCE);
  const mds = files.filter((f) => f.endsWith(".md"));
  const out: LegacyPost[] = [];
  for (const f of mds) {
    const parsed = parseFilename(f);
    if (!parsed) {
      console.warn(`Skipping unrecognized filename: ${f}`);
      continue;
    }
    const raw = await readFile(join(LEGACY_SOURCE, f), "utf8");
    out.push({
      filename: f,
      date: parsed.date,
      title: slugToTitle(parsed.titleSlug),
      body: stripFrontmatter(raw),
    });
  }
  return out;
}

async function main() {
  console.log(`Loading legacy posts from ${LEGACY_SOURCE}...`);
  const posts = await loadLegacy();
  console.log(`Loaded ${posts.length} posts.`);

  // ----- Pass 1: per-doc enrichment -----
  console.log("\n=== Pass 1: extracting tags/summary/topics ===");
  const tagVocab = new Set<string>();
  const topicMentions = new Map<string, Set<string>>(); // slug → posts that mention it
  const pass1Results = new Map<string, { tags: string[]; summary: string; topics: string[] }>();

  for (const post of posts) {
    process.stdout.write(`  ${post.filename}... `);
    const meta = await runPass1(post, [...tagVocab]);
    pass1Results.set(post.filename, meta);
    meta.tags.forEach((t) => tagVocab.add(t));
    meta.topics.forEach((slug) => {
      if (!topicMentions.has(slug)) topicMentions.set(slug, new Set());
      topicMentions.get(slug)!.add(post.filename);
    });
    console.log(`tags=${meta.tags.length} topics=${meta.topics.length}`);
  }

  console.log(`\nTag vocab (${tagVocab.size}): ${[...tagVocab].join(", ")}`);
  console.log(`Topic candidates (${topicMentions.size}): ${[...topicMentions.keys()].join(", ")}`);

  // ----- Pass 2: cross-link insertion -----
  console.log("\n=== Pass 2: inserting wikilinks ===");
  const allTopics = [...topicMentions.keys()];
  const enriched: EnrichedPost[] = [];

  for (const post of posts) {
    process.stdout.write(`  ${post.filename}... `);
    const meta = pass1Results.get(post.filename)!;
    const linked = await runPass2(post.body, allTopics);
    enriched.push({
      filename: post.filename,
      date: post.date,
      title: post.title,
      tags: meta.tags,
      summary: meta.summary,
      body: linked,
    });
    console.log("done");
  }

  // ----- Emit posts -----
  await mkdir(OUT_POSTS, { recursive: true });
  for (const e of enriched) {
    const fm = renderFrontmatter(e);
    await writeFile(join(OUT_POSTS, e.filename), fm + "\n" + e.body + "\n");
  }
  console.log(`\nWrote ${enriched.length} posts to ${OUT_POSTS}/`);

  // ----- Emit topic stubs -----
  await mkdir(OUT_TOPICS, { recursive: true });
  for (const [slug, mentioningFiles] of topicMentions) {
    // Parent tags = intersection of tags from all posts mentioning this topic
    const tagSets = [...mentioningFiles].map((fn) => new Set(pass1Results.get(fn)!.tags));
    const intersection = tagSets.reduce<Set<string>>((acc, s) => {
      if (acc === null) return s;
      return new Set([...acc].filter((t) => s.has(t)));
    }, null as unknown as Set<string>);
    const parentTags = [...intersection].slice(0, 3);

    const stub: TopicStub = {
      slug,
      title: slugToTitle(slug),
      parentTags,
    };
    await writeFile(join(OUT_TOPICS, `${slug}.md`), renderTopic(stub));
  }
  console.log(`Wrote ${topicMentions.size} topic stubs to ${OUT_TOPICS}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

- [ ] **Step 2: Smoke-test the orchestrator on a single fake fixture**

Create `/tmp/legacy-posts/2024-01-01-uranium-test.md` with the same content as `scripts/fixtures/sample-post.md`. Then:

```bash
mkdir -p /tmp/legacy-posts
cp scripts/fixtures/sample-post.md /tmp/legacy-posts/2024-01-01-uranium-test.md
ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY LEGACY_SOURCE_DIR=/tmp/legacy-posts bun run enrich
```
Expected: completes without error, produces `content/posts/legacy/2024-01-01-uranium-test.md` and at least one file under `content/topics/`. Inspect the output:
```bash
cat content/posts/legacy/2024-01-01-uranium-test.md
ls content/topics/
```

- [ ] **Step 3: Clean up the smoke-test artifacts**

```bash
rm -rf /tmp/legacy-posts content/posts/legacy/* content/topics/*
```

- [ ] **Step 4: Commit**

```bash
git add scripts/enrich-legacy.ts
git commit -m "feat(enrich): two-pass orchestrator wiring"
```

---

## Task 8: Run enrichment on the 13 real legacy posts

Stage the real legacy posts (they're at the `pre-quartz` tag), run the script, review output, commit.

- [ ] **Step 1: Extract the 13 legacy posts from the pre-quartz tag**

```bash
mkdir -p /tmp/legacy-posts-real
git ls-tree --name-only pre-quartz | grep -E '^[0-9]{4}-[0-9]{2}-[0-9]{2}-.*\.md$' | while read f; do
  git show "pre-quartz:$f" > "/tmp/legacy-posts-real/$f"
done
ls /tmp/legacy-posts-real/
ls /tmp/legacy-posts-real/ | wc -l
```
Expected: `13` (or `12` if you choose to exclude the `2023-02-29-cool-post.md` placeholder — it's only 185 bytes; review the listing and `rm` it from the staging dir if it's not real content).

- [ ] **Step 2: Run enrichment**

```bash
ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY LEGACY_SOURCE_DIR=/tmp/legacy-posts-real bun run enrich 2>&1 | tee /tmp/enrich-log.txt
```
Expected: completes in 5–15 minutes, prints progress per post, no errors. Review `/tmp/enrich-log.txt` if anything looks off.

- [ ] **Step 3: Spot-check outputs**

```bash
ls content/posts/legacy/
ls content/topics/
head -25 content/posts/legacy/2021-08-09-a-bifurcated-market.md
cat content/topics/uranium.md 2>/dev/null || echo "no uranium topic emitted"
```

Review:
- Frontmatter looks right (date, tags, summary, type:post)
- Wikilinks `[[...]]` appear in the body at sensible places
- Topic stubs exist for the obvious entities (uranium, palantir, etc.)

If something is clearly wrong (hallucinated topic that doesn't exist in the source, mangled prose, missing frontmatter), pause and report to the user. Otherwise proceed.

- [ ] **Step 4: Commit**

```bash
git add content/posts/legacy/ content/topics/
git commit -m "content: import 13 enriched legacy posts + topic stubs"
```

- [ ] **Step 5: Clean up tmp**

```bash
rm -rf /tmp/legacy-posts-real /tmp/enrich-log.txt
```

---

## Task 9: Build and wire the JournalIndex emitter

A custom Quartz emitter that walks `content/journal/`, extracts dates, and writes `static/journal-index.json` for the `Calendar` component to fetch.

**Files:**
- Create: `quartz/plugins/custom/journalIndex.ts`
- Create: `quartz/plugins/custom/journalIndex.test.ts`
- Modify: `quartz.config.ts`

- [ ] **Step 1: Read an existing emitter to learn the API shape**

```bash
cat quartz/plugins/emitters/contentIndex.ts | head -80
```

Note the emitter signature: a function returning `{ name, getQuartzComponents, emit, ... }`. The `emit` function receives a context, content array, and resources, and writes files using its FS helper.

- [ ] **Step 2: Write the unit-testable core (pure function)**

Write `quartz/plugins/custom/journalIndex.ts`:

```typescript
import { QuartzEmitterPlugin } from "../types";
import { FilePath, FullSlug } from "../../util/path";
import { write } from "../emitters/helpers";

const JOURNAL_DATE_RE = /^journal\/(\d{4}-\d{2}-\d{2})$/;

/**
 * Pure function: given a list of slugs, return the sorted JSON payload
 * the Calendar component expects. Exported for testability.
 */
export function buildJournalIndex(slugs: string[]): { dates: string[] } {
  const dates = new Set<string>();
  for (const slug of slugs) {
    const m = JOURNAL_DATE_RE.exec(slug);
    if (m) dates.add(m[1]);
  }
  return { dates: [...dates].sort() };
}

export const JournalIndex: QuartzEmitterPlugin = () => ({
  name: "JournalIndex",
  async *emit(ctx, content) {
    const slugs = content.map(([, file]) => file.data.slug as FullSlug);
    const payload = buildJournalIndex(slugs);
    yield write({
      ctx,
      content: JSON.stringify(payload),
      slug: "static/journal-index" as FullSlug,
      ext: ".json",
    });
  },
  async *partialEmit() {},
});
```

If the `QuartzEmitterPlugin` import path or `write` helper signature differs (Quartz versions move things), adjust to match the imports used by `quartz/plugins/emitters/contentIndex.ts`. The test in step 3 only exercises `buildJournalIndex` and is unaffected by plugin-API drift.

- [ ] **Step 3: Write the failing test for the pure core**

Write `quartz/plugins/custom/journalIndex.test.ts`:

```typescript
import { describe, it, expect } from "bun:test";
import { buildJournalIndex } from "./journalIndex";

describe("buildJournalIndex", () => {
  it("extracts dates from journal slugs and sorts them", () => {
    const slugs = [
      "journal/2026-04-26",
      "posts/legacy/2021-08-09-a-bifurcated-market",
      "journal/2026-04-25",
      "topics/uranium",
      "journal/2026-04-27",
    ];
    expect(buildJournalIndex(slugs)).toEqual({
      dates: ["2026-04-25", "2026-04-26", "2026-04-27"],
    });
  });

  it("dedupes and ignores non-journal slugs", () => {
    const slugs = ["journal/2026-04-26", "journal/2026-04-26", "topics/foo"];
    expect(buildJournalIndex(slugs)).toEqual({ dates: ["2026-04-26"] });
  });

  it("returns empty when no journal entries exist", () => {
    expect(buildJournalIndex(["topics/uranium", "index"])).toEqual({ dates: [] });
  });
});
```

- [ ] **Step 4: Run the test**

```bash
bun test quartz/plugins/custom/journalIndex.test.ts
```
Expected: 3 tests PASS.

- [ ] **Step 5: Wire into quartz.config.ts**

In `quartz.config.ts`, locate the `plugins.emitters` array and add `JournalIndex()`:

```typescript
import { JournalIndex } from "./quartz/plugins/custom/journalIndex";
// ...
plugins: {
  // ...
  emitters: [
    // ...existing emitters
    JournalIndex(),
  ],
},
```

- [ ] **Step 6: Verify the emitter runs during build**

```bash
bun run build
ls public/static/journal-index.json
cat public/static/journal-index.json
```
Expected: file exists, contains `{"dates":[]}` (no journal entries yet — that's correct).

- [ ] **Step 7: Commit**

```bash
git add quartz/plugins/custom/ quartz.config.ts
git commit -m "feat(quartz): JournalIndex emitter for date-picker data"
```

---

## Task 10: Build the Calendar component

A client-side calendar widget that fetches `journal-index.json`, highlights days with entries, and navigates to `/journal/YYYY-MM-DD` on click. Mounted in the page header.

**Files:**
- Create: `quartz/components/Calendar.tsx`
- Create: `quartz/components/scripts/calendar.inline.ts`
- Create: `quartz/components/styles/calendar.scss`
- Modify: `quartz/components/index.ts` (export Calendar)
- Modify: `quartz.layout.ts` (add to header)

- [ ] **Step 1: Look at an existing simple component for shape**

```bash
cat quartz/components/PageTitle.tsx
cat quartz/components/Search.tsx | head -40
```
Note how components export a `QuartzComponent` and pair with an `inline.ts` file for client behavior.

- [ ] **Step 2: Write the component shell**

Write `quartz/components/Calendar.tsx`:

```typescript
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";
// @ts-ignore — inline-script imports are virtual
import script from "./scripts/calendar.inline";
// @ts-ignore — sass virtual import
import style from "./styles/calendar.scss";

const Calendar: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`calendar ${displayClass ?? ""}`}>
      <button class="calendar-toggle" aria-label="Open calendar">📅</button>
      <div class="calendar-popup" hidden>
        <div class="calendar-header">
          <button class="calendar-prev" aria-label="Previous month">‹</button>
          <span class="calendar-month-label"></span>
          <button class="calendar-next" aria-label="Next month">›</button>
        </div>
        <div class="calendar-grid"></div>
      </div>
    </div>
  );
};

Calendar.css = style;
Calendar.afterDOMLoaded = script;

export default ((opts?: Record<string, unknown>) => Calendar) satisfies QuartzComponentConstructor;
```

- [ ] **Step 3: Write the client script**

Write `quartz/components/scripts/calendar.inline.ts`:

```typescript
type IndexPayload = { dates: string[] };

const PAD = (n: number) => String(n).padStart(2, "0");
const fmt = (y: number, m: number, d: number) => `${y}-${PAD(m + 1)}-${PAD(d)}`;
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

let dateSet: Set<string> = new Set();
let viewYear = 0;
let viewMonth = 0; // 0-indexed

async function loadIndex(): Promise<void> {
  if (dateSet.size > 0) return;
  const res = await fetch("/static/journal-index.json");
  if (!res.ok) return;
  const payload: IndexPayload = await res.json();
  dateSet = new Set(payload.dates);
}

function renderGrid(root: HTMLElement) {
  const grid = root.querySelector(".calendar-grid") as HTMLElement;
  const label = root.querySelector(".calendar-month-label") as HTMLElement;
  if (!grid || !label) return;

  label.textContent = `${MONTH_NAMES[viewMonth]} ${viewYear}`;
  grid.innerHTML = "";

  // Day-of-week headers
  ["S", "M", "T", "W", "T", "F", "S"].forEach((d) => {
    const h = document.createElement("span");
    h.className = "calendar-dow";
    h.textContent = d;
    grid.appendChild(h);
  });

  const firstDow = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  for (let i = 0; i < firstDow; i++) {
    const blank = document.createElement("span");
    blank.className = "calendar-blank";
    grid.appendChild(blank);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = fmt(viewYear, viewMonth, d);
    const cell = document.createElement(dateSet.has(dateStr) ? "a" : "span");
    cell.className = "calendar-day";
    cell.textContent = String(d);
    if (dateSet.has(dateStr)) {
      cell.classList.add("has-entry");
      (cell as HTMLAnchorElement).href = `/journal/${dateStr}`;
    }
    grid.appendChild(cell);
  }
}

function attach(root: HTMLElement) {
  const toggle = root.querySelector(".calendar-toggle") as HTMLButtonElement;
  const popup = root.querySelector(".calendar-popup") as HTMLElement;
  const prev = root.querySelector(".calendar-prev") as HTMLButtonElement;
  const next = root.querySelector(".calendar-next") as HTMLButtonElement;
  if (!toggle || !popup || !prev || !next) return;

  toggle.addEventListener("click", async () => {
    await loadIndex();
    if (popup.hasAttribute("hidden")) {
      const now = new Date();
      viewYear = now.getFullYear();
      viewMonth = now.getMonth();
      renderGrid(root);
      popup.removeAttribute("hidden");
    } else {
      popup.setAttribute("hidden", "");
    }
  });

  prev.addEventListener("click", () => {
    viewMonth -= 1;
    if (viewMonth < 0) { viewMonth = 11; viewYear -= 1; }
    renderGrid(root);
  });

  next.addEventListener("click", () => {
    viewMonth += 1;
    if (viewMonth > 11) { viewMonth = 0; viewYear += 1; }
    renderGrid(root);
  });
}

document.addEventListener("nav", () => {
  document.querySelectorAll<HTMLElement>(".calendar").forEach(attach);
});
```

- [ ] **Step 4: Write the styles**

Write `quartz/components/styles/calendar.scss`:

```scss
.calendar {
  position: relative;
  display: inline-block;

  .calendar-toggle {
    background: transparent;
    border: 1px solid var(--lightgray);
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 1rem;
  }

  .calendar-popup {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 6px;
    background: var(--light);
    border: 1px solid var(--lightgray);
    border-radius: 6px;
    padding: 12px;
    min-width: 240px;
    z-index: 50;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-weight: 600;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      padding: 2px 8px;
    }
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    text-align: center;
    font-size: 0.85rem;
  }

  .calendar-dow {
    color: var(--gray);
    font-weight: 600;
    padding: 4px 0;
  }

  .calendar-day {
    padding: 6px 0;
    color: var(--darkgray);
    border-radius: 3px;

    &.has-entry {
      color: var(--secondary);
      font-weight: 600;
      background: var(--lightgray);

      &:hover { background: var(--tertiary); color: var(--light); }
    }
  }

  .calendar-blank { padding: 6px 0; }
}
```

- [ ] **Step 5: Export from components/index.ts**

In `quartz/components/index.ts`, add:

```typescript
import Calendar from "./Calendar";
// ...add to default export object
export default {
  // ...existing,
  Calendar,
};
```

- [ ] **Step 6: Mount Calendar in the layout header**

In `quartz.layout.ts`, find the `sharedPageComponents` definition (specifically `header` or the equivalent slot in `defaultContentPageLayout`) and add `Component.Calendar()` next to existing header components like `PageTitle`. Concrete edit depends on the version's layout shape — reference the existing entries.

For a Quartz default layout that exposes `header: [PageTitle()]`, change to:
```typescript
header: [Component.PageTitle(), Component.Calendar()],
```

- [ ] **Step 7: Build and visually verify**

```bash
bun run dev
```

Open http://localhost:8080. The 📅 button should appear in the header. Click it → popup opens with the current month grid. With no journal entries yet, no days should be highlighted. The prev/next month arrows should work. Stop the server.

- [ ] **Step 8: Add a sanity-check journal entry to verify highlighting**

```bash
cat > content/journal/2026-04-26.md <<'EOF'
---
title: 2026-04-26
date: 2026-04-26
type: journal
tags:
  - meta
---

First test entry.
EOF
bun run dev
```

Open the calendar. The `26` should be highlighted and clicking it should navigate to `/journal/2026-04-26`. Stop the server. **Delete the test entry**:

```bash
rm content/journal/2026-04-26.md
```

- [ ] **Step 9: Commit**

```bash
git add quartz/components/Calendar.tsx quartz/components/scripts/calendar.inline.ts quartz/components/styles/calendar.scss quartz/components/index.ts quartz.layout.ts
git commit -m "feat(quartz): Calendar component for journal date navigation"
```

---

## Task 11: Graph-dominant landing layout

Replace the default rendering of `content/index.md` so the front page is the global graph filling most of the viewport, with a thin header and a one-line tagline.

**Files:**
- Modify: `content/index.md`
- Modify: `quartz.layout.ts` (add `defaultListPageLayout`-like override or a frontmatter-driven layout switch)

- [ ] **Step 1: Set the index page content**

Write `content/index.md`:

```markdown
---
title: Avyuk's Knowledge Graph
cssclasses:
  - graph-landing
---

A public journal and knowledge graph. Click any node, or pick a date.

```

(One short blurb under the title — Quartz auto-renders the global graph in the right sidebar by default. We're going to make it the dominant element via CSS + layout tweak.)

- [ ] **Step 2: Promote the global graph to a center component for index.md**

Easiest path: in `quartz.layout.ts`, define a separate layout for the index page where the right-sidebar `Graph` is moved into `beforeBody` (rendered above the article body) AND the body itself is short. Then CSS in step 3 hides the article body for `.graph-landing` and stretches the graph.

In `quartz.layout.ts`, find or add:

```typescript
export const indexPageLayout: PageLayout = {
  beforeBody: [Component.Graph({ globalGraph: { drag: true, zoom: true, depth: -1, scale: 1.1 } })],
  left: [],
  right: [],
};
```

Then in the relevant Quartz config wiring (typically `quartz.config.ts` exports the default layout, but layout-per-page uses frontmatter `layout:` or a custom emitter override). For Quartz v4 the simplest hook is to set a `cssclasses` frontmatter and let CSS do the rest — proceed to step 3.

- [ ] **Step 3: Add landing-specific CSS**

Append to `quartz/styles/custom.scss` (or create `quartz/styles/_index.scss` and import it):

```scss
body.graph-landing,
.graph-landing body,
:has(.cssclasses-graph-landing) {
  // Stretch the graph
  .graph {
    height: 75vh;
    .graph-container { height: 75vh !important; }
  }

  // Demote the article body to a single line tagline
  article > h1 { display: none; }
  article > p:first-of-type {
    text-align: center;
    color: var(--gray);
    font-size: 0.95rem;
    margin-top: 1rem;
  }

  // Hide left/right sidebars on landing
  .left, .right { display: none; }
  .center { max-width: 100%; }
}
```

If `quartz/styles/custom.scss` doesn't exist, look for the styles entrypoint (typically `quartz/styles/base.scss`) and either append there or import a new file from it.

- [ ] **Step 4: Build and verify visually**

```bash
bun run dev
```
Open http://localhost:8080/. Expected: the global graph dominates the viewport. The 13 legacy posts and ~N topic stubs render as nodes, edges connect mentioning posts to topics. The tagline appears below. The Calendar button is in the header. Stop the server.

If the graph isn't filling the viewport, inspect the rendered HTML and adjust the CSS selectors (Quartz's class names sometimes vary). The fallback is to inline a `<style>` block in `content/index.md` itself targeting the actual rendered structure.

- [ ] **Step 5: Commit**

```bash
git add content/index.md quartz.layout.ts quartz/styles/
git commit -m "feat(quartz): graph-dominant landing page"
```

---

## Task 12: Topic-page layout — local graph + backlinks

Tune topic pages so each one shows a local graph (depth=2) and the backlinks list prominently. Quartz already supports both; this is a config tweak.

**Files:**
- Modify: `quartz.layout.ts`

- [ ] **Step 1: Locate the page layout**

```bash
grep -n "Graph(" quartz.layout.ts
grep -n "Backlinks" quartz.layout.ts
```

Identify where `Component.Graph(...)` is called in the default layout (typically inside `right: [...]` for `defaultContentPageLayout`).

- [ ] **Step 2: Bump local-graph depth to 2**

Update the call:

```typescript
Component.Graph({
  localGraph: { depth: 2, drag: true, zoom: true },
  globalGraph: { drag: true, zoom: true, depth: -1 },
}),
```

- [ ] **Step 3: Verify Backlinks are present in the layout**

If `Component.Backlinks()` isn't already in the right column, add it after `Graph`. Reference the Quartz default layout if unsure.

- [ ] **Step 4: Build and verify**

```bash
bun run dev
```

Navigate to a topic page (e.g. http://localhost:8080/topics/uranium). Expected: local graph shows the topic node plus 2 hops of neighbors; backlinks list shows all posts linking to this topic. Stop the server.

- [ ] **Step 5: Commit**

```bash
git add quartz.layout.ts
git commit -m "feat(quartz): topic pages render depth-2 local graph"
```

---

## Task 13: `/journal` slash command

A Claude Code skill that drives the daily journal authoring workflow.

**Files:**
- Create: `.claude/skills/journal/SKILL.md`

- [ ] **Step 1: Write the skill**

Write `.claude/skills/journal/SKILL.md`:

```markdown
---
name: journal
description: Use when the user wants to write today's journal entry. Reads recent entries and the topic vocabulary, drafts an entry from the user's raw thoughts, suggests new topic stubs, writes files, and commits.
---

# /journal — Daily journal authoring

You are helping the user (Avyuk) compose a journal entry for the public knowledge garden at this repo. Follow this flow exactly.

## 1. Determine today's date

Use the system date in YYYY-MM-DD form. Call this `TODAY`.

## 2. Load context

Read in parallel:
- `content/topics/` — list filenames (each `<slug>.md` is a topic node).
- `content/journal/` — list the last 7 dated entries by filename.
- For each of those last 7 entries, read the file contents.
- The frontmatter `tags` from a sample of recent entries (last 14) to learn the active tag vocabulary. Aggregate into a deduplicated list.

## 3. Check for existing entry today

If `content/journal/${TODAY}.md` already exists: read it. You will append a new section, NOT overwrite. Note the existing tags and links.

## 4. Prompt for raw input

Ask the user: "What's on your mind today?" Wait for their response. Their reply is `RAW`.

## 5. Compose the entry

Draft a journal entry following these rules strictly:

- **Voice:** Preserve the user's voice. Do not rewrite for clarity, do not formalize tone, do not add transitions. Light copy-edit only — fix obvious typos and merge fragments into sentences. If the user's input was already well-formed, change nothing.
- **Structure:** If the input has multiple distinct topics, use `## Heading` to separate them. Otherwise leave as flowing prose.
- **Wikilinks:** When the prose mentions a concept that already has a topic note (`content/topics/<slug>.md`), wrap the first mention in `[[slug]]` or `[[slug|display text]]`. Only first mention per entry.
- **New topics:** If the prose introduces a concept that warrants a new topic node (specific entity, recurring theme), add it to a `NEW_TOPICS` list. Do NOT invent topics for vague concepts.
- **Tags:** Pick 2-5 tags from the existing vocabulary. Only add a new tag if no existing one fits — and announce it to the user when you do.
- **Frontmatter:**
  ```yaml
  ---
  title: ${TODAY}
  date: ${TODAY}
  type: journal
  tags:
    - tag1
    - tag2
  ---
  ```

## 6. Show the draft to the user

Display:
1. The full proposed entry markdown.
2. The list of `NEW_TOPICS` you'd create stubs for, with a one-line rationale each.

Ask: "Edit anything? Approve to write?" Wait for the user.

## 7. Write files

On approval:
- If today's entry doesn't exist: write `content/journal/${TODAY}.md` with frontmatter + body.
- If it exists: append `\n\n## <HH:MM>\n\n${BODY_WITH_LINKS}` to the existing file. Merge new tags into the frontmatter `tags` list.
- For each entry in `NEW_TOPICS`, write `content/topics/<slug>.md`:
  ```yaml
  ---
  title: <Display Name>
  type: topic
  tags:
    - <inferred-parent-tag>
  ---

  ```

## 8. Commit

```bash
git add content/
git commit -m "journal: ${TODAY}"
```

## 9. Confirm

Report to the user: "Wrote `content/journal/${TODAY}.md` and N new topic stubs. Committed locally — push when ready."

## Anti-patterns

- DO NOT push to remote. The user pushes manually.
- DO NOT reformat or rewrite past entries.
- DO NOT add summary frontmatter to journal entries (only posts have summaries).
- DO NOT invent topic stubs that the prose doesn't actually discuss.
- DO NOT add explanatory commentary to the entry body — the user is the author, you are the typesetter.
```

- [ ] **Step 2: Commit**

```bash
git add .claude/
git commit -m "feat(claude): /journal slash command for daily authoring"
```

---

## Task 14: GitHub Actions deploy workflow

Set up CI to build the site on push to `main` and deploy to the `gh-pages` branch.

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Write the workflow**

Write `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install --frozen-lockfile

      - name: Build site
        run: bun run quartz build

      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
          publish_branch: gh-pages
```

- [ ] **Step 2: Commit**

```bash
git add .github/
git commit -m "ci: GH Actions workflow for build + deploy to gh-pages"
```

- [ ] **Step 3: Push and watch the build**

```bash
git push origin main
gh run watch
```

Expected: workflow completes successfully. The `gh-pages` branch is created with the built site.

If the workflow fails on `bun install --frozen-lockfile` because the lockfile drifted, run `bun install` locally, commit `bun.lockb`, and push again.

- [ ] **Step 4: Configure GitHub Pages (manual, one-time)**

Direct the user:

> Go to https://github.com/avyukd/avyukd.github.io/settings/pages, set Source to "Deploy from a branch", branch `gh-pages`, folder `/` (root). Save.

After the user confirms it's set, wait ~1 minute for Pages to provision, then check:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://avyukd.github.io/
```
Expected: 200.

---

## Task 15: README + final smoke test

Add a project README and run a final end-to-end smoke test against the live site.

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write a minimal README**

Write `README.md`:

```markdown
# avyukd.github.io

Public knowledge graph + journal. Built on [Quartz v4](https://quartz.jzhao.xyz).

Live at https://avyukd.github.io.

## Local development

```bash
bun install
bun run dev   # http://localhost:8080
bun run build # → public/
```

## Authoring

- **New journal entry:** open Claude Code in this repo, run `/journal`.
- **New longform post:** add a markdown file to `content/posts/` with `type: post` frontmatter.
- **New topic stub:** add a markdown file to `content/topics/` with `type: topic` frontmatter, or let `/journal` create it.

## Architecture

See `docs/superpowers/specs/2026-04-26-knowledge-graph-design.md` for the design spec.

## Re-running the legacy enrichment

```bash
ANTHROPIC_API_KEY=... LEGACY_SOURCE_DIR=/path/to/legacy bun run enrich
```

This overwrites `content/posts/legacy/` and `content/topics/`.
```

- [ ] **Step 2: Commit and push**

```bash
git add README.md
git commit -m "docs: README"
git push origin main
gh run watch
```

- [ ] **Step 3: End-to-end smoke test against the live site**

Wait for the deploy to complete. Then:

```bash
curl -s https://avyukd.github.io/ | grep -i 'avyuk' | head -3
curl -s -o /dev/null -w "%{http_code}\n" https://avyukd.github.io/static/journal-index.json
curl -s -o /dev/null -w "%{http_code}\n" https://avyukd.github.io/posts/legacy/2021-08-09-a-bifurcated-market
curl -s -o /dev/null -w "%{http_code}\n" https://avyukd.github.io/topics/uranium
```

Expected:
- Home page returns HTML mentioning "Avyuk".
- `journal-index.json` returns 200 (likely `{"dates":[]}`).
- A legacy post URL returns 200.
- A topic URL returns 200.

Then ask the user to manually verify in a browser:

> Visit https://avyukd.github.io. Verify:
> 1. The graph fills the page and shows ~13 post nodes plus topic nodes.
> 2. Clicking a node navigates to that page.
> 3. The 📅 calendar in the header opens, but no days are highlighted (no journal entries yet — expected).
> 4. Visiting a topic page (e.g. /topics/uranium) shows the local graph + backlinks.

If anything fails, surface the failure to the user with screenshots / specific URLs before declaring done.

---

## Self-review checklist (for the implementer)

After all tasks complete, verify against the spec:

- [ ] Spec §1 goal — graph is the front door: covered by Task 11.
- [ ] Spec §2 non-goals — no Jekyll content remains: Task 1 wiped, Task 8 only imports legacy posts.
- [ ] Spec §4 repo layout — matches: ✓ (verify with `tree -L 2 -I node_modules`).
- [ ] Spec §5 content model — three types, frontmatter as specified: ✓ (Tasks 8, 13).
- [ ] Spec §6.1 graph-dominant landing: Task 11.
- [ ] Spec §6.2 calendar component: Task 10.
- [ ] Spec §6.3 JournalIndex emitter: Task 9.
- [ ] Spec §6.4 topic-subgraph view: Task 12.
- [ ] Spec §6.5 tag-filtered global graph: deferred (spec marked optional).
- [ ] Spec §7 bootstrap enrichment: Tasks 4–8.
- [ ] Spec §8 `/journal` slash command: Task 13.
- [ ] Spec §9 build & deploy: Task 14.
- [ ] Spec §10 migration plan: covered across Tasks 1, 2, 14.
- [ ] Spec §12 success criteria — verified in Task 15 smoke test.
