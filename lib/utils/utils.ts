import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Langs from "../source/langs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function defineActiveNavbarList(path: string, expected: string) {
  if (path.startsWith("/ru") && path !== "/ru") {
    path = path.slice(3);
  }
  if (path === "/ru") {
    path = "/";
  }
  const ExpectedPath =
    expected === "/"
      ? Langs.find((i) => i.url === path)?.url
      : Langs.find((i) => i.url === path)?.url + expected;
  if (
    path === expected ||
    path === expected + "/" ||
    path === ExpectedPath ||
    path === ExpectedPath + "/"
  ) {
    return true;
  } else {
    return false;
  }
}

export function defineBodyBlock(boolean: boolean) {
  if (typeof window !== "undefined") {
    document.body.style.overflow = boolean ? "hidden" : "";
  }
}
