import { promises as fs } from "node:fs";
import path from "node:path";
import { routing } from "@/i18n/routing";

const DIR = path.join(process.cwd(), "content", "reports");

/**
 * Load a report's Markdown for a locale, falling back to English.
 * Files are read at build time (pages are statically generated).
 */
export async function getReportMarkdown(
  slug: "report" | "prompts",
  locale: string,
): Promise<string> {
  const candidate = path.join(DIR, `${slug}.${locale}.md`);
  const fallback = path.join(DIR, `${slug}.${routing.defaultLocale}.md`);
  try {
    return await fs.readFile(candidate, "utf8");
  } catch {
    return fs.readFile(fallback, "utf8");
  }
}
