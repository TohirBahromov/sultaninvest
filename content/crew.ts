import type { Locale } from "@/lib/i18n";

export type Discipline = "direction" | "production" | "smm" | "web" | "crew";

export type CrewMember = {
  name: Record<Locale, string>;
  role: Record<Locale, string>;
  discipline: Discipline;
};

// Real team, from the agency. Order inside a discipline is the credit order.
export const CREW: CrewMember[] = [
  { discipline: "direction", name: { uz: "Sultonbek Hasanov", ru: "Султонбек Хасанов", en: "Sultonbek Hasanov" }, role: { uz: "Direktor, asoschi", ru: "Директор, основатель", en: "Director, founder" } },
  { discipline: "production", name: { uz: "Bobur Akyulov", ru: "Бобур Акюлов", en: "Bobur Akyulov" }, role: { uz: "Kinooperator", ru: "Кинооператор", en: "Cinematographer" } },
  { discipline: "production", name: { uz: "Abdulloh Fozilov", ru: "Абдуллох Фозилов", en: "Abdulloh Fozilov" }, role: { uz: "Videograf", ru: "Видеограф", en: "Videographer" } },
  { discipline: "production", name: { uz: "Azizbek Ahrarov", ru: "Азизбек Ахраров", en: "Azizbek Ahrarov" }, role: { uz: "Videograf", ru: "Видеограф", en: "Videographer" } },
  { discipline: "production", name: { uz: "Qodirbek Sultonov", ru: "Кодирбек Султонов", en: "Qodirbek Sultonov" }, role: { uz: "Montajchi", ru: "Монтажёр", en: "Editor" } },
  { discipline: "production", name: { uz: "Akbar Hasanboyev", ru: "Акбар Хасанбоев", en: "Akbar Hasanboyev" }, role: { uz: "Grafik dizayner", ru: "Графический дизайнер", en: "Graphic designer" } },
  { discipline: "production", name: { uz: "Munisa Saidamirova", ru: "Муниса Саидамирова", en: "Munisa Saidamirova" }, role: { uz: "Stories-meyker", ru: "Сторисмейкер", en: "Stories maker" } },
  { discipline: "smm", name: { uz: "Abdulaziz Hamidjonov", ru: "Абдулазиз Хамиджонов", en: "Abdulaziz Hamidjonov" }, role: { uz: "SMM mutaxassis", ru: "SMM-специалист", en: "SMM specialist" } },
  { discipline: "smm", name: { uz: "Firdavs Xuvaydullayev", ru: "Фирдавс Хувайдуллаев", en: "Firdavs Khuvaydullayev" }, role: { uz: "Targetolog", ru: "Таргетолог", en: "Targeting specialist" } },
  { discipline: "smm", name: { uz: "Shahlo Shoadhamova", ru: "Шахло Шоадхамова", en: "Shahlo Shoadhamova" }, role: { uz: "Kopirayter", ru: "Копирайтер", en: "Copywriter" } },
  { discipline: "web", name: { uz: "Tohir Bahromov", ru: "Тохир Бахромов", en: "Tohir Bahromov" }, role: { uz: "Veb-dasturchi", ru: "Веб-разработчик", en: "Web developer" } },
  { discipline: "web", name: { uz: "Ibrohim Abrolov", ru: "Иброхим Абролов", en: "Ibrohim Abrolov" }, role: { uz: "UI/UX dizayner", ru: "UI/UX-дизайнер", en: "UI/UX designer" } },
  { discipline: "crew", name: { uz: "Sevinch Mavlonova", ru: "Севинч Мавлонова", en: "Sevinch Mavlonova" }, role: { uz: "Frilanser", ru: "Фрилансер", en: "Freelancer" } },
];

export const DISCIPLINE_ORDER: Discipline[] = ["direction", "production", "smm", "web", "crew"];
