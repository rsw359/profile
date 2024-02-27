import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import lr1 from "@/assets/LRoD.png";
import lr2 from "@/assets/LRoD2.png";
import coffee1 from "@/assets/coffee1.png";
import coffee2 from "@/assets/coffee2.png";
import m1 from "@/assets/melania1.png";
import m2 from "@/assets/melania2.png";
import m3 from "@/assets/melania3.png";
import m4 from "@/assets/melania4.png";

const images = [
  { src: lr1, alt: "linear regressions screenshot" },
  { src: lr2, alt: "second linear regressions screenshot" },
  { src: coffee1, alt: "coffee screenshot" },
  { src: coffee2, alt: "second coffee screenshot" },
  { src: m1, alt: "melania screenshot" },
  { src: m2, alt: "second melania screenshot" },
  { src: m3, alt: "third melania screenshot" },
  { src: m4, alt: "fourth melania screenshot" },
];

export default function DataCarousel() {
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
        className="absolute left-0 top-1/2 -translate-y-1/2 transform p-2 text-black hover:cursor-pointer"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform p-2 text-black hover:cursor-pointer"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
