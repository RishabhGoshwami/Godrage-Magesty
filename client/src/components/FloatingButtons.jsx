import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaDownload } from "react-icons/fa";
import AutoPopupForm from "./AutoPopupForm";

const FloatingButtons = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919990989295"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="hidden md:inline">Chat on WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href="tel:9990989295"
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          <FaPhoneAlt className="text-xl" />
          <span>9990989295</span>
        </a>

        {/* Download Brochure Button */}
        <button
          onClick={openForm}
          className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
        >
          <FaDownload className="text-xl" />
          <span>Download Brochure</span>
        </button>
      </div>

      {/* AutoPopupForm */}
      <AutoPopupForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};

export default FloatingButtons;
