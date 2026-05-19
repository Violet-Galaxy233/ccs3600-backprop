import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import Math from "@/components/Math";
import { lecture } from "@/content/lecture/lecture";
import type { LectureBlock, PartId } from "@/content/lecture/types";
import { pickLang } from "@/lib/i18n-content";

const PART_ORDER: PartId[] = [
  "foundations",
  "theory",
  "applications",
  "evaluation",
];

function Block({
  block,
  locale,
}: {
  block: LectureBlock;
  locale: string;
}) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="leading-relaxed text-fg-muted">
          {pickLang(block.text, locale)}
        </p>
      );
    case "list":
      return (
        <ul className="list-disc space-y-1.5 pl-5 text-fg-muted">
          {block.items.map((it, i) => (
            <li key={i}>{pickLang(it, locale)}</li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="list-decimal space-y-1.5 pl-5 text-fg-muted marker:text-cyan marker:font-semibold">
          {block.steps.map((it, i) => (
            <li key={i}>{pickLang(it, locale)}</li>
          ))}
        </ol>
      );
    case "math":
      return <Math tex={block.tex} />;
    case "callout":
      return (
        <div
          className={`rounded-xl border-l-4 px-4 py-3 ${
            block.variant === "key"
              ? "border-cyan bg-cyan/5"
              : "border-violet bg-violet/5"
          }`}
        >
          <p className="text-sm text-fg">{pickLang(block.text, locale)}</p>
        </div>
      );
    case "compare":
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {(
            [
              { title: block.leftTitle, items: block.left },
              { title: block.rightTitle, items: block.right },
            ] as const
          ).map((col, i) => (
            <div key={i} className="rounded-xl border border-border p-4">
              <p className="mb-2 font-semibold text-fg">
                {pickLang(col.title, locale)}
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-fg-muted">
                {col.items.map((it, j) => (
                  <li key={j}>{pickLang(it, locale)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "reference":
      return (
        <p className="text-sm italic text-fg-muted">↳ {block.cite}</p>
      );
    default:
      return null;
  }
}

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
                    className="card scroll-mt-24 p-6 sm:p-8"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-xl font-bold sm:text-2xl">
                        {pickLang(s.title, locale)}
                      </h3>
                      <span className="shrink-0 text-xs text-fg-muted">
                        {t("slideRef", { n: s.slideRef })}
                      </span>
                    </div>
                    <div className="mt-4 space-y-4">
                      {s.body.map((b, i) => (
                        <Block key={i} block={b} locale={locale} />
                      ))}
                    </div>
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
