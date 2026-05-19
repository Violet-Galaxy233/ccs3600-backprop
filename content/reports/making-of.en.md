# Making-Of — Phase 2: Trilingual Web Delivery

**Course:** CCS3600 Artificial Intelligence — Natural Language Processing
**Project:** AI-Assisted Teaching Content Enhancement · **Topic:** (10) Back Propagation
**Scope:** A *new* tool-use report and prompt-examples record covering the construction of this website itself.

> This document complements — it does not replace — the Phase 1 docs
> (*AI Tools & Workflow Report* and *Prompt Examples*), which cover the slide,
> video and quiz pipeline. Phase 1 produced the courseware; **Phase 2** turned
> every deliverable into this single trilingual website.

---

## 1. Summary

The five Phase-1 deliverables (a 22-slide deck, an ~18-minute narrated video, a
20-question auto-gradable quiz, and two documentation drafts) existed as loose
files. In Phase 2 they were unified into one responsive, trilingual
(English / 简体中文 / Bahasa Melayu) website, version-controlled on GitHub and
deployed on Vercel, so the project can be assessed as a single live artifact.

This itself is an exercise in *effective, responsible use of AI tools*: the site
was planned and built with an AI coding agent under human direction, with every
architectural decision reviewed and every defect corrected by hand.

---

## 2. AI Tools Used

| Tool | Role in Phase 2 | Why this tool |
|---|---|---|
| **Claude Code (Claude Opus 4.7, 1M context)** | The AI agent that planned and implemented the site: multi-agent exploration of the requirements, architecture design, writing the Next.js app, i18n, and the deployment. | Long-context reasoning across the whole project, multi-agent planning (Explore + Plan sub-agents), and direct tool use (filesystem, shell, git). |
| **Next.js 16 (App Router) + next-intl** | Framework and internationalization (`[locale]` routing, message catalogs, English fallback for partial translations). | First-party Vercel target; mature App-Router i18n; the interactive quiz is a natural client component. |
| **Tailwind CSS v4 + KaTeX** | Styling system and server-rendered mathematics for the lecture formulas. | Fast, consistent, accessible UI; KaTeX renders the chain-rule / loss formulas without client JS. |
| **ffmpeg (two-pass H.264)** | Re-encoded the 207 MB lecture video to ~98 MB so it fits within GitHub's 100 MB hard limit and Vercel's static serving. | Predictable target size with two-pass encoding; full 1080p slide-text legibility verified by sampling frames. |
| **gh / git** | Private GitHub repository creation and push. | Non-interactive, scriptable repository workflow. |
| **Vercel** | Hosting and continuous deployment from the repository. | Zero-config Next.js deploys; free tier sufficient for this site. |

---

## 3. Workflow (End-to-End)

```
Requirements analysis → Plan (approved) → Scaffold + i18n skeleton
  → Interactive quiz → Lecture content → Video re-encode + media pages
  → Reports as web pages → Private repo + Vercel deploy → Trilingual fill → Verify
```

**Step 1 — Requirements analysis.** Three parallel read-only sub-agents
extracted the assignment rubric (`Mini Project ccs3600.pdf`), the 22-slide
content outline (from the enhanced `.pptx`), and the state of the existing quiz
and report drafts.

**Step 2 — Planning under constraints.** Two planning sub-agents produced an
architecture and a logistics/risk plan. Key constraints were surfaced *before*
coding: GitHub's 100 MB file limit vs. the 207 MB video, Git LFS not being
fetched by Vercel, academic-integrity exposure of a public solution, and a
3-day deadline. The user chose: re-encode the video in-repo, a **private**
repository, and a **phased** translation rollout (EN + 简体中文 first, Bahasa
Melayu next with English fallback).

**Step 3 — Scaffold & i18n skeleton.** A Next.js app was generated in a clean
temporary directory (its empty-directory check rejects a folder containing the
source media), then merged into the project. A project-specific `.gitignore`
was written **before any `git` command** so the 207 MB video could never enter
git history.

**Step 4 — Interactive quiz.** All 20 questions were transcribed into a typed,
trilingual data model and cross-checked against the answer key
(`1B 2C 3C 4A 5C 6B 7B 8A 9B 10B 11B 12C 13B 14B 15B / 16F 17T 18T 19T 20T`).
Grading is fully client-side with instant feedback, explanations, a live score,
and a pass mark of 12/20.

**Step 5 — Lecture content.** The 22 slides were rebuilt as native,
translatable sections (paragraphs, lists, steps, comparisons, callouts, and
KaTeX formulas) grouped into the original four parts — not embedded slide
images, so the content is responsive and translatable.

**Step 6 — Media & reports.** The video was re-encoded and verified; the PPTX
and PDF were exposed as downloads; the two Phase-1 documents and this Making-Of
were turned into web pages.

**Step 7 — Deploy.** Private GitHub repository created and pushed; the user
connected Vercel via the dashboard (the only interactive, user-owned step) for
production deployment.

**Step 8 — Trilingual fill & verification.** Simplified Chinese authored across
UI and quiz; Bahasa Melayu drafted with an English fallback and an in-product
"translation in progress" banner; the trilingual switch, quiz grading, video,
and downloads were verified locally and on the live URL.

---

## 4. Human Review, Verification & Original Contribution

In line with the project's academic-integrity requirements, AI output was
directed and corrected throughout:

- **Decisions were human-made.** Video hosting, repository visibility, language
  scope, and naming were chosen by the user from explicit trade-off options —
  not defaulted by the AI.
- **A safety guard was designed in.** The `.gitignore` was written and verified
  *before* the first commit specifically to prevent a >100 MB blob entering git
  history (which would permanently block pushes).
- **Quiz correctness was verified** against the source answer key so no correct
  answer shifted during translation.
- **Formulas and proper nouns are locked as non-translatable** (e.g.
  `dz/dx = (dz/dy)·(dy/dx)`, `w₍ᵢ,ⱼ,ₖ₎`, Cauchy, Parkhi/Vidaldi/Zisserman,
  Sony) so mathematics stays correct in every language.
- **Defects found and fixed during the build** are logged in §6.

---

## 5. Prompt Examples (Phase 2 — the website build)

The orchestration prompts that drove this phase (quoted as given):

> 这个是项目要求 … 然后我根据要求已经做完了 … 现在我想把这个做成一个网站，上传到
> github 上然后 vercel 部署，中英马来语三语，直观的展示各个部分，然后最后包含这次
> 对话写一份新的 prompt example 和 tool use report，也放在网站上，以网站作为项目最终
> 展示形式。
>
> *(Translation: "These are the project requirements; I have already completed
> the work. Now I want to turn it into a website, push it to GitHub and deploy
> on Vercel, in three languages — Chinese, English, Malay — intuitively
> presenting each part, and finally, including this conversation, write a new
> prompt-example and tool-use report and put it on the site too, with the
> website as the final presentation form.")*

Decision prompt (answered through a structured choice UI):

> Video → re-encode to ~95 MB in-repo · Repo → private · Languages → phased
> EN + 简体中文 first, then Bahasa Melayu · Repo name → `ccs3600-backprop`.

**Prompt-engineering techniques applied in this phase:**

- *Plan-before-build:* the agent ran read-only exploration and produced a
  written plan that was reviewed and approved before any code was written.
- *Constraint-first prompting:* hard limits (100 MB, deadline, integrity) were
  stated up front so the design accounted for them rather than discovering them
  late.
- *Structured decision elicitation:* ambiguous choices were turned into
  explicit options with recommended defaults instead of the AI guessing.
- *Locale-shaped data model:* content was structured as per-field
  `{ en, zh, ms }` from day one so translations slot in without re-architecture.

The representative ffmpeg command used to re-encode the video (two-pass,
size-targeted, quality verified):

```
ffmpeg -i 22.mp4 -c:v libx264 -b:v 600k -pass 1 -an -f mp4 /dev/null
ffmpeg -i 22.mp4 -c:v libx264 -b:v 600k -pass 2 -c:a aac -b:a 96k \
  -movflags +faststart -pix_fmt yuv420p public/video/back-propagation.mp4
```

---

## 6. Defects Found & Corrected

- A Bahasa Melayu string read `bersuara AID` — corrected to `bersuara AI`.
- Next 16 deprecates the `middleware` file convention; the file was renamed to
  `proxy.ts` to remove the build-time warning.
- `.gitignore` patterns for the source decks were initially unanchored and would
  also have ignored the curated `public/downloads/` copies; they were anchored
  to the repository root.
- Re-encoded video legibility was *verified*, not assumed: sample frames at
  multiple timestamps were inspected to confirm slide text and formulas stayed
  sharp at the reduced bitrate.

---

## 7. Deliverables of This Phase

| Deliverable | Output |
|---|---|
| Unified showcase | This trilingual website (Home · Lecture · Video · Quiz · Resources · Report · Prompts · Making-Of) |
| Source control | Private GitHub repository `ccs3600-backprop` |
| Hosting | Vercel production deployment |
| New tool-use report + prompt examples | This Making-Of document |
