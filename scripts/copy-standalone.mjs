import { copyFile, mkdir, rm } from "node:fs/promises"
import { dirname, join } from "node:path"

const root = process.cwd()
const standalonePages = [
  {
    source: join(root, "content", "kalshi-architecture", "index.html"),
    destination: join(root, "public", "kalshi-architecture", "index.html"),
    generatedAlias: join(root, "public", "kalshi-architecture", "index"),
  },
]

for (const page of standalonePages) {
  await mkdir(dirname(page.destination), { recursive: true })
  await copyFile(page.source, page.destination)
  await rm(page.generatedAlias, { force: true })
}
