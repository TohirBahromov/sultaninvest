"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { formatUzPhone, sendLead, uzPhoneDigits } from "@/lib/lead";
import { ArrowRight } from "./icons";

type Labels = {
  name: string;
  phone: string;
  service: string;
  serviceAny: string;
  message: string;
  submit: string;
  nameRequired: string;
  phoneInvalid: string;
  sending: string;
  sent: string;
  sendError: string;
};

type Errors = Partial<Record<"name" | "phone", string>>;

export default function ContactForm({
  locale,
  labels,
  services,
}: {
  locale: string;
  labels: Labels;
  services: { value: string; label: string }[];
}) {
  const pathname = usePathname() ?? "/";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const digits = uzPhoneDigits(phone);
    const next: Errors = {};
    if (!name.trim()) next.name = labels.nameRequired;
    if (digits.length !== 9) next.phone = labels.phoneInvalid;
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    const ok = await sendLead({
      kind: "contact",
      name: name.trim(),
      phone: `+998${digits}`,
      service: services.find((s) => s.value === service)?.label,
      message: message.trim() || undefined,
      locale,
      page: pathname,
      website: honey,
    });
    setStatus(ok ? "sent" : "error");
    if (ok) {
      setName("");
      setPhone("");
      setService("");
      setMessage("");
    }
  }

  return (
    <form className="contact__form" onSubmit={onSubmit} noValidate>
      <div className="contact__row">
        <div className="field">
          <label className="credit" htmlFor="cf-name">
            {labels.name}
          </label>
          <input
            id="cf-name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!errors.name || undefined}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
          />
          {errors.name && (
            <p id="cf-name-err" className="field__error">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label className="credit" htmlFor="cf-phone">
            {labels.phone}
          </label>
          <div className="contact__phone">
            <span aria-hidden="true">+998</span>
            <input
              id="cf-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              placeholder="90 123 45 67"
              value={phone}
              onChange={(e) => setPhone(formatUzPhone(e.target.value))}
              aria-invalid={!!errors.phone || undefined}
              aria-describedby={errors.phone ? "cf-phone-err" : undefined}
            />
          </div>
          {errors.phone && (
            <p id="cf-phone-err" className="field__error">
              {errors.phone}
            </p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="credit" htmlFor="cf-service">
          {labels.service}
        </label>
        <select id="cf-service" value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">{labels.serviceAny}</option>
          {services.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label className="credit" htmlFor="cf-message">
          {labels.message}
        </label>
        <textarea id="cf-message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1500} />
      </div>
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
      <div style={{ display: "grid", gap: "1rem", justifyItems: "start" }}>
        <button className="button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? labels.sending : labels.submit}
          {status !== "sending" && <ArrowRight />}
        </button>
        <p
          className="form-status"
          role="status"
          aria-live="polite"
          data-tone={status === "sent" ? "ok" : status === "error" ? "error" : undefined}
        >
          {status === "sent" ? labels.sent : status === "error" ? labels.sendError : ""}
        </p>
      </div>
    </form>
  );
}
