import { CustomIconType } from "@/lib/types";

type HamburgerIconType = CustomIconType & {
  active: boolean;
};

const Hamburger = ({ width, height, color, active }: HamburgerIconType) => {
  const iconColor = color || "bg-secondary";
  const iconWidth = width || "50";
  const iconHeight = height || "30";

  return (
    <div
      className={`relative z-[28]`}
      style={{ width: `${iconWidth}px`, height: `${iconHeight}px` }}
    >
      <div
        className={`absolute ${
          active ? "top-[40%]" : "top-[1px]"
        } left-0 duration-300 w-full h-[2px] rounded-full ${iconColor} ${
          active ? "rotate-45" : "rotate-0"
        }`}
      ></div>
      <div
        className={`absolute top-1/2 translate-y-[-50%] left-0 duration-0 w-full h-[2px] rounded-full ${iconColor} ${
          active && "hidden"
        }`}
      ></div>
      <div
        className={`absolute ${
          active ? "bottom-1/2" : "bottom-0"
        } left-0 duration-300 w-full h-[2px] rounded-full ${iconColor} ${
          active ? "rotate-[-45deg]" : "rotate-0"
        }`}
      ></div>
    </div>
  );
};

export default Hamburger;
