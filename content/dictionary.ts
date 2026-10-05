import type { Locale } from "@/lib/i18n";
import type { Discipline } from "./crew";

type PageMeta = { title: string; description: string };

export type Dictionary = {
  meta: Record<"home" | "services" | "work" | "about" | "contact", PageMeta>;
  nav: { home: string; services: string; work: string; about: string; contact: string };
  ui: {
    skip: string;
    menu: string;
    close: string;
    language: string;
    phoneLabel: string;
    callMeBack: string;
    sending: string;
    sent: string;
    sendError: string;
    phoneInvalid: string;
    orTelegram: string;
    telegram: string;
    call: string;
    email: string;
    address: string;
    startProject: string;
    allServices: string;
    viewSite: string;
    inPostProduction: string;
    showreelSlot: string;
    whatYouGet: string;
    whoDoesIt: string;
    otherServices: string;
  };
  hero: { presents: string; logline: string; headline: [string, string]; credits: string };
  statement: { text: string; stats: (s: { years: number; projects: number; videos: number }) => string };
  servicesSection: { heading: string; intro: string };
  crewSection: { heading: string; intro: string; disciplines: Record<Discipline, string> };
  process: { heading: string; steps: { name: string; text: string }[] };
  workSection: { heading: string; intro: string };
  close: { heading: string; text: string };
  about: { heading: string; paragraphs: string[] };
  contact: {
    heading: string;
    text: string;
    name: string;
    phone: string;
    service: string;
    serviceAny: string;
    message: string;
    submit: string;
    nameRequired: string;
  };
  footer: { rights: string; endCard: string };
};

const uz: Dictionary = {
  meta: {
    home: {
      title: "Sultan Quick Invest: video prodakshn, SMM va sayt yaratish",
      description: "Toshkentdagi agentlik: reklama roliklari, SMM va targeting, shaxsiy brend, sayt va ilovalar. Bitta jamoa, bitta strategiya.",
    },
    services: { title: "Xizmatlar", description: "Prodakshn, SMM va targeting, shaxsiy brend, sayt va ilovalar: barchasi bitta jamoada." },
    work: { title: "Ishlarimiz", description: "Sultan Quick Invest jamoasi bajargan loyihalar." },
    about: { title: "Biz haqimizda", description: "Video, SMM va veb bo‘yicha Toshkentdagi agentlik jamoasi bilan tanishing." },
    contact: { title: "Bog‘lanish", description: "Loyihangizni muhokama qilish uchun so‘rov qoldiring yoki Telegramda yozing." },
  },
  nav: { home: "Bosh sahifa", services: "Xizmatlar", work: "Ishlar", about: "Biz haqimizda", contact: "Bog‘lanish" },
  ui: {
    skip: "Asosiy mazmunga o‘tish",
    menu: "Menyu",
    close: "Yopish",
    language: "Til",
    phoneLabel: "Telefon raqamingiz",
    callMeBack: "Qo‘ng‘iroq qiling",
    sending: "Yuborilmoqda…",
    sent: "Qabul qilindi. Tez orada qo‘ng‘iroq qilamiz.",
    sendError: "Yuborib bo‘lmadi. Telegramda yozing yoki qo‘ng‘iroq qiling.",
    phoneInvalid: "Raqamni to‘liq kiriting: 9 ta raqam.",
    orTelegram: "yoki Telegramda yozing",
    telegram: "Telegram",
    call: "Qo‘ng‘iroq",
    email: "Pochta",
    address: "Manzil",
    startProject: "Loyihani boshlash",
    allServices: "Barcha xizmatlar",
    viewSite: "Saytni ko‘rish",
    inPostProduction: "Montajda",
    showreelSlot: "Shoureel",
    whatYouGet: "Nimalarni olasiz",
    whoDoesIt: "Kim bajaradi",
    otherServices: "Boshqa xizmatlar",
  },
  hero: {
    presents: "Sultan Quick Invest taqdim etadi",
    logline: "Ssenariydan sotuvgacha",
    headline: ["Video, SMM va veb.", "Bitta jamoa."],
    credits: "Prodakshn · SMM · Targeting · Sayt va ilovalar",
  },
  statement: {
    text: "Ko‘p bizneslar videograf, SMM mutaxassis, targetolog va veb-studiyani alohida yollaydi, keyin to‘rt jamoani kelishtirish bilan ovora bo‘ladi. Biz shu to‘rttasimiz: bitta xonada, bitta topshiriq ustida.",
    stats: ({ years, projects, videos }) => `${years}+ yil. ${projects}+ loyiha. ${videos}+ video.`,
  },
  servicesSection: {
    heading: "Bitta brif. To‘rt yo‘nalish.",
    intro: "Har bir yo‘nalishni alohida buyurtma qilish mumkin, lekin ular birga ishlaganda kuchliroq.",
  },
  crewSection: {
    heading: "Titrlar",
    intro: "Har bir loyiha ustida ishlaydigan odamlar. Hammasi bitta jamoada.",
    disciplines: { direction: "Rejissura", production: "Prodakshn", smm: "SMM va targeting", web: "Sayt va ilovalar", crew: "Jamoada" },
  },
  process: {
    heading: "Ish qanday boradi",
    steps: [
      { name: "Brif", text: "Uchrashamiz, biznesingizni o‘rganamiz va qanday natijaga erishishni kelishib olamiz." },
      { name: "Tayyorgarlik", text: "Strategiya, ssenariy, kontent-reja yoki sayt tuzilmasi: ish boshlanishidan oldin siz tasdiqlaysiz." },
      { name: "Ishlab chiqarish", text: "Suratga olish, dizayn, dasturlash: jamoa ishni bajaradi." },
      { name: "Chiqarish", text: "Joylaymiz, reklama yoki saytni ishga tushiramiz, natijani o‘lchab, yaxshilaymiz." },
    ],
  },
  workSection: { heading: "Ishlar", intro: "Biz bajargan loyihalar. Yangilari montajda." },
  close: { heading: "Keyingi loyiha sizniki.", text: "Raqamingizni qoldiring, qo‘ng‘iroq qilib, vazifangizni muhokama qilamiz." },
  about: {
    heading: "Biz haqimizda",
    paragraphs: [
      "Sultan Quick Invest: Toshkentdagi video prodakshn, SMM va veb-dasturlash agentligi. Asoschisi Sultonbek Hasanov.",
      "Biz kichik va o‘rta bizneslar hamda shaxsiy brendlar bilan ishlaymiz: suratga olamiz, sahifalarni yuritamiz, reklama beramiz va saytlar quramiz. Bularning barchasini bitta jamoa bajargani uchun video, postlar va sayt bir xil ovozda gapiradi.",
    ],
  },
  contact: {
    heading: "Loyihangizni muhokama qilamiz",
    text: "Formani to‘ldiring yoki to‘g‘ridan-to‘g‘ri Telegramda yozing. So‘rovingiz direktorga yetib boradi.",
    name: "Ismingiz",
    phone: "Telefon",
    service: "Qaysi xizmat kerak",
    serviceAny: "Hali bilmayman",
    message: "Vazifa haqida qisqacha",
    submit: "So‘rov yuborish",
    nameRequired: "Ismingizni yozing.",
  },
  footer: { rights: "Barcha huquqlar himoyalangan.", endCard: "Davomi sizning loyihangizda" },
};

const ru: Dictionary = {
  meta: {
    home: {
      title: "Sultan Quick Invest: видеопродакшн, SMM и разработка сайтов",
      description: "Агентство в Ташкенте: рекламные ролики, SMM и таргетинг, личный бренд, сайты и приложения. Одна команда, одна стратегия.",
    },
    services: { title: "Услуги", description: "Продакшн, SMM и таргетинг, личный бренд, сайты и приложения: всё в одной команде." },
    work: { title: "Работы", description: "Проекты команды Sultan Quick Invest." },
    about: { title: "О нас", description: "Познакомьтесь с командой агентства видео, SMM и веб-разработки в Ташкенте." },
    contact: { title: "Контакты", description: "Оставьте заявку, чтобы обсудить проект, или напишите в Telegram." },
  },
  nav: { home: "Главная", services: "Услуги", work: "Работы", about: "О нас", contact: "Контакты" },
  ui: {
    skip: "Перейти к содержанию",
    menu: "Меню",
    close: "Закрыть",
    language: "Язык",
    phoneLabel: "Ваш номер телефона",
    callMeBack: "Перезвоните мне",
    sending: "Отправляем…",
    sent: "Заявка принята. Скоро перезвоним.",
    sendError: "Не удалось отправить. Напишите в Telegram или позвоните.",
    phoneInvalid: "Введите номер полностью: 9 цифр.",
    orTelegram: "или напишите в Telegram",
    telegram: "Telegram",
    call: "Позвонить",
    email: "Почта",
    address: "Адрес",
    startProject: "Начать проект",
    allServices: "Все услуги",
    viewSite: "Открыть сайт",
    inPostProduction: "В монтаже",
    showreelSlot: "Шоурил",
    whatYouGet: "Что вы получаете",
    whoDoesIt: "Кто делает",
    otherServices: "Другие услуги",
  },
  hero: {
    presents: "Sultan Quick Invest представляет",
    logline: "От сценария до продаж",
    headline: ["Видео, SMM и веб.", "Одна команда."],
    credits: "Продакшн · SMM · Таргетинг · Сайты и приложения",
  },
  statement: {
    text: "Многие компании отдельно нанимают видеографа, SMM-специалиста, таргетолога и веб-студию, а потом тратят время, чтобы четыре команды договорились. Мы и есть эти четыре: в одной комнате, над одной задачей.",
    stats: ({ years, projects, videos }) => `${years}+ лет. ${projects}+ проектов. ${videos}+ видео.`,
  },
  servicesSection: {
    heading: "Один бриф. Четыре направления.",
    intro: "Каждое направление можно заказать отдельно, но вместе они работают сильнее.",
  },
  crewSection: {
    heading: "Титры",
    intro: "Люди, которые работают над каждым проектом. Все в одной команде.",
    disciplines: { direction: "Режиссура", production: "Продакшн", smm: "SMM и таргетинг", web: "Сайты и приложения", crew: "В команде" },
  },
  process: {
    heading: "Как идёт работа",
    steps: [
      { name: "Бриф", text: "Встречаемся, изучаем ваш бизнес и договариваемся, какой результат нужен." },
      { name: "Подготовка", text: "Стратегия, сценарий, контент-план или структура сайта: вы утверждаете до начала работ." },
      { name: "Производство", text: "Съёмка, дизайн, разработка: команда делает работу." },
      { name: "Запуск", text: "Публикуем, запускаем рекламу или сайт, измеряем результат и улучшаем." },
    ],
  },
  workSection: { heading: "Работы", intro: "Проекты, которые мы сделали. Новые уже в монтаже." },
  close: { heading: "Следующий проект ваш.", text: "Оставьте номер, мы перезвоним и обсудим задачу." },
  about: {
    heading: "О нас",
    paragraphs: [
      "Sultan Quick Invest: агентство видеопродакшна, SMM и веб-разработки в Ташкенте. Основатель: Султонбек Хасанов.",
      "Мы работаем с малым и средним бизнесом и личными брендами: снимаем, ведём аккаунты, запускаем рекламу и делаем сайты. Всё это делает одна команда, поэтому видео, посты и сайт говорят одним голосом.",
    ],
  },
  contact: {
    heading: "Обсудим ваш проект",
    text: "Заполните форму или напишите сразу в Telegram. Заявка придёт напрямую директору.",
    name: "Ваше имя",
    phone: "Телефон",
    service: "Какая услуга нужна",
    serviceAny: "Пока не знаю",
    message: "Коротко о задаче",
    submit: "Отправить заявку",
    nameRequired: "Напишите ваше имя.",
  },
  footer: { rights: "Все права защищены.", endCard: "Продолжение в вашем проекте" },
};

const en: Dictionary = {
  meta: {
    home: {
      title: "Sultan Quick Invest: video production, SMM and web development",
      description: "A Tashkent agency for commercials, SMM and targeting, personal brands, websites and apps. One crew, one strategy.",
    },
    services: { title: "Services", description: "Production, SMM and targeting, personal brand, web and apps: all in one crew." },
    work: { title: "Work", description: "Projects by the Sultan Quick Invest crew." },
    about: { title: "About", description: "Meet the crew behind a Tashkent agency for video, SMM and web." },
    contact: { title: "Contact", description: "Leave a request to discuss your project, or message us on Telegram." },
  },
  nav: { home: "Home", services: "Services", work: "Work", about: "About", contact: "Contact" },
  ui: {
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    language: "Language",
    phoneLabel: "Your phone number",
    callMeBack: "Call me back",
    sending: "Sending…",
    sent: "Got it. We'll call you shortly.",
    sendError: "Couldn't send. Message us on Telegram or call.",
    phoneInvalid: "Enter the full number: 9 digits.",
    orTelegram: "or message us on Telegram",
    telegram: "Telegram",
    call: "Call",
    email: "Email",
    address: "Address",
    startProject: "Start a project",
    allServices: "All services",
    viewSite: "Visit site",
    inPostProduction: "In post-production",
    showreelSlot: "Showreel",
    whatYouGet: "What you get",
    whoDoesIt: "Who does it",
    otherServices: "Other services",
  },
  hero: {
    presents: "Sultan Quick Invest presents",
    logline: "From script to sales",
    headline: ["Video, SMM and web.", "One crew."],
    credits: "Production · SMM · Targeting · Web & apps",
  },
  statement: {
    text: "Most businesses hire a videographer, an SMM manager, a targeting specialist and a web studio separately, then spend their time getting four teams to agree. We are all four: in one room, on one brief.",
    stats: ({ years, projects, videos }) => `${years}+ years. ${projects}+ projects. ${videos}+ videos.`,
  },
  servicesSection: {
    heading: "One brief. Four disciplines.",
    intro: "Each can be hired on its own, but they work harder together.",
  },
  crewSection: {
    heading: "The credits",
    intro: "The people on every project. All in one crew.",
    disciplines: { direction: "Directed by", production: "Production", smm: "SMM & targeting", web: "Web & apps", crew: "With" },
  },
  process: {
    heading: "How a project runs",
    steps: [
      { name: "Brief", text: "We meet, learn your business and agree on the result we're after." },
      { name: "Pre-production", text: "Strategy, script, content plan or site structure, approved by you before work starts." },
      { name: "Production", text: "Shooting, design, development: the crew does the work." },
      { name: "Release", text: "We publish, launch the ads or the site, measure what happens and improve it." },
    ],
  },
  workSection: { heading: "Work", intro: "Projects we've made. More are in post-production." },
  close: { heading: "The next production is yours.", text: "Leave your number and we'll call to talk through the job." },
  about: {
    heading: "About",
    paragraphs: [
      "Sultan Quick Invest is a Tashkent agency for video production, SMM and web development, founded by Sultonbek Hasanov.",
      "We work with small and medium businesses and personal brands: we shoot, run accounts, launch ads and build websites. One crew does all of it, so the videos, the posts and the site speak with one voice.",
    ],
  },
  contact: {
    heading: "Let's talk about your project",
    text: "Fill in the form or message us straight on Telegram. Requests go directly to the director.",
    name: "Your name",
    phone: "Phone",
    service: "What do you need",
    serviceAny: "Not sure yet",
    message: "A few words about the job",
    submit: "Send request",
    nameRequired: "Please enter your name.",
  },
  footer: { rights: "All rights reserved.", endCard: "To be continued in your project" },
};

const DICTIONARIES: Record<Locale, Dictionary> = { uz, ru, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
