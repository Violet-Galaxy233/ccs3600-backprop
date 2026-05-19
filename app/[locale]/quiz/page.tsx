import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import Quiz, { type QuizItem } from "@/components/Quiz";
import { quiz, quizMeta } from "@/content/quiz/quiz";
import { pickLang } from "@/lib/i18n-content";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("quiz");

  const items: QuizItem[] = quiz.map((q) => ({
    id: q.id,
    type: q.type,
    section: q.section,
    prompt: pickLang(q.prompt, locale),
    options: q.options.map((o) => pickLang(o, locale)),
    correctIndex: q.correctIndex,
    explanation: pickLang(q.explanation, locale),
    slideRef: q.slideRef,
  }));

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold sm:text-4xl">
        <span className="gradient-text">{t("title")}</span>
      </h1>
      <p className="mt-3 max-w-2xl text-fg-muted">{t("intro")}</p>
      <div className="mt-8">
        <Quiz items={items} passMark={quizMeta.passMark} />
      </div>
    </Container>
  );
}
