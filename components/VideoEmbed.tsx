import { site } from "@/content/site";

export default function VideoEmbed({
  unsupportedLabel,
}: {
  unsupportedLabel: string;
}) {
  const { video } = site;

  if (video.provider === "youtube" && video.youtubeId) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
          title="Lecture video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <video
      className="aspect-video w-full rounded-2xl border border-border bg-black"
      controls
      preload="metadata"
      playsInline
    >
      <source src={video.fileSrc} type="video/mp4" />
      {unsupportedLabel}
    </video>
  );
}
