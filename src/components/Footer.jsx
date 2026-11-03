import { PAGES, MODULES } from "../data/pages";

export default function Footer({ activePage, setActivePage }) {
  const current = PAGES.find((p) => p.id === activePage);
  return (
    <footer className="mt-12 bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2">
        <div>
          <p className="font-display text-3xl leading-tight">You are reading: {current?.title ?? current?.label}</p>
          <p className="mt-4 max-w-md text-lg text-paper/70">
            Placeholder source note. Replace with the citation for the source document this summary is drawn from.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-ui text-xl text-paper/60">All parts</p>
          <ul className="mt-2 divide-y divide-paper/20 border-y border-paper/20 font-ui text-xl">
            {MODULES.map((m) => (
              <li key={m.id}>
                <button
                  onClick={() => setActivePage(m.id)}
                  className="flex w-full justify-between py-3 text-left hover:text-wax"
                >
                  <span>{m.title}</span>
                  <span className="text-paper/50">{m.part}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-paper/20 px-5 py-4 text-center font-ui text-lg text-paper/50">
        Placeholder content. Not a historical record.
      </div>
    </footer>
  );
}