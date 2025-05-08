"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TeamMembers from "@/lib/source/Team";
import TeamMemberCard from "./Cards/Team";
import { AppLang } from "@/lib/types";

const TeamMembersCarousel = ({ lang }: { lang: AppLang }) => {
  return (
    <div>
      <div className="flex gap-2 items-center w-full justify-end mb-10 lg:mb-4 mt-4">
        <button className="prev-button w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-secondary text-[20px] cursor-pointer disabled:bg-primary">{`<`}</button>
        <button className="next-button w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-secondary text-[20px] cursor-pointer disabled:bg-primary">{`>`}</button>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          992: { slidesPerView: 4, spaceBetween: 10 },
          576: { slidesPerView: 2, spaceBetween: 20 },
        }}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {TeamMembers.map((i, index) => (
          <SwiperSlide key={index}>
            <TeamMemberCard
              key={i.id}
              id={i.id}
              img={i.img}
              name={i.name}
              lang={lang}
              role={i.role}
              tg={i.tg}
              insta={i.insta}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamMembersCarousel;
