import { useCallback, useState } from "react";

const useToggle = (boolean: boolean) => {
  const [state, setstate] = useState(boolean);

  const toggleState = useCallback(() => {
    setstate((prev) => !prev);
  }, []);

  return [state, toggleState] as const;
};

export default useToggle;
