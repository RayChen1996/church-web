"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import bg from "@/../../public/Daily 1920.png";

export default function DailyBible() {
  return (
    <div className="relative text-center mt-8">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="w-2/3 m-auto h-[300px] relative bg-cover bg-center rounded-3xl bg-white">
            <Image src={bg} alt="" fill className=" object-cover" />

            <div className="absolute  text-white left-8 top-8 bg-black/50 rounded-3xl p-3 ">
              每日經文
            </div>

            <div className="absolute right-10 bottom-28  lg:text-5xl  bg-opacity-50  mb-4 flex items-center font-extrabold justify-center text-white text-2xl">
              流淚撒種的，必歡呼收割
            </div>
            <div className=" absolute right-10 bottom-20 text-[#C0FFC8]">
              取自 詩歌126:5
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
