import type { Locale } from "@/i18n/routing";

/** A text value translated per locale. `en` is mandatory (source of truth). */
export type LangText = {
  en: string;
  zh?: string;
  ms?: string;
};

/** Resolve a LangText for a locale, falling back to English when missing. */
export function pickLang(text: LangText, locale: string): string {
  const l = locale as Locale;
  return text[l]?.trim() ? (text[l] as string) : text.en;
}
