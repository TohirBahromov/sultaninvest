#!/usr/bin/env bash
# Runs on the VPS after GitHub Actions has uploaded the new build to
# /opt/sultaninvest/site-new: swap it in atomically and update the lead API.
set -euo pipefail
cd "$(dirname "$0")"

echo "==> Switching website files"
if [ -d site-new ]; then
  rm -rf site-old
  [ -d site ] && mv site site-old
  mv site-new site
fi

echo "==> Updating lead API"
docker compose -f docker-compose.prod.yml pull lead-api
docker compose -f docker-compose.prod.yml up -d --remove-orphans
docker image prune -f

echo "==> Done"
docker compose -f docker-compose.prod.yml ps
