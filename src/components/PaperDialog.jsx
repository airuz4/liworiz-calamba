import { useEffect, useRef } from "react";

/**
 * A "paper" notes sheet in a native <dialog>. Esc, the × button, the Close
 * button, or a click on the dark backdrop closes it.
 *
 * `detail` is an array. Each item can be:
 *   "plain paragraph"
 *   { label: "Bold label", text: "Text after the label", quote: "optional quote", list: ["optional", "bullets"] }
 */
function Detail({ item }) {
  if (typeof item === "string") return <p>{item}</p>;
  return (
    <div>
      <p>
        {item.label && (
          <>
            <strong className="font-semibold">{item.label}</strong>
            <span className="mx-2 text-wax" aria-hidden="true">
              —
            </span>
          </>
        )}
        {item.text}
      </p>
      {item.quote && (
        <blockquote className="mt-3 border-l-4 border-wax pl-4 font-display text-xl italic leading-relaxed">
          {item.quote}
        </blockquote>
      )}
      {item.list && (
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {item.list.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function PaperDialog({ open, onClose, kicker, title, detail }) {
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
      aria-label={title}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 backdrop:bg-ink/80"
    >
      {open && (
        <div
          className="relative bg-sheet text-ink shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          style={{ width: "min(92vw, 46rem)" }}
        >
          {/* margin rule and inner border, like a ruled document */}
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-8 w-px bg-wax/50 sm:left-14" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-3 border border-ink/15" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            autoFocus
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center font-ui text-3xl leading-none transition-colors duration-150 hover:text-wax"
          >
            ×
          </button>

          <div className="max-h-[85vh] overflow-y-auto py-10 pl-12 pr-8 sm:pl-24 sm:pr-14">
            {kicker && <p className="pr-10 font-ui text-lg text-wax">{kicker}</p>}
            <h2 className="mt-1 pr-10 font-display text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
            <hr className="my-6 border-ink/25" />

            <div className="space-y-6 text-xl leading-relaxed">
              {detail.map((item, i) => (
                <Detail key={i} item={item} />
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-10 bg-ink px-5 py-2 font-ui text-lg text-paper transition-colors duration-150 hover:bg-wax"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}