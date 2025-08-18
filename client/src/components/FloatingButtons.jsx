import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919990890295"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="hidden md:inline">Chat on WhatsApp</span>
      </a>

      {/* Call Button with Number */}
      <a
        href="tel:9990890295"
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <FaPhoneAlt className="text-xl" />
        <span>9990890295</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
