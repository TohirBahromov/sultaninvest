import { TeamMemberType } from "@/lib/source/Team";
import { Share2 } from "lucide-react";
import TelegramIcon from "../Icons/TelegramIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import Link from "next/link";
import { AppLang } from "@/lib/types";

type TeamMemberTypeProps = {
  lang: AppLang;
} & TeamMemberType;

const TeamMemberCard = ({ img, role, name, lang }: TeamMemberTypeProps) => {
  return (
    <article className="flex flex-col rounded-lg hover:translate-y-[-5px] cursor-pointer">
      <div
        className="aspect-square flex flex-col justify-end p-[15px] rounded-t-lg"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* <div className="flex items-center justify-between gap-3 py-1 w-[40px] h-[48px] ms-auto group hover:w-[130px] relative">
          <Link
            href={`https://t.me/${tg}`}
            target="_blank"
            className="absolute left-0 z-[2]"
          >
            <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
              <TelegramIcon size={22} />
            </div>
          </Link>
          <Link
            href={`https://instagram.com/${insta}`}
            className="absolute left-0 z-[2] group-hover:left-1/2 group-hover:translate-x-[-50%]"
            target="_blank"
          >
            <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
              <InstagramIcon size={20} />
            </div>
          </Link>
          <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center z-[4] absolute right-0 group-hover:bg-darkYellow">
            <Share2
              size={18}
              className="rotate-180 group-hover:rotate-0 group-hover:text-white text-darkYellow"
            />
          </div>
        </div> */}
      </div>
      <div className="p-[15px] bg-secondBg rounded-b-lg flex-grow">
        <h1 className="text-[20px] leading-[28px] mb-[5px] quicksand font-bold">
          {name[lang]}
        </h1>
        <span className="section_title">{role[lang]}</span>
      </div>
    </article>
  );
};

export default TeamMemberCard;
