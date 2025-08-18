import React from "react";

const PrimeLocation = ({ openPopup }) => {
  return (
    <section className="bg-white text-gray-800 min-h-screen flex flex-col md:flex-row items-center p-8 gap-8 md:gap-16">
      {/* Left section */}
      <div className="flex-1 max-w-2xl w-full text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 drop-shadow-lg">
          Location Advantage
        </h1>
        <ul className="list-disc list-inside space-y-4 text-left text-lg md:text-xl font-medium">
          <li><span className="font-bold">Gaur Chowk</span> – 5 km</li>
          <li><span className="font-bold">Sector 52 Metro</span> – 12 km</li>
          <li><span className="font-bold">Sector 18 Hub</span> – 18 km</li>
          <li><span className="font-bold">Noida Expressway</span> – 15 km</li>
          <li><span className="font-bold">NH-24 Ghaziabad</span> – 9 km</li>
          <li><span className="font-bold">Jewar Airport</span> – 50 km</li>
        </ul>

        {/* Button */}
        <button
          className="mt-8 px-8 py-4 bg-yellow-500 text-black font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-500/50"
          onClick={openPopup}
        >
          Request Location Detail
        </button>
      </div>

      {/* Right section */}
      <div className="flex-1 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default PrimeLocation;
