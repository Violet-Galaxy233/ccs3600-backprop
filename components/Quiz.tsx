"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export type QuizItem = {
  id: number;
  type: "mcq" | "truefalse";
  section: "A" | "B";
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  slideRef: string;
};

export default function Quiz({
  items,
  passMark,
}: {
  items: QuizItem[];
  passMark: number;
}) {
  const t = useTranslations("quiz");
  const total = items.length;

  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(total).fill(null),
  );
  const [finished, setFinished] = useState(false);

  const score = useMemo(
    () =>
      items.reduce(
        (acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0),
        0,
      ),
    [answers, items],
  );
  const answeredCount = answers.filter((a) => a !== null).length;

  const q = items[index];
  const choices =
    q?.type === "truefalse" ? [t("true"), t("false")] : q?.options ?? [];
  const locked = q ? answers[index] !== null : false;
  const selected = q ? answers[index] : null;

  function choose(optionIndex: number) {
    if (locked) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = optionIndex;
      return next;
    });
  }

  function reset() {
    setAnswers(Array(total).fill(null));
    setIndex(0);
    setFinished(false);
    setStarted(true);
  }

  if (!started) {
    return (
      <div className="card p-8 text-center">
        <p className="text-fg-muted">{t("intro")}</p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="mt-6 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          {t("start")}
        </button>
      </div>
    );
  }

  if (finished) {
    const percent = Math.round((score / total) * 100);
    const passed = score >= passMark;
    return (
      <div className="card p-8 text-center" role="status" aria-live="polite">
        <h2 className="text-xl font-semibold">{t("resultTitle")}</h2>
        <p className="mt-4 text-5xl font-extrabold gradient-text">
          {t("resultScore", { score, total })}
        </p>
        <p className="mt-1 text-lg text-fg-muted">
          {t("resultPercent", { percent })}
        </p>
        <p
          className={`mt-5 text-lg font-semibold ${
            passed ? "text-cyan" : "text-violet"
          }`}
        >
          {passed ? t("passed") : t("failed")}
        </p>
        <p className="mt-1 text-sm text-fg-muted">
          {t("passNote", { pass: passMark, total })}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {t("retry")}
          </button>
          <Link
            href="/lecture"
            className="rounded-xl border border-border px-5 py-3 text-sm font-semibold transition hover:bg-panel"
          >
            {t("reviewLecture")}
          </Link>
        </div>
      </div>
    );
  }

  const isLast = index === total - 1;

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-sm">
        <span className="text-fg-muted">
          {t("questionOf", { current: index + 1, total })} ·{" "}
          {q.section === "A" ? t("sectionA") : t("sectionB")}
        </span>
        <span
          className="rounded-full border border-border px-3 py-1 font-medium"
          aria-live="polite"
        >
          {t("scoreLive", { score, total })}
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-panel">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan to-violet transition-all"
          style={{ width: `${(answeredCount / total) * 100}%` }}
        />
      </div>

      <div className="card mt-5 p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-wide text-fg-muted">
          {q.slideRef}
        </p>
        <h2 className="mt-2 text-lg font-semibold sm:text-xl">
          {index + 1}. {q.prompt}
        </h2>

        <div
          className="mt-5 grid gap-3"
          role="radiogroup"
          aria-label={q.prompt}
        >
          {choices.map((opt, i) => {
            const isCorrect = i === q.correctIndex;
            const isChosen = selected === i;
            let cls =
              "border-border bg-panel hover:border-brand focus-visible:ring-2 focus-visible:ring-brand";
            if (locked && isCorrect)
              cls = "border-cyan bg-cyan/10 text-fg";
            else if (locked && isChosen && !isCorrect)
              cls = "border-violet bg-violet/10 text-fg";
            else if (locked) cls = "border-border bg-panel opacity-60";
            return (
              <button
                key={i}
                type="button"
                role="radio"
                aria-checked={isChosen}
                disabled={locked}
                onClick={() => choose(i)}
                className={`rounded-xl border px-4 py-3 text-left text-sm transition ${cls}`}
              >
                <span className="mr-2 font-mono text-fg-muted">
                  {q.type === "truefalse"
                    ? ""
                    : String.fromCharCode(65 + i) + "."}
                </span>
                {opt}
                {locked && isCorrect && (
                  <span className="ml-2 text-cyan">✓</span>
                )}
                {locked && isChosen && !isCorrect && (
                  <span className="ml-2 text-violet">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {locked && (
          <div
            className="mt-5 rounded-xl border border-border bg-ink-2 p-4 text-sm"
            aria-live="polite"
          >
            <p
              className={`font-semibold ${
                selected === q.correctIndex ? "text-cyan" : "text-violet"
              }`}
            >
              {selected === q.correctIndex ? t("correct") : t("incorrect")}
            </p>
            <p className="mt-2 leading-relaxed text-fg-muted">
              <span className="font-medium text-fg">
                {t("explanation")}:{" "}
              </span>
              {q.explanation}
            </p>
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-fg-muted">
            {t("answeredCount", { answered: answeredCount, total })}
          </span>
          <button
            type="button"
            disabled={!locked}
            onClick={() =>
              isLast ? setFinished(true) : setIndex((i) => i + 1)
            }
            className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition enabled:hover:opacity-90 disabled:opacity-40"
          >
            {isLast ? t("finish") : t("next")}
          </button>
        </div>
      </div>
    </div>
  );
}
