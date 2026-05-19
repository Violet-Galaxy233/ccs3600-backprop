/**
 * Central asset + site configuration.
 *
 * The video source is intentionally pluggable: if the in-repo MP4 ever
 * exceeds Vercel's deployment limits, switch `video.provider` to
 * `"youtube"` and set `youtubeId` — no component changes required.
 */
export const site = {
  repo: "ccs3600-backprop",
  courseCode: "CCS3600",
  video: {
    provider: "file" as "file" | "youtube",
    fileSrc: "/video/back-propagation.mp4",
    youtubeId: "",
    durationMinutes: 18,
    posterTime: 1,
  },
  downloads: {
    pptx: {
      href: "/downloads/back-propagation-slides.pptx",
      size: "13 MB",
    },
    pdf: {
      href: "/downloads/back-propagation-slides.pdf",
      size: "1 MB",
    },
  },
  facts: {
    slides: "22",
    videoLen: "~18 min",
    questions: "20",
    languages: "3",
  },
} as const;
