import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import { site } from "@/content/site";

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("resources");

  const items = [
    {
      title: t("pptxTitle"),
      desc: t("pptxDesc"),
      href: site.downloads.pptx.href,
      size: site.downloads.pptx.size,
      icon: "📊",
    },
    {
      title: t("pdfTitle"),
      desc: t("pdfDesc"),
      href: site.downloads.pdf.href,
      size: site.downloads.pdf.size,
      icon: "📄",
    },
    {
      title: t("videoTitle"),
      desc: t("videoDesc"),
      href: site.downloads.video.href,
      size: site.downloads.video.size,
      icon: "🎬",
    },
    {
      title: t("reportTitle"),
      desc: t("reportDesc"),
      href: site.downloads.report.href,
      size: site.downloads.report.size,
      icon: "📝",
    },
    {
      title: t("promptsTitle"),
      desc: t("promptsDesc"),
      href: site.downloads.prompts.href,
      size: site.downloads.prompts.size,
      icon: "💬",
    },
  ];

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold sm:text-4xl">
        <span className="gradient-text">{t("title")}</span>
      </h1>
      <p className="mt-3 max-w-2xl text-fg-muted">{t("intro")}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            download
            className="card group flex flex-col p-6 transition hover:-translate-y-0.5 hover:border-brand"
          >
            <div className="text-3xl">{it.icon}</div>
            <h2 className="mt-4 text-lg font-semibold">{it.title}</h2>
            <p className="mt-2 text-sm text-fg-muted">{it.desc}</p>
            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="font-medium text-cyan">{t("download")} ↓</span>
              <span className="text-fg-muted">
                {t("sizeLabel")}: {it.size}
              </span>
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
}
