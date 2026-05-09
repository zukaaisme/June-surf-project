// Export a clean static HTML snapshot for Figma import.
// Output: design-review/figma-static.html (self-contained, no JS, no animations)
//
// Usage: node design-review/export-figma.mjs
// Requires: production server running on http://localhost:3000

import puppeteer from "puppeteer";
import { writeFile, readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_FILE = path.join(__dirname, "figma-static.html");
const URL = "http://localhost:3000/";

async function main() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    protocolTimeout: 120_000,
  });

  const page = await browser.newPage();
  await page.setDefaultTimeout(60_000);
  await page.setViewport({ width: 1440, height: 900 });

  // Skip animations.
  await page.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);

  // Inject CSS BEFORE navigation that disables transitions/animations and forces opacity 1.
  await page.evaluateOnNewDocument(() => {
    const s = document.createElement("style");
    s.id = "figma-static-overrides";
    s.textContent = `
      *, *::before, *::after {
        transition: none !important;
        animation: none !important;
      }
      [style*="opacity: 0"], [style*="opacity:0"] {
        opacity: 1 !important;
      }
      [style*="transform"] {
        transform: none !important;
      }
      .grain { display: none !important; }
    `;
    // Append once DOM head exists
    const tryAttach = () => {
      if (document.head) document.head.appendChild(s);
      else requestAnimationFrame(tryAttach);
    };
    tryAttach();
  });

  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60_000 });

  // Single short settle.
  await new Promise((r) => setTimeout(r, 800));

  // Quick scroll-through to trigger lazy images.
  const totalH = await page.evaluate(() => document.documentElement.scrollHeight);
  const vh = 900;
  for (let y = 0; y <= totalH; y += vh) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await new Promise((r) => setTimeout(r, 120));
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 800));

  // Get list of stylesheet hrefs.
  const cssLinks = await page.evaluate(() =>
    Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(
      (l) => l.href
    )
  );

  // Get outer HTML (before stripping).
  let rawHtml = await page.evaluate(() => document.documentElement.outerHTML);

  // Fetch each compiled CSS and concatenate.
  let inlineCss = "";
  for (const href of cssLinks) {
    try {
      const res = await fetch(href);
      const text = await res.text();
      inlineCss += `\n/* === ${href} === */\n${text}\n`;
    } catch {
      // skip
    }
  }

  await browser.close();

  // Re-include token block at the very top.
  const sourceTokens = await readFile(
    path.join(__dirname, "..", "app", "globals.css"),
    "utf8"
  );
  const tokenBlockMatch = sourceTokens.match(/@theme\s*\{([\s\S]*?)\n\}/);
  const tokenDeclarations = tokenBlockMatch ? tokenBlockMatch[1] : "";
  const tokens = tokenDeclarations
    .split("\n")
    .filter((l) => l.trim().startsWith("--"))
    .map((l) => "  " + l.trim())
    .join("\n");

  const tokenCss = `
/* === DESIGN TOKENS (from app/globals.css @theme) === */
:root {
${tokens}
}
`;

  // Animation-suppress override (defense in depth — also live in style block).
  const overrideCss = `
/* === Static export overrides === */
*, *::before, *::after {
  transition: none !important;
  animation: none !important;
}
.grain { display: none !important; }
`;

  // Clean HTML.
  let cleanedHtml = rawHtml
    .replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/g, "")
    .replace(/<link[^>]+rel=["']preload["'][^>]*>/g, "")
    .replace(/<link[^>]+rel=["']dns-prefetch["'][^>]*>/g, "")
    .replace(/<link[^>]+rel=["']preconnect["'][^>]*>/g, "")
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/g, "")
    .replace(/<!--\$-->|<!--\/\$-->|<!--\$\?[\s\S]*?-->|<!--\$\![\s\S]*?-->/g, "");

  const styleTag = `<style data-figma-export>
${tokenCss}
${overrideCss}
${inlineCss}
</style>`;

  cleanedHtml = cleanedHtml.replace("</head>", `${styleTag}\n</head>`);

  await writeFile(OUT_FILE, cleanedHtml, "utf8");

  const stats = await readFile(OUT_FILE);
  console.log(`Wrote ${OUT_FILE}`);
  console.log(`Size: ${(stats.length / 1024).toFixed(1)} KB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
