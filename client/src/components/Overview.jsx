import React from "react";
import OverviewImage from "../assets/Untitled.png";

const Overview = ({ openPopup }) => {
  return (
    <section className="py-16 bg-white" id="overview">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to <b>Godrej Majesty</b> in Sector 12 Greater Noida West —
            a grand residential address that blends modern architecture with lush
            greenery and unmatched connectivity. This upcoming project by{" "}
            <b>Godrej Properties</b> brings you thoughtfully planned 3 & 4 BHK
            luxury residences, designed for elegant living and smart lifestyles.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Crafted for those who seek sophistication, comfort, and convenience
            in one place, <b>Godrej Sector 12</b> offers the perfect setting
            for your dream home, surrounded by the finest infrastructure,
            seamless connectivity, and world-class amenities.
          </p>

          {/* ✅ Request Brochure Button */}
          <button
            onClick={openPopup}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Request Brochure
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={OverviewImage}
            alt="Project Overview"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
