"use client";

import Link from "next/link";
import Logo from "../Elements/Icons/Logo";
import { Mail, MapPin, Phone } from "lucide-react";
import TelegramIcon from "../Elements/Icons/TelegramIcon";
import InstagramIcon from "../Elements/Icons/InstagramIcon";
import YoutubeIcon from "../Elements/Icons/YoutubeIcon";
import {
  address,
  callNumber,
  email,
  instaURI,
  telegramURI,
  youtubeURI,
} from "@/lib/constants";
import { usePathname } from "next/navigation";
import { AppLang } from "@/lib/types";
import { NavbarLists } from "@/lib/source/NavLinks";

const Footer = () => {
  const path = usePathname();
  const lang: AppLang = path.startsWith("/ru") ? "rus" : "uzb";

  const contents = {
    hymn: {
      uzb: "Ijodiy g‘oyalar, muvaffaqiyatli natijalar!",
      rus: "Творческие идеи, успешные результаты!",
    },
    sqi: {
      uzb: "SQI",
      rus: "SQI",
    },
    exp: {
      uzb: "Tajriba",
      rus: "Опыт",
    },
    contact: {
      uzb: "Bog'lanish uchun",
      rus: "Для связи",
    },
    copyright: {
      uzb: "©Copyright sultaninvest.uz 2024. Barcha huquqlar himoyalangan",
      rus: "©Copyright sultaninvest.uz 2024. Все права защищены",
    },
  };

  return (
    <>
      <footer className="bg-secondBg relative">
        <div className="container pb-[70px] md:pb-[20px] pt-20 z-[2]">
          <div className="grid grid-cols-4 lg:grid-cols-3 gap-6 lg:gap-x-0 lg:gap-y-10 md:grid-cols-1">
            <div className="z-[2] me-6 lg:col-span-3 md:col-span-1 lg:flex lg:items-center lg:justify-between md:me-0 md:flex-col md:gap-4">
              <Logo size={80} />
              <p className="text-[15px] leading-[27px] font-normal mt-4 text-justify lg:w-[70%] lg:mt-0 md:w-full md:text-center">
                {contents.hymn[lang]}
              </p>
            </div>
            <ul className="z-[2] md:flex md:items-center md:justify-center md:flex-col">
              <h1 className="text-[20px] leading-[28px] font-bold quicksand mb-8">
                {contents.sqi[lang]}
              </h1>
              <Link
                href={`${lang === "uzb" ? "/" : "/ru"}`}
                className="text15 hover:text-primary duration-100"
              >
                <li className="mb-[10px]">{NavbarLists.home[lang]}</li>
              </Link>
              <Link
                href={`${lang === "uzb" ? "/about-us" : "/ru/about-us"}`}
                className="text15 hover:text-primary duration-100"
              >
                <li className="mb-[10px]">{NavbarLists.aboutus[lang]}</li>
              </Link>
              <Link
                href={`${lang === "uzb" ? "/services" : "/ru/services"}`}
                className="text15 hover:text-primary duration-100"
              >
                <li className="mb-[10px]">{NavbarLists.services[lang]}</li>
              </Link>
              <Link
                href={`${lang === "uzb" ? "/contact" : "/ru/contact"}`}
                className="text15 hover:text-primary duration-100"
              >
                <li className="mb-[10px]">{NavbarLists.contact[lang]}</li>
              </Link>
            </ul>
            <ul className="z-[2] md:flex md:items-center md:justify-center md:flex-col">
              <h1 className="text-[20px] leading-[28px] font-bold quicksand mb-8">
                {contents.exp[lang]}
              </h1>
              <Link
                href={`${
                  lang === "uzb"
                    ? "/about-us#testimonials"
                    : "/ru/about-us#testimonials"
                }`}
                className="text15 hover:text-primary duration-100"
              >
                <li className="mb-[10px]">
                  {lang == "uzb" ? "Otzivlar" : "Отзывы"}
                </li>
              </Link>
            </ul>
            <ul className="z-[2] lg:w-[150%] md:w-full md:flex md:items-center md:justify-center md:flex-col">
              <h1 className="text-[20px] leading-[28px] font-bold quicksand mb-8">
                {contents.contact[lang]}
              </h1>
              <li className="text15 hover:text-primary duration-100 mb-[10px] flex gap-2">
                <MapPin />{" "}
                <span className="w-[200px] xl:w-[100px] md:w-full">
                  {address[lang]}
                </span>
              </li>
              <Link
                href={`mailto:${email}`}
                className="text15 text-center hover:text-primary duration-100"
              >
                <li className="mb-[10px] flex items-center gap-2">
                  <Mail />{" "}
                  <span className="w-[200px] xl:w-[100px] md:w-full">
                    {email}
                  </span>
                </li>
              </Link>
              <Link
                href={`tel:${callNumber}`}
                className="text15 text-center hover:text-primary duration-100"
              >
                <li className="mb-[10px] flex items-center gap-2">
                  <Phone />{" "}
                  <span className="w-[200px] xl:w-[100px] md:w-full">
                    {callNumber}
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <section id="copyright" className="bg-secondBg py-[30px]">
          <div className="container">
            <div className="flex items-center justify-between md:flex-col md:gap-6">
              <span className="text-[13px] leading-[18px] font-normal z-[2] md:text-center">
                {contents.copyright[lang]}
              </span>
              <div className="flex items-center gap-3 z-[2]">
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
              </div>
            </div>
          </div>
        </section>
        <div
          className="z-0 w-[800px] h-full absolute right-0 top-0"
          style={{
            backgroundImage: "url(/assets/shapes/footer-bg.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="absolute left-0 top-0 inset-0 bg-[#00000065] z-0"></div>
      </footer>
    </>
  );
};

export default Footer;
