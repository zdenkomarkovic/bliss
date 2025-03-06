import ImageSliderKlizni from "@/components/ImageSliderKlizni";

import { colections } from "@/constants/index";
import Image from "@/node_modules/next/image";
import React from "react";

const page = () => {
  return (
    <div className="py-24">
      <h1 className="text-8xl text-center py-12 uppercase">Kupace gace</h1>
      <div className="grid grid-cols-4">
        {colections.map((item, i) => {
          return (
            <div key={i} className="border-b border-r">
              <Image
                src={item.img}
                width={2000}
                height={2000}
                alt="kupace gace"
                className="full"
              />
              <div className="p-10">
                <h4 className="text-2xl font-bold">{item.title}</h4>
                <p className="text-xl">din.{item.price}.00</p>
              </div>
            </div>
          );
        })}
      </div>
      <ImageSliderKlizni />
    </div>
  );
};

export default page;
