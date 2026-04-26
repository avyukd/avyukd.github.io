import { QuartzEmitterPlugin } from "../types"
import { FullSlug, joinSegments } from "../../util/path"
import { write } from "../emitters/helpers"

const JOURNAL_DATE_RE = /^journal\/(\d{4}-\d{2}-\d{2})$/

export function buildJournalIndex(slugs: string[]): { dates: string[] } {
  const dates = new Set<string>()
  for (const slug of slugs) {
    const m = JOURNAL_DATE_RE.exec(slug)
    if (m) dates.add(m[1])
  }
  return { dates: [...dates].sort() }
}

export const JournalIndex: QuartzEmitterPlugin = () => ({
  name: "JournalIndex",
  async *emit(ctx, content) {
    const slugs = content.map(([, file]) => file.data.slug as FullSlug)
    const payload = buildJournalIndex(slugs)
    yield write({
      ctx,
      content: JSON.stringify(payload),
      slug: joinSegments("static", "journal-index") as FullSlug,
      ext: ".json",
    })
  },
  async *partialEmit() {},
})
