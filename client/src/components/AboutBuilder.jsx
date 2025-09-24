import React, { useState } from "react";

const AboutBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const data = {
      access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81", // 🔑 Web3Forms Access Key
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // reset form
      } else {
        setSuccess("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccess("❌ Something went wrong. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* Left Side - Developer Info */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-green-500 pb-2 inline-block">
            About Developer
          </h2>
          <p className="text-gray-700 mb-4">
            Godrej Properties brings the Godrej Group philosophy of innovation, sustainability and excellence to the real estate industry. Each Godrej Properties development combines a 120–year legacy of excellence and trust with a commitment to cutting-edge design and technology.
          </p>
          <p className="text-gray-800 font-semibold mb-2">
            Agent RERA: <span className="font-normal">UPRERAAGT23971</span>
          </p>
          <p className="text-gray-800 font-semibold mb-4">
            Projects RERA: <span className="font-normal">UPRERAPRJ250823</span>
          </p>
          <p className="text-gray-700 font-semibold mb-2">
            Call Us Anytime: <br />
            <span className="text-green-600 text-lg">+91-9990989295</span>
          </p>
          <p className="text-gray-600 mt-4 mb-2">Schedule A Site Visit</p>
          <p className="text-gray-500 text-sm mb-4">
            Please fill out the form below, our expert will get back to you soon.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 h-fit lg:sticky top-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Call Back</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 text-sm"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone/Mobile"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 text-sm"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 disabled:opacity-50"
            >
              {loading ? "Sending..." : "GET CALL BACK"}
            </button>
          </form>

          {/* Status message */}
          {success && (
            <p className="mt-4 text-sm text-center text-gray-700">{success}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutBuilder;
