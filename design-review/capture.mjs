// Capture full-page + per-section screenshots for design review.
// Usage: node design-review/capture.mjs
// Requires: dev server running on http://localhost:3000

import puppeteer from "puppeteer";
import { mkdir, rm } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "snaps");
const URL = "http://localhost:3000/";

const SECTIONS = [
  "intro",
  "about",
  "lifestyle",
  "included",
  "people",
  "accommodation",
  "pricing",
  "apply",
];

async function ensureCleanDir(dir) {
  if (existsSync(dir)) {
    await rm(dir, { recursive: true });
  }
  await mkdir(dir, { recursive: true });
}

async function captureViewport(browser, viewport, label) {
  const page = await browser.newPage();
  await page.setViewport(viewport);

  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60_000 });
  // Wait for fonts and images
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 800));

  // Hero (scroll to top)
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({
    path: path.join(OUT_DIR, `${label}-00-hero.png`),
    fullPage: false,
  });

  // Each named section
  for (const [i, id] of SECTIONS.entries()) {
    const top = await page.evaluate((sid) => {
      const el = document.getElementById(sid);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return Math.round(r.top + window.scrollY);
    }, id);
    if (top === null) continue;

    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), top);
    // Re-trigger any scroll-linked animations and wait for them to settle
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({
      path: path.join(OUT_DIR, `${label}-${String(i + 1).padStart(2, "0")}-${id}.png`),
      fullPage: false,
    });
  }

  // Footer
  await page.evaluate(() =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" })
  );
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({
    path: path.join(OUT_DIR, `${label}-99-footer.png`),
    fullPage: false,
  });

  // Full-page tall screenshot for whole-page rhythm review
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({
    path: path.join(OUT_DIR, `${label}-FULL.png`),
    fullPage: true,
  });

  await page.close();
}

async function main() {
  await ensureCleanDir(OUT_DIR);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  console.log("Capturing desktop (1440x900)...");
  await captureViewport(browser, { width: 1440, height: 900 }, "desktop");

  console.log("Capturing mobile (375x812)...");
  await captureViewport(browser, { width: 375, height: 812, isMobile: true }, "mobile");

  await browser.close();

  console.log(`\nDone. Screenshots in ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
