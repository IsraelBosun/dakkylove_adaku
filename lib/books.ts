// All book and author data for the site lives here.
// To add a book (e.g. when The Queen's Reckoning goes live), edit this file only.

export const AMAZON_STORE_URL = "https://www.amazon.com/stores/author/B0GGHQCQTG";

export type Book = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  blurb: string;
  cover?: { src: string; width: number; height: number };
  status: "available" | "coming-soon";
  kindleUrl?: string;
  paperbackUrl?: string;
  rating?: { value: number; count: number };
  pages?: number;
  published?: string;
};

export const books: Book[] = [
  {
    slug: "black-widow-the-widows-curse",
    title: "Black Widow: The Widow's Curse",
    shortTitle: "The Widow's Curse",
    eyebrow: "Black Widow · Vol. I",
    blurb:
      "Five husbands. Five deaths. When Detective Richard Bako investigates the murder of Grace Medina's fifth husband, the evidence points not at her, but through her.",
    cover: { src: "/images/black-widow-cover.jpg", width: 1000, height: 1500 },
    status: "available",
    kindleUrl: "https://www.amazon.com/dp/B0HKTW7SFL",
    paperbackUrl: "https://www.amazon.com/dp/B0HLBMHSLW",
    rating: { value: 5, count: 1 },
    pages: 290,
    published: "September 23, 2026",
  },
  {
    slug: "black-widow-the-queens-reckoning",
    title: "Black Widow: The Queen's Reckoning",
    shortTitle: "The Queen's Reckoning",
    eyebrow: "Black Widow · Vol. II",
    blurb:
      "The pursuit of power comes due in the second volume of the Black Widow series.",
    status: "coming-soon",
  },
  {
    slug: "the-queen-and-the-lycan",
    title: "The Queen and the Lycan",
    shortTitle: "The Queen and the Lycan",
    eyebrow: "Debut novel",
    blurb:
      "A haunted ex-Marine with a beast waking inside him meets an African queen bound to ancient powers, and a war between good and evil stirs beneath the desert sands.",
    cover: { src: "/images/queen-and-the-lycan-cover.jpg", width: 943, height: 1500 },
    status: "available",
    kindleUrl: "https://www.amazon.com/dp/B0GF8TN8LK",
    paperbackUrl: "https://www.amazon.com/dp/B0GFN8WQSN",
    rating: { value: 5, count: 3 },
    pages: 134,
    published: "January 6, 2026",
  },
];

export const featuredBook = books[0];
export const blackWidowSeries = books.filter((b) => b.slug.startsWith("black-widow"));
