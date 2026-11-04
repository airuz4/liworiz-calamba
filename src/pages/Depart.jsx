import ModulePage from "../components/ModulePage";

const intro =
  "With the friars pressing for action and his family anxious, Rizal left for Europe on February 3, 1888.";

// MEDIA: replace each `src` below with your real file or link.
//   images: put the file in public/images and use "/images/yourfile.jpg"
//   videos: paste the YouTube link (watch, youtu.be or shorts all work)
// A section with no `caption` and no `src` has no media box at all.
// To add media later, add `media`, `src` and `caption` to that section.
const sections = [
  {
    heading: "Why he had to leave",
    media: "image",
    src: "/images/manila-harbor.jpeg",
    alt: "Manila Bay harbor in the late 1880s",
    caption: "Manila Harbor in the late 1880s, where Rizal prepared for his sudden departure to escape friar persecution and protect his family.",
    credit: "University of Michigan Special Collections / Public Domain.",
    points: [
      {
        point: "The friars pressed for his arrest",
        sub: "They urged Governor-General Terrero to arrest or deport him. Terrero refused because he saw no valid reason.",
      },
      {
        point: "Terrero advised him to go",
        sub: "He invited Rizal to Malacañang and told him to leave the Philippines for his own good.",
      },
      {
        point: "His family was anxious",
        sub: "His continued stay caused them anxiety.",
      },
      {
        point: "The fight could go on in Europe",
        sub: "Rizal believed he could continue to fight for the country from there.",
      },
    ],
  },
  {
    heading: "Himno al Trabajo",
    media: "image",
    src: "/images/himno.jpeg",
    alt: "Himno al Trabajo manuscript page and Batangas agricultural workers",
    caption: "Original manuscript of 'Himno al Trabajo' composed by Rizal in 1887 to honor the industrious citizens and agricultural workers of Lipa, Batangas.",
    credit: "Facebook Reference / Filipinas Heritage Library.",
    points: [
      {
        point: "A poem for Lipa",
        sub: "He wrote it to celebrate Lipa, Batangas being recognized as a villa, a higher administrative status, under the Becerra Law of 1888.",
      },
      {
        point: "Sent instead of attending",
        sub: "Invited to the celebration, he contributed the poem and dedicated it to the hardworking people of Lipa.",
      },
      {
        point: "Its message",
        sub: "The poem stresses hard work, dignity, unity and love for country.",
      },
    ],
  },
  {
    heading: "The four parts of the poem",
    points: [
      {
        point: "Men",
        sub: "Work diligently to provide for their families and contribute to their homeland.",
      },
      {
        point: "Wives",
        sub: "Support their families through dedication, care and responsibility.",
      },
      {
        point: "Maidens",
        sub: "Appreciate hardworking and responsible men.",
      },
      {
        point: "Children",
        sub: "Recognize their parents' sacrifices and learn the value of work.",
      },
    ],
  },
  {
    heading: "Leaving Calamba",
    points: [
      {
        point: "He sailed on February 3, 1888",
        sub: "He boarded the vessel Don Juan for the first leg of his trip. He was 27 years old.",
      },
      {
        point: "Calamba's agrarian protest",
        sub: "Rizal said he wanted to follow its progress from Spain, but his family and the townmates involved were evicted.",
      },
      {
        point: "Meeting Seaman Riego",
        sub: "On the Don Juan he met Perfecto Rufino Riego, who helped smuggle copies of the Noli into the Philippines. Rizal told him he had refused the friars' offer of money to stop attacking them.",
      },
    ],
  },
  {
    heading: "Aftermath",
  
    points: [
      {
        point: "Six tumultuous months",
        sub: "His stay in the Motherland was regarded as tumultuous.",
      },
      {
        point: "Evictions from Calamba",
        sub: "The controversy led to the removal of his family and other tenants.",
      },
      {
        point: "A town in unrest",
        sub: "His sudden departure left Calamba in utter unrest and confusion.",
      },
      {
        point: "Possible European influences",
        sub: "He was perhaps influenced by Karl Marx and Friedrich Engels, whose radical philosophies preached confrontation between landlords and peasants.",
      },
    ],
  },
];

const quiz = [
  {
    prompt: "Why did Governor-General Terrero refuse to arrest or deport Rizal?",
    options: [
      "He feared the Jesuits",
      "He saw no valid reason to have him arrested",
      "The Archbishop forbade it",
      "Rizal had already left",
    ],
    answer: 1,
    explanation: "Terrero still advised Rizal to leave the Philippines for his own good.",
  },

  {
    prompt: "How did Rizal respond to the friars' offer of money if he stopped attacking them?",
    options: [
      "He accepted it for his family",
      "He asked for more",
      "He refused and said he did not need their money",
      "He gave it to the poor",
    ],
    answer: 2,
    explanation: "He told Seaman Riego about it aboard the Don Juan.",
  },
];

export default function Depart({ setActivePage }) {
  return <ModulePage id="depart" intro={intro} sections={sections} quiz={quiz} setActivePage={setActivePage} />;
}