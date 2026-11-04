import ModulePage from "../components/ModulePage";

const intro =
  "Copies of the Noli reached Manila before Rizal did, and the friars, the government and the university all responded.";

// Each key point with a `detail` opens a "paper" notes dialog when clicked.
// Points with a `detail` open a "paper" notes dialog when clicked.
// MEDIA: replace each `src` below with your real file or link.
//   images: put the file in public/images and use "/images/yourfile.webp"
//   videos: paste the YouTube link (watch, youtu.be or shorts all work)
// A section with no `caption` and no `src` has no media box at all.
// To add media later, add `media`, `src` and `caption` to that section.
const sections = [
  {
    heading: "Arrival and Initial Reaction",
    points: [
      {
        point: "The Copies of Noli",
        sub: "Copies reached the Philippines before Rizal did, and the friars were outraged.",
        detail: [
          {
            label: "Arrival in Manila",
            text: "Copies reached the Philippines weeks before Rizal's return, successfully bypassing customs authorities into public hands.",
          },
          {
            label: "Friars' Reaction",
            text: "Books fell into Spanish hands, especially the friars, who were outraged by their depiction as villains.",
          },
        ],
      },
      {
        point: "Rizal's Awaited Arrival",
        sub: "His return heightened tension.",
        detail: [
          {
            label: "Heightened Tension",
            text: "Rizal returned to disprove claims that he was only brave enough to write about Philippine conditions while safe in Europe.",
          },
        ],
      },
    ],
  },
  {
    heading: "Government Inquiry and Security",
    media: "image",
    src: "/images/emilio-terrero.webp",
    alt: "Portrait of Governor-General Emilio Terrero y Perinat",
    caption: "Governor-General Emilio Terrero, who summoned Rizal to Malacañang Palace to inspect Noli Me Tángere and subsequently assigned Lt. Jose Taviel de Andrade as his personal bodyguard.",
    credit: "The Kahimyang Project",
    points: [
      {
        point: "The Conversation with Governor Emilio Terrero",
        sub: "Rizal was summoned to Malacañang to answer for the novel.",
        detail: [
          {
            label: "Malacañang Summons",
            text: "Governor-General Emilio Terrero summoned Rizal over reports that the novel contained seditious ideas.",
          },
          {
            label: "Rizal's Defense",
            text: "Rizal clarified he was exposing true conditions, not spreading subversion.",
          },
          {
            label: "Jesuit Refusal & Warning",
            text: "Seeking a copy for the Governor, Rizal asked the Jesuits, but they refused to part with theirs. Former professors (Frs. Sanchez, Bech, and Faura) warned him that the novel would cost him his head.",
          },
        ],
      },
      {
        point: "Rizal's Friend and Bodyguard / General Terrero's Verdict",
        sub: "Rizal delivered a copy to Terrero, and a lieutenant was assigned to protect him.",
        detail: [
          {
            label: "Finding a Copy",
            text: "Rizal secured a copy from a friend and delivered it to Governor-General Terrero.",
          },
          {
            label: "Lt. José Taviel de Andrade",
            text: "Assigned to protect Rizal due to death threats; both became close friends over shared interests.",
          },
          {
            label: "Terrero's Reaction",
            text: "After reading the book, General Terrero found nothing wrong with it.",
          },
        ],
      },
    ],
  },
  {
    heading: "Official Censorship and Escalation",
    media: "image",
    src: "/images/noli.webp",
    alt: "Cover page of the first edition of Noli Me Tángere, Berlin, 1887",
    caption: "First edition of Noli Me Tángere, which was condemned by the University of Santo Tomas faculty committee and recommended for total ban by the Permanent Commission on Censorship.",
    credit: "www.tatlerasia.com | Picture taken at Philippine National Library",
    points: [
      {
        point: "UST Committee Assessment",
        sub: "The Archbishop sent the novel to UST for review, and a faculty committee condemned it.",
        detail: [
          {
            label: "Archbishop's Initiative",
            text: "Archbishop of Manila Pedro Payo, O.P., sent the novel to UST Rector Fr. Gregorio Echavarría for review.",
          },
          {
            label: "Faculty Committee Verdict",
            text: "Declared the Noli:",
            quote:
              "Heretical, impious, and scandalous in the religious order, anti-patriotic, subversive of public order, injurious to the government of Spain and of the Philippine Islands in the political order.",
          },
        ],
      },
      {
        point: "Permanent Commission on Censorship",
        sub: "Doubting the biased friars, Terrero referred the book to a commission, which recommended a ban.",
        detail: [
          {
            label: "Fr. Salvador Font's Review",
            text: "Doubting the biased friars, Terrero referred the book to the Permanent Commission on Censorship, headed by Fr. Salvador Font (Augustinian curate of Tondo).",
          },
          {
            label: "Official Ban",
            text: "The Commission recommended an absolute prohibition on the importation, reproduction, and distribution of the novel.",
          },
        ],
      },
      {
        point: "Public Impact and Counter-Effect",
        sub: "The ban backfired and made the novel more sought after.",
        detail: [
          {
            label: "Unintended Publicity",
            text: "Publishing Fr. Font's report served as free advertisement, triggering massive public interest.",
          },
          {
            label: "Price Surge",
            text: "Owning a copy became a status symbol. Prices skyrocketed from the original 5 pesetas (June 1887) up to 50 pesos per copy.",
          },
          {
            label: "Secret Reading",
            text: "To avoid arrest and harassment, people hid their copies and read the novel privately at night.",
          },
        ],
      },
    ],
  },
  {
    heading: "Smuggling the Noli (On His Way Back to Europe)",
    points: [
      {
        point: "Perfecto Rufino Riego",
        sub: "Rizal met a young Tagalog seaman from Marinduque in 1888, who agreed to smuggle sacks of the novel from Hong Kong to Manila.",
      },
      {
        point: "Distribution Strategy",
        sub: "Riego secretly distributed the books by leaving one sack at a time at the back of a carromata.",
      },
      {
        point: "Target Readers",
        sub: "Sacks of the Noli were successfully handed off to students and secular priests.",
      },
    ],
  },
  {
    heading: "Opposition to Noli Me Tángerë",
    media: "image",
    src: "/images/caingat.webp",
    alt: "Cover of the pamphlet Caiingat Cayo by Fr. Jose Rodriguez",
    caption: "Anti-Noli pamphlet 'Caiingat Cayo' authored by Fr. Jose Rodriguez, warning Catholics against reading Rizal's 'heretical and seditious' novel.",
    credit: "Project Gutenberg.",
    points: [
      {
        point: "Friars Hated the Novel",
        sub: "Fr. José Rodríguez and other friars campaigned against it.",
        detail: [
          {
            label: "Fr. José Rodríguez (Prior of Guadalupe)",
            text: "Published Caiingat Cayo (1888) warning that reading the Noli was a mortal sin due to its heresies.",
          },
          {
            label: "Accusations against Rizal",
            text: "Called Rizal an ignorant man and labeled his novel a direct attack on the Catholic Church.",
          },
          {
            label: "Widespread Campaign",
            text: "Controversy spread throughout the countryside as friars preached against the book from their pulpits.",
          },
        ],
      },
      {
        point: "Bashers from Spain",
        sub: "Critics in Spain attacked the novel in print and in parliament.",
        detail: [
          {
            label: "Vicente Barrantes",
            text: "Attacked the novel in España Moderna (1890), declaring it unpatriotic and offensive to Spain.",
          },
          {
            label: "Spanish Politicians",
            text: "Two Spanish senators and a member of the Spanish lower house spoke out against the novel during parliamentary sessions.",
          },
        ],
      },
    ],
  },
  {
    heading: "Defenders of Noli Me Tángerë",
    media: "image",
    src: "/images/defenders.webp",
    alt: "Composite portrait of Marcelo H. del Pilar, Fr. Francisco de Paula Sanchez and Fr. Vicente Garcia",
    caption: "Key defenders of Noli Me Tángere: Marcelo H. del Pilar (author of 'Caiigat Cayo'), Fr. Francisco de Paula Sanchez, and Fr. Vicente Garcia.",
    credit: "Philippine Historical Association / Propaganda Movement Archives.",
    points: [
      {
        point: "Marcelo H. del Pilar",
        sub: "Authored Caiigat Cayo (\"Slippery as an Eel\"), a satirical response smuggled into churches.",
      },
      {
        point: "Fr. Francisco de Paula Sanchez",
        sub: "Rizal's former professor who publicly defended the novel.",
      },
      {
        point: "Fr. Vicente Garcia",
        sub: "A Filipino Catholic priest-theologian who countered Fr. Rodríguez's points systematically.",
        detail: [
          "Fr. Garcia answered Fr. Rodríguez's points one by one:",
          {
            list: [
              "On Rizal's intelligence: Rizal was a graduate of a Spanish university and an award recipient, thus not an \"ignorant man.\"",
              "On the novel's target: It attacked corrupt friars and government officials, not the Catholic Church itself.",
              "On the mortal sin logic: If reading the Noli was a mortal sin, Fr. Rodríguez himself committed it by reading it to write his critique.",
            ],
          },
        ],
      },
    ],
  },
];

// Video shown beside the quiz at the end of the page.
const quizMedia = {

};

const quiz = [
  {
    prompt: "Which Governor-General summoned Rizal over reports of seditious ideas in the Noli?",
    options: ["Pedro Payo", "Salvador Font", "Emilio Terrero", "Gregorio Echavarría"],
    answer: 2,
    explanation: "Governor-General Emilio Terrero summoned him to Malacañang. After reading the book, he found nothing wrong with it.",
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
  return <ModulePage id="furor-noli" intro={intro} sections={sections} quiz={quiz} quizMedia={quizMedia} setActivePage={setActivePage} />;
}