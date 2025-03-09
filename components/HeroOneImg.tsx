"use client";

import Hero3 from "../public/visual- izgled feeda 2-min.jpg";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
      <Image
        src={Hero3}
        alt="slep puric"
        fill
        className="w-full h-[100dvh] object-cover"
      />

      <div className="relative container px-2 md:px-4 mx-auto  flex flex-col gap-6 items-center justify-center z-[1] ">
        <h1 className="text-primary md:text-7xl text-xl font-bold px-4">
          Bliss Collection Official
        </h1>
      </div>
    </div>
  );
};

export default Hero;
