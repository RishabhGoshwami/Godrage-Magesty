import React from 'react';

const OffersSection = () => {
  return (
    <section className="bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Main Heading & Subtitle */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-400 mb-4 animate-fade-in-up">
          Exclusive Pre-Launch Offers
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-gray-400 mb-12">
          Hurry! Offer valid for a limited time.
        </p>

        {/* Main Offer Container */}
        <div className="bg-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-700">
          
          {/* Pay Per Month Scheme */}
          <div className="bg-gray-700 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-600 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              Pay Per Month Scheme
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-teal-400">
              Starting from ₹9,999<span className="text-xl text-gray-400">/month*</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Benefits */}
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-2xl p-6 sm:p-8 border border-gray-600">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Specification Benefits
                </h3>
                <ul className="list-disc list-inside space-y-3 text-left text-gray-300">
                  <li className="text-lg">
                    <span className="font-semibold text-white">Fully Modular Kitchen</span> with Hob, Chimney & Cabinets
                  </li>
                  <li className="text-lg">
                    <span className="font-semibold text-white">Italian Marble</span> in Living & Dining Areas
                  </li>
                  <li className="text-lg">
                    <span className="font-semibold text-white">Laminated Wooden Flooring</span> in all Bedrooms
                  </li>
                  <li className="text-lg">
                    <span className="font-semibold text-white">Wardrobes</span> in all Bedrooms
                  </li>
                </ul>
              </div>

              {/* Special Discounts */}
              <div className="bg-gray-700 rounded-2xl p-6 sm:p-8 border border-gray-600">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Special Discount Offers
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-900 p-5 rounded-xl text-center">
                    <p className="text-sm font-semibold text-gray-400">On Spot EOI Generation</p>
                    <p className="text-3xl font-extrabold text-lime-400 mt-1">₹1,00,000</p>
                  </div>
                  <div className="bg-gray-900 p-5 rounded-xl text-center">
                    <p className="text-sm font-semibold text-gray-400">Independence Day Offer</p>
                    <p className="text-3xl font-extrabold text-lime-400 mt-1">₹2,00,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Support Offer */}
            <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-teal-500 rounded-2xl shadow-lg border border-teal-400 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Pay Per Month Scheme Support
              </h3>
              <p className="text-4xl sm:text-5xl font-extrabold text-white mt-4 drop-shadow-lg">
                UP TO ₹22,00,000
              </p>
              <p className="text-md font-semibold text-gray-800 mt-4">
                This is a limited-time support offer to make your home-buying experience smoother.
              </p>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>*Terms & Conditions Apply. The scheme is for a limited period and may be withdrawn without prior notice.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OffersSection;