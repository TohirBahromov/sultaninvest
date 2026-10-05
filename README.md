# sultaninvest.uz

Website of Sultan Quick Invest, a Tashkent agency for video production, SMM and web development. Static Next.js 16 export in Uzbek (`/`), Russian (`/ru`) and English (`/en`).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

## Where things live

| What | Where |
|---|---|
| All page copy (uz / ru / en) | `content/dictionary.ts` |
| Services | `content/services.ts` |
| Crew (credit roll) | `content/crew.ts` |
| Portfolio cases | `content/work.ts` |
| Phone, Telegram, email, address, stats, analytics ids | `content/site.ts` |
| Visual system | `app/globals.css`, documented in `DESIGN.md` |
| Lead form endpoint (holds the Telegram token) | `lead-api/` |
| Deployment | `DEPLOY.md` |

## Owner to-do: real material

Each of these is a placeholder (marked `TODO(owner)` in the code). The site shows a clapperboard slate wherever media is missing.

1. **Showreel:** `public/media/showreel.mp4` (30–90 s, 1080p, H.264, silent) and `public/media/showreel-poster.jpg`, then set `HAS_SHOWREEL = true` in `content/site.ts`.
2. **Cases:** replace the three placeholder entries in `content/work.ts` with real projects (client, services, year, one-line summary, cover image in `public/work/`). Add a cover for Sultan Edu too.
3. **Stats:** confirm or correct `STATS` in `content/site.ts` (currently 5+ years, 45+ projects, 1000+ videos, carried over from the old site).
4. **Logo:** a true vector SVG to replace `public/logo.png`.
5. **Client logos:** not shown yet; send them when you want a client strip.
