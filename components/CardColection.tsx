import { Colections } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";
import { ArrowRightIcon } from "lucide-react";

const CardColection = ({
  title,
  data,
}: {
  title: string;
  data: Colections[];
}) => {
  return (
    <div>
      <div className="relative top px-2 md:px-4 mx-auto flex">
        <div className="border sticky top-20 w-1/2 h-screen flex flex-col gap-5 md:gap-10 items-center justify-center ">
          <h2 className="text-3xl md:text-8xl text-primary font-bold">
            {title}{" "}
          </h2>
          <Link
            href={"/products"}
            className=" group text-md md:text-3xl rounded-full bg-primary text-white flex gap-2 hover:scale-105 transition-all duration-300 items-center px-2 py-2 md:px-8 md:py-4 border"
          >
            {" "}
            Vidite sve proizvode
            <ArrowRightIcon className="text-8xl translate-x-[-5px] group-hover:translate-x-0 transition-all duration-300" />
          </Link>
        </div>
        <div className="w-1/2">
          {data.map((item, i) => {
            return (
              <Link href={`/products/${item.id}`} key={i} className="">
                <Image
                  src={item.img[0]}
                  width={2000}
                  height={2000}
                  alt="kupace gace"
                  className=" w-full"
                />
                <div className="p-4 md:p-10">
                  <h4 className="text-lg md:text-3xl font-bold">
                    {item.title}
                  </h4>
                  <p className="md:text-3xl">din.{item.price}.00</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardColection;
