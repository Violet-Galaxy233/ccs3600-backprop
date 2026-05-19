# Prompt Examples

Course: CCS3600 Artificial Intelligence (Natural Language Processing)
Project: AI-Assisted Teaching Content Enhancement, Topic 10: Back Propagation
Deliverable 5: example prompts used with the AI tools

These are the prompts I actually used, grouped by the stage they belong to. I have kept them as they were typed (the orchestration ones were in Chinese, with a translation underneath) rather than tidying them up afterwards, because the messy version is the honest one.

## Driving the agent (Claude Code)

The first instruction that kicked the whole thing off:

> 根据这份项目要求 `Mini Project ccs3600.pdf`，根据原有的 ppt `back propagation.pptx` 进行改善和美化，要符合项目要求。
>
> ("Using the project requirements PDF, improve and clean up the original back propagation.pptx so it meets what the project asks for.")

After that it was mostly steering as problems came up, not one big prompt:

> 给这个 PPT 按项目要求生成一份音频，英文的。
>
> ("Generate an English audio narration for this deck, following the project requirements.")

> 语速太快了，是不是内容适当少一点然后语速慢一点。
>
> ("The speech is too fast, maybe cut the content a bit and slow it down." This is what led to trimming the script instead of speeding up the voice.)

> 整体字幕节奏是偏快的，重生音频 + 同步字幕。
>
> ("The subtitles run too fast overall, regenerate the audio with synced subtitles.")

I left these in their original rough form on purpose, because that is genuinely how it went: one instruction, then corrections when something came out wrong.

## Image generation (gpt-image-2)

There were four images. Each prompt fixes the same things every time so the set stays consistent: the isometric projection, the exact palette by HEX value with rough area budgets, what the picture should contain, where to keep a calm area for text that gets laid over it later, and a hard rule that there is no text inside the image (all the wording on the slides is mine, not baked into a picture).

Cover background, slide 1, 16:9:

> 3D isometric illustration with clean geometric forms rendered in true 30/30/30 projection. All edges are crisp and uniform with no perspective distortion and no vanishing points. Surfaces use flat solid fills with subtle tonal shifts, a single darker shade for shadowed faces about 15 percent darker than the light-facing face, to convey volume without painterly rendering. Soft 8 percent drop shadows beneath floating elements anchor them in space. Color behavior is tech-neon: deep dark navy #0F172A covers the background plane and extends to the canvas edges at about 50 percent of area. Primary electric blue #3B82F6 carries the lit faces of interconnected neural network nodes arranged in multiple layers, rendered as glowing spheres and cubes connected by thin luminous lines, occupying about 35 percent of canvas. Accent vivid cyan #22D3EE appears as pulsing data particles flowing through the synaptic connections between nodes with subtle 8 percent opacity outer glow, covering about 12 percent of area. Secondary purple #8B5CF6 adds subtle depth to some shadowed node faces. The composition shows a vast isometric neural network floating in deep space with layers of nodes arranged in a structured grid pattern suggesting an artificial brain. Small luminous particles travel along the connection pathways suggesting data flow. Composed as a 1280x720 full-bleed background for hero_page use. NO text of any kind anywhere in the image, no letters, numbers, signs, watermarks, labels, or written symbols. Color values are rendering guidance only, do NOT display HEX codes or color names as visible text.

Applications section divider, slide 15, 16:9:

> 3D isometric illustration with clean geometric forms rendered in true 30/30/30 projection. All edges are crisp and uniform with no perspective distortion. Surfaces use flat solid fills with subtle tonal shifts for shadowed faces about 15 percent darker. Soft 8 percent drop shadows beneath floating elements. Color behavior is tech-neon: deep navy #0F172A dominates the background at about 50 percent. Primary blue #3B82F6 fills the lit faces of isometric forms at about 35 percent. Accent cyan #22D3EE highlights key elements at about 12 percent with subtle glow. The composition shows an isometric cluster of pattern recognition elements: a large stylized eye form made of geometric blocks scanning geometric patterns, simplified face outlines rendered as flat polygon meshes, and sound wave visualizations as stacked bars converging on a central hexagonal processing hub. Multiple data streams flow from these recognition modules toward the central hub. Composed as a 1280x720 full-bleed background for hero_page use with the lower-center area kept relatively calm for SVG title overlay. NO text of any kind anywhere in the image, no letters, numbers, signs, watermarks, labels, or written symbols. Color values are rendering guidance only, do NOT display HEX codes or color names as visible text.

Feed-forward architecture diagram, slide 4:

> 3D isometric illustration with clean geometric forms rendered in true 30/30/30 projection. All edges are crisp and uniform with no perspective distortion. Surfaces use flat solid fills with tonal shifts on shadowed faces about 15 percent darker. Soft 8 percent drop shadows beneath floating elements. Color behavior is tech-neon: secondary deep navy #0F172A covers the background at about 50 percent. Primary electric blue #3B82F6 fills the node spheres on their lit faces at about 35 percent. Accent cyan #22D3EE highlights the connection lines and one activated output node at about 12 percent with subtle glow effect. The composition shows a multi-layer feedforward neural network in isometric view. On the left side three input nodes rendered as glowing spheres. In the middle two hidden layers each with four nodes. On the right side two output nodes. All nodes connected by thin luminous lines showing the one-directional flow from left to right. Small glowing particles travel along the connections indicating data flow direction. The network floats above a subtle isometric grid plane. Composed as an 812x489 local block image with 15 percent inner padding. NO text of any kind anywhere in the image, no letters, numbers, signs, watermarks, labels, or written symbols. Color values are rendering guidance only, do NOT display HEX codes or color names as visible text.

Backpropagation flow diagram, slide 12:

> 3D isometric illustration with clean geometric forms rendered in true 30/30/30 projection. All edges are crisp and uniform with no perspective distortion. Surfaces use flat solid fills with tonal shifts on shadowed faces. Soft 8 percent drop shadows beneath floating elements. Color behavior is tech-neon: secondary deep navy #0F172A covers the background at about 50 percent. Primary blue #3B82F6 fills the neural network node spheres at about 30 percent. The composition shows a neural network with bidirectional data flow. Green #10B981 particles move forward from left to right through three layers of nodes suggesting the forward propagation pass. Orange-amber #F59E0B particles move backward from right to left through the same network suggesting the backward error propagation pass. The forward flow uses solid bright lines while the backward flow uses dashed or dotted luminous lines creating visual distinction between the two passes. Accent cyan #22D3EE appears on the output layer nodes where the error is calculated. The two flows coexist in the same network creating a dynamic sense of the training process. Composed as an 812x489 local block image with 15 percent inner padding. NO text of any kind anywhere in the image, no letters, numbers, signs, watermarks, labels, or written symbols. Color values are rendering guidance only, do NOT display HEX codes or color names as visible text.

After writing four of these I settled into a pattern: state the projection and lighting rules first, then spend most of the prompt on a colour budget tied to exact HEX values, then describe the composition, then say where text will sit on top so that area stays calm, and always finish with the no-text rule. The colour budgeting is the part that kept the four images looking like they belong to the same deck.

## The narration script

The script was generated as plain spoken prose so it could go straight into the TTS engine:

> Write per-slide spoken narration for an engaging university lecturer. Two to five natural sentences per slide carrying that slide's main point. Put transitions inside the first sentence as normal speech. No bullet points, no stage directions, no duration labels, because anything outside the heading gets read out loud. Keep all the original academic content and explain things with intuition and short examples.

And the revision after the timing test came back too long:

> The narration is over the 15 to 20 minute target. Cut it down: remove padding and repeated phrasing but keep the core explanations and the key examples (the chain-rule reasoning, the triplet-loss face-recognition example, the shoelace analogy). Do not speed the voice up.

## Voice and subtitles

This part is configuration rather than a text prompt. What I used:

- Engine: Microsoft Edge neural TTS (edge-tts)
- Voice: en-US-AvaMultilingualNeural, natural teaching tone
- Rate: +0%, i.e. normal speed, deliberately not sped up
- One audio file per slide, with word-level subtitle timing produced in the same run
- Per-slide subtitles joined into one SRT, each slide offset by its real audio length

The text fed in was the reviewed script from the section above, one file per slide with the heading removed.

## A note on how I used these

I checked every prompt's output against the original lecture before keeping it. The no-text rule on the images is deliberate, so that all the wording on the slides is written by me and can be verified. Where the model got something wrong (mismatched icons, broken paths, drifting subtitles, the over-fast first narration), I changed the prompt or the settings and regenerated rather than just accepting the first result.
