import React from "react";

export default function AutoPopupForm({ isOpen, onClose }) {
  if (!isOpen) return null; // ❌ Agar open nahi hai to kuch render mat karo

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        {/* Form Heading */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Express Your Interest
        </h2>
        <p className="text-lg text-center font-semibold text-red-600 mb-4">
          Go'drej Majesty
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">
          I authorize company representatives to Call, SMS, Email or WhatsApp
          me about its products and offers.
        </p>

        {/* Simple form */}
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-md p-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-md p-2"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full border rounded-md p-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
