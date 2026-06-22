# Tru Construction Estimator — Landing Page

Marketing/waitlist landing page for **Tru Construction Estimator**, a mobile
app that helps contractors calculate material costs, generate estimates,
manage clients, and send branded PDF quotes.

Built with Next.js (App Router) and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — the single-page sales funnel (hero, pain points, features, pricing, waitlist signup, FAQ)
- `/privacy` — Privacy Policy (ported from `PRIVACY.md`)
- `/terms` — Terms of Service (ported from `TERMS.md`)

`PRIVACY.md` and `TERMS.md` at the repo root remain the canonical source of
the legal text. If you update the legal docs, update the corresponding page
in `app/privacy/` or `app/terms/` to match.

## Waitlist signups

The email form on the landing page posts to `app/api/subscribe/route.ts`,
which validates the address and forwards it to whatever URL is set in the
`EMAIL_ENDPOINT` environment variable (see `.env.example`).

**No provider is configured yet.** Until `EMAIL_ENDPOINT` is set, signups are
simply logged server-side (visible in your hosting provider's function
logs) and the form still shows a friendly success message — no broken UX
while you decide on a provider.

To wire up a real email tool:

1. Create a list/audience in your provider (e.g. Mailchimp, ConvertKit).
2. Get a URL that accepts a POST request with a JSON body like `{ "email": "..." }`. Most providers offer this as a form action URL or a simple webhook/Zapier step.
3. Set `EMAIL_ENDPOINT` to that URL in your deployment environment (e.g. Vercel project settings) and locally in `.env.local`.

## Deployment

Designed to deploy on [Vercel](https://vercel.com). Set `EMAIL_ENDPOINT` and
`SITE_URL` (used for the sitemap/robots) in the project's environment
variables once you're ready.
