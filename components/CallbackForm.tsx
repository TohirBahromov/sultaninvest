"use client";

import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { TELEGRAM_URL } from "@/content/site";
import { formatUzPhone, sendLead, uzPhoneDigits } from "@/lib/lead";
import { ArrowRight } from "./icons";

type Labels = {
  phoneLabel: string;
  callMeBack: string;
  sending: string;
  sent: string;
  sendError: string;
  phoneInvalid: string;
  orTelegram: string;
  telegram: string;
};

type State = "idle" | "sending" | "sent" | "error" | "invalid";

/** The working action: a phone number and one button, in the bar under the screen. */
export default function CallbackForm({ locale, labels }: { locale: string; labels: Labels }) {
  const id = useId();
  const pathname = usePathname() ?? "/";
  const [phone, setPhone] = useState("");
  const [honey, setHoney] = useState("");
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const digits = uzPhoneDigits(phone);
    if (digits.length !== 9) {
      setState("invalid");
      return;
    }
    setState("sending");
    const ok = await sendLead({ kind: "callback", phone: `+998${digits}`, locale, page: pathname, website: honey });
    setState(ok ? "sent" : "error");
    if (ok) setPhone("");
  }

  const note =
    state === "sent" ? labels.sent : state === "error" ? labels.sendError : state === "invalid" ? labels.phoneInvalid : null;
  const tone = state === "sent" ? "ok" : state === "error" || state === "invalid" ? "error" : undefined;

  return (
    <form className="callback" onSubmit={onSubmit} noValidate>
      <label htmlFor={id} className="visually-hidden">
        {labels.phoneLabel}
      </label>
      <div className="callback__row">
        <span className="callback__prefix" aria-hidden="true">
          +998
        </span>
        <input
          id={id}
          className="callback__input"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder="90 123 45 67"
          value={phone}
          onChange={(e) => {
            setPhone(formatUzPhone(e.target.value));
            if (state === "invalid" || state === "error") setState("idle");
          }}
          aria-invalid={state === "invalid" || undefined}
          aria-describedby={`${id}-note`}
        />
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
          className="visually-hidden"
          aria-hidden="true"
        />
        <button className="button" type="submit" disabled={state === "sending"}>
          {state === "sending" ? labels.sending : labels.callMeBack}
          {state !== "sending" && <ArrowRight />}
        </button>
      </div>
      <p id={`${id}-note`} className="callback__note" data-tone={tone} role="status" aria-live="polite">
        {note ?? (
          <a href={TELEGRAM_URL} target="_blank" rel="noopener">
            {labels.orTelegram}
          </a>
        )}
      </p>
    </form>
  );
}
