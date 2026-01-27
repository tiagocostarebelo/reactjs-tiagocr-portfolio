import React from "react";

const MediaRenderer = ({ media, className = "" }) => {
    // media can be:
    // - string URL
    // - object: { url, layout, aspectRatio, caption, alt, title }
    const isMediaItem = (m) => typeof m === "object" && m !== null;

    const url = isMediaItem(media) ? media.url : media;
    const aspectRatio = isMediaItem(media) ? media.aspectRatio : "auto";

    if (!url) return null;

    const lower = String(url).toLowerCase();

    const isDirectVideo = [".mp4", ".webm", ".ogg", ".mov"].some((ext) =>
        lower.endsWith(ext)
    );

    const isYouTube = lower.includes("youtube.com") || lower.includes("youtu.be");
    const isVimeo = lower.includes("vimeo.com");
    const isVideo = isDirectVideo || isYouTube || isVimeo;

    const getYouTubeId = (u) => {
        try {
            if (u.includes("youtu.be/"))
                return u.split("youtu.be/")[1]?.split(/[?&]/)[0] ?? "";
            if (u.includes("watch?v="))
                return u.split("watch?v=")[1]?.split("&")[0] ?? "";
            return "";
        } catch {
            return "";
        }
    };

    const getVimeoId = (u) => {
        try {
            const part = u.split("vimeo.com/")[1] ?? "";
            return part.split(/[?&/]/)[0] ?? "";
        } catch {
            return "";
        }
    };

    const getEmbedUrl = (u) => {
        if (isYouTube) {
            const id = getYouTubeId(u);
            if (!id) return u;

            // YouTube loop requires playlist=<id>
            const params = new URLSearchParams({
                autoplay: "0",
                mute: "1",
                loop: "1",
                playlist: id,
                rel: "0",
                modestbranding: "1",
            });

            return `https://www.youtube.com/embed/${id}?${params.toString()}`;
        }

        if (isVimeo) {
            const id = getVimeoId(u);
            if (!id) return u;

            const params = new URLSearchParams({
                autoplay: "0",
                muted: "1",
                loop: "1",
                title: "0",
                byline: "0",
                portrait: "0",
            });

            return `https://player.vimeo.com/video/${id}?${params.toString()}`;
        }

        return u;
    };

    const ratioClass =
        aspectRatio === "video"
            ? "aspect-video"
            : aspectRatio === "portrait"
                ? "aspect-[3/4]"
                : aspectRatio === "square"
                    ? "aspect-square"
                    : "";

    const containerClasses = [
        "group relative overflow-hidden",
        "border border-white/10 bg-white/5",
        ratioClass,
        className,
    ].join(" ");

    const altText =
        isMediaItem(media) && media.alt ? media.alt : "Project visual";

    const caption = isMediaItem(media) ? media.caption : null;
    const iframeTitle =
        isMediaItem(media) && media.title ? media.title : "Project video";

    return (
        <figure className={containerClasses}>
            {isVideo ? (
                <div className="absolute inset-0 h-full w-full">
                    {isDirectVideo ? (
                        <video
                            src={url}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <iframe
                            src={getEmbedUrl(url)}
                            className="h-full w-full border-0"
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={iframeTitle}
                        />
                    )}
                </div>
            ) : (
                <img
                    src={url}
                    alt={altText}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                />
            )}

            {caption ? (
                <figcaption className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-md bg-black-rich/70 px-3 py-2 backdrop-blur-sm">
                        <p className="text-xs font-medium uppercase tracking-wide text-white/80">
                            {caption}
                        </p>
                    </div>
                </figcaption>
            ) : null}
        </figure>
    );
};

export default MediaRenderer;
