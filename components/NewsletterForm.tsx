"use client";

import { useState } from "react";

// Placeholder: no email provider is connected yet, so nothing is stored or sent.
// TODO: wire this to the chosen provider (Mailchimp, Kit, etc.).
export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="mt-8 text-sm text-muted" role="status">
        Thank you. The mailing list opens soon. In the meantime, follow Dakkylove on Amazon
        to hear about new releases.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        placeholder="Your email address"
        className="h-12 flex-1 border border-line bg-surface px-4 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        className="h-12 bg-gold px-8 text-sm font-semibold text-on-gold transition-opacity hover:opacity-90"
      >
        Subscribe
      </button>
    </form>
  );
}
