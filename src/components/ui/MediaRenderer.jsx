const VIDEO_EXTS = ["mp4", "webm", "ogg", "mov", "m4v"];
const IMAGE_EXTS = ["jpg", "jpeg", "png", "webp", "gif", "svg", "avif"];

function getExtension(url) {
    try {
        const u = new URL(url);
        const parts = u.pathname.split(".");
        return (parts[parts.length - 1] || "").toLowerCase();
    } catch {
        const clean = String(url).split("?")[0].split("#")[0];
        const parts = clean.split(".");
        return (parts[parts.length - 1] || "").toLowerCase();
    }
}

function isVideoUrl(url) {
    const ext = getExtension(url);
    return VIDEO_EXTS.includes(ext);
}

function isImageUrl(url) {
    const ext = getExtension(url);
    return IMAGE_EXTS.includes(ext);
}

const MediaRenderer = ({ media, className = "" }) => {
    const isMediaItem = (m) => typeof m === "object" && m !== null;

    const url = isMediaItem(media) ? media.url : media;
    const aspectRatio = isMediaItem(media) ? media.aspectRatio : "auto";
    const poster = isMediaItem(media) ? media.poster : undefined;
    const caption = isMediaItem(media) ? media.caption : null;
    const altText = isMediaItem(media) && media.alt ? media.alt : "Project visual";
    const title = isMediaItem(media) && media.title ? media.title : "Project video";

    if (!url) return null;
    const video = isVideoUrl(url);

    const resolvedAspect =
        aspectRatio !== "auto"
            ? aspectRatio
            : video
                ? "video"
                : "auto";

    const ratioClass =
        resolvedAspect === "video"
            ? "aspect-video"
            : resolvedAspect === "portrait"
                ? "aspect-[3/4]"
                : resolvedAspect === "square"
                    ? "aspect-square"
                    : "";

    const containerClasses = [
        "group relative overflow-hidden",
        "border border-white/10 bg-white/5",
        ratioClass,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <figure className={containerClasses}>
            {video ? (
                <div className="inset-0 h-full w-full">
                    <video
                        src={url}
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={poster}
                        aria-label={title}
                        onError={(e) => console.error("Video failed to load:", url, e)}
                    />
                </div>
            ) : (
                <img
                    src={url}
                    alt={altText}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                    onError={(e) => console.error("Image failed to load:", url, e)}
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
