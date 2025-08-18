import React from "react";
import { FaChild, FaDumbbell, FaGamepad, FaRunning, FaTree } from "react-icons/fa";
import { MdSportsBasketball, MdOutlineHomeWork } from "react-icons/md";
import { GiCricketBat } from "react-icons/gi";

const Amenities = ({ openPopup }) => {
  const amenities = [
    { name: "Children Play Area", icon: <FaChild className="text-yellow-500 text-4xl" /> },
    { name: "Clubhouse", icon: <MdOutlineHomeWork className="text-blue-500 text-4xl" /> },
    { name: "Gymnasium", icon: <FaDumbbell className="text-red-500 text-4xl" /> },
    { name: "Indoor Games", icon: <FaGamepad className="text-green-500 text-4xl" /> },
    { name: "Jogging", icon: <FaRunning className="text-orange-500 text-4xl" /> },
    { name: "Multi-Purpose Court", icon: <MdSportsBasketball className="text-purple-500 text-4xl" /> },
    { name: "Butterfly Garden", icon: <FaTree className="text-pink-500 text-4xl" /> },
    { name: "Cricket Practice Net", icon: <GiCricketBat className="text-indigo-500 text-4xl" /> },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Luxurious Amenities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            {amenity.icon}
            <p className="text-gray-600 font-medium text-center mt-2">{amenity.name}</p>
          </div>
        ))}
      </div>

      {/* Request Button */}
      <div className="text-center mt-10">
        <button
          onClick={openPopup}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Request All Amenities
        </button>
      </div>
    </section>
  );
};

export default Amenities;
