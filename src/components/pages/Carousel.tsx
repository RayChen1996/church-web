"use client";
import React from "react";
import Image from "next/image";

import mbannerbgPng from "@/../../public/BN 1920@3x.png";
import HDMIPng from "@/../../public/pray2.jpg";
import SwitchesPng from "@/../../public/pray3.jpg";

// Import Swiper styles

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export default function Carousel() {
  return (
    <div className="relative text-center">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="w-full h-[500px] relative">
            <Image src={mbannerbgPng} alt="" fill className="object-cover" />
            {/* 插入文字 */}
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-2xl font-bold bg-black bg-opacity-50">
              進入豐盛，進入神所為您預備的命定
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[500px] relative">
            <Image src={HDMIPng} alt="" fill className="object-cover" />
            {/* 插入文字 */}
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-2xl font-bold bg-black bg-opacity-50">
              進入豐盛，進入神所為您預備的命定
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[500px] relative">
            <Image src={SwitchesPng} alt="" fill className="object-cover" />
            {/* 插入文字 */}
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-2xl font-bold bg-black bg-opacity-50">
              進入豐盛，進入神所為您預備的命定
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
