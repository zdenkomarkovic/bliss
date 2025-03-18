"use client";

import Hero3 from "../public/image1-min.png";
import Hero2 from "../public/image2-min.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
      <Image
        src={Hero3}
        alt="bliss"
        fill
        className="md:hidden w-full h-[100dvh] object-cover"
      />
      <Image
        src={Hero2}
        alt="bliss"
        fill
        className="hidden md:block w-full h-[100dvh] object-cover"
      />

      <div className="relative container px-2 md:px-4 mx-auto  flex flex-col gap-6 items-center justify-center z-[1] ">
        <h1 className="hidden md:block text-white md:text-6xl text-xl px-4">
          Exclusive Swimwear{" "}
          <span className="block text-center font-bold text-9xl py-3">
            BLISS
          </span>
        </h1>
        <h2 className="mt-36 md:mt-0 text-white md:text-9xl text-4xl px-4">
          Uskoro...
        </h2>
      </div>
    </div>
  );
};

export default Hero;
