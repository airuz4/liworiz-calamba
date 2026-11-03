import { ImagePlaceholder, VideoPlaceholder } from "./Media";
import KeyPoints, { placeholderPoints } from "./KeyPoints";
import Quiz from "./Quiz";
import { MODULES, LOREM_SHORT } from "../data/pages";

/**
 * Shared page for the four modules. Every section is a two-column row:
 * key points on the left, media on the right.
 *
 * Optional props for real content later:
 *   sections: [{ heading, points: [{point, sub}], media: "image" | "video", src, caption }]
 *   quiz:     [{ prompt, options, answer, explanation }]
 */
const DEFAULT_SECTIONS = [
  { heading: "Section heading 1", media: "image" },
  { heading: "Section heading 2", media: "image" },
  { heading: "Section heading 3", media: "video" },
].map((s) => ({ ...s, points: placeholderPoints(3) }));

export default function ModulePage({ id, sections = DEFAULT_SECTIONS, quiz, setActivePage }) {
  const idx = MODULES.findIndex((m) => m.id === id);
  const mod = MODULES[idx];
  const prev = MODULES[idx - 1];
  const next = MODULES[idx + 1];

  return (
    <article className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
      <header className="pb-12">
        <p className="font-ui text-xl opacity-70">
          Part {mod.part} of {MODULES.length}
        </p>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-tight md:text-7xl">{mod.title}</h1>
        <p className="mt-6 max-w-3xl text-2xl opacity-80">{LOREM_SHORT}</p>
      </header>

      {sections.map((s, i) => (
        <section key={i} className="border-t-4 border-ink py-14">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">{s.heading}</h2>
          <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
            <KeyPoints points={s.points} />
            {s.media === "video" ? (
              <VideoPlaceholder src={s.src} caption={s.caption} />
            ) : (
              <ImagePlaceholder ratio="aspect-4/3" src={s.src} caption={s.caption} />
            )}
          </div>
        </section>
      ))}

      <section aria-labelledby={`${id}-quiz-title`} className="border-t-4 border-ink py-14">
        <h2 id={`${id}-quiz-title`} className="font-display text-4xl font-semibold md:text-5xl">
          Check your understanding
        </h2>
        <div className="mt-8">
          <Quiz key={id} questions={quiz} />
        </div>
      </section>

      <nav aria-label="Previous and next part" className="grid border-t-4 border-ink font-ui sm:grid-cols-2">
        {prev ? (
          <button onClick={() => setActivePage(prev.id)} className="py-6 text-left hover:text-wax">
            <span className="block text-lg opacity-60">Previous: Part {prev.part}</span>
            <span className="block font-display text-2xl">{prev.title}</span>
          </button>
        ) : (
          <button onClick={() => setActivePage("summary")} className="py-6 text-left hover:text-wax">
            <span className="block text-lg opacity-60">Back to</span>
            <span className="block font-display text-2xl">Overview</span>
          </button>
        )}
        {next ? (
          <button onClick={() => setActivePage(next.id)} className="py-6 text-left hover:text-wax sm:text-right">
            <span className="block text-lg opacity-60">Next: Part {next.part}</span>
            <span className="block font-display text-2xl">{next.title}</span>
          </button>
        ) : (
          <button onClick={() => setActivePage("summary")} className="py-6 text-left hover:text-wax sm:text-right">
            <span className="block text-lg opacity-60">Finished</span>
            <span className="block font-display text-2xl">Return to overview</span>
          </button>
        )}
      </nav>
    </article>
  );
}