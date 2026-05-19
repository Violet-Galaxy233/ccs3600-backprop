# Short Report — AI Tools Used & Workflow

**Course:** CCS3600 Artificial Intelligence — Natural Language Processing
**Project:** AI-Assisted Teaching Content Enhancement
**Topic:** (10) Back Propagation
**Deliverable:** Item 4 — Short report (tools used & workflow)

---

## 1. Summary

The original teaching material was a 32-slide, text-heavy PowerPoint deck on Back Propagation Neural Networks. Using an AI-driven pipeline, we transformed it into a 22-slide, professionally designed, natively-editable PowerPoint presentation with AI-generated visuals, a ~17.5-minute narrated lecture video, and a synchronized subtitle track. This report documents the AI tools used and the end-to-end workflow.

---

## 2. AI Tools Used

| Tool | Role in this project | Why this tool |
|---|---|---|
| **Claude Code (Claude Opus 4.7)** | The AI agent/editor that orchestrated the entire pipeline: content analysis, design decisions, SVG authoring, narration scripting, debugging. | Strong long-context reasoning and precise layout/coordinate control — produces the highest-fidelity slide design among current models. |
| **PPT Master** (open-source framework) | The workflow that converts source documents into a *natively editable* PPTX through an AI-generates-SVG → script-converts-to-DrawingML pipeline. | See Section 5 — the core reason native, editable output was achievable. |
| **OpenAI `gpt-image-2`** | Generated 4 custom 3D-isometric neural-network visuals (cover background, applications divider, feed-forward architecture diagram, backpropagation flow diagram). | High prompt adherence for technical/abstract concept art and consistent style across a set. |
| **Microsoft Edge Neural TTS** (`edge-tts`, voice `en-US-AvaMultilingualNeural`) | Generated the per-slide voice narration and the word-boundary-timed subtitle track. | Natural, intelligible neural voice; emits real word-level timestamps so subtitles stay perfectly in sync with the audio. |
| Google Gemini API | Configured as a fallback image backend (not used in the final output). | Redundancy in case the primary image model was unavailable. |

These tools map onto the assignment's "Suggested AI Tools" categories: ChatGPT/Gemini-class generative AI (used here via Claude + gpt-image-2) for slide enhancement, and an AI voice/narration + subtitle pipeline for the lecture video.

---

## 3. Workflow (End-to-End Pipeline)

```
Source docs → Strategy/Design → AI Images → Slide Construction
   → Quality Gate → Narration Script → Export → Audio → Subtitles → Video-ready PPTX
```

**Step 1 — Source ingestion.** The original `back propagation.pptx` (32 slides) and the project requirements PDF were converted to Markdown so the AI could analyze the full academic content and the grading rubric.

**Step 2 — Strategy & design specification.** The content was restructured from 32 redundant, text-dense slides into a 22-slide narrative with clear information hierarchy. A formal design specification was produced and locked: a dark "tech / neural-network" theme, a 4-color system (deep slate `#0F172A`, electric blue `#3B82F6`, cyan `#22D3EE`, purple `#8B5CF6`), a typographic scale, and a per-page icon and image plan. **All original academic content and learning outcomes were preserved** — consolidation removed repetition, not substance.

**Step 3 — AI image generation.** Four bespoke 3D-isometric illustrations were generated with `gpt-image-2` using detailed, color-locked prompts (see the companion *Prompt Examples* document) so every image matched the deck's palette and style.

**Step 4 — Slide construction.** All 22 slides were authored as SVG vector graphics, one page at a time, following the locked design spec for visual consistency (custom neural-network diagrams, formula displays, comparison layouts, timelines, infographic cards).

**Step 5 — Quality gate.** An automated quality checker validated every slide (correct canvas, no forbidden constructs, no broken image/icon references). Issues found — four image-path errors and several missing-icon references — were diagnosed and fixed before proceeding (0 errors at release).

**Step 6 — Narration script.** A lecturer-style speaking script was written for all 22 slides. After a duration test, the script was deliberately revised: an over-long version was *trimmed* (not sped up) so the final narration runs at a natural pace and lands within the required 15–20 minute window.

**Step 7 — Export.** Post-processing converted the SVGs into a PowerPoint file built from **native DrawingML shapes** — every text box, gradient, and shape is individually selectable and editable, not a flattened image.

**Step 8 — Audio & subtitles.** Per-slide narration was generated with `edge-tts` at a natural pace (total ≈ 17.6 min). Word-timed subtitles were generated *together with* the audio and stitched into a single SRT, so captions match the spoken words exactly.

**Step 9 — Video-ready deck.** The narration was embedded back into the PPTX with auto-advance timings derived from each slide's real audio length, producing a self-running ~17.5-minute lecture video with an accompanying `.srt` subtitle file.

---

## 4. Human Review, Verification & Original Contribution

In line with the project's academic-integrity requirements, AI output was reviewed and corrected throughout — this was not a copy-paste of raw AI generation:

- **Content restructuring** was a human-directed editorial decision (32 → 22 slides), preserving all learning outcomes while removing redundancy.
- **Technical accuracy** of every slide (formulas, the chain-rule explanation, the BP vs. BPTT distinction, the history timeline) was verified against the original lecture material.
- **Defect fixing:** image-path errors, missing/incorrect icon references, and an audio/subtitle synchronization problem were each identified and resolved manually.
- **Narration pacing** was a judgement call: the first script was too long; rather than speed up the voice (which sounded rushed), the script itself was rewritten to a moderate length at a natural pace.
- **Subtitle accuracy:** an initial estimated-timing subtitle track drifted ahead of the voice; it was replaced with a regenerated, word-boundary-accurate track.

---

## 5. Why PPT Master (Tool Justification)

We deliberately did **not** use a one-click browser SaaS generator for the final deliverable. The decisive factors, drawn from the tool's design rationale ([`docs/why-ppt-master.md`](https://github.com/hugohe3/ppt-master/blob/main/docs/why-ppt-master.md)):

1. **Real PowerPoint output, not images or web exports.** Most AI slide tools embed each slide as a flat image, or render HTML that breaks on PPTX export. PPT Master takes a different path: the AI generates **SVG**, then scripts convert SVG to **DrawingML** — the same class of absolute-coordinate 2D vector format PowerPoint uses natively. The result: every shape, text box, gradient, and shadow in the exported deck is a real, editable PowerPoint object. This directly satisfies the rubric's demand for professional, modifiable slides and the "do not submit unmodified AI output" rule — we could (and did) hand-edit the AI's work.

2. **Transparent cost.** The framework is free and open-source; the only spend is our own AI model usage. No separate $8–45/month presentation subscription (Gamma, Beautiful.ai) on top of AI costs.

3. **Data privacy — 100% local.** Source documents are converted, slides generated, and the PPTX exported entirely on the local machine. Nothing is uploaded to a third-party presentation server.

4. **No lock-in.** It is a framework, not a plugin tied to one editor or model — the workflow is portable across AI editors and models.

**Honest trade-off:** PPT Master requires local setup and is slower than SaaS tools (serial, page-by-page generation for cross-slide consistency). For this project, native editability, verifiable accuracy, and full control over the output outweighed the convenience of instant browser generation — which is exactly the academic-integrity posture the assignment asks for.

---

## 6. Deliverables Produced by This Workflow

| # | Deliverable | Output |
|---|---|---|
| 1 | Improved slide presentation | `exports/back-propagation_20260518_210333.pptx` (native editable, 22 slides) |
| 2 | AI-generated lecture video | Same PPTX with embedded narration + auto-advance timings (~17.5 min); export to MP4 via PowerPoint |
| — | Subtitle track | `exports/back-propagation_subtitles.srt` (word-accurate, 155 cues) |
| 4 | Short report (this document) | `report/Short_Report_Tools_and_Workflow.md` |
| 5 | Prompt examples | `report/Prompt_Examples.md` |

*(Item 3, auto-gradable assessment activities, is a separate task and is not covered by this report.)*
