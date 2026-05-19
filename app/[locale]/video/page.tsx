import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import VideoEmbed from "@/components/VideoEmbed";
import { site } from "@/content/site";

export default async function VideoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("video");

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold sm:text-4xl">
        <span className="gradient-text">{t("title")}</span>
      </h1>
      <p className="mt-3 max-w-2xl text-fg-muted">{t("intro")}</p>
      <p className="mt-1 text-sm text-fg-muted">
        {t("duration")}: ~{site.video.durationMinutes} min
      </p>

      <div className="mt-8">
        <VideoEmbed unsupportedLabel={t("unsupported")} />
      </div>

      <a
        href={site.video.fileSrc}
        download
        className="mt-5 inline-block rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-panel"
      >
        ↓ {t("download")}
      </a>
    </Container>
  );
}
