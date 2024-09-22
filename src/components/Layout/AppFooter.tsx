"use client";
import React from "react";
import logoSvg from "@/../../public/Logo.svg";
import phoneSvg from "@/../../public/Property 1=phone.svg";
import mapSvg from "@/../../public/Property 1=map.svg";
import mailSvg from "@/../../public/Property 1=mail.svg";

import Image from "next/image";
export default function AppFooter() {
  return (
    <>
      <section className="flex gap-3   items-center   justify-around">
        <div className="  flex gap-6 flex-col">
          <Image src={logoSvg} alt="" />
          <select className="select select-bordered select-none">
            <option value="">繁體中文</option>
          </select>
        </div>
        <div className="flex gap-3 flex-col">
          <span className="flex gap-3">
            <span>
              <Image src={phoneSvg} alt="" />
            </span>
            <span>04-22259123</span>
          </span>

          <span className="flex gap-3">
            <span>
              <Image src={mapSvg} alt="" />
            </span>
            <span>台中市中區自由路二段六號十樓之２</span>
          </span>

          <span className="flex gap-3">
            <span>
              <Image src={mailSvg} alt="" />
            </span>
            <span>ray.10315332@gmail.com</span>
          </span>
        </div>
        <div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSeedofchristchurch&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=195099154894651"
            width="340"
            height="131"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>
      <hr className=" w-full divide-y-2 divide-slate-400  "></hr>
      <footer className="footer  py-8 flex justify-center items-center m-auto">
        COPYRIGHT 2022 台中基督種子教會介紹網站 | 個人Side Project，並非真實網站
      </footer>
    </>
  );
}
