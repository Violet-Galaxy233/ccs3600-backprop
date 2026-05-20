import { getTranslations } from "next-intl/server";
import { site } from "@/content/site";

export default async function Footer() {
  const t = await getTranslations("footer");
  const tc = await getTranslations("common");
  const th = await getTranslations("home");
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-5 py-8 text-sm text-fg-muted sm:px-8">
        <p className="font-medium text-fg">
          {tc("courseCode")} · {tc("projectTitle")}
        </p>
        <p className="mt-1">
          <span className="font-medium text-fg">{th("teamLabel")}：</span>
          {site.team.map((m, i) => (
            <span key={m.matricNo}>
              {i > 0 && <span className="mx-1.5">·</span>}
              {m.name} ({m.matricNo}
              {m.lead ? `, ${th("teamLead")}` : ""})
            </span>
          ))}
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
