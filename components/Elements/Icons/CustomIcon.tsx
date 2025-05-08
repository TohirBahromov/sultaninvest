import { cn } from "@/lib/utils/utils";

type CustomIconProps = {
  svg: string;
  width?: number;
  height?: number;
  className?: string;
  color?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const CustomIcon = ({
  svg,
  width = 50,
  height = 50,
  className,
  color = "#666666",
  ...props
}: CustomIconProps) => {
  return (
    <div
      className={`${cn(className)}`}
      style={{
        width: width,
        height: height,
        mask: `url(${svg})`,
        backgroundColor: color,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        maskSize: "contain",
      }}
      onClick={props.onClick}
    ></div>
  );
};

export default CustomIcon;
