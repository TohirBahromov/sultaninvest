"use client";

import { NavbarLists } from "@/lib/source/NavLinks";
import { AppLang } from "@/lib/types";
import { defineActiveNavbarList } from "@/lib/utils/utils";
import Link from "next/link";

export function Navigation({
  active,
  lang,
}: {
  active: string;
  lang: AppLang;
}) {
  return (
    <ul className="flex items-center xl:hidden">
      <Link
        href={`${lang === "uzb" ? "/" : "/ru"}`}
        className="px-2 py-1 mx-1 text-primary"
      >
        <li
          className={`link ${
            defineActiveNavbarList(active, "/") ? "active" : ""
          }`}
        >
          {NavbarLists.home[lang]}
        </li>
      </Link>
      <Link
        href={`${lang === "uzb" ? "/about-us" : "/ru/about-us"}`}
        className="px-2 py-1 mx-1 text-primary"
      >
        <li
          className={`link ${
            defineActiveNavbarList(active, "/about-us") ? "active" : ""
          }`}
        >
          {NavbarLists.aboutus[lang]}
        </li>
      </Link>
      <Link
        href={`${lang === "uzb" ? "/services" : "/ru/services"}`}
        className="px-2 py-1 mx-1 text-primary"
      >
        <li
          className={`link ${
            defineActiveNavbarList(active, "/services") ? "active" : ""
          }`}
        >
          {NavbarLists.services[lang]}
        </li>
      </Link>
      <Link
        href={`${lang === "uzb" ? "/contact" : "/ru/contact"}`}
        className="px-2 py-1 mx-1 text-primary"
      >
        <li
          className={`link ${
            defineActiveNavbarList(active, "/contact") ? "active" : ""
          }`}
        >
          {NavbarLists.contact[lang]}
        </li>
      </Link>
    </ul>
  );
}
