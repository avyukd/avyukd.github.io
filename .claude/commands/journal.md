---
description: Compose today's journal entry — reads recent entries and topics, drafts from raw input, writes and commits.
---

# /journal — Daily journal authoring

You are helping the user (Avyuk) compose a journal entry for the public knowledge garden in this repo. Follow this flow exactly.

## 1. Determine today's date

Get the system date in `YYYY-MM-DD` form (run `date +%Y-%m-%d` if you need to). Call it `TODAY`.

## 2. Load context

In parallel:
- List `content/topics/` — each `<slug>.md` is a topic node.
- List `content/journal/` — get the last 7 dated entries by filename.
- Read each of those last 7 entries' contents.
- Read the frontmatter `tags` from the last 14 entries to learn the active tag vocabulary. Aggregate into a deduplicated list.

## 3. Check for existing entry today

If `content/journal/${TODAY}.md` already exists, read it. You will append a new section (under a `## HH:MM` heading), NOT overwrite. Note the existing tags and links.

## 4. Collect raw input

If the user has already been talking in this conversation before invoking `/journal`, use the full content of their messages as `RAW` — do NOT ask "What's on your mind today?" They've already told you.

Only ask **"What's on your mind today?"** if this is the very first message in the session (i.e., `/journal` was invoked with no prior conversation content).

## 5. Compose the entry

Draft a journal entry. Strict rules:

- **Voice:** Preserve the user's voice. Do not rewrite for clarity, do not formalize tone, do not add transitions. Light copy-edit only — fix obvious typos and merge fragments into sentences. If the input is already well-formed, change nothing.
- **Structure:** If the input has multiple distinct topics, separate with `## Heading`. Otherwise leave as flowing prose.
- **Wikilinks:** When the prose mentions a concept that already has a topic note (`content/topics/<slug>.md`), wrap the FIRST mention in `[[slug]]` or `[[slug|display text]]`. Only first mention per entry.
- **New topics:** If the prose introduces a concept that warrants a new topic node (specific entity, recurring theme), add it to a `NEW_TOPICS` list. Don't invent topics for vague concepts.
- **Tags:** Pick 2–5 tags from the existing vocabulary. Only add a new tag if no existing one fits — and announce it to the user when you do.
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

## 6. Show the draft

Display:
1. The full proposed entry markdown.
2. The list of `NEW_TOPICS` you'd create stubs for, with a one-line rationale each.

Ask: **"Edit anything? Approve to write?"** Wait for the user.

## 7. Write files

On approval:
- If today's entry doesn't exist: write `content/journal/${TODAY}.md` with frontmatter + body.
- If it exists: append `\n\n## <HH:MM>\n\n${BODY_WITH_LINKS}` to the existing file. Merge new tags into the frontmatter.
- For each entry in `NEW_TOPICS`, write `content/topics/<slug>.md`:
  ```yaml
  ---
  title: <Display Name>
  type: topic
  tags:
    - <inferred-parent-tag>
  ---

  ```

## 8. Commit and push

```bash
git add content/
git commit -m "journal: ${TODAY}"
git push
```

## 9. Confirm

Tell the user: **"Wrote `content/journal/${TODAY}.md` and N new topic stubs. Committed and pushed."**

## Anti-patterns

- DO NOT skip the push step.
- DO NOT reformat or rewrite past entries.
- DO NOT add `summary:` to journal entries (only posts have summaries).
- DO NOT invent topic stubs the prose doesn't actually discuss.
- DO NOT add explanatory commentary to the entry body — the user is the author, you are the typesetter.
