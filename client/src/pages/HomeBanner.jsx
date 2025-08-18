import React, { useState, useRef } from 'react';
// Import the local assets directly.
import bannerImg from '../assets/banner1.webp';
import logo from '../assets/logo-1.png';

// Main App component that contains the entire banner section.
// This is a self-contained component ready to be used.
const HomeBanner = () => {
  // State to manage the form data.
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  // Reference to the contact form element for scrolling.
  const contactFormRef = useRef(null);

  // Function to handle changes in the form inputs.
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle the form submission.
  // This opens a new tab/window with the WhatsApp message.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct the WhatsApp URL with the encoded form data.
    const whatsappUrl = `https://wa.me/9990989295?text=Name:%20${encodeURIComponent(
      formData.name
    )}%0APhone:%20${encodeURIComponent(
      formData.phone
    )}%0AMessage:%20${encodeURIComponent(formData.message)}`;

    // Open the URL in a new blank window.
    window.open(whatsappUrl, '_blank');
  };

  // Function to scroll to the contact form when the button is clicked.
  const scrollToForm = () => {
    contactFormRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    // Main section container. It uses a fixed background image and a semi-transparent overlay.
    // The flexbox layout is responsive, stacking on smaller screens and aligning horizontally on larger ones.
    <section
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-16 text-white"
      style={{
        // Use the imported image variable directly.
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 "></div>

      {/* Content wrapper to position elements on top of the overlay */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mt-8">
        {/* Left Content Section */}
        <div className="flex-1 text-center md:text-left bg-black/4 backdrop-blur-sm p-8 rounded-2xl md:mr-6 w-full md:w-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 drop-shadow-md mb-4 leading-tight">
            Sample Flat Ready
          </h1>

          {/* Logo and Subtitle Section */}
          <div className="flex flex-col items-center md:items-start mb-6 mx-auto">
            <img
              // Use the imported logo variable directly.
              src={logo}
              alt="Logo"
              className="w-full md:w-48 mb-2 bg-black mx-auto"
            />
            <p className="text-md md:text-lg lg:text-xl font-semibold">
              At Sector 12, Greater Noida West
            </p>
          </div>

          {/* Pricing and Features */}
          <div className="space-y-4 mb-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
              Pay Per Month SCHEME STARTS FROM
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold">
              ₹9,999*/- PER MONTH FOR 3 BHK
            </h3>
            {/* List of features. Using a standard list for better readability. */}
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-light">
              <li>Payment plan: 30:40:30</li>
              <li>Pre-Launch Benefits</li>
              <li>World Class Amenities</li>
              <li>Book Before Prices Rise!</li>
            </ul>
          </div>

          {/* Call-to-action button to scroll to the form */}
          <div className="flex justify-center md:justify-start">
            <button
              className="mt-4 px-8 py-4 bg-yellow-500 text-black font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-500/50"
              onClick={scrollToForm}
            >
              Express Your Interest
            </button>
          </div>
        </div>

        {/* Right Contact Form Section */}
        {/* The form has a white background for contrast and clear user input. */}
        <div
          ref={contactFormRef} // Attach the ref here
          id="contact-form" // Added for accessibility and fallback
          className="flex-1 bg-white rounded-2xl shadow-2xl p-8 max-w-sm md:max-w-md w-full"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
            Express Your Interest
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-500"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
