import { colections } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";

const page = () => {
  return (
    <div className="py-24 container mx-auto px-2 md:px-4">
      <h1 className="text-8xl text-center py-12 uppercase">Bliss</h1>
      <div className="grid md:grid-cols-4 auto-rows-fr">
        {colections.map((item, i) => {
          return (
            <Link
              href={`/products/${item.id}`}
              key={i}
              className="border flex flex-col h-full"
            >
              <Image
                src={item.img[4]}
                width={2000}
                height={2000}
                alt="kupace gace"
                className="w-full h-full object-cover"
              />
              <div className="p-5 md:p-10">
                <h4 className="text-2xl font-bold">{item.title}</h4>
                <p className="text-xl">din.{item.price}.00</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
