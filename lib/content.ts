export const instagramUrl = "https://www.instagram.com/gloria.catering/";
export const instagramDmUrl = "https://ig.me/m/gloria.catering";
export const emailAddress = "catering.gloria11@gmail.com";

export const business = {
  name: "Gloria Catering",
  handle: "@gloria.catering",
  followers: "2,338",
  posts: "43",
  area: "Vaughan and Toronto",
};

export const highlights = [
  {
    title: "Menu",
    href: "https://www.instagram.com/stories/highlights/18175537273443461/",
  },
  {
    title: "Charcuterie",
    href: "https://www.instagram.com/stories/highlights/18158520142484064/",
  },
  {
    title: "Finger foods",
    href: "https://www.instagram.com/stories/highlights/17878816311689400/",
  },
  {
    title: "Fruit platter",
    href: "https://www.instagram.com/stories/highlights/17891161506427445/",
  },
  {
    title: "Reviews",
    href: "https://www.instagram.com/stories/highlights/18073825991709944/",
  },
] as const;

export const eventTypes = [
  "Birthday",
  "Celebration",
  "Corporate event",
  "Office or client gifts",
  "Another gathering",
] as const;

export const trayOptions = [
  "Finger foods",
  "Charcuterie boards",
  "Charcuterie cups",
  "Fruit platters",
  "Desserts",
  "Gift boxes",
] as const;

export type TrayOption = (typeof trayOptions)[number];
export type EventType = (typeof eventTypes)[number];

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
  caption: string;
};

export const offerings: Photo[] = [
  {
    src: "/media/finger-foods.jpg",
    alt: "Savory finger food platter with mini burgers, pinwheel sandwiches, and skewers.",
    width: 720,
    height: 1280,
    href: "https://www.instagram.com/reel/DcwRgqMJo91/",
    caption: "Finger foods",
  },
  {
    src: "/media/charcuterie.jpg",
    alt: "Grazing board with a cheese wedge, folded cured meat, grapes, strawberries, and crackers.",
    width: 1080,
    height: 1438,
    href: "https://www.instagram.com/p/DcXQdbfEdNN/",
    caption: "Charcuterie boards and cups",
  },
  {
    src: "/media/fruit-platter.jpg",
    alt: "Round fruit platter of strawberries, grapes, pineapple, and melon.",
    width: 1080,
    height: 1440,
    href: "https://www.instagram.com/p/DbRwPDWEWEj/",
    caption: "Fruit platters",
  },
  {
    src: "/media/desserts.jpg",
    alt: "Dessert stand with cake pops, cupcakes, and a small cake beside savory bites.",
    width: 1080,
    height: 1440,
    href: "https://www.instagram.com/p/Dd2Tp8px0nr/",
    caption: "Desserts",
  },
];

export const gallery: Photo[] = [
  {
    src: "/media/hero.jpg",
    alt: "Fruit platter with strawberries, pineapple, melon, and chocolate dipped strawberries, finished with a flower.",
    width: 1080,
    height: 1440,
    href: "https://www.instagram.com/p/DbRwPDWEWEj/",
    caption: "Custom fruit and charcuterie",
  },
  {
    src: "/media/cups.jpg",
    alt: "Individual cups arranged with cured meat, cheese, grapes, and olives.",
    width: 720,
    height: 1280,
    href: "https://www.instagram.com/reel/DagtoOURFq8/",
    caption: "Cups for sharing",
  },
  {
    src: "/media/corporate.jpg",
    alt: "Catering table set for an Air Canada gathering, with boards, fruit, and folded napkins.",
    width: 1080,
    height: 1440,
    href: "https://www.instagram.com/p/DduDoZTmDpz/",
    caption: "Air Canada at Toronto Pearson",
  },
  {
    src: "/media/halloween.jpg",
    alt: "Halloween dessert table with cupcakes, cake pops, and a small cake.",
    width: 1080,
    height: 1440,
    href: "https://www.instagram.com/p/DeFSg0kGFTK/",
    caption: "Halloween birthday",
  },
  {
    src: "/media/celebration.jpg",
    alt: "Styled celebration table with flowers, a dessert stand, and platters of food.",
    width: 1080,
    height: 1920,
    href: "https://www.instagram.com/reel/Dc_nPZbxi_S/",
    caption: "A table to remember",
  },
  {
    src: "/media/fruit-cups.jpg",
    alt: "Clear cups filled with cut strawberries, grapes, pineapple, and melon.",
    width: 720,
    height: 1280,
    href: "https://www.instagram.com/reel/DdzdM99xlR4/",
    caption: "Fruit cups",
  },
];

export const reels = [
  {
    src: "/media/fruit-cups.mp4",
    poster: "/media/fruit-cups.jpg",
    width: 720,
    height: 1280,
    href: "https://www.instagram.com/reel/DdzdM99xlR4/",
    title: "Fresh, colourful, and made for celebrating",
    caption: "Fruit cups for a special event.",
  },
  {
    src: "/media/finger-foods.mp4",
    poster: "/media/finger-foods.jpg",
    width: 720,
    height: 1280,
    href: "https://www.instagram.com/reel/DcwRgqMJo91/",
    title: "A table full of deliciousness",
    caption: "Savory finger foods, freshly prepared.",
  },
  {
    src: "/media/table.mp4",
    poster: "/media/table.jpg",
    width: 720,
    height: 1280,
    href: "https://www.instagram.com/reel/Db5oz8yR3VY/",
    title: "Beautiful moments start with a beautiful table",
    caption: "Food, fruit, charcuterie, desserts, and elegant details.",
  },
  {
    src: "/media/cups.mp4",
    poster: "/media/cups.jpg",
    width: 720,
    height: 1280,
    href: "https://www.instagram.com/reel/DagtoOURFq8/",
    title: "Gift boxes for the office",
    caption: "For employee appreciation, client gifts, and office celebrations.",
  },
] as const;

export function formatEventDate(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) {
    return isoDate;
  }

  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  return new Intl.DateTimeFormat("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function composeInquiry(input: {
  eventType: string;
  date: string;
  guests: string;
  items: string[];
  notes: string;
}): string {
  const guestCount = Number(input.guests);
  const guestLabel = guestCount === 1 ? "1 guest" : `${guestCount} guests`;
  const orderedItems = trayOptions.filter((item) => input.items.includes(item));
  const lines = [
    "Hi Gloria Catering,",
    "",
    `I would love to book a ${input.eventType.toLowerCase()} on ${formatEventDate(input.date)} for ${guestLabel}.`,
    "",
    "Please include:",
    ...orderedItems.map((item) => `• ${item}`),
  ];

  const notes = input.notes.trim();
  if (notes) {
    lines.push("", "A few notes:", notes);
  }

  lines.push("", "Thank you.");
  return lines.join("\n");
}

export function mailtoHref(message: string, date: string): string {
  const subject = `Catering inquiry for ${formatEventDate(date) || "an upcoming event"}`;
  return `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}
