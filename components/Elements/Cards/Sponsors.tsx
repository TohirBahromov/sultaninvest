import { SponsorsType } from "@/lib/source/Sponsors";
import Link from "next/link";
import React from "react";

const SponsorsCard = ({ id, url, img }: SponsorsType) => {
  return (
    <Link
      href={url}
      className="hover:translate-x-[-5px] duration-300 w-[125px] h-[40px] flex items-center justify-center"
    >
      <img src={img} alt="sponsors logo" className="w-full h-full" />
    </Link>
  );
};

export default SponsorsCard;
