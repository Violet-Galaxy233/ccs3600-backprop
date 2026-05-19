import type { LangText } from "@/lib/i18n-content";

export type PartId =
  | "foundations"
  | "theory"
  | "applications"
  | "evaluation";

export type LectureBlock =
  | { type: "paragraph"; text: LangText }
  | { type: "list"; items: LangText[] }
  | { type: "steps"; steps: LangText[] }
  | { type: "math"; tex: string } // locale-invariant
  | { type: "callout"; variant: "key" | "note"; text: LangText }
  | {
      type: "compare";
      leftTitle: LangText;
      rightTitle: LangText;
      left: LangText[];
      right: LangText[];
    }
  | { type: "reference"; cite: string }; // locale-invariant

export type LectureSection = {
  id: string; // stable slug, locale-invariant
  part: PartId;
  slideRef: number; // slide number in the enhanced 22-slide deck
  title: LangText;
  body: LectureBlock[];
};
