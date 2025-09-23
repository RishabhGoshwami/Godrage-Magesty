import React from "react";
import home1 from "../assets/home1.webp";
import home2 from "../assets/home2.webp";

const HomeBanner = ({ openPopup }) => {
  const images = [home1, home2]; 
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto image slider
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 mt-18">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-6">
          Welcome to Your Dream Home
        </h1>

        {/* Request E-Brochure Button */}
        <button
          onClick={openPopup} // ✅ ab App.jsx ka state chalega
          className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 
                     hover:scale-110 transform transition duration-300 
                     text-black rounded-full shadow-lg animate-bounce"
        >
          📖 Download-Brochure
        </button>
      </div>
    </section>
  );
};

export default HomeBanner;
