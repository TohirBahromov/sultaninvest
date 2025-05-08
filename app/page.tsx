import List from "@/components/About-us/List";
import { Animated } from "@/components/Elements/Animated/Animated";
import { ServiceCard } from "@/components/Elements/Cards/Service";
import PlusIcon from "@/components/Elements/Icons/PlusIcon";
import Separator from "@/components/Elements/Separator";
import { SectionTitle } from "@/components/Elements/Title";
import SponsorsCarousel from "@/components/Sections/Sponsors";
import { Button } from "@/components/ui/button";
import { ANIMATIONS } from "@/lib/constants";
import { services } from "@/lib/source/Services";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper mt-[106px]">
      <section
        id="hero"
        className="bg-secondBg h-[calc(100vh-106px)] flex items-center justify-center"
      >
        <div className="container">
          <div className="h-full flex items-center justify-between xl:flex-col">
            <div className="flex flex-col gap-3 xl:my-7 xl:gap-7">
              <SectionTitle
                title="Sizning sevimli agentligingiz"
                classname="xl:mx-auto"
              />
              <Animated animation={ANIMATIONS.FADE.LEFT}>
                <h1 className="page_title quicksand xl:text-center">
                  Raqamli xizmatlar <br /> & SMM{" "}
                  <span className="text-primary">Agentligi</span>
                </h1>
              </Animated>
              <Animated animation={ANIMATIONS.FADE.UP}>
                <p className="page_desc xl:text-center">
                  Biz bilan biznesingizni yangi darajaga olib chiqing –
                  innovatsion SMM va raqamli texnologiyalar yordamida
                  mijozlaringiz bilan mustahkam aloqa o‘rnating, brendingizni
                  rivojlantiring va bozorda muvaffaqiyatga erishing.
                </p>
              </Animated>
              <Animated className="flex items-center gap-2 mt-2 xl:justify-center">
                <Link href="/contact">
                  <Button>
                    Ishni boshlash <PlusIcon />
                  </Button>
                </Link>
                {/* <Button variant={"secondary"}>
                  <Play /> Videoni ko'rish
                </Button> */}
              </Animated>
            </div>
            <Animated
              animation={ANIMATIONS.FADE.LEFT}
              className="w-[1000px] h-[500px] relative ms-2 xl:hidden"
            >
              <Image
                src={`/images/home-hero.jpg`}
                alt="Sultan Invest Quick hero image"
                fill
                objectFit="cover"
              />
            </Animated>
          </div>
        </div>
      </section>
      <section id="about-us" className="bg-secondary py-20 pb-[300px]">
        <Separator
          classname="h-[80px] w-full mt-[-80px]"
          color1="#1d1d1d"
          color2="#051A06"
        />
        <div className="container pt-8">
          <div className="flex items-center gap-8 xl:flex-col-reverse">
            <div className="w-1/2 xl:hidden relative">
              <img
                src="/images/about-us-illustrator.png"
                alt="Sultan Invest Quick about us image"
                className="h-full"
              />
            </div>
            <div className="w-1/2 xl:w-full flex flex-col gap-2 relative">
              <SectionTitle title="Biz haqimizda" classname="z-10" />
              <Animated animation={ANIMATIONS.FADE.DOWN}>
                <h1 className="section_heading z-10">
                  Biznesingizni biz bilan yanada{" "}
                  <span className="text-primary">rivojlantiring</span>
                </h1>
              </Animated>
              <Animated animation={ANIMATIONS.FADE.RIGHT}>
                <p className="section_desc z-10">
                  Va raqobatchilaringizdan ajralib turing, mijozlaringizga
                  innovatsion orqali o‘ziga xos tajriba taqdim eting.
                </p>
              </Animated>
              <Animated
                animation={ANIMATIONS.FADE.LEFT}
                className="flex flex-col my-2 z-10"
              >
                <List text="Qat’iy deadline" />
                <List text="Tajribali jamoa" />
                <List text="So’nggi rusumdagi texnikalar" />
                <List text="Kreativ yondashuv" />
              </Animated>
              <Animated animation={ANIMATIONS.FADE.UP} className="z-10">
                <Link href="/about-us">
                  <Button>
                    Ko'proq ma'lumot <PlusIcon />
                  </Button>
                </Link>
              </Animated>
              {/* Shapes */}
              <Image
                alt="About us shape 1"
                src="/assets/shapes/wave.png"
                width={100}
                height={20}
                className="absolute top-0 wave z-[1]"
              />
              <Image
                alt="About us shape 2"
                src="/assets/shapes/about-2.png"
                width={500}
                height={400}
                className="absolute bottom-0 right-[-50px] rotate-[270deg] z-[1] opacity-20"
              />
              <Image
                alt="About us shape 3"
                src="/assets/shapes/about-3.png"
                width={100}
                height={100}
                className="absolute bottom-0 right-[30px] z-[2] animate-spin duration-10000"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="sponsors" className="bg-secondBg py-20">
        <Separator
          classname="h-[80px] w-full mt-[-80px]"
          color1="#051A06"
          color2="#1d1d1d"
        />
        <div className="container pt-14">
          <div
            className="w-full h-[476px] lg:h-[400px] rounded-lg flex items-center justify-center flex-col gap-6 mt-[-320px] z-[11]"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(/images/watch-bg.jpg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <span className="lg:hidden">+ Intro +</span>
            <h1 className="section_heading text-center">
              Biz bilan yaqindan tanishing
            </h1>
            <div className="w-[100px] h-[100px] lg:w-[80px] lg:h-[80px] rounded-full flex items-center justify-center play-video cursor-pointer bg-white">
              <Play size={38} color="#000" />
            </div>
          </div>
          <div>
            <h2 className="text-[26px] quicksand leading-[34px] font-bold text-center my-10">
              Mijozlarimiz bilan <span className="text-primary">tanishing</span>
            </h2>
            <SponsorsCarousel />
          </div>
        </div>
      </section>
      <section id="services" className="bg-secondary py-20">
        <Separator
          classname="h-[80px] w-full mt-[-80px]"
          color1="#1d1d1d"
          color2="#051A06"
        />
        <div className="container pt-14">
          <div className="flex items-center justify-between gap-4 xl:flex-col xl:gap-10">
            <div className="w-1/2 xl:w-full flex flex-col gap-3">
              <SectionTitle title="Bizning servislar" />
              <Animated animation={ANIMATIONS.FADE.DOWN}>
                <h1 className="section_heading">
                  Topshirayotgan ishingizdan{" "}
                  <span className="text-primary">havotirlanmang</span>
                </h1>
              </Animated>
              <Animated animation={ANIMATIONS.FADE.RIGHT}>
                <p className="section_desc mt-1 mb-4">
                  Siz faqat natijaga e’tibor qarating, qolganini biz hal qilamiz
                </p>
              </Animated>
              <Animated animation={ANIMATIONS.FADE.LEFT}>
                <Link href="/services" className="xl:hidden">
                  <Button>
                    Ko'proq ma'lumot <PlusIcon />
                  </Button>
                </Link>
              </Animated>
            </div>
            <div className="w-1/2 xl:w-full">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-[34px]">
                {services.map((i, index) => (
                  <Animated
                    animation={ANIMATIONS.FADE.DOWN}
                    delay={index % 2 && 0.2}
                    key={i.id}
                  >
                    <ServiceCard
                      id={i.id}
                      title={i.title}
                      text={i.text}
                      shape={i.shape}
                      img={i.img}
                      lang="uzb"
                    />
                  </Animated>
                ))}
              </div>
            </div>
            <Link href="/services" className="hidden xl:block mt-4">
              <Button>
                Ko'proq ma'lumot <PlusIcon />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* <section id="portfolio" className="bg-secondBg py-20">
        <Separator
          classname="h-[80px] w-full mt-[-80px]"
          color1="#051A06"
          color2="#1d1d1d"
        />
        <div className="container pt-14">
          <PortfolioCarousel />
          <h1 className="text-[20px] leading-[28px] text-center mt-10 quicksand font-bold">
            Loyihangiz bormi ?{" "}
            <Link href="/contact" className="underline text-primary">
              Bizga murojaat qiling
            </Link>
          </h1>
        </div>
      </section> */}
      <section id="contact" className="bg-secondary py-20 pb-14">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-1/2 xl:hidden">
              <img
                src="/images/contact-illustrator.png"
                alt="Contact section illustrator"
                className="w-[90%] h-[90%]"
              />
            </div>
            <div className="w-1/2 xl:w-full flex flex-col gap-2 relative">
              <SectionTitle title="Bizga bog'laning" classname="z-[]" />
              <Animated animation={ANIMATIONS.FADE.DOWN}>
                <h1 className="section_heading z-[2]">
                  Loyihangiz bormi ? Bizga{" "}
                  <span className="text-primary">murojaat qiling</span>
                </h1>
              </Animated>
              <Animated animation={ANIMATIONS.FADE.RIGHT}>
                <p className="section_desc mt-2 mb-4 z-[2]">
                  Sizda qiziqish uyg’otgan bo’lsak “Bog’lanish” tugmasini bosing
                  va o’z ma’lumotlaringizni qoldiring.Tez orada siz bilan
                  bog’lanamiz
                </p>
              </Animated>
              <Animated animation={ANIMATIONS.FADE.LEFT}>
                <Link href="/contact" className="z-[2]">
                  <Button>
                    Bog'lanish <PlusIcon />
                  </Button>
                </Link>
              </Animated>
              <img
                src="/assets/icons/phone.png"
                alt="phone icon for contact section"
                width={40}
                height={50}
                className="absolute contact-image1 z-0"
              />
              <img
                src="/assets/icons/headphone.png"
                alt="headphone icon for contact section"
                width={40}
                height={50}
                className="absolute contact-image2 z-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
