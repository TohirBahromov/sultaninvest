import { Animated } from "@/components/Elements/Animated/Animated";
import Hero from "@/components/Elements/Hero";
import InstagramIcon from "@/components/Elements/Icons/InstagramIcon";
import TelegramIcon from "@/components/Elements/Icons/TelegramIcon";
import YoutubeIcon from "@/components/Elements/Icons/YoutubeIcon";
import { SectionHeading, SectionTitle } from "@/components/Elements/Title";
import { ContactForm } from "@/components/Sections/Contact";
import Stack from "@/components/ui/stack";
import {
  ANIMATIONS,
  callNumber,
  email,
  instaURI,
  telegramURI,
  youtubeURI,
} from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sultan Quick Invest | Контакт",
  alternates: {
    canonical: "https://sultaninvest.uz/ru/contact",
    languages: {
      uz: "https://sultaninvest.uz/contact",
      ru: "https://sultaninvest.uz/ru/contact",
    },
  },
};

const page = () => {
  return (
    <>
      <Hero
        page="Контакт"
        path={[
          {
            page: "Дом",
            url: "/ru",
          },
          {
            page: "Контакт",
            url: "/ru/contact",
          },
        ]}
      />
      <section className="bg-secondary py-32">
        <div className="container">
          <Stack align="column" gap={2} className="items-center">
            <SectionTitle title="Свяжитесь с нами" />
            <Animated animation={ANIMATIONS.FLIP.X}>
              <SectionHeading
                title="Мы свяжемся с вами"
                classname="text-center"
              />
            </Animated>
            <Animated
              animation={ANIMATIONS.FLIP.X}
              className="w-[70%] xl:w-full"
            >
              <p className="section_desc text-center">
                Мы ценим ваши вопросы, предложения и мнения. Для быстрого и
                удобного общения заполните эту форму и свяжитесь с нами. Мы
                свяжемся с вами в ближайшее время
              </p>
            </Animated>
          </Stack>
          <ContactForm lang="rus" />
        </div>
      </section>
      <section
        className="bg-secondBg py-32"
        style={{
          background: `url(/assets/shapes/footer-bg.png),#000000e9`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <Stack align="column" gap={5} className="items-center">
            <Animated animation={ANIMATIONS.FADE.DOWN}>
              <SectionHeading
                title="Дополнение для связи..."
                classname="text-center mb-4"
              />
            </Animated>
            <Animated animation={ANIMATIONS.FLIP.X}>
              <Stack align="column" gap={5} className="items-center mb-4">
                <Link
                  href={`tel:${callNumber}`}
                  className="text-[24px] leading-[28px]"
                >
                  {callNumber}
                </Link>
                <Link
                  href={`emailto:${email}`}
                  className="text-[24px] leading-[28px]"
                >
                  {email}
                </Link>
              </Stack>
            </Animated>
            <Animated animation={ANIMATIONS.FADE.UP}>
              <Stack gap={3} className="items-center">
                <Link href={telegramURI} className="flipping-card">
                  <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-[#24A1DE]">
                    <TelegramIcon size={18} color="#fff" />
                  </div>
                </Link>
                <Link href={instaURI} className="flipping-card">
                  <div
                    className="w-[35px] h-[35px] rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #405DE6, #5B51D8, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
                    }}
                  >
                    <InstagramIcon size={18} color="#fff" />
                  </div>
                </Link>
                <Link href={youtubeURI} className="flipping-card">
                  <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-[#FF0000]">
                    <YoutubeIcon size={18} color="#fff" />
                  </div>
                </Link>
              </Stack>
            </Animated>
          </Stack>
        </div>
      </section>
    </>
  );
};

export default page;
