import React from "react";

import bg from "@/../../public/New 01.png";
import bg2 from "@/../../public/New 02.png";
import bg3 from "@/../../public/New 03.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">關於種子教會</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          data-aos="fade-right"
          className="bg-white p-4 shadow-md rounded-lg"
        >
          <Image
            src={bg}
            alt="防疫物資分送"
            className="w-full h-40 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-lg font-semibold">防疫物資分送</h3>
          <p className="text-sm text-gray-600">
            全國防疫三級警戒，食物銀行屬社會救助，支援政府將物資分送！
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="bg-white p-4 shadow-md rounded-lg"
        >
          <Image
            src={bg2}
            alt="十一月講座 <奉獻>"
            className="w-full h-40 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-lg font-semibold">十一月講座 奉獻</h3>
          <p className="text-sm text-gray-600">
            2020.12.20_聖誕節慶祝
            今年受肺炎疫情影響，許多家人不能一起慶祝聖誕節，持續在代禱中守望，求主保守、賜福！
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="bg-white p-4 shadow-md rounded-lg"
        >
          <Image
            src={bg3}
            alt="聖誕好禮交換"
            className="w-full h-40 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-lg font-semibold">聖誕好禮交換</h3>
          <p className="text-sm text-gray-600">
            2020聖誕節慶祝，受肺炎疫情影響，許多人沒有辦法參加，持續代禱守望。
          </p>
        </div>
      </div>
      <div className="text-right mt-4 text-blue-500">查看更多</div>
    </div>
  );
}
