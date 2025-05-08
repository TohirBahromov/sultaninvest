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
  title: "Sultan Quick Invest | Biz haqimizda",
  alternates: {
    canonical: "https://sultaninvest.uz/about-us",
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
        page="Biz haqimizda"
        path={[
          {
            page: "Uy",
            url: "/",
          },
          {
            page: "Biz haqimizda",
            url: "/about-us",
          },
        ]}
      />
      <section className="bg-secondary">
        <div className="container py-32">
          <Stack gap={4} className="items-center xl:flex-col">
            <Stack align="column" gap={2} className="flex-1 xl:mb-4">
              <SectionTitle title="Kompaniyamiz" />
              <Animated animation={ANIMATIONS.FADE.DOWN}>
                <SectionHeading title="Zamonaviy kasblardagi hamkoringiz" />
              </Animated>
              <Animated animation={ANIMATIONS.FADE.UP}>
                <p className="page_desc">
                  Sultaninvest— Marketing sohasida yetakchi va samarali
                  xizmatlar taqdim etuvchi kompaniya. Biz bilan biznesingizni
                  raqamli maydonda rivojlantiring. SMM, Raqamli xizmatlar,
                  Production va Shaxsiy brend orqali sizning biznesingizni
                  rivojlantirishga yordam bemiz. Bizning jamoamizda{" "}
                  <strong>20 dan ortiq</strong> yuqori malakali mutaxassislar
                  ishlaydi, ular har biri o'z sohasida yetakchi bo'lib, sizning
                  biznesingiz uchun eng samarali yechimlarni taqdim etadi.
                  Bizning asosiy maqsadimiz — mijozlarimizning sotuvlarini bir
                  necha barobarga oshirish va ularga yuqori sifatli xizmatlarni
                  taqdim etish.
                  <br />
                  Biz bilan ishlagan kompaniyalar sotuvlarining o‘sishi va
                  brendlarining raqamli maydonda kuchayishini kuzatib bormoqda.
                  Bizning yondashuvimiz innovatsion, strategik va natijaga
                  yo'naltirilgan bo'lib, har bir mijozimizga individual e'tibor
                  qaratamiz.
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
              title="Mijozlarning muvaffiqati siri..."
              classname="text-center w-full mb-20"
            />
            <div className="grid grid-cols-4 xl:grid-cols-2 xl:gap-10 md:grid-cols-1">
              <AboutCounterCard text="Loyihalar" type="+" end={45} />
              <AboutCounterCard text="Mijozlar" type="+" end={20} />
              <AboutCounterCard text="Yil tajriba" type="+" end={5} />
              <AboutCounterCard
                text="Professional videolar"
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
            <SectionTitle title="Bizning jamoa" />
            <Animated animation={ANIMATIONS.FADE.DOWN}>
              <h1 className="section_heading text-center">
                Yordamga chaqqon jamoamiz bilan <br />{" "}
                <span className="text-primary">tanishing</span>
              </h1>
            </Animated>
            <Animated
              animation={ANIMATIONS.FADE.UP}
              className="max-w-[50%] xl:max-w-[70%] md:max-w-full"
            >
              <p className="section_desc text-center">
                Bizning professionallar jamoamiz sizga tez va sifatli
                natijalarni kafolatlaydi.
              </p>
            </Animated>
          </Stack>
          <TeamMembersCarousel lang="uzb" />
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
