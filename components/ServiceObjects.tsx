import type { ServiceSlug } from "@/content/services";
import type { Locale } from "@/lib/i18n";
import { ArrowRight } from "./icons";
import { ServiceSlate } from "./slates";

/*
 * Each discipline is shown as the working object a film crew would use for it:
 *   production      -> clapperboard slate (slates.tsx)
 *   smm             -> stripboard: the shooting schedule, which is a content plan
 *   personal-brand  -> quad poster: the client gets top billing
 *   web             -> storyboard: screens planned panel by panel
 * All share the slate's frame (charcoal, 4:3, hairlines) so they swap in one monitor.
 * The words inside are illustrative, not client claims.
 */

const COPY: Record<
  Locale,
  {
    plan: string;
    week: string;
    audience: string;
    audienceValue: string;
    days: string[];
    types: { reels: string; post: string; stories: string; ads: string };
    topics: string[];
    starring: string;
    yourName: string;
    in: string;
    posterTitle: string;
    billing: string;
    board: string;
    panels: string[];
    status: string;
  }
> = {
  uz: {
    plan: "Kontent-reja",
    week: "1-hafta",
    audience: "Auditoriya",
    audienceValue: "Toshkent · 24–45 · biznes egalari",
    days: ["Du", "Se", "Ch", "Pa", "Ju"],
    types: { reels: "Reels", post: "Post", stories: "Stories", ads: "Reklama" },
    topics: ["Sahna ortidan", "Mahsulot sharhi", "Savol-javob", "Mijoz hikoyasi", "Aksiya"],
    starring: "Bosh rolda",
    yourName: "Sizning ismingiz",
    in: "filmida",
    posterTitle: "Sohangizdagi birinchi ism",
    billing: "Pozitsiyalash · Ekspert video · Profil qadoqlash · Auditoriya o‘sishi · Sultan Quick Invest prodakshni",
    board: "Storibord",
    panels: ["Bosh sahifa", "Katalog", "So‘rov"],
    status: "Montajda",
  },
  ru: {
    plan: "Контент-план",
    week: "Неделя 1",
    audience: "Аудитория",
    audienceValue: "Ташкент · 24–45 · владельцы бизнеса",
    days: ["Пн", "Вт", "Ср", "Чт", "Пт"],
    types: { reels: "Reels", post: "Пост", stories: "Сторис", ads: "Реклама" },
    topics: ["За кадром", "Обзор продукта", "Вопрос-ответ", "История клиента", "Акция"],
    starring: "В главной роли",
    yourName: "Ваше имя",
    in: "в фильме",
    posterTitle: "Первое имя в вашей сфере",
    billing: "Позиционирование · Экспертное видео · Упаковка профиля · Рост аудитории · Продакшн Sultan Quick Invest",
    board: "Раскадровка",
    panels: ["Главная", "Каталог", "Заявка"],
    status: "В монтаже",
  },
  en: {
    plan: "Content plan",
    week: "Week 1",
    audience: "Audience",
    audienceValue: "Tashkent · 24–45 · business owners",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    types: { reels: "Reels", post: "Post", stories: "Stories", ads: "Ad" },
    topics: ["Behind the scenes", "Product review", "Q&A", "Client story", "Offer"],
    starring: "Starring",
    yourName: "Your name",
    in: "in",
    posterTitle: "The first name in your field",
    billing: "Positioning · Expert video · Profile packaging · Audience growth · A Sultan Quick Invest production",
    board: "Storyboard",
    panels: ["Home", "Catalog", "Request"],
    status: "In post-production",
  },
};

type Strip = { day: number; type: keyof (typeof COPY)["en"]["types"]; topic: number };
const STRIPS: Strip[] = [
  { day: 0, type: "reels", topic: 0 },
  { day: 0, type: "stories", topic: 2 },
  { day: 1, type: "post", topic: 1 },
  { day: 2, type: "ads", topic: 1 },
  { day: 2, type: "reels", topic: 3 },
  { day: 4, type: "post", topic: 4 },
];

function Stamp({ text }: { text: string }) {
  return <span className="obj-stamp credit">{text}</span>;
}

export function Stripboard({ locale, status }: { locale: Locale; status?: boolean }) {
  const t = COPY[locale];
  return (
    <div className="obj obj--strips" role="img" aria-label={`${t.plan}, ${t.week}`}>
      <div className="strips__head" aria-hidden="true">
        <span className="strips__title">{t.plan}</span>
        <span className="credit">{t.week}</span>
      </div>
      <div className="strips__aud credit" aria-hidden="true">
        <span>{t.audience}</span>
        <span>{t.audienceValue}</span>
      </div>
      <ol className="strips__list" aria-hidden="true">
        {STRIPS.map((s, i) => {
          const breakRow = i > 0 && STRIPS[i - 1].day !== s.day;
          return (
            <li key={i} className={`strip strip--${s.type}${breakRow ? " strip--after-break" : ""}`}>
              <span className="strip__day">{t.days[s.day]}</span>
              <span className="strip__type">{t.types[s.type]}</span>
              <span className="strip__topic">{t.topics[s.topic]}</span>
            </li>
          );
        })}
      </ol>
      {status && <Stamp text={t.status} />}
    </div>
  );
}

export function QuadPoster({ locale, status }: { locale: Locale; status?: boolean }) {
  const t = COPY[locale];
  return (
    <div className="obj obj--poster" role="img" aria-label={`${t.starring}: ${t.yourName}`}>
      <div className="poster__inner" aria-hidden="true">
        <span className="poster__starring credit">{t.starring}</span>
        <span className="poster__name">{t.yourName}</span>
        <span className="poster__in">{t.in}</span>
        <span className="poster__title">{t.posterTitle}</span>
        <span className="poster__billing">{t.billing}</span>
      </div>
      {status && <Stamp text={t.status} />}
    </div>
  );
}

function Wire({ variant }: { variant: number }) {
  return (
    <div className={`wire wire--${variant}`}>
      <span className="wire__bar" />
      <span className="wire__hero" />
      <span className="wire__row">
        <span />
        <span />
        <span />
      </span>
      <span className="wire__lines" />
    </div>
  );
}

export function Storyboard({ locale, status }: { locale: Locale; status?: boolean }) {
  const t = COPY[locale];
  return (
    <div className="obj obj--board" role="img" aria-label={`${t.board}: ${t.panels.join(", ")}`}>
      <div className="strips__head" aria-hidden="true">
        <span className="strips__title">{t.board}</span>
        <span className="credit">1 / 3</span>
      </div>
      <div className="board__panels" aria-hidden="true">
        {t.panels.map((p, i) => (
          <div key={p} className="board__panel">
            <Wire variant={i} />
            <span className="board__caption">
              <span className="credit">{String(i + 1)}</span> {p}
            </span>
            {i < t.panels.length - 1 && <ArrowRight className="board__arrow" />}
          </div>
        ))}
      </div>
      {status && <Stamp text={t.status} />}
    </div>
  );
}

/** The right object for a discipline. */
export function ServiceObject({ slug, locale, status }: { slug: ServiceSlug; locale: Locale; status?: boolean }) {
  switch (slug) {
    case "smm":
      return <Stripboard locale={locale} status={status} />;
    case "personal-brand":
      return <QuadPoster locale={locale} status={status} />;
    case "web":
      return <Storyboard locale={locale} status={status} />;
    default:
      return <ServiceSlate slug={slug} locale={locale} />;
  }
}
