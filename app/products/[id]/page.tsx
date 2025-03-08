"use client";
import ImageSliderKlizni from "@/components/ImageSliderKlizni";
import { colections } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { notFound, useParams } from "@/node_modules/next/navigation";
import React from "react";
import { PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";

const Page = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? parseInt(params.id) : 0;
  const product = colections.find((c) => c.id === id);
  if (!product) {
    notFound();
  }
  const images = product.img;
  return (
    <div className="container px-2 md:px-4 mx-auto  md:py-0 flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <ImageSliderKlizni images={images} />
      </div>
      <div className="md:w-1/2  md:py-36 md:px-16 space-y-3 py-5">
        <div className="space-y-3 ">
          <h1 className="text-2xl md:text-6xl">
            {product.title}
            <span className="text-xl md:text-2xl">
              {" "}
              - din.{product.price}.00
            </span>
          </h1>
          <div className="flex mx-auto gap-3 items-center justify-center">
            <p>Nazovite i narucite</p>
            <Link href="tel:+3816">
              <motion.button
                whileHover={{
                  color: "hsl(var(--foreground))",
                  backgroundColor: "hsl(var(--primary))",
                }}
                className=" items-center justify-center rounded-full text-primary border-primary border-2 text-sm md:text-lg py-1 px-2 md:py-2 md:px-4 transition-colors flex"
              >
                <PhoneIcon />
                <p className="">+38160 000 000</p>
              </motion.button>
            </Link>
          </div>
        </div>
        <p className="text-sm md:text-xl first-letter:pl-4">
          {product.description1}
        </p>
        <p className="text-sm md:text-xl first-letter:pl-4">
          {product.description2}
        </p>
        <p className="text-sm md:text-xl first-letter:pl-4">{product.size}</p>
        <div className="grid grid-cols-2 gap-2">
          <Image
            src={product.colorsImg}
            width={300}
            height={1000}
            alt="kupace gace"
            className="w-full h-auto object-cover"
          />
          <Image
            src={product.sizeImg}
            width={300}
            height={1000}
            alt="kupace gace"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
