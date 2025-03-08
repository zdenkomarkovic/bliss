"use client";
import ImageSliderKlizni from "@/components/ImageSliderKlizni";
import { colections } from "@/constants/index";
import Image from "@/node_modules/next/image";
import { notFound, useParams } from "@/node_modules/next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? parseInt(params.id) : 0;
  const product = colections.find((c) => c.id === id);
  if (!product) {
    notFound();
  }
  const images = product.img;
  return (
    <div className="container px-2 md:px-4 mx-auto flex flex-col-reverse md:flex-row">
      <div className="md:w-1/2">
        <ImageSliderKlizni images={images} />
      </div>
      <div className="md:w-1/2 md:py-36 md:px-16">
        <h1 className="text-6xl">{product.title}</h1>
        <p className="text-2xl"> din.{product.price}.00</p>
        <p>{product.description1}</p>
        <p>{product.description2}</p>
        <p>{product.size}</p>
        <Image
          src={"/TABELA VELICINA.png"}
          width={300}
          height={1000}
          alt="kupace gace"
        />
      </div>
    </div>
  );
};

export default Page;
