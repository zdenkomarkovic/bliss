import { Colections } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";

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
        <div className="border sticky top-20 w-1/2 h-screen flex flex-col gap-10 items-center justify-center ">
          <h2 className="text-8xl">{title} </h2>
          <Link href={"/products"} className="text-3xl rounded-full p-8 border">
            {" "}
            Vidite sve proizvode
          </Link>
        </div>
        <div className="w-1/2">
          {data.map((item, i) => {
            return (
              <Link href={`/products/${item.id}`} key={i} className="border">
                <Image
                  src={item.img[0]}
                  width={2000}
                  height={2000}
                  alt="kupace gace"
                  className="full"
                />
                <div className="p-7">
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p>din.{item.price}.00</p>
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
