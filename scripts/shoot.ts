#!/usr/bin/env bun
/**
 * Take screenshots of pages on the local dev server.
 *
 * Usage:
 *   bun run scripts/shoot.ts <path1> [path2 ...]   # paths relative to base, e.g. "/" or "/topics/uranium"
 * Output:
 *   /tmp/shots/<name>.png   one PNG per path; viewport 1440x900 desktop
 *
 * The script also dumps `getBoundingClientRect` for key elements as
 * /tmp/shots/<name>.json so you can see exact pixel positions.
 */
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const BASE = process.env.BASE ?? "http://localhost:8080";
const OUT = "/tmp/shots";
const VIEWPORT = { width: 1440, height: 900 };

const paths = process.argv.slice(2);
if (paths.length === 0) {
  console.error("Usage: bun run scripts/shoot.ts <path> [<path> ...]");
  process.exit(1);
}

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });

for (const p of paths) {
  const url = BASE + p;
  const safe = p.replace(/[\/]/g, "_").replace(/^_/, "") || "root";
  const png = join(OUT, `${safe}.png`);
  const meta = join(OUT, `${safe}.json`);

  const page = await ctx.newPage();
  console.log(`→ ${url}`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 15_000 });
  // Give the graph + calendar JS time to mount.
  await page.waitForTimeout(800);

  await page.screenshot({ path: png, fullPage: false });

  // Capture geometry of important elements so we can reason without re-screenshotting.
  const layout = await page.evaluate(() => {
    const sels = [
      ".left.sidebar",
      ".right.sidebar",
      ".center",
      "article.graph-landing",
      ".graph",
      ".graph > .graph-outer",
      ".graph-container",
      "footer",
      ".explorer",
      ".calendar",
      ".search",
      "#quartz-body",
    ];
    const out: Record<string, { rect: DOMRect | null; computed: Record<string, string> } | null> = {};
    for (const s of sels) {
      const el = document.querySelector(s) as HTMLElement | null;
      if (!el) {
        out[s] = null;
        continue;
      }
      const rect = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      out[s] = {
        rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height } as any,
        computed: {
          display: cs.display,
          position: cs.position,
          height: cs.height,
          width: cs.width,
          padding: cs.padding,
          margin: cs.margin,
          flex: cs.flex,
          overflow: cs.overflow,
        },
      };
    }
    return {
      viewport: { w: window.innerWidth, h: window.innerHeight, scrollY: window.scrollY, scrollH: document.documentElement.scrollHeight },
      els: out,
    };
  });

  await writeFile(meta, JSON.stringify(layout, null, 2));
  await page.close();
  console.log(`  saved ${png} + ${meta}`);
}

await browser.close();
