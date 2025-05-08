"use client";

import TestimonialItems from "@/lib/source/Testimonials";
import TestimonialCard from "../Elements/Cards/Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialBackground = () => {
  return (
    <>
      <section className="absolute left-0 h-full w-[400px] z-0 lg:hidden">
        <div className="relative w-full h-full">
          <div className="w-[100px] h-[100px] rounded-full border-[4px] border-white border-solid box-shadow shadow-white absolute top-[30px] right-1/2 xl:w-[80px] xl:h-[80px] xl:right-[70%]">
            <img
              src="/images/testimonial3.jpg"
              alt="testimonial image"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-[130px] h-[130px] rounded-full border-[4px] border-white border-solid box-shadow shadow-white absolute left-0 top-1/2 translate-y-[-50%] xl:w-[100px] xl:h-[100px]">
            <img
              src="/images/testimonial1.jpg"
              alt="testimonial image"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-[100px] h-[100px] rounded-full border-[4px] border-white border-solid box-shadow shadow-white absolute right-1/4 bottom-0 z-[5] xl:w-[80px] xl:h-[80px] xl:right-[40%] xl:bottom-[-30px]">
            <img
              src="/images/testimonial5.jpg"
              alt="testimonial image"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </section>
      <section className="absolute right-0 h-full w-[400px] z-0 lg:hidden">
        <div className="relative w-full h-full">
          <div className="w-[100px] h-[100px] rounded-full border-[4px] border-white border-solid box-shadow shadow-white absolute left-1/2 top-[30px] xl:w-[80px] xl:h-[80px] xl:left-[70%]">
            <img
              src="/images/testimonial2.jpg"
              alt="testimonial image"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-[130px] h-[130px] rounded-full border-[4px] border-white border-solid box-shadow shadow-white absolute right-0 top-1/2 translate-y-[-50%] xl:w-[100px] xl:h-[100px]">
            <img
              src="/images/testimonial4.jpg"
              alt="testimonial image"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-[100px] h-[100px] rounded-full border-[4px] border-white border-solid box-shadow shadow-white absolute left-1/4 bottom-0 z-[5] xl:w-[80px] xl:h-[80px] xl:left-[40%] xl:bottom-[-30px]">
            <img
              src="/images/testimonial6.jpg"
              alt="testimonial image"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const TestimonialCarousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {TestimonialItems.map((i, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard
            key={index}
            text={i.text}
            name={i.name}
            job={i.job}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { TestimonialBackground, TestimonialCarousel };
