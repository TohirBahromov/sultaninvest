"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Portfolio from "@/lib/source/Portfolio";
import PortfolioCard from "../Elements/Cards/Portfolio";
import { Animated } from "../Elements/Animated/Animated";
import Stack from "../ui/stack";

export default function PortfolioCarousel() {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "ease-in",
    draggable: false,
    arrows: false,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 458,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex items-center justify-between md:flex-col md:gap-4">
        <Animated className="max-w-[40%] xl:max-w-[70%]">
          <h1 className="section_heading md:text-center">
            Portfoliomiz ishonchingiz{" "}
            <span className="text-primary">kaliti</span>
          </h1>
        </Animated>
        <Stack gap={4} className="items-centermd:hidden">
          <button
            onClick={() => sliderRef?.current?.slickPrev()}
            className={`w-[40px] h-[40px] rounded-full flex items-center justify-center ${
              currentSlide === 0
                ? "bg-darkYellow text-white cursor-not-allowed"
                : "bg-white hover:bg-primary"
            }`}
          >
            <ChevronLeft color="#000" />
          </button>
          <button
            onClick={() => sliderRef?.current?.slickNext()}
            className={`w-[40px] h-[40px] rounded-full flex items-center justify-center ${
              currentSlide ===
              Portfolio.length - (sliderRef?.current?.props?.slidesToShow || 1)
                ? "bg-darkYellow text-white cursor-not-allowed"
                : "bg-white hover:bg-primary"
            }`}
          >
            <ChevronRight color="#000" />
          </button>
        </Stack>
      </div>
      <Slider ref={sliderRef} {...settings} className="mt-10">
        {Portfolio.map((i) => (
          <div key={i.id}>
            <PortfolioCard
              id={i.id}
              img={i.img}
              text={i.text}
              service={i.service}
            />
          </div>
        ))}
      </Slider>
      <div className="hidden md:flex items-center justify-center gap-4 mt-10">
        <button
          onClick={() => sliderRef?.current?.slickPrev()}
          className={`w-[40px] h-[40px] rounded-full flex items-center justify-center ${
            currentSlide === 0
              ? "bg-darkYellow text-white cursor-not-allowed"
              : "bg-white hover:bg-primary"
          }`}
        >
          <ChevronLeft color="#000" />
        </button>
        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className={`w-[40px] h-[40px] rounded-full flex items-center justify-center ${
            currentSlide ===
            Portfolio.length - (sliderRef?.current?.props?.slidesToShow || 1)
              ? "bg-darkYellow text-white cursor-not-allowed"
              : "bg-white hover:bg-primary"
          }`}
        >
          <ChevronRight color="#000" />
        </button>
      </div>
    </>
  );
}
