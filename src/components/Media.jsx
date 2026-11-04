import { useEffect, useRef, useState } from "react";

/**
 * Media slots. Click an image or video to open it in a dialog that fills
 * about 75% of the screen while keeping its aspect ratio. Esc, the Close
 * button, or a click on the dark backdrop closes it.
 *
 * Swap a placeholder for real media by passing `src`.
 * Pass aspect classes as full literal strings (e.g. "aspect-3/4")
 * so Tailwind can detect them.
 */

const RATIOS = { "aspect-video": 16 / 9, "aspect-4/3": 4 / 3, "aspect-3/4": 3 / 4, "aspect-square": 1 };

function ratioOf(cls) {
  if (RATIOS[cls]) return RATIOS[cls];
  const m = /aspect-(\d+)\/(\d+)/.exec(cls);
  return m ? Number(m[1]) / Number(m[2]) : 16 / 9;
}

// Largest box that fits inside 75vw x 75vh at the given ratio.
const fit = (r) => ({ width: `min(75vw, calc(75vh * ${r}))`, aspectRatio: String(r) });

// Treat empty values and template placeholders (VIDEO_ID_HERE, REPLACE...) as "not set yet".
const isUnset = (s) => !s || /VIDEO_ID|REPLACE/i.test(s);

// Accepts normal YouTube links (watch, youtu.be, shorts) and converts them to
// the embed form an iframe needs. Other URLs are returned unchanged.
function toEmbed(src) {
  if (!src) return src;
  const m =
    /youtube\.com\/watch\?(?:[^#]*&)?v=([\w-]{6,})/.exec(src) ||
    /youtu\.be\/([\w-]{6,})/.exec(src) ||
    /youtube\.com\/shorts\/([\w-]{6,})/.exec(src);
  return m ? `https://www.youtube.com/embed/${m[1]}` : src;
}

// Auto poster for YouTube embeds (https://www.youtube.com/embed/ID).
function youtubePoster(src) {
  const m = /youtube(?:-nocookie)?\.com\/embed\/([\w-]+)/.exec(src ?? "");
  return m ? `https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg` : null;
}

function PlayIcon({ className = "h-16 w-16" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M26 20 L46 32 L26 44 Z" fill="var(--color-wax-light)" />
    </svg>
  );
}

function EnlargeBadge() {
  return (
    <span className="pointer-events-none absolute right-2 top-2 flex items-center gap-1.5 bg-ink px-2 py-1 font-ui text-base text-paper">
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M10 2h4v4M6 14H2v-4M14 2l-5 5M2 14l5-5" />
      </svg>
      Enlarge
    </span>
  );
}

function Lightbox({ open, onClose, label, caption, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 text-paper backdrop:bg-ink/85"
    >
      {open && (
        <div className="flex flex-col items-center gap-3">
          {children}
          <div className="flex w-full items-start justify-between gap-4 font-ui text-lg">
            <p>{caption}</p>
            <button
              type="button"
              onClick={onClose}
              autoFocus
              className="shrink-0 bg-paper px-4 py-1 text-ink transition-colors duration-150 hover:bg-wax-light"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}

export function ImagePlaceholder({
  ratio = "aspect-video",
  caption = "Caption placeholder: describe the image here.",
  credit,
  src,
  alt = "",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false); // file missing: fall back to the empty slot
  const r = ratioOf(ratio);
  const hasImg = !isUnset(src) && !failed;
  // Show the placeholder credit only while the slot is empty.
  const creditText = credit ?? (hasImg ? null : "Source / credit placeholder");

  return (
    <figure className={className}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${caption}`}
        className="group relative block w-full cursor-zoom-in text-left"
      >
        <span
          className={`${ratio} plate relative block w-full overflow-hidden border-2 border-ink bg-paper-deep transition-colors duration-150 group-hover:border-wax`}
        >
          {hasImg ? (
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
              loading="lazy"
              onError={() => setFailed(true)}
            />
          ) : (
            <span className="absolute inset-0 flex items-end justify-start p-3">
              <span className="bg-ink px-2 py-0.5 font-ui text-sm text-paper">Image slot</span>
            </span>
          )}
        </span>
        <EnlargeBadge />
      </button>

      <figcaption className="mt-3 border-l-4 border-wax pl-3 font-ui text-base leading-snug">
        <span className="block">{caption}</span>
        {creditText && <span className="block opacity-60">{creditText}</span>}
      </figcaption>

      <Lightbox open={open} onClose={() => setOpen(false)} label={caption} caption={caption}>
        {hasImg ? (
          <img src={src} alt={alt} className="h-[75vh] w-[75vw] object-contain" />
        ) : (
          <div className="plate flex items-end border-2 border-paper/60 bg-paper-deep p-3 text-ink" style={fit(r)}>
            <span className="bg-ink px-2 py-0.5 font-ui text-sm text-paper">Image slot</span>
          </div>
        )}
      </Lightbox>
    </figure>
  );
}

export function VideoPlaceholder({
  caption = "Video caption placeholder.",
  credit,
  src, // any YouTube link, e.g. https://www.youtube.com/watch?v=VIDEO_ID
  poster, // optional thumbnail URL; YouTube embeds get one automatically
  title = "Embedded video",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const embed = isUnset(src) ? null : toEmbed(src);
  const thumb = poster ?? youtubePoster(embed);
  const playSrc = embed ? `${embed}${embed.includes("?") ? "&" : "?"}autoplay=1` : null;

  return (
    <figure className={className}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play video: ${caption}`}
        className="group relative block w-full cursor-zoom-in text-left"
      >
        <span className="relative block aspect-video w-full overflow-hidden border-2 border-ink bg-ink text-paper transition-colors duration-150 group-hover:border-wax">
          {thumb && <img src={thumb} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />}
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <PlayIcon />
            {!thumb && <span className="font-ui text-base">Video embed slot (YouTube or HTML5)</span>}
          </span>
        </span>
        <EnlargeBadge />
      </button>

      <figcaption className="mt-3 border-l-4 border-wax pl-3 font-ui text-base leading-snug">
        <span className="block">{caption}</span>
        {credit && <span className="block opacity-60">{credit}</span>}
      </figcaption>

      <Lightbox open={open} onClose={() => setOpen(false)} label={caption} caption={caption}>
        <div className="relative border-2 border-paper/60 bg-ink" style={fit(16 / 9)}>
          {playSrc ? (
            <iframe
              src={playSrc}
              title={title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <PlayIcon />
              <span className="font-ui text-base">Video embed slot (YouTube or HTML5)</span>
            </div>
          )}
        </div>
      </Lightbox>
    </figure>
  );
}