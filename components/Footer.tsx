import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");
  const tc = await getTranslations("common");
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-5 py-8 text-sm text-fg-muted sm:px-8">
        <p className="font-medium text-fg">
          {tc("courseCode")} · {tc("projectTitle")}
        </p>
        <p className="mt-1">{t("tagline")}</p>
        <p className="mt-1">{t("originalCredit")}</p>
        <p className="mt-3 text-xs">
          {t("builtWith")} · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
