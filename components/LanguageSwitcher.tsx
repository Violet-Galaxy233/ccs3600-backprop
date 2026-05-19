"use client";

import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/routing";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const t = useTranslations("common");
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function onChange(next: Locale) {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="sr-only">{t("language")}</span>
      <span aria-hidden className="text-fg-muted">
        🌐
      </span>
      <select
        aria-label={t("language")}
        value={locale}
        disabled={isPending}
        onChange={(e) => onChange(e.target.value as Locale)}
        className="rounded-lg border border-border bg-panel px-2 py-1.5 text-fg outline-none focus:ring-2 focus:ring-brand"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {localeNames[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
