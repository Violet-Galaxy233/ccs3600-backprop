# Prompt Examples Used in AI Tools

**Course:** CCS3600 Artificial Intelligence — Natural Language Processing
**Project:** AI-Assisted Teaching Content Enhancement
**Topic:** (10) Back Propagation
**Deliverable:** Item 5 — Prompt examples used in AI tools

This document collects the actual prompts and prompt-style instructions used to drive the AI tools throughout the project, organized by stage.

---

## 1. Orchestration Prompt (Claude Code — AI agent)

The top-level instruction that initiated the slide-enhancement task:

> 根据这份项目要求 `Mini Project ccs3600.pdf`，根据原有的 ppt `back propagation.pptx` 进行改善和美化，要符合项目要求。
> *(Translation: "Based on the project requirements PDF, improve and beautify the original `back propagation.pptx` so that it meets the project requirements.")*

Follow-up instructions used to steer later stages:

> 给这个 PPT 按项目要求生成一份音频，英文的。
> *("Generate an English audio narration for this PPT, per the project requirements.")*

> 语速太快了，是不是内容适当少一点然后语速慢一点。
> *("The speech is too fast — reduce the content somewhat and slow the pace down." → script was trimmed and re-narrated at natural speed instead of speeding up TTS.)*

> 整体字幕节奏是偏快的 → 重生音频 + 同步字幕。
> *("The subtitle pacing is too fast" → regenerate audio with word-synced subtitles.)*

---

## 2. AI Image Generation Prompts (OpenAI `gpt-image-2`)

Four images were generated. Each prompt locks the rendering style (3D isometric, 30/30/30 projection), the exact color palette, the compositional intent, and a strict "no text in image" constraint.

### 2.1 `cover_bg.png` — Cover background (Slide 01), 16:9, 2K

> 3D isometric illustration with clean geometric forms rendered in true 30/30/30 projection. All edges are crisp and uniform with no perspective distortion and no vanishing points. Surfaces use flat solid fills with subtle tonal shifts, a single darker shade for shadowed faces about 15 percent darker than the light-facing face, to convey volume without painterly rendering. Soft 8 percent drop shadows beneath floating elements anchor them in space. Color behavior is tech-neon: deep dark navy #0F172A covers the background plane and extends to the canvas edges at about 50 percent of area. Primary electric blue #3B82F6 carries the lit faces of interconnected neural network nodes arranged in multiple layers, rendered as glowing spheres and cubes connected by thin luminous lines, occupying about 35 percent of canvas. Accent vivid cyan #22D3EE appears as pulsing data particles flowing through the synaptic connections between nodes with subtle 8 percent opacity outer glow, covering about 12 percent of area. Secondary purple #8B5CF6 adds subtle depth to some shadowed node faces. The composition shows a vast isometric neural network floating in deep space with layers of nodes arranged in a structured grid pattern suggesting an artificial brain. Small luminous particles travel along the connection pathways suggesting data flow. Composed as a 1280x720 full-bleed background for hero_page use. NO text of any kind anywhere in the image, no letters, numbers, signs, watermarks, labels, or written symbols. Color values are rendering guidance only, do NOT display HEX codes or color names as visible text.

### 2.2 `section_applications.png` — Applications section divider (Slide 15), 16:9, 2K

> 3D isometric illustration with clean geometric forms rendered in true 30/30/30 projection. All edges are crisp and uniform with no perspective distortion. Surfaces use flat solid fills with subtle tonal shifts for shadowed faces about 15 percent darker. Soft 8 percent drop shadows beneath floating elements. Color behavior is tech-neon: deep navy #0F172A dominates the background at about 50 percent. Primary blue #3B82F6 fills the lit faces of isometric forms at about 35 percent. Accent cyan #22D3EE highlights key elements at about 12 percent with subtle glow. The composition shows an isometric cluster of pattern recognition elements: a large stylized eye form made of geometric blocks scanning geometric patterns, simplified face outlines rendered as flat polygon meshes, and sound wave visualizations as stacked bars converging on a central hexagonal processing hub. Multiple data streams flow from these recognition modules toward the central hub. Composed as a 1280x720 full-bleed background for hero_page use with the lower-center area kept relatively calm for SVG title overlay. NO text of any kind anywhere in the image, no letters, numbers, signs, watermarks, labels, or written symbols. Color values are rendering guidance only, do NOT display HEX codes or color names as visible text.

### 2.3 `nn_architecture.png` — Feed-forward architecture diagram (Slide 04), 1K

> 3D isometric illustration with clean geometric forms rendered in true 30/30/30 projection. All edges are crisp and uniform with no perspective distortion. Surfaces use flat solid fills with tonal shifts on shadowed faces about 15 percent darker. Soft 8 percent drop shadows beneath floating elements. Color behavior is tech-neon: secondary deep navy #0F172A covers the background at about 50 percent. Primary electric blue #3B82F6 fills the node spheres on their lit faces at about 35 percent. Accent cyan #22D3EE highlights the connection lines and one activated output node at about 12 percent with subtle glow effect. The composition shows a multi-layer feedforward neural network in isometric view. On the left side three input nodes rendered as glowing spheres. In the middle two hidden layers each with four nodes. On the right side two output nodes. All nodes connected by thin luminous lines showing the one-directional flow from left to right. Small glowing particles travel along the connections indicating data flow direction. The network floats above a subtle isometric grid plane. Composed as an 812x489 local block image with 15 percent inner padding. NO text of any kind anywhere in the image, no letters, numbers, signs, watermarks, labels, or written symbols. Color values are rendering guidance only, do NOT display HEX codes or color names as visible text.

### 2.4 `bp_flow.png` — Backpropagation flow diagram (Slide 12), 1K

> 3D isometric illustration with clean geometric forms rendered in true 30/30/30 projection. All edges are crisp and uniform with no perspective distortion. Surfaces use flat solid fills with tonal shifts on shadowed faces. Soft 8 percent drop shadows beneath floating elements. Color behavior is tech-neon: secondary deep navy #0F172A covers the background at about 50 percent. Primary blue #3B82F6 fills the neural network node spheres at about 30 percent. The composition shows a neural network with bidirectional data flow. Green #10B981 particles move forward from left to right through three layers of nodes suggesting the forward propagation pass. Orange-amber #F59E0B particles move backward from right to left through the same network suggesting the backward error propagation pass. The forward flow uses solid bright lines while the backward flow uses dashed or dotted luminous lines creating visual distinction between the two passes. Accent cyan #22D3EE appears on the output layer nodes where the error is calculated. The two flows coexist in the same network creating a dynamic sense of the training process. Composed as an 812x489 local block image with 15 percent inner padding. NO text of any kind anywhere in the image, no letters, numbers, signs, watermarks, labels, or written symbols. Color values are rendering guidance only, do NOT display HEX codes or color names as visible text.

**Prompt-engineering techniques applied:** explicit projection geometry, percentage-based color budgeting tied to exact HEX values, composition-intent description, page-role aware framing (calm zones for text overlay), and a hard negative constraint against any in-image text.

---

## 3. Narration Script Generation (Prompt-style spec)

The lecture script was generated under these constraints (pure spoken prose, suitable for TTS):

> Write per-slide spoken narration for an engaging university lecturer. 2–5 natural sentences per slide carrying the slide's core message; transitions live inside the opening sentence as natural prose. No bullet markers, no stage directions, no duration labels — anything written outside the heading will be read aloud verbatim. Preserve all original academic content; explain concepts clearly with intuition and examples.

Revision prompt after the duration test (kept the natural pace, trimmed content):

> The narration overshoots the 15–20 minute target. Trim the script — cut verbose elaboration and redundant phrasing while keeping core explanations and key examples (e.g., the chain-rule reasoning, the triplet-loss face-recognition example, the shoelace analogy). Do not speed up the voice.

---

## 4. AI Voice & Subtitle Generation (Parameters)

Text-to-speech is parameter-driven rather than free-text-prompted. The exact configuration used:

| Parameter | Value |
|---|---|
| Engine | Microsoft Edge Neural TTS (`edge-tts`) |
| Voice | `en-US-AvaMultilingualNeural` (female, natural, teaching tone) |
| Rate | `+0%` (natural pace — deliberately *not* sped up) |
| Output | One audio file per slide; word-boundary-timed subtitles generated in the same pass |
| Subtitle stitching | Per-slide SRTs concatenated with cumulative offsets equal to each slide's real audio duration |

The narration text fed to the TTS engine is the reviewed lecture script from Section 3 (one `.md` file per slide, heading stripped).

---

## 5. Notes on Responsible AI Use

- Every AI-generated prompt result was reviewed for technical accuracy against the original lecture before inclusion.
- Image prompts forbid in-image text precisely so all on-slide wording remains human-authored and verifiable.
- Where AI output was wrong or suboptimal (icon mismatches, path errors, subtitle drift, over-fast pacing), the prompts/parameters were iterated and the output corrected — demonstrating understanding and modification rather than blind acceptance.
