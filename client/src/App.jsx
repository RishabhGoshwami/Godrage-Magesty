import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeBanner from "./pages/HomeBanner";
import AboutBuilder from "./components/AboutBuilder";
import KeyFeatures from "./pages/KeyFeatures";
import PrimeLocation from "./pages/PrimeLocation";
import AutoPopupForm from "./components/AutoPopupForm";
import Amenities from "./components/Amenities";
import PricingSection from "./components/PricingSection";
import ProjectGallery from "./components/ProjectGallery";
import Overview from "./components/Overview";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // ✅ Auto open popup on every page load / refresh
  useEffect(() => {
    setIsPopupOpen(true);
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Auto Popup Form */}
      <AutoPopupForm isOpen={isPopupOpen} onClose={closePopup} />

      {/* Navbar */}
      <Navbar />

      <div id="home">
        <HomeBanner openPopup={openPopup} />
      </div>
    <div id="overview">
        <Overview openPopup={openPopup} />
      </div>
      

      <div id="highlights">
        <KeyFeatures />
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
       <div id="location">
        <PrimeLocation openPopup={openPopup} />
      </div>

      <div id="">
        <AboutBuilder openPopup={openPopup} />
      </div>
      <Footer/>
      <FloatingButtons />

     
    </div>
  );
};

export default App;
