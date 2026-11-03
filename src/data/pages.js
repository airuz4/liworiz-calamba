export const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";

export const SUMMARY = { id: "summary", label: "Overview" };

// The four modules form a real sequence, so "part" numbering is meaningful.
export const MODULES = [
  { id: "home-after-years", layout: "split", part: 1, label: "Home", title: "Home After Five Years", period: "1887–1888", blurb: "Rizal returns to Calamba and opens a clinic and a gymnasium." },
  { id: "furor-noli", layout: "zigzag", part: 2, label: "The Noli furor", title: "The Furor Over Noli Me Tangere", period: "1887–1890", blurb: "The friars, the government and the university respond to the Noli." },
  { id: "protesta", layout: "portrait", part: 3, label: "Protesta", title: "Protesta De Calamba", period: "Coming soon", blurb: "Coming soon." },
  { id: "depart", layout: "sandwich", part: 4, label: "Departure", title: "Departure for Europe", period: "1888", blurb: "Terrero advises Rizal to leave, and he sails for Europe." },
];

export const PAGES = [SUMMARY, ...MODULES];

export const placeholderPoints = (n = 3) =>
  Array.from({ length: n }, (_, i) => ({
    point: `Key point placeholder ${i + 1}`,
    sub: LOREM_SHORT,
  }));