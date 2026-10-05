# Deploying sultaninvest.uz

The site goes on the same VPS as sultanedu.uz and uses the same pattern: GitHub Actions builds everything, the server only receives the result.

```
git push (main)
   │
   ▼
GitHub Actions ── npm run build → static files (out/)
   │              lead-api Docker image → ghcr.io
   ▼
VPS ── /opt/sultaninvest/site     plain HTML/CSS/JS, served by the host nginx
   └── lead-api container         127.0.0.1:4100, holds the Telegram token
```

Extra load on the server: about 30 MB of RAM for the lead API and about 5 MB of disk for the site.

## 1. Telegram bot token (do this first)

The old site shipped its bot token inside its JavaScript, so it is public.

1. In Telegram, open **@BotFather** and send `/revoke`, then choose the bot. You get a **new token**.
2. Never put the token in the code. It only goes into the server's `.env` (step 4).

Revoking breaks the old site's form, so do it right before switching to the new site.

## 2. DNS

In the domain panel for sultaninvest.uz, point these A records at the VPS IP (the same IP as sultanedu.uz):

| Host | Type | Value |
|---|---|---|
| `@` | A | VPS IP |
| `www` | A | VPS IP |

## 3. Server folders (once, on the VPS)

```bash
mkdir -p /opt/sultaninvest/deploy
```

## 4. Server `.env` (once)

```bash
nano /opt/sultaninvest/.env
```

Paste the contents of `deploy/env.production.example` and fill in the **new** `TELEGRAM_BOT_TOKEN`. `TELEGRAM_CHAT_ID` is who receives leads; separate several ids with commas.

## 5. nginx and HTTPS (once)

```bash
nano /etc/nginx/sites-available/sultaninvest      # paste deploy/nginx/sultaninvest.conf
ln -s /etc/nginx/sites-available/sultaninvest /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
certbot --nginx -d sultaninvest.uz -d www.sultaninvest.uz
```

## 6. GitHub secrets (once, in the sultaninvest repo)

**Settings → Secrets and variables → Actions → New repository secret.** Use the same values as the sultanedu repo:

| Name | Value |
|---|---|
| `SERVER_HOST` | VPS IP |
| `SERVER_USER` | `root` |
| `SERVER_SSH_KEY` | the private deploy key (`cat ~/.ssh/github_deploy` on the server) |

## 7. Deploy

Merge into `main` and push. Watch the **Actions** tab (about 3 minutes). Then:

- Open https://sultaninvest.uz and submit the callback form with your own number. A message should arrive in Telegram.
- On the server: `curl -s localhost:4100/api/lead/health` prints `{"ok":true}`.

## Useful commands (on the VPS)

```bash
cd /opt/sultaninvest
docker compose -f docker-compose.prod.yml logs -f lead-api   # lead API logs
docker compose -f docker-compose.prod.yml restart lead-api   # after editing .env
ls site-old                                                   # previous build, for a quick rollback:
# mv site site-broken && mv site-old site
```
