"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sponsors from "@/lib/source/Sponsors";
import SponsorsCard from "../Elements/Cards/Sponsors";

export default function SponsorsCarousel() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    cssEase: "ease-in",
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {Sponsors.map((i) => (
        <SponsorsCard key={i.id} id={i.id} url={i.url} img={i.img} />
      ))}
    </Slider>
  );
}
