import { describe, it, expect } from "bun:test"
import { buildJournalIndex } from "./journalIndex"

describe("buildJournalIndex", () => {
  it("extracts dates from journal slugs and sorts them", () => {
    const slugs = [
      "journal/2026-04-26",
      "posts/legacy/2021-08-09-a-bifurcated-market",
      "journal/2026-04-25",
      "topics/uranium",
      "journal/2026-04-27",
    ]
    expect(buildJournalIndex(slugs)).toEqual({
      dates: ["2026-04-25", "2026-04-26", "2026-04-27"],
    })
  })

  it("dedupes and ignores non-journal slugs", () => {
    const slugs = ["journal/2026-04-26", "journal/2026-04-26", "topics/foo"]
    expect(buildJournalIndex(slugs)).toEqual({ dates: ["2026-04-26"] })
  })

  it("returns empty when no journal entries exist", () => {
    expect(buildJournalIndex(["topics/uranium", "index"])).toEqual({ dates: [] })
  })
})
