import { AppLang } from "../types";

export type TeamMemberType = {
  id: number;
  img: string;
  name: Record<AppLang, string>;
  role: Record<AppLang, string>;
  tg: string;
  insta: string;
};

const TeamMembers: TeamMemberType[] = [
  {
    id: 1,
    img: "/images/team1.jpg",
    name: {
      uzb: "Sultonbek Hasanov",
      rus: "Султонбек Ҳасанов",
    },
    role: {
      uzb: "Direktor (Asoschi)",
      rus: "Директор (Учредитель)",
    },
    tg: "sultonbek_khasanov",
    insta: "sultonbek",
  },
  {
    id: 2,
    img: "/images/team2.jpg",
    name: {
      uzb: "Tohir Bahromov",
      rus: "Тоҳир Баҳромов",
    },
    role: {
      uzb: "Web developer",
      rus: "Wеб девелопер",
    },
    tg: "tbakhramo_v",
    insta: "_bakhramovvv__",
  },
  {
    id: 3,
    img: "/images/team3.jpg",
    name: {
      uzb: "Abdulaziz Hamidjonov",
      rus: "Абдулазиз Ҳамиджонов",
    },
    role: {
      uzb: "SMM mutaxassis",
      rus: "SMM специалист",
    },
    tg: "hamidjonov",
    insta: "hamidjonov",
  },
  {
    id: 4,
    img: "/images/team4.jpg",
    name: {
      uzb: "Firdavs Xuvaydullayev",
      rus: "Фирдавс Хувайдуллаев",
    },
    role: {
      uzb: "Targetolog",
      rus: "Таргетолог",
    },
    tg: "bakhramo_v",
    insta: "_bakhramovvv__",
  },
  {
    id: 5,
    img: "/images/team4.jpg",
    name: {
      uzb: "Shahlo Shoadhamova",
      rus: "Шаҳло Шоадҳамова",
    },
    role: {
      uzb: "Kopirayter",
      rus: "Копирайтер",
    },
    tg: "bakhramo_v",
    insta: "_bakhramovvv__",
  },
  {
    id: 6,
    img: "/images/team4.jpg",
    name: {
      uzb: "Akbar Hasanboyev",
      rus: "Акбар Ҳасанбоев",
    },
    role: {
      uzb: "Grafik dizayner",
      rus: "График дизайнер",
    },
    tg: "bakhramo_v",
    insta: "_bakhramovvv__",
  },
  {
    id: 7,
    img: "/images/team4.jpg",
    name: {
      uzb: "Ibrohim Abrolov",
      rus: "Иброҳим Абролов",
    },
    role: {
      uzb: "UI/UX dizayner",
      rus: "УИ/УХ дизайнер",
    },
    tg: "bakhramo_v",
    insta: "_bakhramovvv__",
  },
  {
    id: 8,
    img: "/images/team4.jpg",
    name: {
      uzb: "Sevinch Mavlonova",
      rus: "Севинч Мавлонова",
    },
    role: {
      uzb: "Frilanser",
      rus: "Фрилансер",
    },
    tg: "bakhramo_v",
    insta: "_bakhramovvv__",
  },
  {
    id: 9,
    img: "/images/team4.jpg",
    name: {
      uzb: "Munisa Saidamirova",
      rus: "Муниса Саидамирова",
    },
    role: {
      uzb: "Storiesmaker",
      rus: "Сториесмакер",
    },
    tg: "bakhramo_v",
    insta: "_bakhramovvv__",
  },
  {
    id: 10,
    img: "/images/team4.jpg",
    name: {
      uzb: "Bobur Akyulov",
      rus: "Бобур Акюлов",
    },
    role: {
      uzb: "Kinomatograf",
      rus: "Киноматограф",
    },
    tg: "bakhramo_v",
    insta: "_bakhramovvv__",
  },
  {
    id: 11,
    img: "/images/team4.jpg",
    name: {
      uzb: "Abdulloh Fozilov",
      rus: "Абдуллоҳ Фозилов",
    },
    role: {
      uzb: "Videograf",
      rus: "Видеограф",
    },
    tg: "bakhramo_v",
    insta: "_bakhramovvv__",
  },
  {
    id: 12,
    img: "/images/team4.jpg",
    name: {
      uzb: "Azizbek Ahrarov",
      rus: "Азизбек Аҳраров",
    },
    role: {
      uzb: "Videograf",
      rus: "Видеограф",
    },
    tg: "bakhramo_v",
    insta: "_bakhramovvv__",
  },
  {
    id: 13,
    img: "/images/team4.jpg",
    name: {
      uzb: "Qodirbek Sultonov",
      rus: "Қодирбек Султонов",
    },
    role: {
      uzb: "Montajor",
      rus: "Монтажор",
    },
    tg: "bakhramo_v",
    insta: "_bakhramovvv__",
  },
];

export default TeamMembers;
