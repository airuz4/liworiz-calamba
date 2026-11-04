import { useState } from "react";
import PaperDialog from "./PaperDialog";
import { placeholderPoints } from "../data/pages";

/**
 * Each item: a large key point with supporting text beneath it.
 *   point   the heading
 *   sub     a string, or an array of strings shown as bullets
 *   detail  optional. When present the whole point is clickable and opens a
 *           "paper" notes dialog (see PaperDialog for the format).
 * `group` is the section heading, shown above the title in the dialog.
 * size "sm" is used where the points sit in a narrow column.
 * columns={2} lays the points out in two columns (used when a section has no media).
 */
function Point({ p, group, pointSize, subSize }) {
  const [open, setOpen] = useState(false);
  const hasDetail = Boolean(p.detail?.length);

  return (
    <li
      className={`relative border-l-4 border-wax pl-5 ${
        hasDetail ? "group py-2 pr-4 transition-colors duration-150 hover:bg-paper-deep" : ""
      }`}
    >
      <p className={`font-display font-semibold leading-snug ${pointSize}`}>{p.point}</p>
      {Array.isArray(p.sub) ? (
        <ul className={`mt-2 list-disc space-y-1 pl-6 leading-relaxed opacity-80 ${subSize}`}>
          {p.sub.map((t, j) => (
            <li key={j}>{t}</li>
          ))}
        </ul>
      ) : (
        <p className={`mt-2 leading-relaxed opacity-80 ${subSize}`}>{p.sub}</p>
      )}

      {hasDetail && (
        <>
          <span className="mt-3 inline-flex items-center gap-2 font-ui text-lg text-wax group-hover:underline">
            Read the full notes <span aria-hidden="true">→</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-label={`Open full notes: ${p.point}`}
            className="absolute inset-0 z-10 cursor-pointer"
          />
          <PaperDialog
            open={open}
            onClose={() => setOpen(false)}
            kicker={group}
            title={p.point}
            detail={p.detail}
          />
        </>
      )}
    </li>
  );
}

export default function KeyPoints({ points = placeholderPoints(), group, size = "md", columns = 1 }) {
  const pointSize = size === "sm" ? "text-2xl xl:text-3xl" : "text-3xl md:text-4xl";
  const subSize = size === "sm" ? "text-lg xl:text-xl" : "text-xl md:text-2xl";
  return (
    <ul className={columns === 2 ? "grid items-start gap-x-10 gap-y-8 md:grid-cols-2" : "space-y-8"}>
      {points.map((p, i) => (
        <Point key={i} p={p} group={group} pointSize={pointSize} subSize={subSize} />
      ))}
    </ul>
  );
}