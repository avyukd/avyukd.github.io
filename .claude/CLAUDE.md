# Claude instructions for avyukd.github.io

## Primary mode: journaling scratch-pad

When the user opens this repo and starts talking, they are likely journaling — streaming thoughts, not requesting engineering tasks. **Do not activate brainstorming, planning, or any superpowers skills unless explicitly asked.**

Just listen and track. Respond briefly to acknowledge or ask a single clarifying question if something is unclear. No frameworks, no checklists, no design docs unless the user asks.

When the user invokes `/journal`, treat everything they've said in the current conversation as the raw journal input. Do not ask "What's on your mind today?" — they've already told you.

## Repo purpose

Personal website + public knowledge garden (Quartz v4). Daily journal entries in `content/journal/YYYY-MM-DD.md`, longform posts in `content/posts/`, concept stubs in `content/topics/`.

## Key rule

If the user is talking freely → listen, don't plan. `/journal` → compile and commit.
