import ModulePage from "../components/ModulePage";

const intro =
  "Copies of the Noli reached Manila before Rizal did, and the friars, the government and the university all responded.";

const sections = [
  {
    heading: "Arrival and initial reaction",
    media: "image",
    points: [
      {
        point: "Copies arrived before Rizal",
        sub: "They reached the Philippines weeks earlier and passed customs authorities into public hands.",
      },
      {
        point: "The friars were outraged",
        sub: "The books fell into Spanish hands, especially the friars, who were angered by being shown as villains.",
      },
      {
        point: "Tension over his return",
        sub: "He returned to disprove claims that he was only brave enough to write about conditions from the safety of Europe.",
      },
    ],
  },
  {
    heading: "The Governor-General steps in",
    media: "image",
    points: [
      {
        point: "Summoned to Malacañang",
        sub: "Governor-General Emilio Terrero called Rizal in over reports of seditious ideas. Rizal said he was exposing true conditions, not spreading subversion.",
      },
      {
        point: "The Jesuits refuse, then warn",
        sub: "They would not part with their copy. Former professors Frs. Sanchez, Bech and Faura warned him that the novel would cost him his head.",
      },
      {
        point: "A bodyguard who became a friend",
        sub: "Lt. José Taviel de Andrade was assigned to protect Rizal from death threats. They bonded over shared interests.",
      },
      {
        point: "Terrero finds nothing wrong",
        sub: "Rizal got a copy from a friend and delivered it. After reading it, Terrero saw nothing wrong with it.",
      },
    ],
  },
  {
    heading: "Official censorship",
    media: "video",
    points: [
      {
        point: "The UST committee condemns the book",
        sub: "Archbishop Pedro Payo sent it to UST Rector Fr. Gregorio Echavarría. The faculty committee called it heretical, impious and scandalous, and subversive of public order.",
      },
      {
        point: "Terrero doubts the friars' bias",
        sub: "He referred the book to the Permanent Commission on Censorship, headed by Fr. Salvador Font, Augustinian curate of Tondo.",
      },
      {
        point: "An absolute ban is recommended",
        sub: "The Commission urged a prohibition on importing, reproducing and distributing the novel.",
      },
    ],
  },
  {
    heading: "The ban backfires",
    media: "image",
    points: [
      {
        point: "Free advertisement",
        sub: "Publishing Fr. Font's report triggered massive public interest.",
      },
      {
        point: "A status symbol",
        sub: "Prices rose from 5 pesetas in June 1887 to as much as 50 pesos per copy.",
      },
      {
        point: "Read in secret",
        sub: "To avoid arrest and harassment, people hid their copies and read at night.",
      },
    ],
  },
  {
    heading: "Smuggling the Noli",
    media: "image",
    points: [
      {
        point: "Perfecto Rufino Riego",
        sub: "Rizal met the young Tagalog seaman from Marinduque in 1888. He agreed to smuggle sacks of the novel from Hong Kong to Manila.",
      },
      {
        point: "One sack at a time",
        sub: "Riego left a sack at the back of a carromata.",
      },
      {
        point: "Students and secular priests",
        sub: "They were the readers who received the sacks.",
      },
    ],
  },
  {
    heading: "Opposition to the novel",
    media: "image",
    points: [
      {
        point: "Fr. José Rodríguez",
        sub: "The Prior of Guadalupe published Caiingat Cayo in 1888, warning that reading the Noli was a mortal sin. He called Rizal ignorant and the novel an attack on the Church.",
      },
      {
        point: "Friars preached against it",
        sub: "The controversy spread through the countryside as friars denounced the book from their pulpits.",
      },
      {
        point: "Critics in Spain",
        sub: "Vicente Barrantes attacked it in España Moderna in 1890 as unpatriotic. Two senators and a member of the lower house also spoke against it.",
      },
    ],
  },
  {
    heading: "Defenders of the novel",
    media: "image",
    points: [
      {
        point: "Marcelo H. del Pilar",
        sub: "He wrote Caiigat Cayo (\"Slippery as an Eel\"), a satirical response smuggled into churches.",
      },
      {
        point: "Fr. Francisco de Paula Sanchez",
        sub: "Rizal's former professor defended the novel publicly.",
      },
      {
        point: "Fr. Vicente Garcia",
        sub: "A Filipino priest-theologian who answered Fr. Rodríguez point by point.",
      },
    ],
  },
  {
    heading: "Fr. Garcia's replies",
    media: "video",
    points: [
      {
        point: "Rizal was not \"ignorant\"",
        sub: "He was a graduate of a Spanish university and an award recipient.",
      },
      {
        point: "The target was corruption, not the Church",
        sub: "The novel attacked corrupt friars and government officials.",
      },
      {
        point: "The mortal sin argument backfires",
        sub: "If reading the Noli was a mortal sin, Fr. Rodríguez committed it by reading it to write his critique.",
      },
    ],
  },
];

const quiz = [
  {
    prompt: "Which Governor-General summoned Rizal over reports of seditious ideas in the Noli?",
    options: ["Pedro Payo", "Salvador Font", "Emilio Terrero", "Gregorio Echavarría"],
    answer: 2,
    explanation: "Governor-General Emilio Terrero summoned him to Malacañang. After reading the book, he found nothing wrong with it.",
  },
  {
    prompt: "Who was assigned to protect Rizal from death threats?",
    options: ["Lt. José Taviel de Andrade", "Perfecto Rufino Riego", "Fr. Salvador Font", "Marcelo H. del Pilar"],
    answer: 0,
    explanation: "Lt. Taviel de Andrade became Rizal's bodyguard, and the two became close friends.",
  },
  {
    prompt: "What was the unintended effect of publishing Fr. Font's report?",
    options: [
      "It convinced the public the book was dangerous",
      "It ended the controversy",
      "It worked as free advertisement and raised public interest",
      "It forced Rizal to leave the country",
    ],
    answer: 2,
    explanation: "Owning a copy became a status symbol, and prices rose from 5 pesetas to as much as 50 pesos.",
  },
  {
    prompt: "Who agreed to smuggle sacks of the Noli from Hong Kong to Manila?",
    options: ["Vicente Barrantes", "Fr. Vicente Garcia", "Marcelo H. del Pilar", "Perfecto Rufino Riego"],
    answer: 3,
    explanation: "Riego, a young Tagalog seaman from Marinduque, left one sack at a time at the back of a carromata.",
  },
  {
    prompt: "What was Fr. Garcia's reply to the claim that reading the Noli was a mortal sin?",
    options: [
      "Fr. Rodríguez had committed it himself by reading the novel",
      "Only students could commit it",
      "The Pope had approved the novel",
      "The novel had been banned before it was written",
    ],
    answer: 0,
    explanation: "Fr. Rodríguez read the Noli in order to write his critique.",
  },
];

export default function FurorNoli({ setActivePage }) {
  return <ModulePage id="furor-noli" intro={intro} sections={sections} quiz={quiz} setActivePage={setActivePage} />;
}