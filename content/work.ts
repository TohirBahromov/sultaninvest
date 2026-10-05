import type { Locale } from "@/lib/i18n";
import type { ServiceSlug } from "./services";

export type Case = {
  slug: string;
  client: string;
  services: ServiceSlug[];
  year: number;
  url?: string;
  /** Path under public/. Missing media renders as a slate. */
  cover?: string;
  summary: Record<Locale, string>;
  /** True until the owner supplies the real case. */
  placeholder?: boolean;
};

// TODO(owner): replace placeholders with real cases (cover image or clip,
// client, services, one-line result). Never publish an invented client.
export const CASES: Case[] = [
  {
    slug: "sultan-edu",
    client: "Sultan Edu",
    services: ["web"],
    year: 2026,
    url: "https://sultanedu.uz",
    summary: {
      uz: "O‘quv markazi uchun uch tilli sayt: kurslar katalogi, darajani aniqlash testi, kundalik mashqlar va o‘z admin paneli.",
      ru: "Трёхъязычный сайт учебного центра: каталог курсов, тест на уровень, ежедневные задания и собственная админ-панель.",
      en: "A trilingual site for an education center: course catalog, placement test, daily practice and its own admin panel.",
    },
  },
  { slug: "case-02", client: "", services: ["production"], year: 0, placeholder: true, summary: { uz: "", ru: "", en: "" } },
  { slug: "case-03", client: "", services: ["smm"], year: 0, placeholder: true, summary: { uz: "", ru: "", en: "" } },
  { slug: "case-04", client: "", services: ["personal-brand"], year: 0, placeholder: true, summary: { uz: "", ru: "", en: "" } },
];
