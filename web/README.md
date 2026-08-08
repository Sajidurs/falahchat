# Falah Chat — website (React + Vite, static multi-page)

Production site for **falahchat.com**. Every URL is a real HTML file with its own
`<title>`, description, canonical and JSON-LD, so crawlers never depend on JavaScript.

## Run locally

```bash
cd web
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. In Vercel: **New Project → import the repo**.
   - Root Directory: `web` (if the repo root is the whole project)
   - Framework preset: **Vite** (auto-detected)
   - Build command `npm run build`, output directory `dist`
3. Add the domain `falahchat.com` and `www.falahchat.com` in **Settings → Domains**
   (point `www` at the apex with a redirect).

`vercel.json` already sets `cleanUrls`, long-lived caching for `/assets` and `/images`,
security headers, and a few legacy redirects.

## URLs

| URL | File | Component |
| --- | --- | --- |
| `/` | `index.html` | `src/pages/Home.jsx` |
| `/whatsapp-ai-agent` | `whatsapp-ai-agent/index.html` | `AgentPage slug="whatsapp"` |
| `/instagram-ai-agent` | `instagram-ai-agent/index.html` | `AgentPage slug="instagram"` |
| `/messenger-ai-agent` | `messenger-ai-agent/index.html` | `AgentPage slug="messenger"` |
| `/website-chatbot` | `website-chatbot/index.html` | `AgentPage slug="website"` |
| `/pricing` | `pricing/index.html` | `src/pages/Pricing.jsx` |
| `/contact` | `contact/index.html` | `src/pages/Contact.jsx` |

Add a page: create `new-page/index.html` (copy an existing head, change the title,
description, canonical and JSON-LD), add an entry in `src/entries/`, and register the
input in `vite.config.js`. Then add the URL to `public/sitemap.xml`.

## SEO setup

- **Titles / descriptions** — per page, in each `index.html`.
- **Canonical + robots** — per page; `max-image-preview:large` for rich results.
- **Open Graph / Twitter** — per page, sharing `/og.png` (1200×630).
- **Schema.org JSON-LD** — one `@graph` per page:
  - every page: `Organization`, `WebSite`, `WebPage`
  - agent pages: `Service` + `BreadcrumbList`
  - `/pricing`: `OfferCatalog` + `FAQPage` + `BreadcrumbList`
  - `/contact`: `ContactPage` + `BreadcrumbList`
- **Semantic HTML** — one `<h1>` per page, `<h2>`/`<h3>` in order, `<nav>`, `<main>`,
  `<article>`, `<ol>`/`<ul>` for real lists, descriptive `alt` text, `<a>` for navigation
  (no JS-only links).
- **Verification** — the Google Search Console meta tag sits at the end of every `<head>`.
- `public/robots.txt` allows all crawlers plus GPTBot / PerplexityBot / ClaudeBot and
  points at the sitemap.

### After deploying

1. Search Console → add `falahchat.com`, verify (tag is already in place), submit
   `https://falahchat.com/sitemap.xml`.
2. Update `lastmod` dates in `public/sitemap.xml` when content changes materially.
3. Add your social profile URLs to `sameAs` in the `Organization` block of each page
   (currently omitted rather than guessed), and swap the placeholder Instagram/LinkedIn
   links in `src/components/Footer.jsx`.

## Images you still need to add

Drop these into `public/images/` with these exact names — the layout is already sized for
them and missing files fail silently rather than breaking the page:

- `industries/restaurants.jpg`, `clinics.jpg`, `realestate.jpg`, `salons.jpg`,
  `fitness.jpg`, `ecommerce.jpg`, `travel.jpg`, `automotive.jpg`, `education.jpg`,
  `homeservices.jpg` — portrait, 3:4, ~900×1200
- `owner.jpg` — 4:5 portrait for the "How it works" section

## Contact details in one place

`src/lib/css.js` holds `CALENDLY`, `PHONE`, `EMAIL` and the WhatsApp link (number +
pre-filled message). Change them there and every page updates.
