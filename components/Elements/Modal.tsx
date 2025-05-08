"use client";

import { useModalStore } from "@/lib/store/modal";
import { X } from "lucide-react";
import { ReactNode } from "react";
import { Animated } from "./Animated/Animated";
import { ANIMATIONS } from "@/lib/constants";

type modalProps = {
  children: ReactNode;
};

const Modal = ({ children }: modalProps) => {
  const { close } = useModalStore();

  return (
    <>
      <section
        className={`bg-[#00000098] z-[31] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-screen`}
        onClick={close}
      ></section>
      <div className="modal max-w-[80%] max-h-[calc(100vh-20%)] rounded-lg z-[32] fixed top-0 right-0 left-0 bottom-0 m-auto flex items-center justify-center">
        <Animated
          animation={ANIMATIONS.FLIP.X}
          duration={0.4}
          className="relative"
        >
          {children}
          <div
            className="absolute top-[-20px] right-[-20px] w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-white cursor-pointer"
            role="button"
            onClick={close}
          >
            <X color="#000" />
          </div>
        </Animated>
      </div>
    </>
  );
};

export default Modal;
