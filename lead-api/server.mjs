// Lead endpoint for sultaninvest.uz.
//
// The website is static, so it cannot hold secrets. The form posts here
// (nginx proxies /api/lead to this process on 127.0.0.1), and this process,
// which alone knows the Telegram bot token, forwards the request to the
// agency's Telegram chat. No dependencies: plain Node 22.

import http from "node:http";

const PORT = Number(process.env.PORT || 4100);
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_IDS = (process.env.TELEGRAM_CHAT_ID || "").split(",").map((s) => s.trim()).filter(Boolean);

if (!TOKEN || CHAT_IDS.length === 0) {
  console.error("TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must be set");
  process.exit(1);
}

const MAX_BODY = 8 * 1024;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const LOCALES = new Set(["uz", "ru", "en"]);

/** ip -> timestamps of recent accepted requests */
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of hits) {
    if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(ip);
  }
}, WINDOW_MS).unref();

const escape = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);

function str(value, max) {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "string") return null;
  const v = value.trim();
  return v.length > max ? null : v || undefined;
}

/** Returns the cleaned lead, or a string describing what is wrong. */
function validate(body) {
  if (!body || typeof body !== "object") return "body";
  const phone = str(body.phone, 20);
  if (!phone || !/^\+998\d{9}$/.test(phone)) return "phone";
  const lead = {
    kind: body.kind === "contact" ? "contact" : "callback",
    phone,
    name: str(body.name, 100),
    service: str(body.service, 100),
    message: str(body.message, 1500),
    locale: LOCALES.has(body.locale) ? body.locale : "uz",
    page: str(body.page, 200),
    website: str(body.website, 200),
  };
  for (const k of ["name", "service", "message", "page", "website"]) if (lead[k] === null) return k;
  if (lead.kind === "contact" && !lead.name) return "name";
  return lead;
}

function format(lead) {
  const title = lead.kind === "contact" ? "📝 Yangi so‘rov (sayt formasi)" : "📞 Qayta qo‘ng‘iroq so‘rovi";
  const lines = [`<b>${title}</b>`, ""];
  if (lead.name) lines.push(`<b>Ism:</b> ${escape(lead.name)}`);
  lines.push(`<b>Telefon:</b> ${escape(lead.phone)}`);
  if (lead.service) lines.push(`<b>Xizmat:</b> ${escape(lead.service)}`);
  if (lead.message) lines.push(`<b>Xabar:</b> ${escape(lead.message)}`);
  lines.push("", `<i>Til: ${lead.locale} · Sahifa: ${escape(lead.page || "/")}</i>`);
  return lines.join("\n");
}

async function sendToTelegram(text) {
  const results = await Promise.all(
    CHAT_IDS.map((chat_id) =>
      fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id, text, parse_mode: "HTML", disable_web_page_preview: true }),
        signal: AbortSignal.timeout(10_000),
      })
        .then((r) => r.ok)
        .catch(() => false),
    ),
  );
  return results.some(Boolean);
}

function reply(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || "/", "http://localhost");

  if (req.method === "GET" && url.pathname === "/api/lead/health") return reply(res, 200, { ok: true });
  if (url.pathname !== "/api/lead") return reply(res, 404, { ok: false });
  if (req.method !== "POST") return reply(res, 405, { ok: false });
  if (!(req.headers["content-type"] || "").includes("application/json")) return reply(res, 415, { ok: false });

  let size = 0;
  const chunks = [];
  req.on("data", (chunk) => {
    size += chunk.length;
    if (size > MAX_BODY) {
      reply(res, 413, { ok: false });
      req.destroy();
      return;
    }
    chunks.push(chunk);
  });
  req.on("end", async () => {
    if (res.writableEnded) return;
    let body;
    try {
      body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    } catch {
      return reply(res, 400, { ok: false, error: "json" });
    }

    const lead = validate(body);
    if (typeof lead === "string") return reply(res, 422, { ok: false, error: lead });

    // Bots fill the hidden field; tell them it worked and drop it.
    if (lead.website) return reply(res, 200, { ok: true });

    const ip = String(req.headers["x-real-ip"] || req.socket.remoteAddress || "unknown");
    if (rateLimited(ip)) return reply(res, 429, { ok: false, error: "rate" });

    const sent = await sendToTelegram(format(lead));
    if (!sent) console.error(`telegram delivery failed for lead from ${lead.page}`);
    reply(res, sent ? 200 : 502, { ok: sent });
  });
});

server.listen(PORT, "0.0.0.0", () => console.log(`lead-api listening on ${PORT}`));

for (const sig of ["SIGTERM", "SIGINT"]) process.on(sig, () => server.close(() => process.exit(0)));
