import type { Locale } from "@/lib/i18n";
import type { Discipline } from "./crew";

export const SERVICE_SLUGS = ["production", "smm", "personal-brand", "web"] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

type ServiceCopy = {
  name: string;
  /** One line used in credits, lists and meta descriptions. */
  short: string;
  body: string[];
  deliverables: string[];
  seoTitle: string;
};

export type Service = {
  slug: ServiceSlug;
  /** Which part of the crew does this work (drives the credit roll). */
  disciplines: Discipline[];
  copy: Record<Locale, ServiceCopy>;
};

export const SERVICES: Service[] = [
  {
    slug: "production",
    disciplines: ["production", "direction"],
    copy: {
      uz: {
        name: "Prodakshn",
        short: "Reklama roliklari, brend filmlar, reels va motion-grafika: ssenariydan montajgacha o‘zimiz.",
        body: [
          "Jamoamiz butun jarayonni o‘zi bajaradi: g‘oya va ssenariy, zamonaviy texnika bilan suratga olish, montaj, rang, ovoz va motion-dizayn.",
          "Siz birinchi g‘oyadan har bir platforma uchun tayyor faylgacha natijaga javob beradigan bitta jamoaga ega bo‘lasiz.",
        ],
        deliverables: ["Reklama roliklari va brend filmlar", "Reels, Shorts va stories", "Motion-grafika va animatsiya", "Fotosessiyalar", "Grafik dizayn"],
        seoTitle: "Video prodakshn va reklama roliklari Toshkentda",
      },
      ru: {
        name: "Продакшн",
        short: "Рекламные ролики, имиджевые фильмы, reels и моушн-графика: от сценария до монтажа своими силами.",
        body: [
          "Наша команда закрывает весь цикл: идея и сценарий, съёмка на современной технике, монтаж, цвет, звук и моушн-дизайн.",
          "Вы получаете одну команду, которая отвечает за результат от первой идеи до готового файла под каждую площадку.",
        ],
        deliverables: ["Рекламные ролики и имиджевые фильмы", "Reels, Shorts и сторис", "Моушн-графика и анимация", "Фотосессии", "Графический дизайн"],
        seoTitle: "Видеопродакшн и рекламные ролики в Ташкенте",
      },
      en: {
        name: "Production",
        short: "Commercials, brand films, reels and motion graphics, from script to final cut in-house.",
        body: [
          "Our crew covers the whole pipeline: concept and script, shooting on modern equipment, editing, color, sound and motion design.",
          "You get one team accountable for the result, from the first idea to the final export for every platform.",
        ],
        deliverables: ["Commercials and brand films", "Reels, Shorts and stories", "Motion graphics and animation", "Photo shoots", "Graphic design"],
        seoTitle: "Video production and commercials in Tashkent",
      },
    },
  },
  {
    slug: "smm",
    disciplines: ["smm", "production"],
    copy: {
      uz: {
        name: "SMM va targeting",
        short: "Kontent-reja, muntazam postlar va faqat xarid qila oladigan auditoriyaga yo‘naltirilgan reklama.",
        body: [
          "Instagram, Telegram va boshqa sahifalaringizni yuritamiz: strategiya, kontent-reja, suratga olish, matn, dizayn va joylash.",
          "Targetli reklama shu kontentni mijozingizga mos auditoriyaga ko‘rsatadi, biz esa sarflangan har bir so‘m nima olib kelganini hisobot qilamiz.",
        ],
        deliverables: ["Strategiya va kontent-reja", "Kopirayting va dizayn", "Sahifalarni yuritish", "Targetli reklama", "Oylik hisobot"],
        seoTitle: "SMM va targetli reklama xizmati Toshkentda",
      },
      ru: {
        name: "SMM и таргетинг",
        short: "Контент-план, регулярные публикации и реклама только на тех, кто может купить.",
        body: [
          "Ведём ваш Instagram, Telegram и другие площадки: стратегия, контент-план, съёмка, тексты, дизайн и публикации.",
          "Таргетированная реклама показывает этот контент аудитории, похожей на вашего клиента, а мы отчитываемся, что принёс каждый потраченный сум.",
        ],
        deliverables: ["Стратегия и контент-план", "Копирайтинг и дизайн", "Ведение аккаунтов", "Таргетированная реклама", "Ежемесячный отчёт"],
        seoTitle: "SMM и таргетированная реклама в Ташкенте",
      },
      en: {
        name: "SMM & targeting",
        short: "Content plans, steady publishing and paid ads aimed only at people who can buy.",
        body: [
          "We run your Instagram, Telegram and other channels: strategy, content plan, shooting, copywriting, design and publishing.",
          "Targeted ads put that content in front of people who look like your customer, and we report what every sum spent brought back.",
        ],
        deliverables: ["Strategy and content plan", "Copywriting and design", "Account management", "Targeted advertising", "Monthly reporting"],
        seoTitle: "SMM and targeted advertising in Tashkent",
      },
    },
  },
  {
    slug: "personal-brand",
    disciplines: ["smm", "production", "direction"],
    copy: {
      uz: {
        name: "Shaxsiy brend",
        short: "Pozitsiya, kontent va imij: sohangizda birinchi bo‘lib sizni eslashlari uchun.",
        body: [
          "Tadbirkorlar, shifokorlar, murabbiylar va ekspertlar uchun: sizni qanday ko‘rishlari kerakligini aniqlaymiz, tajribangiz atrofida video va foto kontent tayyorlaymiz.",
          "Natijada siz bilan uchrashishdan oldin sizga ishonadigan auditoriya shakllanadi.",
        ],
        deliverables: ["Pozitsiyalash va imij", "Ekspert video kontenti", "Profilni qadoqlash", "Auditoriyani o‘stirish"],
        seoTitle: "Shaxsiy brendni rivojlantirish Toshkentda",
      },
      ru: {
        name: "Личный бренд",
        short: "Позиционирование, контент и имидж, чтобы в вашей сфере первым вспоминали вас.",
        body: [
          "Для предпринимателей, врачей, коучей и экспертов: определяем, каким вас должны видеть, и снимаем видео и фото вокруг вашей экспертизы.",
          "В итоге растёт аудитория, которая доверяет вам ещё до первой встречи.",
        ],
        deliverables: ["Позиционирование и имидж", "Экспертный видеоконтент", "Упаковка профиля", "Рост аудитории"],
        seoTitle: "Развитие личного бренда в Ташкенте",
      },
      en: {
        name: "Personal brand",
        short: "Positioning, content and image that make you the first name people think of in your field.",
        body: [
          "For entrepreneurs, doctors, coaches and experts: we define how you should be seen, then produce video and photo content around your expertise.",
          "The result is an audience that trusts you before they ever meet you.",
        ],
        deliverables: ["Positioning and image", "Expert video content", "Profile packaging", "Audience growth"],
        seoTitle: "Personal brand development in Tashkent",
      },
    },
  },
  {
    slug: "web",
    disciplines: ["web"],
    copy: {
      uz: {
        name: "Sayt va ilovalar",
        short: "Biznes saytlar, internet-do‘konlar, CRM tizimlar va o‘z admin paneliga ega platformalar.",
        body: [
          "Tezkor vizitka saytdan internet-do‘kon yoki o‘z admin paneliga ega platformagacha: shablondan emas, dasturchi va dizaynerlarimiz tomonidan noldan yaratiladi.",
          "Har bir sayt tez yuklanishi, qidiruvda chiqishi va tashrif buyuruvchini so‘rovga aylantirishi uchun quriladi.",
        ],
        deliverables: ["Biznes saytlar", "Internet-do‘konlar", "CRM tizimlar", "Veb-platformalar va ilovalar", "UI/UX dizayn"],
        seoTitle: "Sayt yaratish va veb-ilovalar Toshkentda",
      },
      ru: {
        name: "Сайты и приложения",
        short: "Сайты для бизнеса, интернет-магазины, CRM-системы и платформы с собственной админ-панелью.",
        body: [
          "От быстрого сайта-визитки до интернет-магазина или платформы со своей админ-панелью: не из шаблона, а с нуля, нашими разработчиками и дизайнерами.",
          "Каждый сайт делается так, чтобы быстро загружаться, находиться в поиске и превращать посетителей в заявки.",
        ],
        deliverables: ["Сайты для бизнеса", "Интернет-магазины", "CRM-системы", "Веб-платформы и приложения", "UI/UX-дизайн"],
        seoTitle: "Разработка сайтов и веб-приложений в Ташкенте",
      },
      en: {
        name: "Web & apps",
        short: "Business sites, online stores, CRM systems and platforms with their own admin panels.",
        body: [
          "From a fast business site to an online store or a platform with its own admin panel: built from scratch by our developers and designers, not from a template.",
          "Every site is made to load fast, rank in search and turn visitors into requests.",
        ],
        deliverables: ["Business websites", "Online stores", "CRM systems", "Web platforms and apps", "UI/UX design"],
        seoTitle: "Website and web app development in Tashkent",
      },
    },
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
