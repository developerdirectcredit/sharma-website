# Sharma Board & Advisory Services — Website (Frontend Only)

A single-page React + Vite + Tailwind portfolio site for Sharma Board & Advisory Services,
founded by Ashwani Sharma (Former DGM, Bank of Baroda). No backend/database — this is a
static, client-side-only build using your real logo and photo.

## What's included

- Real company logo (cropped from your business card) in the header, About section, and footer
- Founder photo (Ashwani Sharma) in the hero
- Sections: Hero · About · Services (8 practice areas) · Why Choose Us · Advisory Plans (pricing) · Contact · Footer
- Contact form is fully client-side: submitting it opens the visitor's email app with a
  pre-filled message addressed to `ashwani@sharmaboardadvisory.com` — no server required
- Responsive down to mobile, keyboard-accessible, reduced-motion respected

## Run it locally

```bash
npm install
npm run dev
```

Visit the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs static files to `dist/`. Deploy that folder to any static host —
Vercel, Netlify, GitHub Pages, Cloudflare Pages, or your own server — and point
`www.sharmaboardadvisory.com` at it. No environment variables or database needed.

## Editing content

| File | Section |
|---|---|
| `src/components/Hero.jsx` | Headline, intro, founder photo, stats |
| `src/components/About.jsx` | About the firm |
| `src/components/Services.jsx` | The 8 advisory services (`SERVICES` array) |
| `src/components/WhyUs.jsx` | Why Choose Us points |
| `src/components/Pricing.jsx` | Advisory plan pricing |
| `src/components/Contact.jsx` | Contact details + the mailto form |
| `src/assets/` | Logo (`logo-icon.png`, `logo-lockup.png`) and founder photo |

Colors, fonts, and spacing tokens are in `tailwind.config.js`.

## Notes

- `logo-icon.png` was cropped directly from your business card artwork so the mark on the
  website matches your card and letterhead exactly. If you have a vector (AI/EPS/SVG) version
  of the logo, swap it in for crisper scaling at large sizes.
- Google Fonts (Fraunces, Inter, IBM Plex Mono) load from `fonts.googleapis.com` at runtime —
  just needs an internet connection, no local install.
- If you'd like the contact form to submit silently (without opening the visitor's email app)
  and store enquiries somewhere, that needs a small backend or a form service like Formspree —
  say the word and I can wire that in.
