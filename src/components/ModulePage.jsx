import { ImagePlaceholder, VideoPlaceholder } from "./Media";
import KeyPoints from "./KeyPoints";
import Quiz from "./Quiz";
import { MODULES, LOREM_SHORT, placeholderPoints } from "../data/pages";

/**
 * Shared page for the four modules. The color theme is the same everywhere;
 * each module picks a `layout` in data/pages.js that sets how text and media sit:
 *   split     text left, media right
 *   zigzag    text and media swap sides on every section
 *   portrait  tall media on the left (stays in view while you read), text right
 *   sandwich  key points split to either side of centered media
 *
 * Optional props for real content:
 *   (a section with no src and no caption has no media box)
 *   intro, sections: [{ heading, points, media: "image" | "video", src, alt, caption, credit, poster }],
 *   quiz: [{ prompt, options, answer, explanation }],
 *   quizMedia: optional image/video shown beside the quiz (same fields as a section)
 */
const DEFAULT_SECTIONS = [
  { heading: "Section heading 1", media: "image" },
  { heading: "Section heading 2", media: "image" },
  { heading: "Section heading 3", media: "video" },
].map((s) => ({ ...s, points: placeholderPoints(3) }));

function Media({ s, ratio, className = "" }) {
  return s.media === "video" ? (
    <VideoPlaceholder
      src={s.src}
      poster={s.poster}
      title={s.title}
      caption={s.caption}
      credit={s.credit}
      className={className}
    />
  ) : (
    <ImagePlaceholder
      ratio={ratio}
      src={s.src}
      alt={s.alt ?? s.caption}
      caption={s.caption}
      credit={s.credit}
      loading="lazy" 
      className={className}
    />
  );
}

function SectionBody({ layout, s, index }) {
  // No src and no caption means no media for this section: show the points full width.
  if (!s.src && !s.caption) {
    return <KeyPoints group={s.heading} points={s.points} columns={2} />;
  }

  if (layout === "zigzag") {
    const flip = index % 2 === 1;
    return (
      <div className="grid items-start gap-10 md:grid-cols-2">
        <KeyPoints group={s.heading} points={s.points} />
        <Media s={s} ratio="aspect-4/3" className={flip ? "md:order-first" : ""} />
      </div>
    );
  }

  if (layout === "portrait") {
    return (
      <div className="grid items-start gap-10 md:grid-cols-2">
        <KeyPoints group={s.heading} points={s.points} />
        <Media s={s} ratio="aspect-4/3" className="md:sticky md:top-28 md:order-first" />
      </div>
    );
  }

  if (layout === "sandwich") {
    const mid = Math.ceil(s.points.length / 2);
    return (
      <div className="grid items-start gap-10 lg:grid-cols-3">
        <KeyPoints group={s.heading} points={s.points.slice(0, mid)} size="sm" />
        <Media s={s} ratio="aspect-3/4" />
        <KeyPoints group={s.heading} points={s.points.slice(mid)} size="sm" />
      </div>
    );
  }

  // split (default)
  return (
    <div className="grid items-start gap-10 md:grid-cols-2">
      <KeyPoints group={s.heading} points={s.points} />
      <Media s={s} ratio="aspect-4/3" />
    </div>
  );
}

export default function ModulePage({ id, intro = LOREM_SHORT, sections = DEFAULT_SECTIONS, quiz, setActivePage }) {
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
        <p className="mt-6 max-w-3xl text-2xl opacity-80">{intro}</p>
      </header>

      {sections.map((s, i) => (
        <section key={i} className="border-t-4 border-ink py-14">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">{s.heading}</h2>
          <div className="mt-8">
            <SectionBody layout={mod.layout} s={s} index={i} />
          </div>
        </section>
      ))}

      <section aria-labelledby={`${id}-quiz-title`} className="border-t-4 border-ink py-14">
        <h2 id={`${id}-quiz-title`} className="font-display text-4xl font-semibold md:text-5xl">
          Check your understanding
        </h2>
        {(
          <div className="mt-8">
            <Quiz key={id} questions={quiz} />
          </div>
        )}
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