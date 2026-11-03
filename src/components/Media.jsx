/**
 * Media slots. Swap a placeholder for real media by passing `src`.
 * Aspect classes must be passed as full literal strings
 * (e.g. "aspect-3/4") so Tailwind can detect them.
 */

export function ImagePlaceholder({
  ratio = "aspect-video",
  caption = "Caption placeholder: describe the image here.",
  credit = "Source / credit placeholder",
  src,
  alt = "",
  className = "",
}) {
  return (
    <figure className={className}>
      <div className={`${ratio} plate relative w-full overflow-hidden border-2 border-ink bg-paper-deep`}>
        {src ? (
          <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="absolute inset-0 flex items-end justify-start p-3">
            <span className="bg-ink px-2 py-0.5 font-ui text-sm text-paper">Image slot</span>
          </div>
        )}
      </div>
      <figcaption className="mt-3 border-l-4 border-wax pl-3 font-ui text-base leading-snug">
        <span className="block">{caption}</span>
        <span className="block opacity-60">{credit}</span>
      </figcaption>
    </figure>
  );
}

export function VideoPlaceholder({
  caption = "Video caption placeholder.",
  src, // e.g. "https://www.youtube.com/embed/VIDEO_ID"
  title = "Embedded video",
  className = "",
}) {
  return (
    <figure className={className}>
      <div className="relative aspect-video w-full overflow-hidden border-2 border-ink bg-ink">
        {src ? (
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-paper">
            <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
              <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M26 20 L46 32 L26 44 Z" fill="var(--color-wax)" />
            </svg>
            <span className="font-ui text-base">Video embed slot (YouTube or HTML5)</span>
          </div>
        )}
      </div>
      <figcaption className="mt-3 border-l-4 border-wax pl-3 font-ui text-base leading-snug">
        {caption}
      </figcaption>
    </figure>
  );
}