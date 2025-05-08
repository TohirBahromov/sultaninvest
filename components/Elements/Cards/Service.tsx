"use client";

import { HomePageService, ServicesPageService } from "@/lib/source/Services";
import Image from "next/image";
import Stack from "@/components/ui/stack";
import { SectionHeading } from "../Title";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { AppLang } from "@/lib/types";
import { useModalStore } from "@/lib/store/modal";

type ServicesPageServiceExtented = {
  lang: AppLang;
} & ServicesPageService;
type HomePageServiceExtented = {
  lang: AppLang;
} & HomePageService;

const contents = {
  button: {
    uzb: "Narxni bilish",
    rus: "Узнать цену",
  },
};

const ServiceCard = ({
  id,
  title,
  text,
  shape,
  img,
  lang,
}: HomePageServiceExtented) => {
  return (
    <div className="relative flex flex-col gap-2 group" key={id}>
      <Image
        alt="Services section shape"
        src={shape}
        width={40}
        height={40}
        className="absolute top-0 left-0 z-[2] group-hover:rotate-180"
      />
      <Image
        alt="Services section service image"
        src={img}
        width={40}
        height={40}
        className="ms-4 z-[4]"
      />
      <h1 className="block_title rubik">{title[lang]}</h1>
      <p className="section_desc">{text[lang]}</p>
    </div>
  );
};

const ServicePageCard = ({
  id,
  title,
  desc,
  lang,
}: ServicesPageServiceExtented) => {
  const { open } = useModalStore();

  const handleSubmit = (modal: string, title: string) => {
    open(modal);
    localStorage.setItem("order", title);
  };

  return (
    <>
      <Stack
        align="column"
        className="w-[85%] xl:w-[90%] md:w-full py-[30px] px-[35px] xl:py-[20px] xl:px-[15px] bg-secondBg border-effect"
      >
        <Image
          src="/assets/icons/logo-no-bg.png"
          alt="SultanInvest logo"
          width={50}
          height={50}
          objectFit="cover"
        />
        <Stack align="column" gap={3}>
          <SectionHeading
            title={title[lang]}
            classname="group-hover:text-primary"
          />
          <h2 className="section_desc">{desc[lang]}</h2>
          <Button
            className="z-20"
            onClick={() => handleSubmit("service-order", title.uzb)}
          >
            {contents.button[lang]} <Wallet />
          </Button>
        </Stack>
      </Stack>
      <div
        className={`w-[70px] h-[70px] group-hover:w-[80px] group-hover:h-[80px] rounded-full bg-primary flex items-center justify-center text-secondary text-[20px] absolute top-1/2 ${
          id % 2 ? "right-full" : "right-0"
        } translate-x-1/2 -translate-y-1/2 xl:right-0 md:right-[40px] md:top-[40px] md:w-[40px] md:h-[40px] md:group-hover:w-[45px] md:group-hover:h-[45px] md:text-[16px]`}
      >
        {`0${id}`}
      </div>
    </>
  );
};

export { ServiceCard, ServicePageCard };
