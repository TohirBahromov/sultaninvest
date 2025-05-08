import { cn } from "@/lib/utils/utils";
import { ReactNode } from "react";

type StackProps = {
  children: ReactNode;
  align?: "row" | "column";
  gap?: number;
  className?: string;
};

const Stack = ({ children, align = "row", gap = 0, className }: StackProps) => {
  return (
    <div
      className={`flex ${align == "column" ? "flex-col" : ""} ${cn(className)}`}
      style={{gap: `${4 * gap}px`}}
    >
      {children}
    </div>
  );
};

export default Stack;
