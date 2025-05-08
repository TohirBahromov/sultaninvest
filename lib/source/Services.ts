import { AppLang } from "../types";

export type HomePageService = {
  id: number;
  title: Record<AppLang, string>;
  text: Record<AppLang, string>;
  shape: string;
  img: string;
};
export type ServicesPageService = {
  id: number;
  title: Record<AppLang, string>;
  desc: Record<AppLang, string>;
};

const services: HomePageService[] = [
  {
    id: 1,
    title: {
      uzb: "Social Media Marketing",
      rus: "Social Media Marketing",
    },
    text: {
      uzb: "Bizning SMM xizmatimiz sizning auditoriyangiz bilan aloqada bo‘lib, sotuvlaringizni oshiradi va sodiq mijozlar bilan mustahkam aloqalar o‘rnatadi.",
      rus: "Наш SMM-сервис поддерживает связь с вашей аудиторией, увеличивает ваши продажи и устанавливает прочные связи с лояльными клиентами.",
    },
    shape: "/assets/shapes/about-shape-yellow.png",
    img: "/assets/icons/marketing.png",
  },
  {
    id: 2,
    title: {
      uzb: "Raqamli Xizmatlar",
      rus: "Цифровые услуги",
    },
    text: {
      uzb: "Vizitka sayt, Internet do'kon, CRM sistema orqali biznesingizni taniting va avtomatlashtiring.",
      rus: "Продвигайте и автоматизируйте свой бизнес через сайт, интернет-магазин, CRM-систему.",
    },
    shape: "/assets/shapes/about-shape-green.png",
    img: "/assets/icons/crm.png",
  },
  {
    id: 3,
    title: {
      uzb: "Production (Video va Grafik Dizayn)",
      rus: "Production (Видео и графический дизайн)",
    },
    text: {
      uzb: "Reklama kliplari, animatsiyalar va vizual materiallar orqali brendingizni keng auditoriyaga tanitamiz.",
      rus: "Мы продвигаем ваш бренд среди широкой аудитории через рекламные клипы, анимации и визуальные материалы.",
    },
    shape: "/assets/shapes/about-shape-primary.png",
    img: "/assets/icons/mobilograph.png",
  },
  {
    id: 4,
    title: {
      uzb: "Shaxsiy Brendni Rivojlantirish",
      rus: "Развитие личного бренда",
    },
    text: {
      uzb: "Imidjingizni va marketing strategiyalaringizni mukammal tarzda ishlab chiqamiz, sizni sohangizda yetakchi qilamiz.",
      rus: "Мы отлично разработаем ваш имидж и маркетинговые стратегии, сделаем вас лидером в вашей отрасли.",
    },
    shape: "/assets/shapes/about-shape-yellow.png",
    img: "/assets/icons/tgbot.png",
  },
];
const servicesPage: ServicesPageService[] = [
  {
    id: 1,
    title: {
      uzb: "SMM (Social Media Marketing)",
      rus: "SMM (Social Media Marketing)",
    },
    desc: {
      uzb: "Ijtimoiy tarmoqlarida brendingizni rivojlantiring. SMM xizmatimiz yordamida biz sizning auditoriyangiz bilan aloqada bo‘lib, kontent yaratish, reklama kampaniyalari, va o‘zaro muloqot orqali sotuvlaringizni oshiramiz. Yangi mijozlar oqimi sifatli lidlar va bizning strategiyamiz bilan sizning brendingiz nafaqat tanilish, balki sodiq mijozlar bilan mustahkam aloqalar o‘rnatadi.",
      rus: "Развивайте свой бренд в социальных сетях. С помощью нашей услуги SMM мы поддерживаем связь с вашей аудиторией и увеличиваем ваши продажи через создание контента, рекламные кампании и взаимодействие. С потоком новых клиентов, качественными лидами и нашей стратегией ваш бренд не только узнается, но и устанавливает прочные связи с лояльными клиентами.",
    },
  },
  {
    id: 2,
    title: {
      uzb: "Targeting (Maqsadli Auditoriya)",
      rus: "Таргетинг (Целевая аудитория)",
    },
    desc: {
      uzb: "Bizning Targeting xizmatimiz yordamida sizning biznesingizni faqat to‘g‘ri auditoriyaga yo‘naltiramiz, strategiyamiz yordamida reklama va marketing kampaniyalarini aniq maqsadli guruhlarga, demografik va xulq-atvor xususiyatlariga asoslangan holda optimallashtiramiz. Natijada, sizning mahsulot yoki xizmatingizni faqat sizga kerakli mijozlar ko‘radi, bu esa reklama xarajatlarini samarali ravishda kamaytiradi, konversiya stavkalarini oshiradi eng asosiysi sotuvingizni bir necha barobarga oshiradi.",
      rus: "С помощью нашей службы Таргетинг мы ориентируем ваш бизнес только на правильную аудиторию, оптимизируем рекламные и маркетинговые кампании с помощью стратегии, основанной на конкретных целевых группах, демографических и поведенческих особенностях. В результате ваш продукт или услугу видят только те клиенты, которые вам нужны, что эффективно снижает расходы на рекламу, повышает ставки конверсии и, самое главное, увеличивает ваши продажи в несколько раз.",
    },
  },
  {
    id: 3,
    title: {
      uzb: "Shaxsiy Brendni Rivojlantirish",
      rus: "Развитие личного бренда",
    },
    desc: {
      uzb: "O'z shaxsiy brendingizni yaratish — bu muvaffaqiyatga erishishning kaliti. Mutaxassislarimiz sizning imidjingizni, kontentingizni va marketing strategiyalaringizni mukammal tarzda ishlab chiqib, o‘z sohangizda yetakchi bo‘lishga yo‘l ko‘rsatadi.",
      rus: "Создание собственного бренда - это ключ к успеху. Наши специалисты отлично разработают ваш имидж, контент и маркетинговые стратегии, чтобы стать лидером в вашей отрасли.",
    },
  },
  {
    id: 4,
    title: {
      uzb: "Production (Video va Grafik Dizayn)",
      rus: "Production (Видео и графический дизайн)",
    },
    desc: {
      uzb: "Yuqori sifatli video va grafik dizayn orqali brendingizni yanada jozibador qiling. Bizning production xizmatlarimiz reklama video kliplari, animatsiyalar, va vizual materiallar yaratishga yo‘naltirilgan bo‘lib, har bir loyiha sizning brendingizni yanada keng auditoriyaga tanitishga yordam beradi. Sizning fikrlaringizni ijodiy va samarali tarzda obrazga aylantiramiz.",
      rus: "Сделайте свой бренд еще привлекательнее с помощью высококачественного видео и графического дизайна. Наши production-сервисы ориентированы на создание рекламных видеоклипов, анимаций и визуальных материалов, каждый проект помогает продвигать ваш бренд до более широкой аудитории. Мы творчески и эффективно превращаем ваши мысли в образы.",
    },
  },
  {
    id: 5,
    title: {
      uzb: "Veb-saytlar yaratish",
      rus: "Создание веб-сайтов",
    },
    desc: {
      uzb: "Bizning vizitka sayt yaratish xizmatimiz orqali siz biznesingiz yoki shaxsiy faoliyatingiz uchun professional va zamonaviy veb-saytga ega bo‘lasiz. Sayt dizayni mijozlar ehtiyojlariga moslashtirilgan holda tayyorlanadi va mobil qurilmalarga moslashuvchan ko‘rinishda bo‘ladi. Mahsulot va xizmatlaringizni taqdim etish uchun oddiy, lekin ta’sirli yechim taklif etamiz. Biz bilan ishlash orqali siz mijozlaringiz e’tiborini jalb qiluvchi va ishonchni oshiruvchi vositaga ega bo‘lasiz.",
      rus: "С помощью нашей услуги создания визитных карточек вы получите профессиональный и стильный веб-сайт для вашего бизнеса или личной деятельности. Дизайн сайта подготавливается в соответствии с потребностями клиентов и имеет гибкий вид для мобильных устройств. Предлагаем простое, но эффективное решение для предоставления ваших продуктов и услуг. Работая с нами, вы получаете инструмент, который привлекает внимание ваших клиентов и повышает их доверие.",
    },
  },
  {
    id: 6,
    title: {
      uzb: "Internet Do'konlar Yaratish",
      rus: "Создание интернет-магазинов",
    },
    desc: {
      uzb: "Bizning internet do'konlar yaratish xizmatimiz yordamida sizning mahsulotlaringizni onlayn ravishda keng auditoriyaga taqdim etish imkoniyatini yaratamiz. Har bir internet do'kon zamonaviy dizayn, oson navigatsiya va to‘lov tizimlari integratsiyasi bilan ishlab chiqiladi. Bizning e-commerce yechimlarimiz sotuvlarni oshirishga va mijozlarga qulay savdo tajribasini taqdim etishga yo‘naltirilgan.",
      rus: "С помощью нашей услуги по созданию интернет-магазинов мы создаем возможность представлять ваши товары онлайн широкой аудитории. Каждый интернет-магазин будет разработан с современным дизайном, интеграцией легкой навигации и платежных систем. Наши решения e-commerce ориентированы на увеличение продаж и предоставление клиентам удобного торгового опыта.",
    },
  },
  {
    id: 7,
    title: {
      uzb: "CRM - Mijozlar Bilan Aloqa Boshqaruvi",
      rus: "CRM - Управление связью с клиентами",
    },
    desc: {
      uzb: "Bizning CRM xizmatimiz yordamida siz mijozlar bilan aloqalarni boshqarish va mustahkamlashda yangi darajaga erishasiz. CRM tizimi sizning mijozlar bazasini tartibga solib, har bir mijozga individual yondashuvni ta'minlashga yordam beradi, strategiyamiz mijozlarga yuqori darajada xizmat ko‘rsatish, ularni sodiqligini oshirish va sotuvlarni uzluksiz ravishda rivojlantirishga qaratilgan.",
      rus: "С помощью нашей службы CRM вы достигнете нового уровня в управлении и укреплении отношений с клиентами. CRM-система помогает упорядочить вашу клиентскую базу и обеспечить индивидуальный подход к каждому клиенту. Наша стратегия направлена на высокий уровень обслуживания клиентов, повышение их лояльности и непрерывное развитие продаж.",
    },
  },
];

export { services, servicesPage };
