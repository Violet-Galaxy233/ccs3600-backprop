import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Container from "@/components/Container";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <Container className="py-24 text-center">
      <p className="text-6xl font-extrabold gradient-text">404</p>
      <h1 className="mt-4 text-2xl font-bold">{t("title")}</h1>
      <p className="mt-2 text-fg-muted">{t("desc")}</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white"
      >
        {t("home")}
      </Link>
    </Container>
  );
}
