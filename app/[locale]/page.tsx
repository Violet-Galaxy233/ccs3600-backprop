import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Container from "@/components/Container";
import { site } from "@/content/site";

const CARDS = [
  { key: "lecture", href: "/lecture", icon: "📚" },
  { key: "video", href: "/video", icon: "🎬" },
  { key: "quiz", href: "/quiz", icon: "✅" },
  { key: "resources", href: "/resources", icon: "📦" },
  { key: "report", href: "/report", icon: "🛠️" },
  { key: "prompts", href: "/prompts", icon: "💬" },
] as const;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  const facts = [
    { key: "slides", value: site.facts.slides },
    { key: "videoLen", value: site.facts.videoLen },
    { key: "questions", value: site.facts.questions },
    { key: "languages", value: site.facts.languages },
  ] as const;

  return (
    <div>
      <section className="relative overflow-hidden">
        <Container className="py-16 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan">
            {t("kicker")}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            <span className="gradient-text">{t("title")}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-fg-muted">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/lecture"
              className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {t("ctaLecture")}
            </Link>
            <Link
              href="/quiz"
              className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-fg transition hover:bg-panel"
            >
              {t("ctaQuiz")}
            </Link>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.key} className="card px-4 py-4">
                <dt className="text-xs uppercase tracking-wide text-fg-muted">
                  {t(`facts.${f.key}`)}
                </dt>
                <dd className="mt-1 text-2xl font-bold gradient-text">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section>
        <Container className="pb-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {t("overviewTitle")}
          </h2>
          <p className="mt-2 text-fg-muted">{t("overviewSubtitle")}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((c) => (
              <Link
                key={c.key}
                href={c.href}
                className="card group p-6 transition hover:-translate-y-0.5 hover:border-brand"
              >
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">
                  {t(`cards.${c.key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-fg-muted">
                  {t(`cards.${c.key}.desc`)}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-cyan opacity-0 transition group-hover:opacity-100">
                  →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
