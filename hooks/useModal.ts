import { useState } from "react";

export const useModal = (initialState: string = "") => {
  const [data, setData] = useState<string>(initialState);

  const open = (modal: string) => {
    setData(modal);
  };

  const close = () => {
    setData("");
  };

  return [data, open, close];
};
