import React from "react";
import logoSvg from "@/../../public/Logo.svg";
import searchSvg from "@/../../public/Property 1=Search.svg";
import Image from "next/image";
export default function AppHeader() {
  return (
    <header className="flex justify-around gap-3 items-center">
      <Image src={logoSvg} alt="" />
      <ol className="flex gap-3 items-center">
        <li>參加主日</li>
        <li>啟發課程</li>
        <li>主日奉獻</li>
        <li>主日學課程</li>
        <li>代禱奉獻</li>
      </ol>
      <div className="flex gap-5">
        <Image src={searchSvg} alt="" className="btn-circle" />

        <button className=" btn">登入</button>
        <button className=" btn">加入我們</button>
      </div>
    </header>
  );
}
