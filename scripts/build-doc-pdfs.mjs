/**
 * One-off generator: renders the report and prompt-examples Markdown to
 * print-friendly PDFs under public/downloads/.
 *
 * Pipeline: react-markdown + remark-gfm → HTML string → light-themed
 * standalone HTML → headless Chrome → PDF. No server required.
 *
 * Run:  node scripts/build-doc-pdfs.mjs
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const DOCS = [
  { slug: "report", title: "AI Tools & Workflow Report — CCS3600 Backpropagation" },
  { slug: "prompts", title: "Prompt Examples — CCS3600 Backpropagation" },
];

const CSS = `
:root { color-scheme: light; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: #fff; color: #0f172a; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC",
    "Noto Sans", Arial, sans-serif;
  font-size: 11pt;
  line-height: 1.6;
  max-width: 720px;
  margin: 0 auto;
  padding: 28pt 36pt;
}
h1 { font-size: 22pt; margin: 0 0 6pt; letter-spacing: -0.01em; }
h2 { font-size: 15pt; margin: 22pt 0 8pt; color: #1e293b; letter-spacing: -0.005em; }
h3 { font-size: 12.5pt; margin: 16pt 0 6pt; color: #0ea5e9; }
p, ul, ol, table { margin: 0 0 10pt; }
ul, ol { padding-left: 22pt; }
li { margin-bottom: 4pt; }
strong { color: #0f172a; }
em { color: #334155; }
code {
  font-family: "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  font-size: 0.9em;
  background: #f1f5f9;
  padding: 1pt 5pt;
  border-radius: 3pt;
  word-break: break-word;
}
pre {
  background: #0f172a;
  color: #e2e8f0;
  padding: 10pt 12pt;
  border-radius: 5pt;
  overflow-x: auto;
  font-size: 9.5pt;
  line-height: 1.5;
  page-break-inside: avoid;
}
pre code { background: transparent; color: inherit; padding: 0; }
table { width: 100%; border-collapse: collapse; font-size: 9.5pt; }
th, td { border: 1px solid #cbd5e1; padding: 6pt 8pt; text-align: left; vertical-align: top; }
th { background: #f1f5f9; font-weight: 600; }
blockquote {
  border-left: 3pt solid #3b82f6;
  background: #f8fafc;
  padding: 8pt 12pt;
  margin: 8pt 0 12pt;
  color: #334155;
  border-radius: 0 4pt 4pt 0;
  font-size: 10.5pt;
  page-break-inside: avoid;
}
blockquote p { margin: 0 0 6pt; }
blockquote p:last-child { margin-bottom: 0; }
a { color: #0ea5e9; }
hr { border: 0; border-top: 1pt solid #e2e8f0; margin: 18pt 0; }
@page { margin: 1.4cm 1.6cm; }
`;

const CHROME_PATHS = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
];

async function findChrome() {
  for (const p of CHROME_PATHS) {
    try {
      await fs.access(p);
      return p;
    } catch {}
  }
  throw new Error("Could not find Chrome or Chromium in /Applications");
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function renderMarkdown(md) {
  // react-markdown renders synchronously inside React; renderToStaticMarkup
  // returns the final HTML string.
  return renderToStaticMarkup(
    React.createElement(ReactMarkdown, { remarkPlugins: [remarkGfm] }, md),
  );
}

async function main() {
  const root = process.cwd();
  const tmpDir = path.join(root, ".tmp-pdf");
  const outDir = path.join(root, "public", "downloads");
  await fs.mkdir(tmpDir, { recursive: true });
  await fs.mkdir(outDir, { recursive: true });

  const chrome = await findChrome();

  for (const { slug, title } of DOCS) {
    const mdPath = path.join(root, "content", "reports", `${slug}.en.md`);
    const md = await fs.readFile(mdPath, "utf8");
    const body = await renderMarkdown(md);

    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title><style>${CSS}</style></head><body>${body}</body></html>`;

    const htmlPath = path.join(tmpDir, `${slug}.html`);
    const pdfPath = path.join(outDir, `${slug}.pdf`);
    await fs.writeFile(htmlPath, html, "utf8");

    await new Promise((resolve, reject) => {
      const proc = spawn(
        chrome,
        [
          "--headless=new",
          "--disable-gpu",
          "--no-pdf-header-footer",
          "--no-sandbox",
          `--print-to-pdf=${pdfPath}`,
          `file://${htmlPath}`,
        ],
        { stdio: ["ignore", "inherit", "inherit"] },
      );
      proc.on("exit", (code) =>
        code === 0 ? resolve() : reject(new Error(`chrome exited ${code}`)),
      );
      proc.on("error", reject);
    });

    const { size } = await fs.stat(pdfPath);
    console.log(`✓ ${pdfPath}  (${(size / 1024).toFixed(1)} KB)`);
  }

  await fs.rm(tmpDir, { recursive: true, force: true });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
