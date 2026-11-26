import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NewsletterForm } from "@/components/NewsletterForm";
import { AMAZON_STORE_URL, blackWidowSeries, books, featuredBook, type Book } from "@/lib/books";

const container = "mx-auto w-full max-w-6xl px-6 md:px-10";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.25em] text-accent";
const btnPrimary =
  "inline-flex h-11 items-center justify-center bg-gold px-6 text-sm font-semibold text-on-gold transition-opacity hover:opacity-90";
const btnGhost =
  "inline-flex h-11 items-center justify-center border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-accent";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Library />
        <Series />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  const links = [
    ["Books", "#books"],
    ["The Series", "#series"],
    ["About", "#about"],
    ["Newsletter", "#newsletter"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className={`${container} flex h-16 items-center justify-between gap-4`}>
        <a href="#top" className="font-serif text-2xl text-ink">
          Dakkylove
        </a>
        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-7 md:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a
            href={AMAZON_STORE_URL}
            {...external}
            className="hidden border border-accent px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-on-gold sm:inline-block"
          >
            Shop on Amazon
          </a>
        </nav>
      </div>
    </header>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <span className="tracking-widest text-accent" aria-label={`${value} out of 5 stars`}>
      {"★".repeat(Math.round(value))}
    </span>
  );
}

function Hero() {
  const book = featuredBook;
  return (
    <section id="top" className="overflow-hidden">
      <div className={`${container} grid items-center gap-14 py-20 md:grid-cols-[1.25fr_1fr] md:py-28`}>
        <div>
          <p className={eyebrow}>New release · Black Widow, Volume One</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Where love meets darkness, and every secret has a price.
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            Dark romance, mystery and supernatural suspense from Dakkylove. Stories of power,
            betrayal and loyalty, with characters who stay with you long after the final page.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={book.kindleUrl} {...external} className={btnPrimary}>
              Buy {book.shortTitle}
            </a>
            <a href="#books" className={btnGhost}>
              Explore all books
            </a>
          </div>
          {book.rating && (
            <p className="mt-6 flex items-center gap-3 text-xs text-muted">
              <Stars value={book.rating.value} />
              {book.rating.value.toFixed(1)} on Amazon · Kindle and paperback
            </p>
          )}
        </div>
        <div className="relative mx-auto w-full max-w-[320px] md:mr-0">
          <div className="absolute inset-0 translate-x-4 translate-y-4 bg-shadow" aria-hidden />
          {book.cover && (
            <Image
              src={book.cover.src}
              width={book.cover.width}
              height={book.cover.height}
              alt={`Cover of ${book.title}`}
              sizes="320px"
              loading="eager"
              fetchPriority="high"
              className="relative w-full shadow-2xl"
            />
          )}
        </div>
      </div>
    </section>
  );
}

function ComingSoonCover({ book }: { book: Book }) {
  return (
    <div className="flex aspect-[2/3] w-full flex-col items-center justify-center gap-5 border border-[#3a2a2c] bg-jacket p-6 text-center">
      <svg viewBox="0 0 64 64" className="h-14 w-14 text-[#d4b06a]" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
        <circle cx="32" cy="32" r="28" />
        <circle cx="32" cy="32" r="19" />
        <circle cx="32" cy="32" r="10" />
        <path d="M32 4v56M4 32h56M12.2 12.2l39.6 39.6M51.8 12.2L12.2 51.8" />
        <circle cx="32" cy="32" r="2.5" fill="#b3262e" stroke="none" />
      </svg>
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#a8a29a]">{book.eyebrow}</p>
      <p className="font-serif text-3xl leading-tight text-[#e6c98a]">{book.shortTitle}</p>
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#b3262e]">Coming soon</p>
    </div>
  );
}

function BookCard({ book }: { book: Book }) {
  const available = book.status === "available";
  return (
    <article className="flex flex-col border border-line bg-card p-5">
      {book.cover ? (
        <a href={book.kindleUrl} {...external} className="block overflow-hidden">
          <Image
            src={book.cover.src}
            width={book.cover.width}
            height={book.cover.height}
            alt={`Cover of ${book.title}`}
            sizes="(min-width: 768px) 320px, 90vw"
            className="aspect-[2/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </a>
      ) : (
        <ComingSoonCover book={book} />
      )}
      <p className={`${eyebrow} mt-6`}>{book.eyebrow}</p>
      <h3 className="mt-2 font-serif text-2xl leading-tight text-ink">{book.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{book.blurb}</p>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
        <p className="text-xs text-muted">
          {available ? (
            <>
              {book.rating && (
                <>
                  <Stars value={book.rating.value} /> ({book.rating.count})
                  <br />
                </>
              )}
              Kindle ·{" "}
              <a href={book.paperbackUrl} {...external} className="underline underline-offset-2 hover:text-accent">
                Paperback
              </a>
            </>
          ) : (
            "Release date to be announced"
          )}
        </p>
        {available ? (
          <a href={book.kindleUrl} {...external} className="bg-gold px-5 py-2.5 text-xs font-semibold text-on-gold transition-opacity hover:opacity-90">
            Buy now
          </a>
        ) : (
          <span className="border border-line px-4 py-2.5 text-xs font-medium text-muted">Coming soon</span>
        )}
      </div>
    </article>
  );
}

function Library() {
  return (
    <section id="books" className="scroll-mt-16 border-y border-line bg-surface py-24">
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className={eyebrow}>The library</p>
            <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">Books by Dakkylove</h2>
          </div>
          <a href={AMAZON_STORE_URL} {...external} className="text-sm text-accent hover:underline">
            See the Amazon store →
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Series() {
  return (
    <section id="series" className="scroll-mt-16 py-24">
      <div className={`${container} grid gap-12 md:grid-cols-2 md:items-center`}>
        <div>
          <p className={eyebrow}>The Black Widow series</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Every choice carries a price.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            They say every man who loves her dies. A world of secrets, consequences and the
            pursuit of power, where a single revelation can change everything. Start with the
            curse. Stay for the reckoning.
          </p>
        </div>
        <ol className="flex flex-col gap-4">
          {blackWidowSeries.map((book, i) => {
            const available = book.status === "available";
            const content = (
              <>
                <span className={`font-serif text-4xl ${available ? "text-accent" : "text-muted"}`}>
                  {["I", "II", "III"][i]}
                </span>
                <span>
                  <span className="block font-medium text-ink">{book.shortTitle}</span>
                  <span className="block text-xs text-muted">
                    {available ? "Out now on Kindle and paperback" : "Coming soon"}
                  </span>
                </span>
              </>
            );
            return (
              <li key={book.slug}>
                {available ? (
                  <a
                    href={book.kindleUrl}
                    {...external}
                    className="flex items-center gap-6 border border-line bg-card px-6 py-5 transition-colors hover:border-accent"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center gap-6 border border-line px-6 py-5">{content}</div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-16 border-y border-line bg-surface py-24">
      <div className={`${container} grid gap-12 md:grid-cols-[300px_1fr] md:items-center`}>
        <div className="mx-auto w-full max-w-[300px]">
          <Image
            src="/images/dakkylove.jpg"
            width={450}
            height={450}
            alt="Portrait of the author Dakkylove"
            sizes="300px"
            className="aspect-[4/5] w-full border border-line object-cover"
          />
        </div>
        <div>
          <p className={eyebrow}>Meet the author</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            A storyteller drawn to the extraordinary.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            Dakkylove writes stories filled with suspense, passion, mystery and unexpected
            twists. Her work explores love, loyalty, betrayal, power and the resilience of the
            human spirit, pulling readers into journeys of emotion, danger and transformation.
          </p>
          <blockquote className="mt-6 max-w-2xl font-serif text-2xl italic leading-snug text-quote">
            “Every story holds a secret, every heart has a battle, and every ending may be the
            beginning of something unexpected.”
          </blockquote>
          <a href={AMAZON_STORE_URL} {...external} className={`${btnGhost} mt-8`}>
            Follow on Amazon
          </a>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="scroll-mt-16 py-24 text-center">
      <div className={container}>
        <h2 className="font-serif text-4xl text-ink md:text-5xl">Join the inner circle</h2>
        <p className="mt-4 text-muted">
          Be the first to hear about new releases, cover reveals and exclusive chapters.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className={`${container} flex flex-col items-center justify-between gap-4 text-sm sm:flex-row`}>
        <span className="font-serif text-xl text-ink">Dakkylove</span>
        <a href={AMAZON_STORE_URL} {...external} className="text-accent hover:underline">
          Amazon
        </a>
        <span className="text-xs text-muted">© 2026 Dakkylove. All rights reserved.</span>
      </div>
    </footer>
  );
}
