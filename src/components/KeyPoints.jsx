import { placeholderPoints } from "../data/pages";

/** Each item: a large key point with smaller supporting text beneath it.
 *  size "sm" is used where the points sit in a narrow column. */
export default function KeyPoints({ points = placeholderPoints(), size = "md" }) {
  const pointSize = size === "sm" ? "text-2xl xl:text-3xl" : "text-3xl md:text-4xl";
  const subSize = size === "sm" ? "text-lg xl:text-xl" : "text-xl md:text-2xl";
  return (
    <ul className="space-y-8">
      {points.map((p, i) => (
        <li key={i} className="border-l-4 border-wax pl-5">
          <p className={`font-display font-semibold leading-snug ${pointSize}`}>{p.point}</p>
          <p className={`mt-2 leading-relaxed opacity-80 ${subSize}`}>{p.sub}</p>
        </li>
      ))}
    </ul>
  );
}