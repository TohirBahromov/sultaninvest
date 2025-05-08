"use client";

import { Navigation } from "./Navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "../Elements/Icons/Logo";
import { usePathname } from "next/navigation";
import { useMenuStore } from "@/lib/store/menu";
import { ChevronDown, Globe, Phone } from "lucide-react";
import useToggle from "@/hooks/useToggle";
import Langs from "@/lib/source/langs";
import Hamburger from "../Elements/Icons/Hamburger";
import { AppLang } from "@/lib/types";
import { callNumber } from "@/lib/constants";
import Stack from "../ui/stack";
import { useScroll } from "@/hooks/useScroll";

const Navbar = () => {
  const path = usePathname();
  const [selected, setSelected] = useToggle(false);
  const { isOpen, handleOpen } = useMenuStore();
  const [scrollY] = useScroll();

  const lang: AppLang = path.startsWith("/ru") ? "rus" : "uzb";
  const isHome: boolean = path === "/" || path === "/ru" || path === "/ru/";

  const RenderOnlyOtherLanguages = () => {
    let href: string;
    if (lang === "uzb") {
      href = "/ru" + path;
    } else {
      href = path.slice(3);
    }
    return Langs.filter((i) => i.appLang !== lang).map((i) => (
      <Link key={i.appLang} href={href}>
        <span
          className={`rounded-lg py-2 w-full inline-block ${
            i.appLang == lang ? "" : ""
          }`}
        >
          {i.displayName}
        </span>
      </Link>
    ));
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 right-0 z-30 ${
          !isHome && 0 >= scrollY ? "bg-transparent" : "bg-secondary"
        }`}
      >
        <div className="container">
          <Stack className="items-center justify-between py-2">
            <Logo size={90} />
            <Navigation active={path} lang={lang} />
            <Stack gap={2} className="items-center">
              <Link href={`tel:${callNumber}`}>
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className="md:h-[40px] md:px-3"
                >
                  <span className="md:hidden">{callNumber}</span>
                  <Phone size={30} className="scale-125 hidden md:block" />
                </Button>
              </Link>
              <button
                className={`relative flex items-center gap-2 text-secondary p-2 z-50 rounded-full hover:bg-primary md:bg-primary ${
                  selected ? "bg-primary" : "bg-white"
                }`}
                onClick={setSelected}
              >
                <Globe />
                <span className="md:hidden">
                  {Langs.find((i) => i.appLang === lang)?.displayName.slice(
                    0,
                    3
                  )}
                </span>
                <ChevronDown
                  className={`${
                    selected ? "rotate-180" : "rotate-0"
                  } md:hidden`}
                  size={20}
                />
                {/* Select language DropDown */}
                <div
                  className={`absolute left-1/2 z-30 -translate-x-1/2 w-full md:w-max md:px-2 bg-white rounded-lg ${
                    selected
                      ? "-bottom-[50px] opacity-100 visible"
                      : "-bottom-[40px] opacity-0 invisible"
                  }`}
                >
                  <div className="relative inset-0 lang-drop z-[5]">
                    <RenderOnlyOtherLanguages />
                  </div>
                </div>
              </button>
              {/* Menu Icon */}
              <button
                className="before:w-full h-[40px] px-[10px] z-50 bg-primary rounded-full hidden xl:block"
                onClick={handleOpen}
              >
                <Hamburger height="15" width="20" active={isOpen} />
              </button>
            </Stack>
          </Stack>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
