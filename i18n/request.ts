import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

type Dict = Record<string, unknown>;

async function load(locale: string): Promise<Dict> {
  return (await import(`../messages/${locale}.json`)).default as Dict;
}

/**
 * Deep-merge `override` onto `base` so any key missing in a non-English
 * catalog transparently falls back to the English string. This guarantees
 * the UI never renders a raw key or a blank while ZH/MS are still partial.
 */
function deepMerge(base: Dict, override: Dict): Dict {
  const out: Dict = { ...base };
  for (const key of Object.keys(override ?? {})) {
    const b = base?.[key];
    const o = override[key];
    out[key] =
      b &&
      o &&
      typeof b === "object" &&
      typeof o === "object" &&
      !Array.isArray(b) &&
      !Array.isArray(o)
        ? deepMerge(b as Dict, o as Dict)
        : o;
  }
  return out;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const en = await load("en");
  const messages =
    locale === "en" ? en : deepMerge(en, await load(locale));

  return { locale, messages };
});
