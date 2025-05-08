import { cn } from "@/lib/utils/utils";

type TitleProps = {
  title: string;
  classname?: string;
};

const SectionTitle = ({ title, classname }: TitleProps) => {
  return (
    <span
      className={`bg-primary px-[15px] py-[5px] rounded-[30px] text-darkYellow section_title w-max ${classname}`}
    >
      {title}
    </span>
  );
};
const BlockTitle = ({ title, classname }: TitleProps) => {
  return <h1 className={`block_title ${cn(classname)}`}>{title}</h1>;
};
const SectionHeading = ({ title, classname }: TitleProps) => {
  return <h1 className={`section_heading ${cn(classname)}`}>{title}</h1>;
};

export { SectionTitle, BlockTitle, SectionHeading };
