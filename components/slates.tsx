import type { Case } from "@/content/work";
import type { Locale } from "@/lib/i18n";
import { SERVICES, type ServiceSlug } from "@/content/services";
import Slate from "./Slate";

const YEAR = new Date().getFullYear();
const ROLL: Record<ServiceSlug, string> = { production: "A", smm: "B", "personal-brand": "C", web: "D" };

export function serviceName(slug: ServiceSlug, locale: Locale) {
  return SERVICES.find((s) => s.slug === slug)!.copy[locale].name;
}

export function ServiceSlate({ slug, locale }: { slug: ServiceSlug; locale: Locale }) {
  const name = serviceName(slug, locale);
  return (
    <Slate
      label={name}
      cells={[
        { key: "Scene", value: name, chalk: true, wide: true },
        { key: "Prod.", value: "SQI" },
        { key: "Roll", value: ROLL[slug] },
        { key: "Take", value: "1" },
        { key: "Date", value: String(YEAR) },
      ]}
    />
  );
}

export function CaseSlate({
  c,
  locale,
  postLabel,
  ratio,
}: {
  c: Case;
  locale: Locale;
  postLabel: string;
  ratio?: string;
}) {
  const scene = c.services.map((s) => serviceName(s, locale)).join(" · ");
  if (c.placeholder) {
    return (
      <Slate
        ratio={ratio}
        label={postLabel}
        cells={[
          { key: "Status", value: postLabel, chalk: true, wide: true },
          { key: "Scene", value: scene, wide: true },
          { key: "Take", value: "—" },
          { key: "Date", value: String(YEAR) },
        ]}
      />
    );
  }
  return (
    <Slate
      ratio={ratio}
      media={c.cover}
      label={c.client}
      cells={[
        { key: "Prod.", value: c.client, chalk: true, wide: true },
        { key: "Scene", value: scene },
        { key: "Date", value: String(c.year) },
        { key: "Url", value: c.url ? c.url.replace(/^https?:\/\//, "") : "—", wide: true },
      ]}
    />
  );
}
