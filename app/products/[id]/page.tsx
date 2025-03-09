"use client";
import ImageSliderKlizni from "@/components/ImageSliderKlizni";
import { colections } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { notFound, useParams } from "@/node_modules/next/navigation";
import React, { useState } from "react";
import { PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";
import { TbRulerMeasure2 } from "react-icons/tb";

const Page = () => {
  const [showSize, setShowSize] = useState(false);
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
          <h1 className="text-2xl md:text-6xl text-primary flex gap-3 items-center">
            {product.title}
            <span className="text-muted text-xl md:text-2xl">
              {" "}
              - din.{product.price}.00
            </span>
          </h1>
          <div className="flex mx-auto gap-3 text-xl items-center ">
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

        <div className="flex gap-3 items-center">
          <p className="text-sm md:text-xl first-letter:pl-4">Size:</p>
          {product.size.map((item, i) => {
            return (
              <p
                key={i}
                className="text-sm md:text-xl bg-primary text-white px-5 py-1 rounded-full "
              >
                {item}
              </p>
            );
          })}
        </div>
        <p
          onClick={() => setShowSize((prev) => !prev)}
          className="text-sm md:text-2xl pl-4 flex gap-3 items-center underline text-primary"
        >
          Size guide
          <TbRulerMeasure2 />
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Image
            src={product.colorsImg}
            width={300}
            height={1000}
            alt="kupace gace"
            className={`w-full h-auto object-cover `}
          />
          <Image
            src={product.sizeImg}
            width={300}
            height={1000}
            alt="kupace gace"
            className={`w-full h-auto object-cover ${showSize ? "" : "hidden"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
