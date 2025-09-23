import React, { useState } from "react";

// The PDF files cannot be imported directly as modules.
// Instead, reference them from the public/assets directory.
// Make sure to place the actual PDF files in your project's `public` folder.
// For example: /public/assets/Godrej Sec-12 Master Plan.pdf
// and /public/assets/Sector 12_Unit plan 3 & 4 Bhk 10-06-25 T 1,2,3 .pdf

export default function AutoPopupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("");
  const [showDownloads, setShowDownloads] = useState(false);

  // Reference the PDF files directly as URL strings
  const pdfs = {
    site: "/assets/Godrej Sec-12 Master Plan.pdf",
    floor: "/assets/Sector 12_Unit plan 3 & 4 Bhk 10-06-25 T 1,2,3 .pdf",
  };

  if (!isOpen) return null;

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
      console.error("Error submitting lead:", error);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  const handleDownload = async (url, filename) => {
    try {
      const a = document.createElement("a");
      a.href = url;
      a.download = filename || "download.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setStatus("✅ Download started. If it didn't, try opening in a new tab.");
    } catch {
      setStatus("❌ Download failed. Try opening in new tab.");
      window.open(url, "_blank");
    }
  };

  const handleDownloadBoth = () => {
    handleDownload(pdfs.site, "site-plan.pdf");
    setTimeout(() => handleDownload(pdfs.floor, "floor-plan.pdf"), 350);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg transform transition-all duration-300 scale-95 animate-zoomIn">
        <button
          onClick={() => {
            setShowDownloads(false);
            setStatus("");
            onClose();
          }}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors duration-200 text-3xl leading-none"
        >
          &times;
        </button>

        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2 font-poppins">Godrej Majesty</h2>
        <p className="text-xl text-center font-semibold text-gray-600 mb-4 font-inter">
          Fill in your details and instantly download the brochure! ✨
        </p>

        <p className="text-sm text-gray-500 text-center mb-6">
          I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers.
        </p>

        {!showDownloads ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2 transition-colors duration-200 font-medium"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2 transition-colors duration-200 font-medium"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2 transition-colors duration-200 font-medium"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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
                className="bg-purple-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>📄 Site Plan</span>
              </button>
              <button
                onClick={() => handleDownload(pdfs.floor, "floor-plan.pdf")}
                className="bg-teal-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>📄 Floor Plan</span>
              </button>
            </div>
            <button
              onClick={handleDownloadBoth}
              className="w-full bg-green-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200 mt-2 transform hover:scale-105"
            >
              📥 Download Both
            </button>
            <button
              onClick={() => {
                setShowDownloads(false);
                setStatus("");
                onClose();
              }}
              className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 mt-2"
            >
              Go Back
            </button>
          </div>
        )}

        {status && <p className="text-center text-sm mt-4 font-semibold text-gray-600">{status}</p>}
      </div>
    </div>
  );
}
