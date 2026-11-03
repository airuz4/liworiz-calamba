import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import KeyPoints from "./components/KeyPoints";
import { ImagePlaceholder, VideoPlaceholder } from "./components/Media";
import { MODULES } from "./data/pages";
import HomeAfterYears from "./pages/HomeAfterYears";
import FurorNoli from "./pages/FurorNoli";
import Protesta from "./pages/Protesta";
import Depart from "./pages/Depart";

const EXEC_POINTS = [
  {
    point: "He came home for four reasons",
    sub: "To operate on his mother's eyes, serve his countrymen, learn the effects of the Noli, and find out why Leonor Rivera stopped writing.",
  },
  {
    point: "His novel set off a furor",
    sub: "The friars and the Church condemned it, the government banned it, and the ban made copies more valuable.",
  },
  {
    point: "He left in February 1888",
    sub: "Governor-General Terrero advised him to go, and Rizal believed he could keep fighting for the country from Europe.",
  },
];

const GLANCE_POINTS = [
  {
    point: "Six tumultuous months",
    sub: "His stay was controversial and led to his family and other tenants being removed from Calamba.",
  },
  {
    point: "Doctor and civic figure",
    sub: "In Calamba he ran a clinic and a gymnasium, painted the town's landscapes and translated German poems.",
  },
  {
    point: "Defended and attacked",
    sub: "Del Pilar, Fr. Sanchez and Fr. Garcia defended the novel. Fr. Rodriguez, Barrantes and others attacked it.",
  },
];

function Summary({ setActivePage }) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
      {/* Hero: text left, image right, equal columns */}
      <section className="grid items-center gap-12 pb-14 md:grid-cols-2">
        <div>
          <p className="font-ui text-xl opacity-70">Summary of the source document</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Return to Calamba, 1887–1888
          </h1>
          <p className="mt-6 text-2xl opacity-80">
            Six tumultuous months: a homecoming, a furor over the Noli Me Tangere, and a departure for Europe.
          </p>
          <button
            onClick={() => setActivePage(MODULES[0].id)}
            className="mt-8 bg-wax px-7 py-3 font-ui text-xl text-paper transition-colors duration-150 hover:bg-ink"
          >
            Start with Part 1
          </button>
        </div>
        <ImagePlaceholder ratio="aspect-4/3" caption="Lead image placeholder." />
      </section>

      {/* Executive summary: key points beside an image */}
      <section className="border-t-4 border-ink py-14">
        <h2 className="font-display text-4xl font-semibold md:text-5xl">Executive summary</h2>
        <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
          <KeyPoints points={EXEC_POINTS} />
          <ImagePlaceholder ratio="aspect-4/3" caption="Supporting image placeholder." />
        </div>
      </section>

      {/* Video beside more key points */}
      <section className="border-t-4 border-ink py-14">
        <h2 className="font-display text-4xl font-semibold md:text-5xl">At a glance</h2>
        <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
          <VideoPlaceholder caption="Documentary or lecture embed placeholder." className="md:order-first" />
          <KeyPoints points={GLANCE_POINTS} />
        </div>
      </section>

      {/* Quick links */}
      <section className="border-t-4 border-ink pt-14">
        <h2 className="font-display text-4xl font-semibold md:text-5xl">The four parts</h2>
        <ol className="mt-8 border-t-2 border-ink">
          {MODULES.map((m) => (
            <li key={m.id} className="border-b border-ink/30">
              <button
                onClick={() => setActivePage(m.id)}
                className="group grid w-full items-center gap-x-6 gap-y-1 py-6 text-left transition-colors duration-150 hover:bg-ink hover:text-paper md:grid-cols-[4rem_1fr_auto] md:px-4"
              >
                <span className="font-display text-5xl font-black text-wax group-hover:text-wax-light">{m.part}</span>
                <span>
                  <span className="block font-display text-3xl font-semibold">{m.title}</span>
                  <span className="mt-1 block text-xl opacity-75">{m.blurb}</span>
                </span>
                <span className="font-ui text-xl opacity-70">{m.period}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

const VIEWS = {
  "home-after-years": HomeAfterYears,
  "furor-noli": FurorNoli,
  protesta: Protesta,
  depart: Depart,
};

export default function App() {
  const [activePage, setActivePage] = useState("summary");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const View = VIEWS[activePage];

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main key={activePage} className="view-enter flex-1">
        {View ? <View setActivePage={setActivePage} /> : <Summary setActivePage={setActivePage} />}
      </main>
      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}