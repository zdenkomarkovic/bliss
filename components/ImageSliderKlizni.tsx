"use client";

import React, { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/BEACH BABE 1 color NEON YELLOW-min.jpg",
  "/BEACH BABE 1.1 color NEON YELLOW-min.jpg",
  "/BEACH BABE 2 color NEON ORANGE-min.jpg",
  "/BEACH BABE 2.1 color NEON ORANGE-min.jpg",
  "/BEACH BABE 3 color NEON ORANGE-min.jpg",
  "/BEACH BABE 4 color NEON ORANGE-min.jpg",
  "/BEACH BABE 4-ispis-min.jpg",
];

const ImageSliderKlizni = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "keepSnaps", // Sprečava ručno prevlačenje
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.scrollTo(activeIndex, false); // Postavljamo početnu sliku bez animacije

    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    return () => {
      if (emblaApi) emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Funkcija za glatko skrolovanje
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        setTimeout(() => {
          emblaApi.scrollTo(index, {
            duration: 800, // Animacija traje 800ms
            easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing za prirodan efekat
          });
        }, 10); // Kratak delay da sprečimo početno zapinjanje
      }
    },
    [emblaApi]
  );

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      {/* Glavni slider */}
      <div className="overflow-hidden relative rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="min-w-full">
              <img
                src={src}
                alt={`Slika ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Thumbnails preko slike */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-lg">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-16 h-16 border-2 rounded-md overflow-hidden transition ${
                activeIndex === index ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <img
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSliderKlizni;
