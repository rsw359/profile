import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import iro from "@/assets/iro.png";
import nic1 from "@/assets/nic-cage-bw.png";
import nic2 from "@/assets/nic-cage-color.png";

const images = [
  { src: iro, alt: "iro iro screenshot" },
  { src: nic1, alt: "black and white image" },
  { src: nic2, alt: "colorized image of nic cage" },
];

export default function IroCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative">
      <Image
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        width={500}
        height={500}
        className="justify-center rounded-md"
      />
      <button
        onClick={previousImage}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform p-2 text-white hover:cursor-pointer"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform p-2 text-white hover:cursor-pointer"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
