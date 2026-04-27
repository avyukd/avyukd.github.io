#!/usr/bin/env bun
/**
 * One-shot import of docx blog posts into the vault.
 *
 * Reads /tmp/blog-import/blog/*.docx, converts each via pandoc to GFM markdown
 * with extracted media, parses date + title, and emits clean .md files +
 * media folders into /tmp/blog-md/converted/ for the enrichment subagent to
 * pick up.
 *
 * Output layout:
 *   /tmp/blog-md/converted/<YYYY-MM-DD>-<slug>.md    (no leading title line)
 *   /tmp/blog-md/converted/<YYYY-MM-DD>-<slug>/      (per-post media dir)
 */
import { readdir, readFile, writeFile, mkdir, rm, rename } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, basename } from "node:path";
import { execSync } from "node:child_process";

const SRC = "/tmp/blog-import/blog";
const OUT = "/tmp/blog-md/converted";
const PANDOC = `${process.env.HOME}/bin/pandoc`;

// "M-D-YY" or "MM-DD-YY" → "YYYY-MM-DD". Years 20–29 → 2020s, otherwise leave as-is.
function parseDate(filename: string): string {
  const stem = filename.replace(/\.docx$/, "");
  const m = /^(\d{1,2})-(\d{1,2})-(\d{2})$/.exec(stem);
  if (!m) throw new Error(`unparseable filename: ${filename}`);
  const [, mm, dd, yy] = m;
  const year = 2000 + parseInt(yy, 10);
  return `${year}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
}

// First non-empty line is the title. Strip pandoc/HTML artefacts and any
// "M-D-YY [– | space]" date prefix. Returns { title, embeddedDate? } where
// embeddedDate is set when the title's prefix indicates a publish date that
// should override the filename-derived date.
function extractTitle(md: string): { title: string; embeddedDate?: string } {
  for (const raw of md.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    let t = line
      .replace(/^#+\s*/, "")
      .replace(/\*\*/g, "")
      .replace(/<\/?u>/g, "")
      .replace(/<\/?strong>/g, "")
      .replace(/<\/?em>/g, "")
      .replace(/^\\?\*+|\*+\\?$/g, "")
      .trim();
    // Match leading "M-D-YY" prefix optionally followed by dash/em-dash/space then title
    const dateMatch = /^(\d{1,2})-(\d{1,2})-(\d{2})\s*[–-]?\s*(.*)$/.exec(t);
    if (dateMatch && dateMatch[4]) {
      const [, mm, dd, yy, rest] = dateMatch;
      const iso = `${2000 + parseInt(yy, 10)}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
      return { title: rest.trim(), embeddedDate: iso };
    }
    if (t) return { title: t };
  }
  return { title: "" };
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[''""]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

// Strip the title line from the body (it'll be in frontmatter).
function stripTitleLine(md: string): string {
  const lines = md.split("\n");
  let i = 0;
  // skip leading blank lines
  while (i < lines.length && !lines[i].trim()) i++;
  // skip the first non-empty line if it looks like a title (bold/heading)
  if (i < lines.length) {
    const line = lines[i].trim();
    if (
      /^\*\*.*\*\*$/.test(line) ||
      /^#+\s/.test(line) ||
      /<u>/.test(line) ||
      /^\d{1,2}-\d{1,2}-\d{2}\s*[–-]/.test(line.replace(/[*<>/u]/g, ""))
    ) {
      i++;
      // also skip a single blank after the title
      if (i < lines.length && !lines[i].trim()) i++;
    }
  }
  return lines.slice(i).join("\n").trimStart();
}

async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const files = (await readdir(SRC))
    .filter((f) => f.endsWith(".docx") && !f.startsWith("~$"))
    .sort();

  console.log(`Converting ${files.length} docx files...`);

  for (const f of files) {
    const filenameDate = parseDate(f);
    const tmpMd = join("/tmp/blog-md", `_${f.replace(/\.docx$/, "")}.md`);
    const tmpMedia = join("/tmp/blog-md", `_${f.replace(/\.docx$/, "")}_media`);
    await rm(tmpMedia, { recursive: true, force: true });

    // Run pandoc → GFM with media extraction
    execSync(
      `"${PANDOC}" -f docx -t gfm --extract-media="${tmpMedia}" --wrap=preserve "${join(SRC, f)}" -o "${tmpMd}"`,
      { stdio: "pipe" }
    );

    const raw = await readFile(tmpMd, "utf8");
    const { title, embeddedDate } = extractTitle(raw);
    // Prefer the date embedded in the title (publish date) over the filename
    // (which may reflect when the doc was authored).
    const date = embeddedDate ?? filenameDate;
    const slug = title ? slugify(title) : `untitled-${date}`;
    const finalSlug = `${date}-${slug}`;
    const finalMd = join(OUT, `${finalSlug}.md`);
    const finalMedia = join(OUT, finalSlug);

    // Move media (pandoc puts everything under <tmpMedia>/media/imageN.png)
    let body = stripTitleLine(raw);
    const pandocMediaDir = join(tmpMedia, "media");
    if (existsSync(pandocMediaDir)) {
      await mkdir(finalMedia, { recursive: true });
      const imgs = await readdir(pandocMediaDir);
      for (const img of imgs) {
        await rename(join(pandocMediaDir, img), join(finalMedia, img));
      }
      // Rewrite all "media/imageN.ext" image refs to "<finalSlug>/imageN.ext"
      // pandoc emits: ![](/tmp/blog-md/_FILE_media/media/image1.png) when
      // --extract-media is an absolute path. Normalize all variants.
      const escTmpMedia = tmpMedia.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      body = body.replace(
        new RegExp(`${escTmpMedia}/media/`, "g"),
        `${finalSlug}/`
      );
      // Just-in-case relative form
      body = body.replace(/(\]\()media\//g, `$1${finalSlug}/`);
    }

    // Write the cleaned md (no frontmatter yet — that's added by enrichment).
    // But we DO embed a metadata header comment so the enrichment subagent
    // doesn't have to re-derive date/title.
    const meta = `<!-- import-meta: date=${date} | title=${title} | slug=${finalSlug} -->\n\n`;
    await writeFile(finalMd, meta + body.trimEnd() + "\n");

    console.log(`  ${f}  →  ${finalSlug}.md  (title: "${title}")`);
    await rm(tmpMd, { force: true });
    await rm(tmpMedia, { recursive: true, force: true });
  }

  console.log(`\nDone. ${files.length} files in ${OUT}/`);
  console.log(`Listing:`);
  const out = await readdir(OUT);
  for (const f of out.sort()) console.log(`  ${f}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
