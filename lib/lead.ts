import { LEAD_ENDPOINT } from "@/content/site";

export type LeadPayload = {
  kind: "callback" | "contact";
  phone: string;
  name?: string;
  service?: string;
  message?: string;
  locale: string;
  page: string;
  /** Honeypot: real visitors never see or fill this field. */
  website?: string;
};

/** Keep up to 9 national digits and group them as "90 123 45 67". */
export function formatUzPhone(raw: string): string {
  const d = raw.replace(/\D/g, "").replace(/^998/, "").slice(0, 9);
  return [d.slice(0, 2), d.slice(2, 5), d.slice(5, 7), d.slice(7, 9)].filter(Boolean).join(" ");
}

export function uzPhoneDigits(formatted: string): string {
  return formatted.replace(/\D/g, "");
}

export async function sendLead(payload: LeadPayload): Promise<boolean> {
  try {
    const res = await fetch(LEAD_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}
