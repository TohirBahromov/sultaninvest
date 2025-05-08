import { ANIMATIONS } from "../constants";

export type CustomIconType = {
  size?: number;
  color?: string;
  width?: string;
  height?: string;
};

// Creating all possible animation types
type ValueOf<T> = T[keyof T];
type NestedValueOf<T> = T extends object
  ? ValueOf<{ [K in keyof T]: ValueOf<T[K]> }>
  : never;
export type AnimationType = NestedValueOf<typeof ANIMATIONS>;

// Website Language
export type AppLang = "uzb" | "rus";
