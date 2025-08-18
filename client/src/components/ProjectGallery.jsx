import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Image imports
import g4 from "../assets/g4.webp";
import g5 from "../assets/g5.webp";
import gallery from "../assets/gallary.jpg";
import one from "../assets/1.jpg";
import royal from "../assets/royal.png";

const images = [g4, g5, gallery, one, royal];

export default function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Project Gallery</h2>

      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg">
        {/* Images Container */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx}`}
              className="w-full flex-shrink-0 object-cover h-[400px] md:h-[500px]"
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Small Thumbnails */}
      <div className="flex justify-center mt-4 gap-3 flex-wrap">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx}`}
            onClick={() => setCurrentIndex(idx)}
            className={`w-20 h-16 md:w-28 md:h-20 object-cover rounded cursor-pointer border-2 ${
              currentIndex === idx ? "border-blue-600" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
