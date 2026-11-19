// All copy and figures in one place. Figures come from the @humanitarians.organisation posts.
// Voice rule: present tense, no dates or years anywhere on the site.

export const INSTAGRAM = "https://www.instagram.com/humanitarians.organisation/";
export const FOUNDERS = [
  {
    name: "Koenaa Jariwala",
    role: "Co-founder",
    handle: "koenaa.jariwala",
    email: "koenaa.p.jariwala@icloud.com",
    photo: "/img/founder-koena.webp",
  },
  {
    name: "Vibhor Agrawal",
    role: "Co-founder",
    handle: "vibhoragrawal_",
    email: "agrawalvibhor49@gmail.com",
    photo: "/img/founder-vibhor.webp",
  },
] as const;

export const EMAILS = FOUNDERS.map((f) => f.email);

export const HERO_FACTS = [
  { v: "3,160 ml", l: "of breast milk donated for premature and sick babies" },
  { v: "68", l: "mothers donating at a single camp" },
  { v: "8", l: "community drives across Surat" },
] as const;

export const PARTNERS = [
  "SMIMER Hospital",
  "Surat Paediatrics Association",
  "Yashoda Human Milk Bank",
  "Rotary Club of Surat Seaface",
  "Family Physician Association",
  "Kamakhya",
  "Project Surat",
  "Vatsalyapuram",
] as const;

export const PRESS = ["ETV Bharat", "I Am Surat City News"] as const;

export const MILK_STEPS = [
  {
    n: "01",
    title: "Screen",
    body: "Doctors and nurses check every donor's health history and blood reports before a single drop is collected.",
  },
  {
    n: "02",
    title: "Collect",
    body: "Mothers donate under nurses' supervision. Our volunteers look after their little ones in the meantime.",
  },
  {
    n: "03",
    title: "Store",
    body: "Milk is labelled, kept cold and handed to the human milk bank, where it is pasteurised, tested and frozen.",
  },
  {
    n: "04",
    title: "Feed",
    body: "Hospitals give it to premature and sick newborns whose own mothers cannot produce milk yet.",
  },
] as const;

export const MILK_FACTS = [
  { v: "3,160", u: "ml", l: "of breast milk donated" },
  { v: "68", u: "", l: "lactating mothers donating" },
  { v: "5", u: "", l: "medical and civic partners" },
  { v: "3", u: "", l: "hospitals sending volunteers" },
] as const;

export const PERIOD_TOPICS = [
  {
    title: "Pads in hand",
    body: "Every woman and girl we meet takes home sanitary pads, along with how to use them.",
  },
  {
    title: "Hygiene, plainly",
    body: "Why a reused cloth leads to infections, how often to change, and how to dispose of pads safely.",
  },
  {
    title: "Every option",
    body: "Pads, cups, tampons and period underwear explained, so women can choose what fits their life.",
  },
  {
    title: "No more whispering",
    body: "Periods are talked about out loud, with mothers, daughters and grandmothers in the same conversation.",
  },
] as const;

export const APPROACH = [
  {
    title: "Go where women are",
    body: "We work lane by lane in Surat's slums and community halls, not behind a desk. Women don't have to come looking for us.",
  },
  {
    title: "Bring the experts",
    body: "Paediatricians, nurses, milk-bank staff and menstrual health mentors stand beside us, so every word and every product is safe.",
  },
  {
    title: "Make it ordinary",
    body: "Taboos lose their grip when a topic is discussed openly. We keep talking about periods and breastfeeding until it feels normal.",
  },
] as const;

export const BEYOND = [
  {
    id: "river",
    title: "River clean-ups",
    stat: "300+ kg",
    statLabel: "of trash cleared in two hours",
    body: "80 volunteers and Project Surat clear plastic from the Tapi riverfront at Ambika Niketan.",
    img: "/img/cleanup-team.webp",
    alt: "Volunteers holding filled rubbish sacks on the Tapi riverfront",
  },
  {
    id: "books",
    title: "Notebooks for school",
    stat: "300+",
    statLabel: "notebooks handed out",
    body: "Every child from pre-primary to grade 8 at Shree Vasudev Samarth Government School gets new notebooks.",
    img: "/img/books-girls.webp",
    alt: "Two schoolgirls writing in their new notebooks",
  },
  {
    id: "diya",
    title: "Diwali for diya makers",
    stat: "₹9,000",
    statLabel: "raised for clay-lamp makers",
    body: "A diya-painting workshop raises money for the families who hand-make Surat's clay lamps.",
    img: "/img/diya-maker.webp",
    alt: "A diya maker shaping clay lamps by hand",
  },
  {
    id: "food",
    title: "Food on festival days",
    stat: "21 kg",
    statLabel: "of rice and moong dal shared",
    body: "On Makar Sankranti, families in Umra receive grain to cook a festival meal at home.",
    img: "/img/food-kids.webp",
    alt: "A volunteer handing a bag of rice to a child in Umra",
  },
  {
    id: "dogs",
    title: "Street dogs, fed",
    stat: "50+",
    statLabel: "street dogs fed in one drive",
    body: "Dog food, milk and clean water across six neighbourhoods, puppies and a pregnant mother among them.",
    img: "/img/dogs-koena.webp",
    alt: "Koenaa feeding a street dog",
  },
  {
    id: "home",
    title: "Afternoons at the orphanage",
    stat: "Play",
    statLabel: "food, games and company",
    body: "We spend time with the children at Vatsalyapuram in Surat: playing, talking and sharing a meal.",
    img: "/img/orphanage-girl.webp",
    alt: "A volunteer laughing with children at the orphanage",
  },
] as const;
