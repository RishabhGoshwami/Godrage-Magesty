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
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Godrej Majesty. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
