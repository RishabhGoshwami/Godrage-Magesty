import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import HomeBanner from "./pages/HomeBanner";
import OffersSection from "./pages/OffersSection";
import KeyFeatures from "./pages/KeyFeatures";
import PrimeLocation from "./pages/PrimeLocation";
import AutoPopupForm from "./components/AutoPopupForm";
import Amenities from "./components/Amenities";
import PricingSection from "./components/PricingSection";
import ProjectGallery from "./components/ProjectGallery";
import Overview from "./components/Overview";
import FloatingButtons from "./components/FloatingButtons";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const hasOpened = useRef(false);

  // ✅ Auto open sirf 1st time page load par
  useEffect(() => {
    if (!hasOpened.current) {
      setIsPopupOpen(true);
      hasOpened.current = true;
    }
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Popup */}
      <AutoPopupForm isOpen={isPopupOpen} onClose={closePopup} />

      {/* Navbar */}
      <Navbar />

      <div id="home">
        <HomeBanner openPopup={openPopup} />
      </div>

      <div id="offers">
        <OffersSection openPopup={openPopup} />
      </div>

      <div id="highlights">
        <KeyFeatures />
      </div>

      <div id="location">
        <PrimeLocation openPopup={openPopup} />
      </div>

      <div id="amenities">
        <Amenities openPopup={openPopup} />
      </div>

      <div id="pricing">
        <PricingSection openPopup={openPopup} />
      </div>

      <div id="gallery">
        <ProjectGallery openPopup={openPopup} />
      </div>

      <div id="overview">
        <Overview openPopup={openPopup} />
      </div>

      <FloatingButtons />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center px-6">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Godrej Majesty. All rights reserved.
        </p>
        <p className="text-xs leading-relaxed max-w-5xl mx-auto text-gray-400">
          The content presented on this website is solely for informational
          purposes and does not constitute a service offer. Prices mentioned
          here are subject to change without prior notification, and the
          availability of the listed properties is not assured. Images showcased
          are illustrative and may not precisely represent the actual
          properties. Kindly be advised that this website operates as an
          authorized marketing partner. For necessary processing, we may share
          data with Real Estate Regulatory Authority (RERA) registered
          brokers/companies. Additionally, updates and information may be sent
          to the registered mobile number or email ID. All rights reserved. This
          website's content, design, and data are protected by copyright and
          other intellectual property rights. Unauthorized use or reproduction
          of the content may be subject to legal repercussions. For precise and
          current information on services, pricing, availability, or any other
          details, we recommend you contact us directly via the provided contact
          information on this website. We appreciate your visit.
        </p>
      </footer>
    </div>
  );
};

export default App;
