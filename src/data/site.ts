// Everything on the site comes from this file. Change the text, programs,
// prices and links here; the pages update on the next build.

export const site = {
  name: "Imani Brooks Coaching",
  shortName: "Imani Brooks",
  tagline: "Strength coaching in person and online",
  description:
    "Imani Brooks is a strength coach in Fairmont Heights offering one-to-one training, small group sessions and online coaching built around your week.",
  email: "coach@imanibrooks.example",
  phone: "(555) 014-7731",
  // Where people book a free 20-minute intro call (Calendly, Cal.com, Acuity or a tel: link).
  bookingUrl: "https://example.com/book-intro-call",
  studio: {
    name: "Ironside Collective, Studio 2",
    street: "77 Calder Avenue",
    city: "Fairmont Heights",
    region: "MD",
    postal: "20743",
  },
  social: [
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "YouTube", url: "https://youtube.com/" },
  ],
};

export const nav = [
  { href: "/programs", label: "Programs" },
  { href: "/online", label: "Online coaching" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
];

export const home = {
  title: "Get strong on a plan that fits your actual week",
  text: "I'm Imani, a strength coach in Fairmont Heights. I write every program by hand, coach you through it in person or online, and adjust it when life gets in the way.",
  primary: "Apply for coaching",
  secondary: "Book a free intro call",
  facts: [
    { value: "11 years", label: "coaching strength" },
    { value: "3 sessions", label: "a week is the usual plan" },
    { value: "45 to 60 min", label: "per session" },
  ],
};

// The training log card in the home hero. Each line is shown in mono.
export const sampleWeek = {
  label: "Week 6 of 12",
  client: "Sample plan, intermediate lifter",
  days: [
    {
      day: "Mon",
      focus: "Lower",
      lifts: ["Back squat 4 x 6 @ RPE 7", "Romanian deadlift 3 x 8", "Split squat 3 x 10 each"],
    },
    {
      day: "Wed",
      focus: "Upper",
      lifts: ["Bench press 4 x 5 @ RPE 8", "Chin-up 4 x 6", "Half-kneeling press 3 x 8"],
    },
    {
      day: "Fri",
      focus: "Full body",
      lifts: ["Trap bar deadlift 3 x 5 @ RPE 7", "Goblet squat 3 x 12", "Farmer carry 4 x 40 m"],
    },
  ],
  note: "Up 5 lb on squat from week 5",
};

export const principles = [
  {
    title: "A plan written for you",
    text: "Your program starts from an assessment of how you move, what you've trained before and how many hours you really have.",
    notation: "assess, plan, review",
  },
  {
    title: "Coached, not just counted",
    text: "Every session has clear targets, and I watch the reps that matter: bracing, bar path, depth, tempo.",
    notation: "4 x 6 @ RPE 7",
  },
  {
    title: "Adjusted every week",
    text: "Slept badly, traveled, picked up a sore knee? The plan bends so you keep training instead of starting over.",
    notation: "week 6 of 12",
  },
];

export type Package = {
  name: string;
  price: string;
  per: string;
  summary: string;
  includes: string[];
  notation: string;
  featured?: boolean;
};

export const programs: { id: string; title: string; text: string; packages: Package[] }[] = [
  {
    id: "in-person",
    title: "One-to-one in person",
    text: "Coached sessions at Ironside Collective in Fairmont Heights. Packs never expire while you're training regularly.",
    packages: [
      {
        name: "Starter pack",
        price: "$390",
        per: "6 sessions",
        summary: "For learning the main lifts properly and finding your starting numbers.",
        includes: ["Movement assessment", "Six 60-minute sessions", "A written plan for training on your own"],
        notation: "6 x 60 min",
      },
      {
        name: "Twelve-week block",
        price: "$1,680",
        per: "24 sessions",
        summary: "Two coached sessions a week plus a third you do on your own from the app.",
        includes: ["Assessment and retest at week 12", "24 coached sessions", "Weekly plan in the app", "Message support"],
        notation: "2 x week, 12 weeks",
        featured: true,
      },
      {
        name: "Single session",
        price: "$75",
        per: "per session",
        summary: "For past clients and anyone who wants a technique check before a meet.",
        includes: ["One 60-minute session", "Notes and video afterward"],
        notation: "1 x 60 min",
      },
    ],
  },
  {
    id: "small-group",
    title: "Small group",
    text: "Up to four people training together on the same plan, scaled to each of you. Tuesday and Thursday at 6:30am and 6:15pm.",
    packages: [
      {
        name: "Small group",
        price: "$220",
        per: "per month",
        summary: "Two sessions a week with the same three or four people.",
        includes: ["8 sessions a month", "Individual loads and progressions", "Monthly check-in"],
        notation: "2 x week, max 4",
      },
    ],
  },
  {
    id: "online",
    title: "Online coaching",
    text: "Your program in the app, with video feedback and a weekly check-in. Train anywhere with a gym or a decent home setup.",
    packages: [
      {
        name: "Program",
        price: "$95",
        per: "per month",
        summary: "A personal program updated every four weeks, for confident lifters.",
        includes: ["Program in the app", "Monthly update", "Email support"],
        notation: "4-week blocks",
      },
      {
        name: "Coached",
        price: "$180",
        per: "per month",
        summary: "Weekly check-ins and video review of your main lifts.",
        includes: ["Program in the app, updated weekly", "Video review of 3 lifts a week", "Weekly check-in call or voice note", "Message support on weekdays"],
        notation: "weekly review",
        featured: true,
      },
    ],
  },
];

export const programNotes = [
  "Prices include sales tax. Packs are paid up front, monthly plans renew each month and you can stop any time with a week's notice.",
  "Not sure which one fits? Book a free intro call and we'll work it out together.",
];

// Sample stories so you can see how this page reads. Replace them with your
// own clients' stories, with their permission.
export const results = [
  {
    name: "Dana R.",
    detail: "Nurse, night shifts, 12-week block",
    quote:
      "I'd tried to start lifting three times and stopped every time my schedule changed. Imani planned around my shifts instead of pretending they weren't there.",
    numbers: [
      { label: "Trap bar deadlift", before: "135 lb", after: "225 lb" },
      { label: "Training weeks missed", before: "most", after: "1 of 12" },
    ],
  },
  {
    name: "Marcus T.",
    detail: "Back from a disc injury, one-to-one",
    quote:
      "My physio cleared me to load again but I was scared to. We built up slowly with numbers I could see going up every week.",
    numbers: [
      { label: "Goblet squat", before: "35 lb", after: "80 lb" },
      { label: "Pain-free sessions", before: "unsure", after: "24 of 24" },
    ],
  },
  {
    name: "Priya S.",
    detail: "Online coaching, trains at a hotel gym on work trips",
    quote:
      "The weekly video reviews fixed my bench setup in two weeks. I didn't need to be in the same city as my coach.",
    numbers: [
      { label: "Bench press", before: "95 lb", after: "135 lb" },
      { label: "Chin-ups in a set", before: "0", after: "5" },
    ],
  },
  {
    name: "Leon and Ruth A.",
    detail: "Small group, both in their sixties",
    quote:
      "We wanted to stay strong enough to carry the grandkids and our own groceries. Now we argue about who deadlifts more.",
    numbers: [
      { label: "Farmer carry, each hand", before: "20 lb", after: "45 lb" },
      { label: "Sessions attended", before: "", after: "92 of 96" },
    ],
  },
];

export const online = {
  title: "Online coaching that still feels coached",
  text: "You train where you are. I write the plan, watch your lifts on video and talk you through the next week. Most clients train three or four days a week with 45 to 60 minutes a session.",
  steps: [
    { title: "Apply and talk", text: "Fill in the application, then we have a 20-minute call about your goals, history and schedule." },
    { title: "Assessment", text: "You film a short set of movements and tell me what equipment you have. I use it to write your first block." },
    { title: "Train from the app", text: "Each session shows sets, reps, target effort and a short video of how it should look. Log as you go." },
    { title: "Weekly review", text: "On Sundays you send three lift videos and a quick check-in. I reply with notes and adjust the next week." },
  ],
  needs: [
    "A gym membership, or at home: a barbell, plates, a rack and a bench, or adjustable dumbbells to 50 lb",
    "A phone to film from the side at hip height",
    "About 15 minutes on Sundays for your check-in",
  ],
};

export const about = {
  title: "I coach people who want to get strong and stay that way",
  paragraphs: [
    "I started lifting at 19 to get through college basketball, and I kept going long after the basketball stopped. I've coached since 2015, first in a university weight room and since 2020 on my own, from a shared studio in Fairmont Heights.",
    "Most of the people I train aren't athletes. They're nurses, teachers, parents, people coming back from injuries and people in their sixties who don't want to slow down. What they have in common is a busy week and a wish to train with a plan that makes sense.",
    "My coaching is simple on purpose: a handful of lifts done well, progress you can measure, and a plan that changes when your life does.",
  ],
  credentials: [
    "Certified strength and conditioning coach",
    "Level 2 weightlifting coach",
    "BS in Exercise Science, Calder State University",
    "CPR and first aid, renewed every two years",
  ],
  approach: [
    { label: "Main lifts", value: "squat, hinge, press, pull, carry" },
    { label: "Sessions", value: "45 to 60 min" },
    { label: "Effort", value: "mostly RPE 6 to 8" },
    { label: "Review", value: "every week" },
  ],
};

export const apply = {
  title: "Apply for coaching",
  text: "Tell me a little about you and what you want from training. I read every application myself and reply within two working days with a suggestion and a time for a short call.",
  thanks: "Thank you. I'll read your application and reply within two working days.",
};
