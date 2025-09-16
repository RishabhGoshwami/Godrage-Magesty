import React, { useState } from "react";

export default function AutoPopupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [status, setStatus] = useState(""); // ✅ status ke liye

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // ✅ Local backend ko hit kar rahe hain
      const response = await fetch("http://localhost:5000/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: "Godrej Majesty", // ✅ static project
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "" });
        setTimeout(() => onClose(), 2000);
      } else {
        setStatus("❌ Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Something went wrong.");
    }
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
          Godrej Majesty
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">
          I authorize company representatives to Call, SMS, Email or WhatsApp me
          about its products and offers.
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
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="text-center text-sm mt-3 font-semibold">{status}</p>
        )}
      </div>
    </div>
  );
}
