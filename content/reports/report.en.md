# Short Report: AI Tools and Workflow

Course: CCS3600 Artificial Intelligence (Natural Language Processing)
Project: AI-Assisted Teaching Content Enhancement, Topic 10: Back Propagation
Deliverable 4: short report on the tools used and how I worked

## What I started with and what I ended up with

The original lecture material was a 32-slide deck on Back Propagation Neural Networks, and it was very text-heavy. Most pages were just paragraphs pasted onto a slide. My aim was not to rewrite the course content but to make it presentable and actually usable as a narrated lecture.

What I ended up with is a 22-slide deck that is still a real, editable PowerPoint file (not images pasted into slides), four custom illustrations, a roughly 17 to 18 minute narrated video, and a subtitle file that lines up with the audio word for word.

I got from 32 slides to 22 by merging repeated content, not by cutting topics. Everything from the original is still there: the chain-rule derivation, the BP versus BPTT distinction, the history, and the applications.

## Tools I used

Most of the work went through Claude Code (Claude Opus 4.7) acting as the editor and as the thing that actually wrote the slide source. I chose it because the slides are built as hand-placed vector graphics, and it kept the coordinates and layout consistent across 22 pages without drifting the way smaller models did.

The deck itself was produced with PPT Master, which is open source. Instead of exporting slides as pictures, it has the AI write SVG and then converts that SVG into the native DrawingML shapes PowerPoint uses internally. That one design choice is the reason every text box and shape in the final file is still selectable and editable. I explain why this mattered for the assignment further down.

The four illustrations (the cover, the applications divider, the feed-forward diagram, and the backprop flow diagram) were generated with OpenAI's gpt-image-2. I used it because it stayed on-style across a set of images once the prompt pinned down the exact colours and projection.

The narration and subtitles came from Microsoft Edge's neural TTS (edge-tts, voice en-US-AvaMultilingualNeural). It sounds natural enough for a lecture, and more usefully it returns real word-level timestamps, so the subtitles match the voice instead of being estimated.

I also had Google's Gemini image API set up as a backup in case gpt-image-2 went down. It was never needed, and nothing in the final deck came from it.

## How the work actually went

Roughly in order:

First I converted the original PPTX and the project brief into Markdown, so the content and the marking criteria were both in front of me while I worked.

Then I spent time on structure before touching any visuals. I decided which slides should merge, what the information hierarchy on each page should be, and I locked a design spec early: a dark "neural network" look with a fixed four-colour palette (deep slate #0F172A, blue #3B82F6, cyan #22D3EE, purple #8B5CF6), a type scale, and a per-slide plan for icons and images. Locking that early is what kept 22 separately generated slides looking like one deck.

The four images were generated next, against detailed prompts that fixed the palette and style. The actual prompts are in the companion document.

Slides were then built one page at a time as SVG, following the spec. After that I ran an automated check over every slide for the obvious failure modes: wrong canvas size, broken image or icon references, anything malformed. It did catch real problems, four broken image paths and several missing icon references, which I fixed before moving on.

I wrote a speaking script for all 22 slides and then did a timing test. The first version ran long. Rather than speed the voice up, which sounds rushed and is an obvious giveaway, I went back and cut the script down until it landed inside the 15 to 20 minute window at a normal pace.

Finally the SVGs were exported to a native PPTX, the per-slide audio was generated with the word-timed subtitles in the same pass, slide auto-advance timings were set from each slide's real audio length, and the SRT cues were stitched together with the right offsets.

## What I had to fix myself

This was not a generate-once-and-submit job. The things I changed by hand:

- The 32 to 22 restructuring was my editorial call, not the model's. I decided what merged.
- I checked the technical content on every slide against the original lecture: the formulas, the chain-rule explanation, the BP/BPTT distinction, the timeline.
- The broken image paths and wrong icon references that the quality check flagged were fixed manually.
- The narration was too long on the first pass, so I rewrote it shorter instead of speeding up playback.
- The first subtitle track was timed by estimation and drifted ahead of the voice. I threw it out and regenerated it from real word boundaries.

## Why PPT Master and not a one-click tool

I deliberately did not use a browser "type a topic, get slides" generator for the final file. My reasons:

The output is a real PowerPoint. Most AI slide tools either embed each slide as a flat image or render HTML that falls apart on PPTX export. PPT Master goes AI to SVG to DrawingML, so the exported deck is made of normal PowerPoint objects. That matters here directly, because the brief asks for professional, modifiable slides and explicitly says not to hand in unmodified AI output. With this approach I could actually edit the AI's work, and I did.

It is free and open source, so the only cost was my own model usage, not another monthly subscription on top of that.

It runs locally. The source file, the generation, and the export all happen on my machine, so nothing gets uploaded to a third-party slide service.

The honest downside is that it needs local setup and it is slow, because it generates pages one at a time on purpose to keep the deck consistent. For a course project where editability and being able to verify every slide mattered more than speed, that trade was worth it, and it is also the safer position on the academic-integrity rule.

## What this produced

- The improved slide deck: a native, editable 22-slide PPTX.
- The lecture video: the same PPTX with embedded narration and auto-advance timing, about 17.5 minutes, exportable to MP4 from PowerPoint.
- A word-accurate subtitle file (SRT, 155 cues).
- This report.
- The prompt examples, in a separate document.

The auto-gradable quiz activity is a different deliverable and is not covered here.
