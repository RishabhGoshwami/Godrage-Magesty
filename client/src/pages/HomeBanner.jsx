import React, { useState, useEffect } from "react";
import home1 from "../assets/banner_bg.jpg";
import home2 from "../assets/banner_bg1.jpg";
import { FaMoneyBillWave, FaPercent, FaBed } from "react-icons/fa6";
import { BiTimer } from "react-icons/bi";

export default function HomeBannerWithForm() {
  const images = [home1, home2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // State for form and download
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("");
  const [showDownloads, setShowDownloads] = useState(false);

  // Auto image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const pdfs = {
    site: "/assets/Godrej Sec-12 Master Plan.pdf",
    floor: "/assets/Sector 12_Unit plan 3 & 4 Bhk 10-06-25 T 1,2,3 .pdf",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: "Godrej Majesty",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Form submitted successfully! Choose a brochure to download.");
        setFormData({ name: "", email: "", phone: "" });
        setShowDownloads(true);
      } else {
        setStatus("❌ Submission failed. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  const handleDownload = (url, filename) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "download.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setStatus("✅ Download started. If it didn't, try opening in a new tab.");
  };

  const handleDownloadBoth = () => {
    handleDownload(pdfs.site, "site-plan.pdf");
    setTimeout(() => handleDownload(pdfs.floor, "floor-plan.pdf"), 350);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row">
      {/* Both sides will share the same background */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Left side - Banner Content */}
      <div className="relative z-10 w-full md:w-1/2 h-screen md:h-auto flex flex-col justify-center px-4 py-12 md:p-16 lg:pl-24">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 max-w-xl">
          Welcome to Your Dream Home
        </h1>
        <p className="text-lg md:text-2xl text-yellow-400 font-semibold mb-6 flex items-center">
          <BiTimer className="mr-2" /> Hurry! Limited-Time Offers
        </p>

        <div className="flex flex-col gap-4 mb-8 w-full max-w-sm">
          <div className="bg-gradient-to-br from-blue-700 to-teal-800 rounded-2xl p-4 flex items-center text-white shadow-lg">
            <FaMoneyBillWave className="text-4xl mr-4 text-orange-400" />
            <div>
              <p className="font-bold text-lg">Pay Per Month Support</p>
              <p className="text-2xl md:text-3xl font-extrabold">₹22,00,000*</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-4 flex items-center text-white shadow-lg">
            <FaPercent className="text-4xl mr-4 text-orange-400" />
            <div>
              <p className="font-bold text-lg">Pay Per Month Scheme</p>
              <p className="text-2xl md:text-3xl font-extrabold text-teal-400">₹9,999*</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-4 flex items-center text-white shadow-lg">
            <FaBed className="text-4xl mr-4 text-orange-400" />
            <div>
              <p className="font-bold text-lg">Key Features</p>
              <p className="text-sm md:text-base mt-1">Modular Kitchen, Italian Marble, Wardrobes</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-300 mt-4">
          *Terms & Conditions Apply. Limited period offer.
        </p>
      </div>

      {/* Right side - Form */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="relative w-full max-w-md bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-extrabold mb-2 text-gray-900 text-center">Godrej Majesty</h2>
          <p className="text-gray-600 text-center mb-6 text-sm md:text-base">
            Fill in your details and instantly download the brochure! ✨
          </p>

          {!showDownloads ? (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                📥 Download
              </button>
            </form>
          ) : (
            <div className="space-y-4 text-center animate-fadeIn">
              <p className="text-green-700 font-bold text-lg">🎉 Thank you! You can now download the brochures:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => handleDownload(pdfs.site, "site-plan.pdf")}
                  className="bg-purple-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-200"
                >
                  📄 Site Plan
                </button>
                <button
                  onClick={() => handleDownload(pdfs.floor, "floor-plan.pdf")}
                  className="bg-teal-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200"
                >
                  📄 Floor Plan
                </button>
              </div>
              <button
                onClick={handleDownloadBoth}
                className="w-full bg-green-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200 mt-2"
              >
                📥 Download Both
              </button>
            </div>
          )}

          {status && <p className="text-center text-sm mt-4 font-semibold text-gray-600">{status}</p>}
        </div>
      </div>
    </section>
  );
}
