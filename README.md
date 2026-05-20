# CCS3600 — Backpropagation Trilingual Showcase

The final presentation form of the CCS3600 *AI-Assisted Teaching Content
Enhancement* mini-project (Topic 10: Back Propagation). It unifies every
deliverable into one responsive, trilingual website.

**Team:** Yue Chenghao (227154, lead) · Huajie (226758) · Li Mingzhu (226829)

**Languages:** English · 简体中文 · Bahasa Melayu (language switcher; English
fallback for any not-yet-finalized strings).

## Pages

| Page | Content |
|---|---|
| Home | Overview of all deliverables |
| Lecture | The enhanced 22-slide deck rebuilt as native, responsive sections with KaTeX formulas |
| Video | The ~18-minute AI-narrated lecture video |
| Quiz | 20-question auto-graded quiz with instant feedback, explanations and a live score |
| Resources | Download every deliverable — slides (PPTX/PDF), the lecture video, and the report and prompt examples (PDF) |
| Report | AI tools & workflow report |
| Prompts | Prompt examples used in the AI pipeline |

## Tech

Next.js 16 (App Router) · next-intl · Tailwind CSS v4 · KaTeX · react-markdown.
Deployed on Vercel. Quiz grading is fully client-side.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /en
npm run build    # production build
npm start        # serve the production build
```

## Notes

- The lecture video is re-encoded with ffmpeg to fit GitHub's 100 MB file
  limit; the source 207 MB master is intentionally not committed.
- The video source is pluggable via `content/site.ts` (in-repo file or a
  YouTube embed) — no component changes needed to switch.
- The assignment brief and raw source decks are intentionally excluded
  (`.gitignore`) for academic-integrity reasons.
