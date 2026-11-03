import ModulePage from "../components/ModulePage";

const intro =
  "Rizal returned to the Philippines in 1887 to operate on his mother's eyes, serve his countrymen, and see what his novel had done.";

const sections = [
  {
    heading: "The journey home",
    media: "image",
    points: [
      {
        point: "He left for Marseilles on July 3, 1887",
        sub: "It was the first leg of his trip back. He boarded the same vessel as five years earlier, the Djemnah.",
      },
      {
        point: "Four reasons to return",
        sub: "To operate on his mother's failing eyes, serve his countrymen, learn the effects of the Noli, and find out why Leonor Rivera stopped writing.",
      },
      {
        point: "A polyglot aboard",
        sub: "Among the many foreigners on the vessel, Rizal acted as an interpreter.",
      },
      {
        point: "Manila on August 6, Calamba two days later",
        sub: "At Saigon he switched to the steamer Haiphong, bound for Manila on July 30.",
      },
    ],
  },
  {
    heading: "A happy but uneasy homecoming",
    media: "image",
    points: [
      {
        point: "Warned before he arrived",
        sub: "His family told him there might be people who wanted to cause him harm.",
      },
      {
        point: "Joy at home, fear for his safety",
        sub: "The friars were upset over his novel's slander against the Church and its subversive ideas.",
      },
      {
        point: "Loss and a missed reunion",
        sub: "His sister Olimpia died from complications of childbirth. His family begged him not to see Leonor Rivera, and her mother did not approve.",
      },
    ],
  },
  {
    heading: "The clinic in Calamba",
    media: "video",
    points: [
      {
        point: "His first patient was his mother",
        sub: "He removed a double cataract from Doña Teodora's eyes, which the townspeople saw as a miracle.",
      },
      {
        point: "Known as \"Doctor Uliman\"",
        sub: "The name means the German doctor. His clinic drew people from other provinces and Manila.",
      },
      {
        point: "Fair fees, free care for the poor",
        sub: "Within a few months he earned $900.",
      },
      {
        point: "A standard answer for poor appetite",
        sub: "Asked how to increase appetite, he would involuntarily answer: Emulsion de Scott.",
      },
    ],
  },
  {
    heading: "Beyond medicine",
    media: "image",
    points: [
      {
        point: "A gymnasium for the town",
        sub: "He wanted to interest his townmen in fencing, shooting and gymnastics, to discourage gambling and idleness.",
      },
      {
        point: "Civic life, painting and translation",
        sub: "In his spare time he painted town landscapes and translated German poems of Von Wildernath into Tagalog.",
      },
    ],
  },
];

const quiz = [
  {
    prompt: "Which vessel did Rizal board for the first leg of his trip home?",
    options: ["The Haiphong", "The Djemnah", "The Don Juan", "The Marseilles"],
    answer: 1,
    explanation: "He boarded the Djemnah, the same vessel he had taken five years earlier.",
  },
  {
    prompt: "Who was the first patient at Rizal's clinic in Calamba?",
    options: ["His mother, Doña Teodora", "His sister Olimpia", "Leonor Rivera", "Governor-General Terrero"],
    answer: 0,
    explanation: "He removed a double cataract from his mother's eyes, which townspeople saw as a miraculous feat.",
  },
  {
    prompt: "What was Rizal nicknamed by his patients?",
    options: ["Doctor Scott", "Doctor Haiphong", "Doctor Calamba", "Doctor Uliman"],
    answer: 3,
    explanation: "\"Doctor Uliman\" meant the German doctor.",
  },
  {
    prompt: "Why did Rizal open a gymnasium in Calamba?",
    options: [
      "To train soldiers for the colonial government",
      "To discourage gambling and idleness by promoting sports",
      "To raise money for his mother's operation",
      "To hide his clinic from the friars",
    ],
    answer: 1,
    explanation: "He wanted to interest his townmen in fencing, shooting and gymnastics.",
  },
  {
    prompt: "Which was NOT one of Rizal's reasons for returning to the Philippines?",
    options: [
      "To operate on his mother's eyes",
      "To serve his countrymen",
      "To join the colonial government",
      "To learn the effects of the Noli",
    ],
    answer: 2,
    explanation: "His reasons were his mother's eyes, serving his countrymen, the effects of the Noli, and Leonor Rivera's silence.",
  },
];

export default function HomeAfterYears({ setActivePage }) {
  return <ModulePage id="home-after-years" intro={intro} sections={sections} quiz={quiz} setActivePage={setActivePage} />;
}