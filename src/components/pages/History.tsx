import React from "react";
import bg3 from "@/../../public/picture.png";
import Image from "next/image";
export default function History() {
  return (
    <div className=" bg-white py-12">
      <h2 className="text-center text-2xl font-bold mb-6">種子教會歷程</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Period */}
          <div data-aos="fade-down-left" className="col-span-1 text-center">
            <p className="text-lg font-bold">1988-2015</p>
            <div className="mt-4">
              <Image
                src={bg3}
                alt="1988-2015"
                className="w-full min-h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 text-sm">
                在台中中正路上，已經有30年事奉，無數次受洗，神的僕僕在悅服中出發
              </p>
            </div>
          </div>
          {/* Second Period */}
          <div data-aos="fade-down-right" className="col-span-1 text-center">
            <p className="text-lg font-bold">2015-2017</p>
            <div className="mt-4">
              <Image
                src={bg3}
                alt="1988-2015"
                className="w-full min-h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 text-sm">
                教會自然經歷交通波濤，仍持守祭壇,
                屬靈生命不斷在專用地紮根，成就福音
              </p>
            </div>
          </div>
          {/* Third Period */}
          <div data-aos="fade-down-left" className="col-span-1 text-center">
            <p className="text-lg font-bold">2018-2022至今</p>
            <div className="mt-4">
              <Image
                src={bg3}
                alt="1988-2015"
                className="w-full min-h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 text-sm">
                因著種植和裝備使得教會起飛，並在教會建設發展事務中肩負更多的事奉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
