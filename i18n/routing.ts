import { defineRouting } from "next-intl/routing";

export const locales = ["en", "zh", "ms"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "简体中文",
  ms: "Bahasa Melayu",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});
