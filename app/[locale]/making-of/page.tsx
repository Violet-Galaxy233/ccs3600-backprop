import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import MarkdownDoc from "@/components/MarkdownDoc";
import { getReportMarkdown } from "@/lib/reports";

export const dynamic = "force-static";

export default async function MakingOfPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("makingOf");
  const md = await getReportMarkdown("making-of", locale);

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold sm:text-4xl">
        <span className="gradient-text">{t("title")}</span>
      </h1>
      <p className="mt-3 max-w-2xl text-fg-muted">{t("intro")}</p>
      <div className="card mt-8 p-6 sm:p-10">
        <MarkdownDoc markdown={md} />
      </div>
    </Container>
  );
}
