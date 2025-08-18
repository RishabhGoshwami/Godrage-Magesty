import React from 'react';

// The OffersSection component displays special offers and benefits.
const OffersSection = () => {
  return (
    // Main container for the offers section.
    // It uses a dark, semi-transparent background for a modern look.
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title of the section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
          Exclusive Offers
        </h1>
        {/* Subtitle for the offer validity */}
        <p className="text-lg md:text-xl font-semibold text-gray-300 mb-8">
          OFFER VALID TILL 31st AUGUST
        </p>
        
        {/* Container for all the offers */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl space-y-8">
          {/* Main offer details */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Pay Per Month SCHEME
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
              STARTS FROM ₹9,999*/MONTH
            </h3>
          </div>
          
          {/* Benefits and specification list */}
          <div className="bg-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">SPECIFICATION BENEFITS</h2>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li className="text-lg">
                <span className="font-semibold">WARDROBES</span> IN ALL BEDROOMS
              </li>
            </ul>
          </div>

          {/* Special discount offers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-xl p-6 shadow-md text-left">
              <h3 className="text-xl font-semibold text-gray-300">ON SPOT EOI GENERATION OFFER</h3>
              <p className="text-3xl font-extrabold text-green-400 mt-2">
                ₹1,00,000
              </p>
            </div>
            <div className="bg-gray-700 rounded-xl p-6 shadow-md text-left">
              <h3 className="text-xl font-semibold text-gray-300">INDEPENDENCE DAY OFFER</h3>
              <p className="text-3xl font-extrabold text-green-400 mt-2">
                ₹2,00,000
              </p>
            </div>
          </div>
          
          {/* Support offer */}
          <div className="bg-yellow-400 rounded-xl p-6 text-black shadow-lg">
            <h3 className="text-2xl font-bold">Pay Per Month SCHEME SUPPORT OFFER</h3>
            <p className="text-3xl md:text-4xl font-extrabold mt-2">
              UP TO ₹22,00,000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
