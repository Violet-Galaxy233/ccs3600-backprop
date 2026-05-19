"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { localeNames, type Locale } from "@/i18n/routing";

export default function TranslationBanner({ locale }: { locale: string }) {
  const t = useTranslations("banner");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (locale === "en") return;
    const dismissed =
      typeof window !== "undefined" &&
      window.localStorage.getItem(`i18n-banner-${locale}`) === "1";
    setHidden(dismissed);
  }, [locale]);

  if (locale === "en" || hidden) return null;

  return (
    <div
      role="status"
      className="border-b border-border bg-panel/60 px-5 py-2 text-center text-xs text-fg-muted sm:px-8"
    >
      <span>
        {t("translationInProgress", {
          locale: localeNames[locale as Locale] ?? locale,
        })}
      </span>
      <button
        type="button"
        className="ml-3 underline underline-offset-2 hover:text-fg"
        onClick={() => {
          window.localStorage.setItem(`i18n-banner-${locale}`, "1");
          setHidden(true);
        }}
      >
        {t("dismiss")}
      </button>
    </div>
  );
}
