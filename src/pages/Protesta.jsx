import ModulePage from "../components/ModulePage";

const intro =
  "A protest made by the tenants of Calamba, Laguna, in 1888 against the Dominican friars who owned and managed the Hacienda de Calamba.";

// MEDIA: replace each `src` below with your real file or link.
//   images: put the file in public/images and use "/images/yourfile.webp"
//   videos: paste the YouTube link (watch, youtu.be or shorts all work)
// A section with no `caption` and no `src` has no media box at all.
// To add media later, add `media`, `src` and `caption` to that section.
const sections = [
  {
    heading: "The Calamba Agrarian Dispute",
    media: "image",
    src: "/images/Calamba-Church.JPG",
    alt: "Calamba parish church and the hacienda house",
    caption: "Calamba Parish Church and Hacienda House, the local parish church and estate headquarters central to the land dispute.",
    credit: "Hacienda de Calamba",
    points: [
      {
        point: "Unfair land rental practices",
        sub: "Dominican priests were in charge of the Hacienda de Calamba.",
      },
      {
        point: "José Rizal's involvement",
        sub: "Dr. José Rizal helped tenants by helping them write a report of their grievances.",
      },
      {
        point: "The consequences of the protest",
        sub: "The dispute worsened when tenants refused to pay the disputed rents.",
      },
    ],
  },
  {
    heading: "José Rizal's Role in the Protest",
    media: "image",
    src: "/images/rizal.webp",
    alt: "Jose Rizal's Portrait",
    caption: "Jose Rizal's Portrait",
    credit: "joserizal.ph",
    points: [
      {
        point: "Supported the tenants",
        sub: "Rizal stood with the farmers of Calamba who experienced unjust treatment from the friars.",
      },
      {
        point: "Helped document their complaints",
        sub: "Rizal helped them document their complaints.",
      },
      {
        point: "Promoted peaceful resistance",
        sub: "Rather than encouraging violence, he offered a peaceful way of fighting injustice.",
      },
    ],
  },
  {
    heading: "Consequences and Legacy of the Protest",
    points: [
      {
        point: "The conflict continued",
        sub: "Despite the petition and complaints, the Dominican friars did not stop.",
      },
      {
        point: "Eviction and deportation",
        sub: "The Dominican estate pursued legal action against the tenants.",
      },
      {
        point: "A symbol of the fight for justice",
        sub: "The Protesta de Calamba became an example of how Filipinos suffered under abuses during Spanish colonial rule.",
      },
    ],
  },
];

const quiz = [
  {
    prompt: "What approach did Rizal promote in fighting the injustice?",
    options: ["Violence", "Ignoring the dispute", "Leaving Calamba", "Peaceful resistance"],
    answer: 3,
    explanation: "Rather than encouraging violence, he offered a peaceful way of fighting injustice.",
  },
  {
    prompt: "How did the Dominican estate respond to the tenants?",
    options: [
      "It lowered the rents",
      "It pursued legal action against the tenants",
      "It gave the land to the tenants",
      "It left Calamba",
    ],
    answer: 1,
    explanation: "Despite the petition and complaints, the friars did not stop, and the estate took legal action.",
  },
];

export default function Protesta({ setActivePage }) {
  return <ModulePage id="protesta" intro={intro} sections={sections} quiz={quiz} setActivePage={setActivePage} />;
}