import { create } from "zustand";

type Menu = {
  isOpen: boolean;
  handleOpen: () => void;
};

export const useMenuStore = create<Menu>((set) => ({
  isOpen: false,
  handleOpen: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
}));
