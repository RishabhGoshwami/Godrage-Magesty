import React, { useState } from "react";

// ✅ PDF files placed in `public/assets` folder
// Example: /public/assets/Godrej Sec-12 Master Plan.pdf
//          /public/assets/Sector 12_Unit plan 3 & 4 Bhk 10-06-25 T 1,2,3 .pdf

export default function AutoPopupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("");
  const [showDownloads, setShowDownloads] = useState(false);

  const pdfs = {
    site: "/assets/Godrej Sec-12 Master Plan.pdf",
    floor: "/assets/Sector 12_Unit plan 3 & 4 Bhk 10-06-25 T 1,2,3 .pdf",
  };

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ FORM SUBMISSION FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // 1️⃣ Send data to Web3Forms (for email notification)
      const web3Response = await fetch("https://api.web3forms.com/submit", {
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

      const web3Result = await web3Response.json();

      // 2️⃣ Send data to CRM API
      const crmUrl = `https://app.propertyexpertrealtors.com/api/getRecords.php?authentication_key=VndsbUlpKzhKdWpEbEZNSUNva2t1UT09&leads_full_name=${encodeURIComponent(
        formData.name
      )}&leads_phone_number=${encodeURIComponent(
        formData.phone
      )}&leads_email_id=${encodeURIComponent(
        formData.email
      )}&leads_type=LEAD&leads_projects_name=${encodeURIComponent(
        "Godrej Majesty"
      )}&leads_source=Website&leads_entry_type=AutoPopup`;

      const crmResponse = await fetch(crmUrl);
      const crmText = await crmResponse.text(); // CRM may not return JSON

      // 3️⃣ Handle responses
      if (web3Result.success && crmResponse.ok) {
        setStatus("✅ Form submitted successfully! Choose a brochure to download.");
        setFormData({ name: "", email: "", phone: "" });
        setShowDownloads(true);
      } else {
        setStatus("❌ Submission failed on one of the endpoints.");
        console.warn("CRM Response:", crmText);
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  // ✅ File Download Handlers
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

        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2 font-poppins">
          Godrej Majesty
        </h2>
        <p className="text-xl text-center font-semibold text-gray-600 mb-4 font-inter">
          Fill in your details and instantly download the brochure! ✨
        </p>

        <p className="text-sm text-gray-500 text-center mb-6">
          I authorize company representatives to Call, SMS, Email or WhatsApp me
          about its products and offers.
        </p>

        {/* ✅ Form or Download Section */}
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
            <p className="text-green-700 font-bold text-lg">
              🎉 Thank you! You can now download the brochures:
            </p>
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

        {status && (
          <p className="text-center text-sm mt-4 font-semibold text-gray-600">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
