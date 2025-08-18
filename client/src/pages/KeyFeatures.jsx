import React from 'react';

// The KeyFeatures component now combines the project highlights and the "Why Choose" section.
const KeyFeatures = () => {
  return (
    // Main container for the combined sections.
    <section className="bg-white text-gray-800 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section 1: Project Highlights */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 drop-shadow-lg">
          Project Highlights
        </h1>
        
        {/* Container for the features list */}
        <div className="bg-gray-100 rounded-2xl p-8 shadow-2xl space-y-6 text-left mb-16">
          {/* Feature: Kitchen */}
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 7V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6zm16-4h-5v-4h5v4z"/>
            </svg>
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold">Fully modular kitchen</span> with Hob, chimney, and Cabinets.
            </p>
          </div>

          {/* Feature: Flooring */}
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
            </svg>
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold">Italian marble</span> in common/living and dining areas.
            </p>
          </div>

          {/* Feature: Wooden Flooring */}
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold">Laminated wooden flooring</span> in all the rooms.
            </p>
          </div>

          {/* Feature: Balconies */}
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 6h-4V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H2v15h20V6zm-4 13H6V7h12v12z"/>
            </svg>
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold">All glass balconies</span> for seamless uninterrupted view.
            </p>
          </div>

          {/* Feature: AC */}
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 8h-2V4h-2v4h-2V4h-2v4H9V4H7v4H5V4H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4h-2v4z"/>
            </svg>
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold">Air conditioners</span> in all the rooms.
            </p>
          </div>

          {/* Feature: Wardrobes */}
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 16H7V5h10v14z"/>
            </svg>
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold">Wardrobes</span> in all bedrooms (for limited units).
            </p>
          </div>

          {/* Feature: Community */}
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm6 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold">High-Rise Gated Community</span> Spread Over Acres of Greenery.
            </p>
          </div>

          {/* Feature: Sky Decks */}
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 5.69l5.66 5.66c-.73.49-1.52.88-2.39 1.15-.87.27-1.81.42-2.77.42-2.21 0-4.32-.97-5.78-2.67l-1.33-1.33c-.1-.1-.1-.26 0-.36l1.24-1.24c.1-.1.26-.1.36 0l5.44 5.44c.1.1.26.1.36 0l1.24-1.24c.1-.1.1-.26 0-.36L12 5.69zM19.78 2.22l-1.41 1.41-1.41-1.41-1.41 1.41-1.41-1.41-1.41 1.41-1.41-1.41-1.41 1.41-1.41-1.41L3.22 8.78l1.41 1.41c-2.34 2.82-3.11 6.81-2.12 10.43l.89 3.28c.11.41.52.65.93.54l3.28-.89c3.62.99 7.61.22 10.43-2.12l1.41 1.41z"/>
            </svg>
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold">Stunning Sky Decks</span> & Panoramic Views.
            </p>
          </div>

          {/* Feature: Certification */}
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-2 0c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8 8-3.59 8-8z"/>
            </svg>
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold">IGBC-Certified Sustainable Development</span>.
            </p>
          </div>
          
          {/* Feature: ROI */}
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z"/>
            </svg>
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold">Excellent ROI</span> & Appreciation Potential.
            </p>
          </div>
        </div>

        {/* Section 2: Why Choose Go'drej */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 drop-shadow-lg">
          Why Choose Go'drej Sector 12 Greater Noida West?
        </h2>

        <div className="bg-gray-100 rounded-2xl p-8 shadow-2xl space-y-6 text-left">
          {/* Benefit: Reputation */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Reputation You Can Trust</h3>
            <p className="text-lg text-gray-700">
              Delivered by Go'drej Properties, a legacy brand known for innovation, trust, and quality across India.
            </p>
          </div>
          {/* Benefit: Strategic Location */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Strategic Location</h3>
            <p className="text-lg text-gray-700">
              Located in Sector 12 Greater Noida West, with swift access to major highways, metro stations, schools, and business hubs.
            </p>
          </div>
          {/* Benefit: Smart Investment */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Investment</h3>
            <p className="text-lg text-gray-700">
              Located in a rapidly developing zone with excellent rental yield and future capital appreciation.
            </p>
          </div>
          {/* Benefit: Sustainable & Smart Living */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Sustainable & Smart Living</h3>
            <p className="text-lg text-gray-700">
              Delivered by Go'drej Properties, a legacy brand known for innovation, trust, and quality across India.
            </p>
          </div>
          {/* Benefit: Unmatched Construction Quality */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Unmatched Construction Quality</h3>
            <p className="text-lg text-gray-700">
              Built with top-tier materials, efficient floor plans, and attention to every detail.
            </p>
          </div>
          {/* Benefit: Customer-First Approach */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer-First Approach</h3>
            <p className="text-lg text-gray-700">
              Transparent pricing, pre-launch offers, and dedicated customer support throughout your journey.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;
