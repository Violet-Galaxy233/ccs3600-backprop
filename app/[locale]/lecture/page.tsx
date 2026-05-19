import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import { lecture } from "@/content/lecture/lecture";
import type { PartId } from "@/content/lecture/types";
import { pickLang } from "@/lib/i18n-content";

const PART_ORDER: PartId[] = [
  "foundations",
  "theory",
  "applications",
  "evaluation",
];

const slideSrc = (n: number) => `/slides/${String(n).padStart(2, "0")}.svg`;

export default async function LecturePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("lecture");

  const grouped = PART_ORDER.map((part) => ({
    part,
    sections: lecture.filter((s) => s.part === part),
  }));

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold sm:text-4xl">
        <span className="gradient-text">{t("title")}</span>
      </h1>
      <p className="mt-3 max-w-2xl text-fg-muted">{t("intro")}</p>

      <div className="mt-10 gap-10 lg:grid lg:grid-cols-[220px_1fr]">
        <nav
          aria-label={t("outline")}
          className="mb-8 hidden self-start lg:sticky lg:top-20 lg:block"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-fg-muted">
            {t("outline")}
          </p>
          <ul className="space-y-1 text-sm">
            {lecture.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block rounded px-2 py-1 text-fg-muted transition hover:bg-panel hover:text-fg"
                >
                  {pickLang(s.title, locale)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-12">
          {grouped.map(({ part, sections }) => (
            <section key={part}>
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-cyan">
                {t(`parts.${part}`)}
              </h2>
              <div className="space-y-10">
                {sections.map((s) => (
                  <article
                    key={s.id}
                    id={s.id}
                    className="card scroll-mt-24 overflow-hidden"
                  >
                    <div className="flex items-baseline justify-between gap-4 px-6 pt-6 sm:px-8">
                      <h3 className="text-xl font-bold sm:text-2xl">
                        {pickLang(s.title, locale)}
                      </h3>
                      <span className="shrink-0 text-xs text-fg-muted">
                        {t("slideRef", { n: s.slideRef })}
                      </span>
                    </div>
                    <a
                      href={slideSrc(s.slideRef)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block bg-[#0F172A]"
                      aria-label={pickLang(s.title, locale)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slideSrc(s.slideRef)}
                        alt={pickLang(s.title, locale)}
                        width={1280}
                        height={720}
                        loading="lazy"
                        className="aspect-video w-full"
                      />
                    </a>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
