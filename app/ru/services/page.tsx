import { Animated } from "@/components/Elements/Animated/Animated";
import { ServicePageCard } from "@/components/Elements/Cards/Service";
import Hero from "@/components/Elements/Hero";
import ServiceOrder from "@/components/Elements/ServiceOrder";
import { SectionTitle } from "@/components/Elements/Title";
import Stack from "@/components/ui/stack";
import { ANIMATIONS } from "@/lib/constants";
import { servicesPage } from "@/lib/source/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sultan Quick Invest | Услуги",
  alternates: {
    canonical: "https://sultaninvest.uz/ru/services",
    languages: {
      uz: "https://sultaninvest.uz/services",
      ru: "https://sultaninvest.uz/ru/services",
    },
  },
};

const page = () => {
  return (
    <>
      <Hero
        page="Наши сервисы"
        path={[
          {
            page: "Дом",
            url: "/",
          },
          {
            page: "Наши сервисы",
            url: "/ru/services",
          },
        ]}
      />
      <section className="bg-secondary py-32">
        <div className="container">
          <Stack align="column" gap={2} className="w-full items-center mb-10">
            <SectionTitle title="Наши сервисы" />
            <Animated animation={ANIMATIONS.FLIP.X}>
              <h1 className="section_heading text-center">
                <span className="text-primary">Наши услуги</span>
              </h1>
            </Animated>
            <Animated
              className="w-[60%] xl:w-full"
              animation={ANIMATIONS.FLIP.X}
            >
              <p className="section_desc text-center">
                Каждый из наших сервисов направляет ваш бизнес на успех
              </p>
            </Animated>
          </Stack>
          <section className="services-wrapper relative pt-10 pb-2 md:before:hidden xl:before:left-full before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:border-dotted before:border-[1px] before:border-primary">
            <Stack
              align="column"
              className="my-10 md:my-0 xl:gap-[16px!important]"
            >
              {servicesPage.map((i) => (
                <Animated
                  animation={ANIMATIONS.FLIP.Y}
                  key={i.id}
                  threshold={1}
                  className="w-1/2 xl:w-full service_page_card group flex first:mt-[33px!important] odd:justify-end odd:ms-auto odd:-mt-28 even:-mt-28 xl:odd:mt-0 xl:even:mt-0 relative xl:odd:justify-start"
                >
                  <ServicePageCard
                    id={i.id}
                    title={i.title}
                    desc={i.desc}
                    lang="rus"
                  />
                </Animated>
              ))}
            </Stack>
            <ServiceOrder lang="rus" />
          </section>
        </div>
      </section>
    </>
  );
};

export default page;
