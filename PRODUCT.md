# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Small and medium business owners in Uzbekistan** (shops, restaurants, clinics, education centers like Sultan Edu) who need to be seen and sell more online but do not want to manage four separate vendors for video, social media, ads and a website. They usually arrive from Instagram, Telegram or a Google search, often on a phone, and decide whether to message the agency.
- **Personal brands and experts** (entrepreneurs, coaches, doctors, bloggers) who want a professional image, content and an audience.
- Secondary: foreign or Russian-speaking clients, hence uz / ru / en.

The job: decide in a few minutes that this agency is capable and trustworthy, then leave a request or message on Telegram / phone.

## Product Purpose

The public website of Sultaninvest (legal/brand name used on the current site: "Sultan Quick Invest"), a Tashkent agency offering:

- Production: commercial video, clips, animation, graphic design
- SMM and targeting (paid social ads)
- Personal brand development
- Web: business sites, online stores, CRM systems, full web platforms and apps

Success = qualified leads (form submissions, Telegram messages, calls) from the target clients, and strong organic search presence for agency services in Uzbekistan.

## Positioning

**Everything in one team.** Video production, SMM, targeting and web/app development under one roof, so the client has one partner and one strategy instead of separate freelancers and studios. The web side builds real platforms (e.g. Sultan Edu, an education center site with its own admin panel), not only template pages.

## Operating Context

- Leads go to the agency's Telegram (a bot message to the director) and phone: +998 98 070 88 83, sultaninvestuz@gmail.com.
- Office: Mirzo Ulug'bek district, Tepamasjid-2, Tashkent.
- Visitors frequently come from mobile social apps; first impression on a phone matters as much as desktop.

## Capabilities and Constraints

- Next.js, fully static export (`output: "export"`), served by nginx on the agency's own VPS (same server as sultanedu.uz). No server rendering.
- The lead form must post to a small server-side endpoint (`/api/lead`) that holds the Telegram bot token. The token must never ship in client code (the previous site did this; token to be revoked).
- Languages: Uzbek (default), Russian, English. Every page in all three, with proper hreflang.
- SEO is a primary requirement: static HTML, metadata per locale, sitemap, structured data.
- Existing analytics: GA4 `G-0PSY447XMP` and Google Search Console verification `p7ltvlR2NdIHc6nOX8YwOi3QGI-v2CPrptxyWLNIXBI` (keep both).

## Brand Commitments

- Name: Sultaninvest / "Sultan Quick Invest". Existing logo at `public/assets/icons/logo-no-bg.png`; a proper SVG logo is coming from the user.
- Domain: sultaninvest.uz.
- **Brand colors are binding** (user, 2026-10-05): champagne `#E9DBBC` (logo color, primary), deep forest green `#051A07`, charcoal `#1D1D1D`. Secondary tones used on the old site: `#322821` (dark umber), `#D4A276` (tan), `#A8D5BA` (sage).
- Logo: "SQI" monogram in a high-contrast didone serif with a sweeping Q tail, champagne, over "SULTAN QUICK INVEST" in a light tracked sans.
- The previous site's layout and components (generic agency template) are not binding; only the colors and logo are.
- Must not feel: like a template, playful/cartoonish, or slow/heavy on phones.

## Site Structure

Home, Services, Work (portfolio cases), About, Contact; every page in uz (default, at `/`), ru (`/ru`), en (`/en`).

## Evidence on Hand

- **Stats (approximate, user to confirm later):** 45+ projects, 20+ clients, 5+ years, 1000+ videos, 20+ specialists. Must be shown as editable placeholders, clearly marked.
- **Team (real names and roles):** Sultonbek Hasanov (Director, founder), Tohir Bahromov (Web developer), Abdulaziz Hamidjonov (SMM), Firdavs Xuvaydullayev (Targetologist), Shahlo Shoadhamova (Copywriter), Akbar Hasanboyev (Graphic designer), Ibrohim Abrolov (UI/UX designer), and others in `lib/source/Team.ts`.
- **Real project:** Sultan Edu (sultanedu.uz), education center website + admin panel built by the agency.
- **Absent (do not fabricate):** showreel, portfolio media, client logos, testimonials (the current ones are template copies with one repeated name), SVG logo. Use clearly labeled placeholders; never invent client names, quotes or results.

## Product Principles

1. Show the work, don't describe it: production quality is the proof, so video and visuals lead.
2. One partner, whole growth: every section reinforces that all services connect.
3. Contact is always one tap away (form, Telegram, phone), especially on mobile.
4. Fast and findable: static, light, and well structured for search in three languages.
5. Never claim what can't be backed: placeholders over invented proof.
