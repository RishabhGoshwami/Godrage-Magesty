import React, { useState } from "react";

export default function AutoPopupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Default form submit ko rokta hai

    // Apni details yahan update karein:
    // 1. Apna phone number international format me daalein (e.g., +919990980295)
    // 2. Jo message aapko milna hai, use banayein
    const phoneNumber = "+919990989295";
    const message = `New Inquiry for Godrej Majesty :\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`;

    // Message ko URL-safe banane ke liye encode karein
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL banayein
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // User ko naye tab mein WhatsApp par redirect karein
    window.open(whatsappUrl, "_blank");

    // Form ko reset karein ya popup ko close karein
    // onClose();
    // setFormData({ name: '', email: '', phone: '' });
  };

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

        {/* Form with handler */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border rounded-md p-2"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border rounded-md p-2"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            className="w-full border rounded-md p-2"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Submit on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}