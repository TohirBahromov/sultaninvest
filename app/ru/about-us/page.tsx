import { Animated } from "@/components/Elements/Animated/Animated";
import AboutCounterCard from "@/components/Elements/Cards/AboutCounterCard";
import Hero from "@/components/Elements/Hero";
import TeamMembersCarousel from "@/components/Elements/TeamMembers";
import { SectionHeading, SectionTitle } from "@/components/Elements/Title";
import Stack from "@/components/ui/stack";
import { ANIMATIONS } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sultan Quick Invest | О нас",
  alternates: {
    canonical: "https://sultaninvest.uz/ru/about-us",
    languages: {
      uz: "https://sultaninvest.uz/about-us",
      ru: "https://sultaninvest.uz/ru/about-us",
    },
  },
};

const page = () => {
  return (
    <>
      <Hero
        page="О нас"
        path={[
          {
            page: "Дом",
            url: "/ru",
          },
          {
            page: "О нас",
            url: "/ru/about-us",
          },
        ]}
      />
      <section className="bg-secondary">
        <div className="container py-32">
          <Stack gap={4} className="items-center xl:flex-col">
            <Stack align="column" gap={2} className="flex-1 xl:mb-4">
              <SectionTitle title="Наша компания" />
              <Animated animation={ANIMATIONS.FADE.DOWN}>
                <SectionHeading title="Ваш партнер в современных профессиях" />
              </Animated>
              <Animated animation={ANIMATIONS.FADE.UP}>
                <p className="page_desc">
                  Султанинвест - компания, предоставляющая ведущие и эффективные
                  услуги в сфере маркетинга. Развивайте свой бизнес в цифровом
                  пространстве вместе с нами. Мы помогаем развивать ваш бизнес
                  через SMM, Digital Services, Production и Личный бренд. В
                  нашей команде работают <strong>более 20</strong>{" "}
                  высококвалифицированных специалистов, каждый из которых
                  является лидером в своей области и предоставляет наиболее
                  эффективные решения для вашего бизнеса. Наша главная цель -
                  увеличить продажи наших клиентов в несколько раз и
                  предоставить им качественные услуги.
                  <br />
                  Компании, с которыми мы работали, наблюдают рост продаж и
                  усиление брендов в цифровом пространстве. Наш подход
                  инновационный, стратегический и ориентирован на результат, и
                  мы уделяем индивидуальное внимание каждому клиенту.
                </p>
              </Animated>
            </Stack>
            <div className="w-[500px] md:w-full aspect-square relative">
              <Image
                src="/images/about-us-image.jpg"
                alt="SultanInvest About Us Page Image"
                fill
                objectFit="cover"
              />
            </div>
          </Stack>
        </div>
      </section>
      <section
        className="bg-secondBg"
        style={{
          backgroundImage: `url(/assets/shapes/about-us-counterbg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container py-32">
          <Stack align="column">
            <SectionHeading
              title="Секрет успеха клиентов..."
              classname="text-center w-full mb-20"
            />
            <div className="grid grid-cols-4 xl:grid-cols-2 xl:gap-10 md:grid-cols-1">
              <AboutCounterCard text="Проекты" type="+" end={45} />
              <AboutCounterCard text="Клиенты" type="+" end={20} />
              <AboutCounterCard text="Год опыта" type="+" end={5} />
              <AboutCounterCard
                text="Профессиональные видео"
                type="+"
                end={1000}
              />
            </div>
          </Stack>
        </div>
      </section>
      <section id="team" className="bg-secondary py-20 pb-32">
        <div className="container pt-14">
          <Stack align="column" gap={2} className="items-center">
            <SectionTitle title="Наша команда" />
            <Animated animation={ANIMATIONS.FADE.DOWN}>
              <h1 className="section_heading text-center">
                С нашей ловкой командой поддержки <br />{" "}
                <span className="text-primary">ознакомление</span>
              </h1>
            </Animated>
            <Animated
              animation={ANIMATIONS.FADE.UP}
              className="max-w-[50%] xl:max-w-[70%] md:max-w-full"
            >
              <p className="section_desc text-center">
                Наша команда профессионалов гарантирует вам быстрые и
                качественные результаты.
              </p>
            </Animated>
          </Stack>
          <TeamMembersCarousel lang="rus" />
        </div>
      </section>
      {/* <section
        id="testimonials"
        className="bg-secondBg pt-20 pb-32"
        style={{
          backgroundImage: "url(/assets/shapes/testimonials-bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container relative pt-14">
          <TestimonialBackground />
          <div className="flex items-center flex-col gap-2">
            <SectionTitle title="Otzivlar" />
            <Animated animation={ANIMATIONS.FADE.DOWN}>
              <h1 className="section_heading text-center">
                Sizga mijozlarimizdan <br />
                <span className="text-primary">tavsiyalar</span>
              </h1>
            </Animated>
          </div>
          <div className="testimonial-wrapper relative w-[70%] lg:w-full mx-auto text-center mt-10 testimonial-carousel">
            <TestimonialCarousel />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default page;
