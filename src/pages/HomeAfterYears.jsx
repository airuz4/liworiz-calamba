import ModulePage from "../components/ModulePage";

const intro =
  "Rizal returned to the Philippines in 1887 to operate on his mother's eyes, serve his countrymen, and see what his novel had done.";

// MEDIA: replace each `src` below with your real file or link.
//   images: put the file in public/images and use "/images/yourfile.webp"
//   videos: paste the YouTube link (watch, youtu.be or shorts all work)
// A section with no `caption` and no `src` has no media box at all.
// To add media later, add `media`, `src` and `caption` to that section.
const sections = [
  {
    heading: "The Journey Home",
    media: "image",
    src: "/images/djemnah.webp",
    alt: "The French steamer SS Djemnah",
    caption: "SS Djemnah, the French steamer ship used by Dr. Jose Rizal during his maritime travels.",
    credit: "Knights of Rizal",
    points: [
      {
        point: "The First Leg",
        sub: "On July 3, 1887, Rizal left for Marseilles, France, to go back home to the Philippines.",
      },
      {
        point: "Why did Rizal want to go home?",
        sub: [
          "To operate on his mother's failing eyes.",
          "To serve his countrymen.",
          "To know the effects of his novel, Noli Me Tangere.",
          "To learn why Leonor Rivera stopped writing to him.",
        ],
      },
      {
        point: "A polyglot aboard",
        sub: "Among the many foreigners on the vessel, Rizal acted as an interpreter.",
      },
      {
        point: "The Final Leg",
        sub: [
          "The Djemnah docked at Saigon, Vietnam. From there, he switched to another steamer vessel, the Haiphong.",
          "He arrived at Manila on the night of August 6. Two days later, he arrived at his home in Calamba, Laguna.",
        ],
      },
    ],
  },
  {
    heading: "A Bittersweet Homecoming",
    media: "image",
    src: "/images/rizals-birthplace.webp",
    alt: "Sketch of the house where Dr. Rizal was born.",
    caption: "Rizal's House in Calamba, the ancestral home where Rizal established his medical clinic and sports gymnasium.",
    credit: "Kahimyang Project",
    points: [
      {
        point: "A warning from family",
        sub: "Warned by his brother, Paciano, and his brother-in-law, Silvestre Ubaldo.",
      },
      {
        point: "Fears for Rizal's safety",
        sub: "The friars were upset because of his novel's slander against the Church and his subversive ideas.",
      },
      {
        point: "A loss too great",
        sub: "Rizal's sister, Olimpia, died due to complications during childbirth.",
      },
      {
        point: "Rizal's heartbreak",
        sub: "Rizal was unable to see Leonor Rivera: his family begged him not to see her and Leonor's mother did not approve.",
      },
    ],
  },
  {
    heading: "Rizal's First Clinic",
    media: "image",
    src: "/images/scott-oil.webp",
    alt: "Scott's Emulsion Cod Liver Oil bottle and box",
    caption: "Scott's Emulsion Cod Liver Oil, a vintage medical advertisement illustrating 19th-century remedies used during Rizal's practice.",
    credit: "Smithsonian Museum",
    points: [
      {
        point: "Rizal's first patient",
        sub: "His very first patient was his mother, Doña Teodora. He removed a double cataract from his mother's eyes; this was seen as a miraculous feat by the townspeople.",
      },
      {
        point: "Doctor Uliman",
        sub: "His clinic attracted more attention from different provinces, even in Manila. He was called Doctor Uliman or the German Doctor.",
      },
      {
        point: "Rizal provided accessible healthcare",
        sub: "Within months of opening his clinic, Rizal earned $900. His fees were reasonable and he would even provide free treatment to the poor.",
      },
      {
        point: "A standard answer for poor appetite",
        sub: "Rizal would often be asked, \"How do I increase my appetite?\" Rizal's answer would be Emulsion de Scott or Scott's Emulsion.",
      },
    ],
  },
  {
    heading: "Beyond Medicine",
    points: [
      {
        point: "A gymnasium for the town",
        sub: "He wanted to interest his townmen in fencing, shooting, and gymnastics, to discourage gambling and idleness.",
      },
      {
        point: "Rizal's downtime",
        sub: "In his spare time, he painted town landscapes and translated German poems by von Wildenrath into Tagalog. He also participated in civil relations.",
      },
    ],
  },
];

const quiz = [
  {
    prompt: "Who was the first patient at Rizal's clinic in Calamba?",
    options: ["His sister Olimpia", "His mother, Doña Teodora", "Leonor Rivera", "A friar"],
    answer: 1,
    explanation: "He removed a double cataract from his mother's eyes, which townspeople saw as a miraculous feat.",
  },
  {
    prompt: "What was Rizal nicknamed by his patients?",
    options: ["Doctor Scott", "Doctor Haiphong", "Doctor Calamba", "Doctor Uliman"],
    answer: 3,
    explanation: "He was called Doctor Uliman, or the German Doctor.",
  },
];

export default function HomeAfterYears({ setActivePage }) {
  return <ModulePage id="home-after-years" intro={intro} sections={sections} quiz={quiz} setActivePage={setActivePage} />;
}