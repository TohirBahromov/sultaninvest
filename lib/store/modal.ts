import { create } from "zustand";

type Modal = {
  modal: string;
  open: (modal: string) => void;
  close: () => void;
};

export const useModalStore = create<Modal>((set) => ({
  modal: "",
  open: (modal: string) => {
    set(() => ({ modal: modal }));
  },
  close: () => {
    set(() => ({ modal: "" }));
  },
}));
