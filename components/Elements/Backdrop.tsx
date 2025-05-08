"use client";
import { useMenuStore } from "@/lib/store/menu";
import { defineBodyBlock } from "@/lib/utils/utils";
import { useEffect } from "react";

const Backdrop = () => {
  const { isOpen } = useMenuStore();

  useEffect(() => {
    defineBodyBlock(isOpen);
  }, [isOpen]);

  return (
    <section
      className={`fixed top-0 w-full h-screen bg-[#00000098] z-[25] ${
        isOpen ? "left-0" : "-left-full delay-500"
      }`}
    ></section>
  );
};

export default Backdrop;
