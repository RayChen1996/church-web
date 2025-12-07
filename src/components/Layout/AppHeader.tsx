import React from "react";
import logoSvg from "@/../../public/Logo.svg";
import searchSvg from "@/../../public/Property 1=Search.svg";
import Image from "next/image";
export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-3 px-4 py-3">
        <Image src={logoSvg} alt="" className="h-auto w-32" />
        <ol className="hidden items-center gap-3 text-black font-bold md:block lg:flex lg:gap-12">
          <li>參加主日</li>
          <li>啟發課程</li>
          <li>主日奉獻</li>
          <li>主日學課程</li>
          <li>代禱奉獻</li>
        </ol>
        <div className="flex items-center gap-3 sm:gap-5">
          <Image src={searchSvg} alt="" className="btn-circle" />
          <button className="btn rounded-2xl border-2 border-[#18A7A9] bg-white text-[#18A7A9]">
            登入
          </button>
          <button className="btn rounded-2xl border-none bg-[#18A7A9] text-white">
            加入我們
          </button>
        </div>
      </div>
    </header>
  );
}
