import React from "react";
import bhk3 from "../assets/3bhk.png";

import bhk4 from "../assets/4bhk.png";

export default function PricingSection({ openPopup }) {
  const plans = [
    { type: "3 BHK", price: "2.98-3.26 Cr*", img: bhk3 },
    { type: "3.5 BHK", price: "3.33-3.86 Cr*", img: bhk3 },
    { type: "4 BHK", price: "3.60-4.17 Cr*", img: bhk4 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Area & Pricing
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow">
          <thead>
            <tr className="bg-blue-600 text-white text-sm md:text-base">
              <th className="border p-3">Type</th>
              <th className="border p-3">Area</th>
              <th className="border p-3">Price (Onward)</th>
              <th className="border p-3">Floor Plan</th>
              <th className="border p-3">Details</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 transition duration-300 text-center text-sm md:text-base"
              >
                <td className="border p-3 font-semibold">{item.type}</td>
                <td className="border p-3">On Request</td>
                <td className="border p-3 text-blue-700 font-medium">
                  {item.price}
                </td>
                <td className="border p-3 text-center">
                  <img
                    src={item.img}
                    alt={item.type}
                    className="w-24 h-20 md:w-28 md:h-24 object-cover rounded-lg mx-auto cursor-pointer blur-sm hover:blur-none transition"
                    onClick={openPopup}
                  />
                </td>
                <td className="border p-3 text-center">
                  <button
                    onClick={openPopup}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Complete Costing Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {plans.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-lg shadow p-4 bg-white"
          >
            <h3 className="text-lg font-semibold mb-2">{item.type}</h3>
            <p className="text-gray-600 mb-1">Area: On Request</p>
            <p className="text-blue-700 font-medium mb-3">{item.price}</p>
            <div className="flex items-center justify-between">
              <img
                src={item.img}
                alt={item.type}
                className="w-28 h-24 object-cover rounded-lg cursor-pointer blur-sm hover:blur-none transition"
                onClick={openPopup}
              />
              <button
                onClick={openPopup}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
