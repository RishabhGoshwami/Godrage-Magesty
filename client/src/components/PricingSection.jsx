import React from "react";
import img3Bhk from "../assets/3bhk.png"; // 3 BHK image
import img4Bhk from "../assets/4bhk.png"; // 4 BHK image

export default function PricingSection({ openPopup }) {
  // Data for the different apartment plans.
  const plans = [
    { 
      type: "3 BHK", 
      price: "2.98 - 3.26 Cr*", 
      area: "On Request",
      img: img3Bhk, 
    },
    { 
      type: "3.5 BHK", 
      price: "3.33 - 3.86 Cr*",
      area: "On Request",
      img: "https://placehold.co/300x200/4B5563/FFFFFF?text=3.5+BHK", 
    },
    { 
      type: "4 BHK", 
      price: "3.60 - 4.17 Cr*",
      area: "On Request",
      img: img4Bhk,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Main heading for the section */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
        Area & Pricing
      </h2>

      {/* Desktop View */}
      <div className="hidden md:block max-w-7xl mx-auto overflow-hidden rounded-xl shadow-2xl">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr className="text-left font-semibold text-lg">
              <th className="py-4 px-6">Type</th>
              <th className="py-4 px-6">Area</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6">Floor Plan</th>
              <th className="py-4 px-6">Details</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((item, idx) => (
              <tr 
                key={idx} 
                className="border-b border-gray-200 transition-all duration-300 hover:bg-gray-100"
              >
                <td className="py-5 px-6 font-bold text-gray-800">{item.type}</td>
                <td className="py-5 px-6 text-gray-600">{item.area}</td>
                <td className="py-5 px-6 font-semibold text-emerald-600">{item.price}</td>
                <td className="py-5 px-6">
                  <img
                    src={item.img}
                    alt={item.type}
                    className="w-32 h-20 object-cover rounded-lg mx-auto cursor-pointer
                                   transition-all duration-500 blur-sm hover:blur-none hover:scale-110"
                    onClick={openPopup}
                  />
                </td>
                <td className="py-5 px-6 text-center">
                  <button
                    onClick={openPopup}
                    className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-full 
                                   shadow-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105"
                  >
                    Get Full Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-8">
        {plans.map((item, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <img
              src={item.img}
              alt={item.type}
              className="w-full h-48 object-cover cursor-pointer blur-sm hover:blur-none transition-all duration-500"
              onClick={openPopup}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.type}</h3>
              <p className="text-gray-600 mb-3">Area: {item.area}</p>
              <p className="text-xl font-semibold text-emerald-600 mb-4">{item.price}</p>
              <button
                onClick={openPopup}
                className="w-full bg-gray-900 text-white font-semibold px-4 py-3 rounded-full 
                           shadow-md transition-all duration-300 hover:bg-gray-700 hover:scale-105"
              >
                Get Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
