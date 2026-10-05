FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY server.mjs ./
USER node
EXPOSE 4100
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:4100/api/lead/health || exit 1
CMD ["node", "server.mjs"]
