import { AppLang } from "../types";

type LangType = {
  url: string;
  displayName: string;
  appLang: AppLang;
};

const Langs: LangType[] = [
  {
    url: "/",
    displayName: "O'zbekcha",
    appLang: "uzb",
  },
  {
    url: "/ru",
    displayName: "Русский",
    appLang: "rus",
  },
];

export default Langs;
