import { PAGES } from "../data/pages";

export default function Navbar({ activePage, setActivePage }) {
  return (
    <header className="sticky top-0 z-20 border-b-4 border-wax bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 pt-3 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <button
          onClick={() => setActivePage("summary")}
          className="pb-2 text-left font-display text-2xl font-semibold leading-none sm:text-3xl"
        >
          Rizal at Calamba
        </button>

        <nav aria-label="Sections" className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <ul className="flex min-w-max gap-1 font-ui text-lg">
            {PAGES.map((p) => {
              const active = activePage === p.id;
              return (
                <li key={p.id}>
                  <button
                    onClick={() => setActivePage(p.id)}
                    aria-current={active ? "page" : undefined}
                    className={`block border-b-4 px-3 pb-2 pt-1 transition-colors duration-150 ${
                      active
                        ? "border-paper text-paper"
                        : "border-transparent text-paper/65 hover:text-paper"
                    }`}
                  >
                    {p.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}