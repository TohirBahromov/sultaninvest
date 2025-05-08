"use client";

import { useMenuStore } from "@/lib/store/menu";
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Animated } from "./Animated/Animated";
import { ANIMATIONS } from "@/lib/constants";
import { defineActiveNavbarList } from "@/lib/utils/utils";
import { AppLang } from "@/lib/types";
import { NavbarLists } from "@/lib/source/NavLinks";

const MobileDrawer = () => {
  const path = usePathname();
  const router = useRouter();
  const { isOpen, handleOpen } = useMenuStore();

  const lang: AppLang = path.startsWith("/ru") ? "rus" : "uzb";

  const handleNavigation = (page: string) => {
    if (lang === "uzb") {
      router.push(page);
    } else {
      router.push("/ru" + page);
    }
    handleOpen();
  };

  return (
    <section
      className={`fixed z-[29] top-0 bottom-0 w-full h-screen bg-secondary flex items-center justify-center ${
        isOpen ? "left-0 delay-500" : "-left-full"
      }`}
    >
      <ul className="w-full px-10 flex flex-col gap-5">
        <Animated animation={ANIMATIONS.FADE.RIGHT} delay={0.4}>
          <button onClick={() => handleNavigation("/")} className="w-full">
            <li
              className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                defineActiveNavbarList(path, "/")
                  ? "bg-primary text-secondBg"
                  : "bg-secondBg text-primary"
              }`}
            >
              {NavbarLists.home[lang]} <ChevronRight />
            </li>
          </button>
        </Animated>
        <Animated animation={ANIMATIONS.FADE.RIGHT} delay={0.5}>
          <button
            onClick={() => handleNavigation("/about-us")}
            className="w-full"
          >
            <li
              className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                defineActiveNavbarList(path, "/about-us")
                  ? "bg-primary text-secondBg"
                  : "bg-secondBg text-primary"
              }`}
            >
              {NavbarLists.aboutus[lang]} <ChevronRight />
            </li>
          </button>
        </Animated>
        <Animated animation={ANIMATIONS.FADE.RIGHT} delay={0.6}>
          <button
            onClick={() => handleNavigation("/services")}
            className="w-full"
          >
            <li
              className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                defineActiveNavbarList(path, "/services")
                  ? "bg-primary text-secondBg"
                  : "bg-secondBg text-primary"
              }`}
            >
              {NavbarLists.services[lang]} <ChevronRight />
            </li>
          </button>
        </Animated>
        <Animated animation={ANIMATIONS.FADE.RIGHT} delay={0.7}>
          <button
            onClick={() => handleNavigation("/contact")}
            className="w-full"
          >
            <li
              className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                defineActiveNavbarList(path, "/contact")
                  ? "bg-primary text-secondBg"
                  : "bg-secondBg text-primary"
              }`}
            >
              {NavbarLists.contact[lang]} <ChevronRight />
            </li>
          </button>
        </Animated>
      </ul>
    </section>
  );
};

export default MobileDrawer;
