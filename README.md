# dakkylove_adaku

Author website for Dakkylove, writer of dark romance, mystery and supernatural suspense.
Built with Next.js (App Router), TypeScript and Tailwind CSS, with Vercel Analytics.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

- `lib/books.ts`: all book and author data (titles, blurbs, covers, Amazon links). Add or update books here.
- `app/page.tsx`: the one-page site (hero, library, series, about, newsletter, footer).
- `app/globals.css`: colour tokens for the dark and light themes.
- `components/`: theme toggle and newsletter form (the form is a placeholder until an email provider is connected).
- `public/images/`: book covers and author photo.

## Deploy

Deploy on Vercel, then enable Analytics in the project's Vercel dashboard (Analytics tab).
